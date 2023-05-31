import React,{ useState } from "react";
import "./count.css"
const counter = () => {

    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }
    return (
        <div className="countBox">
        <h2>Counter</h2>
        <h3> Count is : {count}</h3>
        <button className="Increment" onClick={increment}>Increment</button>
        <button className="Decrement" onClick={decrement}> Decrement</button>
        </div>
    );
};

export  default counter;

