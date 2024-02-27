import React, { Component } from "react";
import { Routes , Route } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointo from "./01Classcompointro";
import Classcompojsx from "./02Classcompojsx";
import Classcompoprops from "./03Classcompoprops";
import Classcompostate from "./04Classcompostate";
import Statelifecycle from "./05Statelifecycle";
import Classrendering from "./06Classrendering";
import ClassUncontrolledCompo from "./07ClassUncontrolledCompo";
import Classcontrolledcompo from "./08Classcontrolledcompo";
import Classlistandkeys from "./09Classlistandkeys";
import Statelifting from "./Statelifting/Statelifting";
import Hoc from "./HOC/Hoc";
import Compositionandinheritance from "./10Composition and inheritance";
import ControlledCompoInClassCompo from "./ControlledCompoInClassCompo";




class Classcomporoutes extends Component{
    render(){
        return(
              <Routes>
                <Route path="/" element={<Classcompomenu/>}>
                    <Route path="Classcompointo" element={<Classcompointo/>}/>
                    <Route path="Classcompojsx" element={<Classcompojsx/>}/>
                    <Route path="Classcompoprops" element={<Classcompoprops/>}/>
                    <Route path="Classcompostate" element={<Classcompostate/>}/>
                    <Route path="Statelifecycle" element={<Statelifecycle/>}/>
                    <Route path="Classrendering" element={<Classrendering/>}/>
                    <Route path="ClassUncontrolledCompo" element={<ClassUncontrolledCompo/>}/>
                    <Route path="Classcontrolledcompo" element={<Classcontrolledcompo/>}/>
                    <Route path="Classlistandkeys" element={<Classlistandkeys/>}/>
                    <Route path="Statelifting"   element={<Statelifting/>}/>
                    <Route path="Hoc"   element={<Hoc/>}/>
                    <Route path="Compositionandinheritance"   element={<Compositionandinheritance/>}/>
                    <Route path="ControlledCompoInClassCompo"   element={<ControlledCompoInClassCompo/>}/>
                </Route>
              </Routes>

        )
    }
}
export default Classcomporoutes