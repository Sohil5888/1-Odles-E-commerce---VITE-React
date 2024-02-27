import React from "react";
import { Component } from "react";
import Childcompoforclass from "./Childcompoforclass";
class Compositionandinheritance extends Component {
    render() {
        const data = "react"
        const data2 = "react2"
        return (
            <>
                <h1>composition and inheritance</h1>
                <Childcompoforclass data={data} data2={data2}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                  <input type="text" />

               </Childcompoforclass>
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

export default Compositionandinheritance;