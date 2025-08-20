import React, {useState} from 'react';

function Counter(){

    const [count, setCount]= useState(0);

    function Up(){

        setCount(count+1);
    };

    function Down(){

        setCount(count-1);
    };

    return (<div>
        <h2>Count :{count}</h2>
        <button onClick={Up}>Increment Number</button>
        <button onClick={Down}>Decrement Number</button>
    </div>)
}


export default Counter;