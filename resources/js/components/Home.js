import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div id="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>⚓ WOW!Boat Mechanic</h1>
                    <h2>Your Trusted Boat Technician</h2>
                    <p>
                        From engine repair to complete vessel maintenance, I provide 
                        expert solutions to keep your boat safe, reliable, and sea-ready. 
                        Your journey deserves a technician who knows the waves.
                    </p>
                    <Link to="/services" className="cta-btn">Explore My Services</Link>
                </div>
            </section>

            {/* About Preview */}
            <section className="intro">
                <h2>Passion for the Sea, Precision for Your Boat</h2>
                <p>
                    With years of hands-on experience in marine technology, I specialize 
                    in ensuring boats run smoothly and safely. Whether it’s a quick check-up 
                    or a complete overhaul, I’m committed to helping you enjoy every voyage 
                    without worry.
                </p>
                <Link to="/about" className="link-btn">Learn More About Me</Link>
            </section>

            {/* Services Preview */}
            <section className="services-preview">
                <h2>What I Do</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>⚙️ Engine Maintenance</h3>
                        <p>Diagnostics, tune-ups, and engine overhauls for smooth sailing.</p>
                    </div>
                    <div className="service-card">
                        <h3>🔌 Electrical Systems</h3>
                        <p>Navigation, battery, and onboard electrical troubleshooting.</p>
                    </div>
                    <div className="service-card">
                        <h3>🛥️ Hull & Propeller Care</h3>
                        <p>Keep your boat efficient with regular hull and propeller services.</p>
                    </div>
                </div>
                <Link to="/services" className="cta-btn">View All Services</Link>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <h2>Let’s Get Your Boat Sea-Ready</h2>
                <p>
                    Contact me today and let’s ensure your vessel is always prepared 
                    for the next adventure.
                </p>
                <a href="#contact" className="cta-btn">Get in Touch</a>
            </section>
        </div>
    );
}
