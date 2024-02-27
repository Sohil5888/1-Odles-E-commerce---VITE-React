import React from 'react';
import { useState,useCallback } from 'react';
import Functionchild from './Functionchild';

const Usecallback = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const Usecallback = useCallback(function loading (){
        console.log("data");
    },[count]) 
    return (
        <>
            <h1>usecallback</h1>
            <Functionchild Usecallback={Usecallback}/>
            <h2>{count}</h2>
            <h2>{item}</h2>
            <button onClick={() => setCount(count + 1)}>count btn</button>
            <button onClick={() => setItem(item * 5)}>item btn</button>
        </>
    );
}

export default Usecallback;