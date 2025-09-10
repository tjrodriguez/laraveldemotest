import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav id="navbar">
            <h2 className="logo">⚓WOW! Boat Mechanic 4 hire⚓</h2>
            <button 
                className="menu-toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                ☰
            </button>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            </ul>
        </nav>
    );
}
