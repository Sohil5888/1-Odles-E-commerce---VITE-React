import React from 'react';
import { Component } from 'react';
class Classrendering extends Component {
    constructor(){
        super()
        this.state = {
            islogin : false
        }
    }
    render() { 

        // return this.state.islogin &&  <h1>welcome dash</h1>
    //  return this.state.islogin ? 
    //   <h1>welcome dash</h1> : 
    //   <h1>welcome Guset</h1>
        // let msg 
        // if (this.state.islogin) {
        //     msg =  <h1>welcome dash</h1>  
        // }
        // else{
        //     msg =  <h1>welcome Guset</h1>
        // }
        // return msg

        if (this.state.islogin) {
            return <h1>welcome dash</h1>
        }
        else{
            return <h1>welcome Guset</h1>
        }
        // return (
        //     <>
        //      <h1>welcome dash</h1>
        //      <h1>welcome Guset</h1>
              
        //     </>
        //     );
    }
}
 
export default Classrendering;