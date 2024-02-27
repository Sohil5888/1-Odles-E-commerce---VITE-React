import React from "react";
import { Link, Outlet } from "react-router-dom";

const Fuctioncompomenu =() => {
        return (
            <>
            <ul>
                <li><Link to="Functioncompointro">Functioncompointro</Link></li>
                <li><Link to="Functioncompoprops">Functioncompoprops</Link></li>
                <li><Link to="Usestate">Usestate</Link></li>
                <li><Link to="Useeffect">Useeffect</Link></li>
                <li><Link to="Uselayouteffect">Uselayouteffect</Link></li>
                <li><Link to="Usememo">Usememo</Link></li>
                <li><Link to="Usecallback">Usecallback</Link></li>
                <li><Link to="Usecontext">Usecontext</Link></li>
                <li><Link to="Usecontextmain">Usecontextmain</Link></li>
                <li><Link to="Usereducer">Usereducer</Link></li>
                <li><Link to="Useref">Useref</Link></li>
                <li><Link to="Api">Api</Link></li>
                <li><Link to="Apipost">Apipost</Link></li>
            </ul>

              
                <Outlet></Outlet>
            </>
        )
}
export default Fuctioncompomenu