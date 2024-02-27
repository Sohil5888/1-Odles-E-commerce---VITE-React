import React from "react";
import { Link } from "react-router-dom";
import Header from "./Com-Comp/Header";

const Home = () => {
    let name = "sumit"
    return (
        
       <>
       
       {/* <ul>
         <li><Link to="/" >Home</Link></li>
         <li><Link to="/about" >about</Link></li>
         <li><Link to="/product" >product</Link></li>
       </ul> */}
       {/* <Header/> */}
          <h1>this is my home page</h1>
          <h2>{name}</h2>
          
          </>
     );
}
 
export default Home;