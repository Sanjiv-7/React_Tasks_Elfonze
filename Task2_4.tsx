import React,{useState} from "react";

function ToDoList(){

    const [task, setTask]=useState('');
    const [Tasklist, setTasklist]=useState([]);

    const onEnterPress = (e) =>{
        if (e.key ==='Enter' && task.trim() != ""){
            setTasklist([...Tasklist, task]);
            setTask("");
        }
    }

    const handleDelete = (deleteindex) => {
        const newList = Tasklist.filter((_,index) => index != deleteindex)
        setTasklist(newList)
    }

    return(
        <div>
            <h2>Add Tasks to your To-Do List (and Delete them using Delete Option)</h2>
            <input
                type="text"
                placeholder="Enter your To-Do List task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={onEnterPress}
               />
            <ul>
                {Tasklist.map((TASK,index) => (
                    <li key={index}>
                    {TASK}
                    <button type="button"
                    onClick={() => handleDelete(index)}>Delete Task</button>

                </li> 

                ))}
                
            </ul>

        </div>
    )


}


export default ToDoList;