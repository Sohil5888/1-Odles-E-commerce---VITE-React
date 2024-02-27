import React from 'react';
import { Fname } from './08Usecontext';

const CompoC = () => {
    return ( 
        <>
        {/* <p>{props.somedata}</p> */}
        <h1>data</h1>
        <Fname.Consumer>
            {
                (data) =>{
                    return <h1>hello {data}</h1>
                }
            }
        </Fname.Consumer>
        </>
     );
}
 
export default CompoC;