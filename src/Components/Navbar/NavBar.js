import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
    const [isMenuopen, setIsMenuopen] = useState(false);
    const toggleMenu = () => {
        setIsMenuopen(!isMenuopen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">Website</div>
            <div className="menu" onClick={toggleMenu}>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </div>
            <ul className={isMenuopen ? "navbar-links active" : "navbar-links"}>
                <li>
                    <Link to="/" onclick={toggleMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/user" onclick={toggleMenu}>
                        User
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
