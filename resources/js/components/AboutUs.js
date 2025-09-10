import React from "react";

export default function AboutUs() {
    return (
        <div id="about-page">
            <section className="about-hero">
                <h1>About Me</h1>
                <p className="tagline">
                    ⚓ Passion for the Sea, Precision for Your Boat
                </p>
            </section>

            <section className="about-content">
                <p>
                    Hi, I’m <strong>Terrence Rodriguez</strong>, a professional 
                    <em> Boat Technician</em> dedicated to keeping vessels in 
                    top shape for safe and enjoyable journeys. 
                </p>
                <p>
                    With years of hands-on experience in <strong>marine mechanics, 
                    electrical systems, and hull maintenance</strong>, I provide 
                    expert services to ensure your boat performs at its best.
                </p>
                <p>
                    My mission is simple: <em>help boat owners enjoy worry-free 
                    adventures on the water</em>. Whether it’s a minor repair 
                    or a complete overhaul, I bring dedication, precision, and 
                    trust to every job.
                </p>
            </section>

            <section className="about-cta">
                <h2>Let’s Get Your Vessel Sea-Ready</h2>
                <p>
                    Reach out today and I’ll make sure your next trip on the 
                    water is smooth and safe.
                </p>
                <a href="#contact" className="cta-btn">Contact Me</a>
            </section>
        </div>
    );
}
