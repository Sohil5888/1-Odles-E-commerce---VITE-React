import React, { createContext } from 'react';
import CompoA from "./CompoA.jsx"
const Fname = createContext()
const Usecontext = () => {
    const user = {
        name : "dhiraj", 
        age : 25
    }
    return (
        <>
            <h1>Usecontext</h1>
            <Fname.Provider value={user.name + user.age}>
                <CompoA />
            </Fname.Provider>
        </>
    );
}

export default Usecontext;
export {Fname}