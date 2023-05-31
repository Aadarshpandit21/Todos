import React from "react";
import "./navbar.css"
const Navbar = () =>{
    return (
        <nav className="Nav-bar">
            <ul className="Nav-links">
                <li>
                    <a className="Nav-link" href="/">Home</a>
                </li>
                <li>
                    <a className="Nav-link" href="/about">About</a>
                </li>
                <li>
                    <a className="Nav-link" href="/Service">Service</a>
                </li>
                <li>
                    <a className="Nav-link" href="/Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

 export default Navbar
