import React from 'react';
import { Component } from 'react';

class Classcontrolledcompo extends Component {
    constructor(){
        super()
        this.state ={
            name : "",
            age : "",
            Phone : ""
        }
    }

    
    login = (event) =>{
        // return false
        // console.log(this.inputref.current.value);
        console.log(this.state.name);
        event.preventDefault()
    }
    render() { 
        return (
            <>
              <form onSubmit={(event) => this.login(event)}>
                <input type="text" onChange={(event)=> this.setState({name : event.target.value})} value={this.state.name}/>
                <input type="submit" value="login" />
              </form>
            </>
        );
    }
}
 
export default Classcontrolledcompo;