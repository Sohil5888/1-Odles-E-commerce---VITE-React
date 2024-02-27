import React from 'react';

import { Component } from 'react';
import Updatecompo from './Mainhoc';

class Hovercounter extends Component {
    render() { 
        const {count , increment} = this.props
        return (
            <>
             <h1>CLickcounter</h1>
              <button onMouseOver={increment}>Clickcount{count}</button>
            </>
        );
    }
}
 
export default Updatecompo(Hovercounter);