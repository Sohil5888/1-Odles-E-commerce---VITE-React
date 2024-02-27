import React from "react";
import { Component } from "react";
import Updatecompo from "./Mainhoc";

class Clickcounter extends Component {
    render() { 
        const {count , increment} = this.props
        return (
            <>
              <h1>CLickcounter</h1>
              <p>{this.props.name}</p>
              <button onClick={increment}>Clickcount{count}</button>
            </>
        );
    }
}
 
export default Updatecompo(Clickcounter);