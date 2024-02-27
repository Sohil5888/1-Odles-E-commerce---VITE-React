import React, { useEffect, useState } from 'react';

const Useeffect = () => {
    const [count , setCount] = useState(0)
    const [item , setItem] = useState(5)

    useEffect(() => {
      alert("my hooks one")
    },[count])
    
    return (
        <>

            <h1>Useeffect hook</h1>
             <h3>{count}</h3>
             <h3>{item}</h3>
             <button onClick={() => setCount(count + 1)}>update-count</button>
             <button onClick={() => setItem(item + 5)}>update-item</button>

        </>
    );
}

export default Useeffect;