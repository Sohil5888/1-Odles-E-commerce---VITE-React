import React, { useMemo, useState } from 'react';

const Usememo = () => {
     const [count , setCount] = useState(0)
     const [item , setItem] = useState(10)
     const [text , setText] = useState("samir")

    const Usememohook  = useMemo( function multicount() {
        return (
        console.log("multicountwithmemo")
        )
     },[text])
    return ( 
        <>
          <h1>usememo</h1>


          <h2>{count}</h2>
          <h2>{item}</h2>
          <h2>{text}</h2>
          <h2>{Usememohook}</h2>

          <button onClick={() => setCount(count + 1)}>count btn</button>
          <button onClick={() => setItem(item * 5)}>item btn</button>
          <button onClick={() => setText("ravi")}>item btn</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
     );
}
 
export default Usememo;