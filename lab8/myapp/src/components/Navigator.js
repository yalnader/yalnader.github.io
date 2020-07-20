//UI Component 
import React from "react";
import { NavLink } from 'react-router-dom' ;
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Navigator = (props) => {
    console.log(props);
    //onClick change what the page shows.
    //Use react Nav Bar
    // https://react-bootstrap.github.io/components/navbar/#home
    //NavLink has a active attribute, so you can use to apply
    // different styles to the active links
    return( 

    
         <nav className="navbar-nav red darken-1">
            <div className="navbar-nav">
                <NavLink to="/home" className="brand-logo right">Code Campers</NavLink>
                <ul className="left">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to='/viewCamps'>View Camps</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/forum'>Forum</NavLink></li>
                </ul>
            </div>
        </nav>  
    );
    
}

export default Navigator;