import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">
                <h3>Terrence Rodriguez</h3>
                <p>Professional Boat Technician</p>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Terrence Rodriguez. 
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}