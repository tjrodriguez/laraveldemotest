import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <nav id="navbar">
            <h2 className="logo">⚓ On Call Boat Mechanic ⚓</h2>
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
                <li className="nav-contact-parent">
                    <span className="nav-link">Contact Us ▾</span>
                    <div className="nav-dropdown">
                        <Link to="/contact?view=form" onClick={() => setIsOpen(false)}>Contact Form</Link>
                        <Link to="/contact?view=messages" onClick={() => setIsOpen(false)}>Contact Messages</Link>
                    </div>
                </li>
                <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            </ul>
        </nav>
    );
}