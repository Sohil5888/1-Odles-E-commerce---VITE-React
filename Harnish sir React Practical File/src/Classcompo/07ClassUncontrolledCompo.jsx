
import React from 'react';
import { Component } from 'react';

class ClassUncontrolledCompo extends Component {
    constructor(){
        super()
        this.inputref = React.createRef()
    }

    
    login = (event) =>{
        // return false
        console.log(this.inputref.current.value);
        event.preventDefault()
    }
    render() { 
        return (
            <>
              <form onSubmit={(event) => this.login(event)}>
                <input type="text" ref={this.inputref}/>
                <input type="submit" value="login" />
              </form>
            </>
        );
    }
}
 
export default ClassUncontrolledCompo;