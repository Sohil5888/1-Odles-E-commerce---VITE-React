import React, { createContext } from 'react';
import One from './One';

const Fname = createContext()
const Usecontextmain = () => {
    return (
        <>
            <h1>usecontextmain</h1>
            <Fname.Provider value="sagar">
                <One />
            </Fname.Provider>
        </>
    );
}

export default Usecontextmain;
export {Fname}