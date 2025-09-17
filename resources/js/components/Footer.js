import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">
                <h3>⚓ Terrence Rodriguez</h3>
                <p>Professional Boat Technician</p>

                <ul className="footer-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <p className="copyright">
                    &copy; {new Date().getFullYear()} Terrence Rodriguez. 
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}