import React from "react";
import { memo } from "react";

const Functionchild = (props) => {
    console.log("Functionchild");
    // <h1>{props.Usecallback}</h1>
    return (
        <button onClick={props.Usecallback}>data</button>
    )
}

export default memo(Functionchild)