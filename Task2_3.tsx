import React,{useState} from "react";

function MultInputsForm (){

    const[Name, setName]=useState('');
    const[Email, setEmail]=useState('');
    const[Age, setAge]=useState();

    return (
        <div>
            <h2>Enter Name, Email and Age</h2>
            <input 
                type="text"
                placeholder="Enter Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <input 
                type="text"
                placeholder="Enter Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <input 
                type="number"
                placeholder="Enter Age"
                value={Age}
                onChange={(e) => setAge(parseInt(e.target.value))}
            />

            <ul>
                <li>
                    your name is : {Name}
                </li>
                <li>
                    your email is : {Email}
                </li>
                <li>
                    your age is : {Age}
                </li>
            </ul>



        </div>
    )


}


export default MultInputsForm;