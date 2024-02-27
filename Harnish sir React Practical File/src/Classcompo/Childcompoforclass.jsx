import React, { Component } from 'react';

class Childcompoforclass extends Component {
   
    render() { 
        return (
            <>
              <h1>Childcompoforclass</h1>
              <h3>{this.props.data}</h3>
              <h3>{this.props.data2}</h3>
              <div>
                {this.props.children}
              </div>
            </>
        );
    }
}
 
export default Childcompoforclass;