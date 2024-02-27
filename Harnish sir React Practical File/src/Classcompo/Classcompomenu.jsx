import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component {
    render() {
        return (
            <>
                {/* <div className="row"> */}
                    {/* <div className="col-3"> */}
                        <ul>
                            <li><Link to="Classcompointo">Classcompointo</Link></li>
                            <li><Link to="Classcompojsx">Classcompojsx</Link></li>
                            <li><Link to="Classcompoprops">Classcompoprops</Link></li>
                            <li><Link to="Classcompostate">Classcompostate</Link></li>
                            <li><Link to="Statelifecycle">Statelifecycle</Link></li>
                            <li><Link to="Classrendering">Classrendering</Link></li>
                            <li><Link to="ClassUncontrolledCompo">ClassUncontrolledCompo</Link></li>
                            <li><Link to="Classcontrolledcompo">Classcontrolledcompo</Link></li>
                            <li><Link to="Classlistandkeys">Classlistandkeys</Link></li>
                            <li><Link to="Statelifting">Statelifting</Link></li>
                            <li><Link to="Hoc">Hoc</Link></li>
                            <li><Link to="Compositionandinheritance">compositionandinheritance</Link></li>
                            <li><Link to="ControlledCompoInClassCompo">ControlledCompoInClassCompo</Link></li>
                        </ul>
                    {/* </div> 
                </div> */}
                <Outlet></Outlet>
            </>
        )
    }
}
export default Classcompomenu