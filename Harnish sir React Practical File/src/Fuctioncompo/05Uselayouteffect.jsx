import React, { useEffect, useLayoutEffect, useState } from 'react';

const Uselayouteffect = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(5)
    const [text , setText] = useState("code start....")
    const [data , setData] = useState(true)

    // useEffect(() => {
    //     console.log("useEffect");
    // }, [])
    // useEffect(() => {
    //     console.log("useEffect2");
    // }, [])

    // useLayoutEffect(() => {
    //     console.log("useLayoutEffect");
    // })

    // useEffect(()=>{
    //     if(!data){
    //         setText("welcome code")
    //     }
    //     else{
    //         setText("welcome to condition")
    //     }
    //     console.log("useEffect");
    // },[text])
    useLayoutEffect(()=>{
        if(!data){
            setText("welcome code")
        }
        else{
            setText("welcome to condition")
        }
        console.log("useEffect");
    },[text])
    return (
        <>

            <h1>Useeffect hook</h1>
            <h3>{count}</h3>
            <h3>{item}</h3>
            <h3>{text}</h3>
            <button onClick={() => setCount(count + 1)}>update-count</button>
            <button onClick={() => setItem(item + 5)}>update-item</button>

        </>
    );
}

export default Uselayouteffect;