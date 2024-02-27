import React from 'react';
import { Component } from 'react';
import Clickcounter from './Clickcounter';
import Hovercounter from './Hovercounter';
class Hoc extends Component {

    render() { 
        return (
            <>
               <h1>HOC</h1>
               <Clickcounter/>
               <Hovercounter/>

               <br />
               <br />
               <br />
               <br />
               <br />
            </>
        );
    }
}
 
export default Hoc;