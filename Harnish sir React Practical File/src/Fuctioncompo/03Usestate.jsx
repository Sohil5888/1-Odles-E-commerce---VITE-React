import React from 'react';
import { useState } from 'react';

const Usestate = () => {
    
    const [count , setCount] = useState(0)
    const [item , setItem] = useState(10)
    const [text , setText] = useState("raj")

    return (
        <>
         <h1>Usestate</h1>
         <h2> {count}</h2>
         <h2>{item}</h2>
         <h2>{text}</h2>
         <button onClick={()=>setCount(count + 1)}>update</button>
         <button onClick={()=>setItem(item * 2)}>update</button>
         <button onClick={()=>setText("shohil")}>update</button>
        </>
      );
}
 
export default Usestate;