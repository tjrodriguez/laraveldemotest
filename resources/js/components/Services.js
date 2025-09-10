import React from "react";

export default function Services() {
    return (
        <div id="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <h1>My Services</h1>
                <p>
                    As a dedicated boat technician, I provide expert solutions to keep your vessel safe, reliable, and ready for any journey.
                </p>
            </section>

            {/* Services Grid */}
            <section className="services-grid">
                <div className="service-card">
                    <h2>⚙️ Engine Repair & Maintenance</h2>
                    <p>
                        Complete diagnostics, tune-ups, and engine overhauls to ensure smooth sailing.
                    </p>
                </div>
                <div className="service-card">
                    <h2>🔌 Electrical Systems</h2>
                    <p>
                        Troubleshooting and repairing navigation, lighting, and battery systems.
                    </p>
                </div>
                <div className="service-card">
                    <h2>🛡️ Safety Inspections</h2>
                    <p>
                        Comprehensive safety checks to keep your boat compliant and secure at sea.
                    </p>
                </div>
                <div className="service-card">
                    <h2>🛥️ Hull & Propeller Care</h2>
                    <p>
                        Regular cleaning, maintenance, and repair of hulls and propellers for efficiency.
                    </p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="services-cta">
                <h2>Need Professional Boat Assistance?</h2>
                <p>Contact me today and let’s keep your boat running strong.</p>
                <a href="#contact" className="cta-btn">Get in Touch</a>
            </section>
        </div>
    );
}
