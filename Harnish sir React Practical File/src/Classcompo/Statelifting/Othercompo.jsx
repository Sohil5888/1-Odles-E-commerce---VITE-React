import React from 'react';
import { Component } from 'react';

class Othercompo extends Component {
 
    render() { 
        return (
            
            <>
            
             <h3>Othercompo</h3>
             <p>{this.props.name}</p>
             <button onClick={()=> this.props.Clickstatelift("haresh")}>click-me</button>
            </>
        );
    }
}
 
export default Othercompo;