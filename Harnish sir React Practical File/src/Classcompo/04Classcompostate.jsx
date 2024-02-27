import { Component } from "react";
import React  from 'react';


class Classcompostate extends Component {

    constructor(){
        super()
        this.state = {
            count : 0,
            name : "das",
            
        }
    }

    Icrement = () =>{
     console.log("Icrement");
     this.setState({count : this.state.count + 5})
     this.setState({name : this.state.name = "raj"})
    }
    Decrement = () =>{
     console.log("Decrement");
     this.setState({count : this.state.count - 1})
    }

    render() { 
        // let a = 10
        return (
            <>
              <h1>{this.state.count}</h1>
              <h1>{this.state.name}</h1>
              <button onClick={this.Icrement}>Icrement</button>
              <button onClick={this.Decrement}>Icrement</button>
            </>
        );
    }
}
 
export default Classcompostate;