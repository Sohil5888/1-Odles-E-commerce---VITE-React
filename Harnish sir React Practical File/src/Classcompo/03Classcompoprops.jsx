import React from 'react';
import { Component } from 'react';
import Childcompoforclass from './Childcompoforclass';
// import Classcompointo from './Classcompointro';

class Classcompoprops extends Component {
    render() {
        return (
            <>
            <h1>main</h1>
              <Childcompoforclass data="Raj" email="raj@gmail.com"/>
              {/* <Classcompointo data2="sohil"/> */}
            </>
        );
    }
}

export default Classcompoprops;