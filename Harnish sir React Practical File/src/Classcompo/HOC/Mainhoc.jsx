import React from 'react';
import { Component } from 'react';

const Updatecompo = Originalcompo => {
    class Newcompo extends Component {
        constructor(){
            super()
            this.state = {
                count : 10
            }
        }
        increment = () =>{
            this.setState({
                count : this.state.count + 1
            })
        }
        render() { 
            return (
                <>
                 <Originalcompo name="Ravi"increment={this.increment} count={this.state.count} />
                </>
            );
        }
    }
    return Newcompo;
}
export default Updatecompo