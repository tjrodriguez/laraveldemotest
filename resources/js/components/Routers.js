import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Services from "./Services";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Routers() {
    return (
        <Router>
            <Nav />
            <main id="main-content">
                <Routes>
                    <Route path="/services" element={<Services />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}
