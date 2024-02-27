import React from 'react';
import { Fname } from './09Usecontextmain';
import { useContext } from 'react';
const Three = () => {
    const name = useContext(Fname)
    return ( 
    <>
     <h1>somthing user</h1>
     <h2>hii { name}</h2>
     {/* <Fname.Consumer>
        {
            (sagar) =>{
                return <h2>hii {sagar}</h2>
            }
        }
     </Fname.Consumer> */}
    </> 
    );
}
 
export default Three;