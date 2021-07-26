import React from 'react'
//import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="Navbarstyle">
                
                <Link to="/">
                <li className="Navbarelements ">HOME</li> 
                </Link>
                <Link to="/Contactus">
                <li className="Navbarelements">Contact Us</li>
                </Link>
                <Link to="/Aboutus">
                <li className="Navbarelements">About Us</li>
    </Link>
            </ul>
        </nav>
    )
}

export default Navbar