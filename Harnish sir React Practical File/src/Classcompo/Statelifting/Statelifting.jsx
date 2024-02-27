import React from 'react';
import { Component } from 'react';
 import Othercompo from './Othercompo';

class Statelifting extends Component {
    constructor(props){
        super(props)
        this.state = props
    }
  

    Clickstatelift =(name)=>{
        console.log("Clickstatelift" + name);
        this.setState({
           name : name 
        })
    }
    render() { 
        return (
            <>
              <h1> Statelifting</h1>
              <Othercompo name="sumit" Clickstatelift={this.Clickstatelift}/>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
        );
    }
}
 
export default Statelifting;