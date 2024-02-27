import { Action } from '@remix-run/router';
import React, { useReducer } from 'react';
import { useState } from 'react';

const initialState = 2

const reducer = (state , action)=>{
    console.log(state, action);

    if(action.type === "INCREMENT"){
       return state + 1
    }
    if(action.type === "DECREMENT"){
       return state - 1
    }
    if(action.type === "MULTY"){
        return state * 5
    }


 return state
}

const Usereducer = () => {
    // const [count , setCount] = useState(2)

  const [state , dispatch] =   useReducer(reducer , initialState)
    // const increment = ()=>{
    //     setCount(count + 1)
    // }
    // const decrement = ()=>{
    //     setCount(count - 1)
    // }
    // const multy = ()=>{
    //     setCount(count * 5)
    // }

    return ( 
        <>

        <h1>{state}</h1>
        <button onClick={()=> dispatch({type : "INCREMENT"})}>update</button>
        <button onClick={()=> dispatch({type : "DECREMENT"})}>update</button>
        <button onClick={()=> dispatch({type : "MULTY"})}>update</button>
        {/* <button onClick={multy}>update</button> */}
          
        </>
     );
}
 
export default Usereducer;