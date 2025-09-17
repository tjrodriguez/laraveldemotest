import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../sass/contactus.scss";

axios.defaults.baseURL = "http://localhost:8000";

export default function ContactUs() {
    const [contacts, setContacts] = useState([]);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
    const [editId, setEditId] = useState(null);

    // Fetch contacts from API
    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        const res = await axios.get("/api/contact");
        setContacts(res.data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId !== null) {
                await axios.put(`/api/contact/${editId}`, form);
            } else {
                await axios.post("/api/contact", form);
            }
            setForm({ firstName: "", lastName: "", email: "", message: "" });
            setEditId(null);
            fetchContacts();
        } catch (error) {
            alert("Error: " + (error.response?.data?.message || error.message));
            console.error(error);
        }
    };

    const handleEdit = (id) => {
        const contact = contacts.find(c => c.id === id);
        setForm({ firstName: contact.firstName, lastName: contact.lastName, email: contact.email, message: contact.message });
        setEditId(id);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/contact/${id}`);
        if (editId === id) setEditId(null);
        fetchContacts();
    };

    return (
        <div id="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <h1>Contact Me</h1>
                <p>
                    Got a question or need professional boat maintenance? Reach out, and let’s ensure your vessel is ready for the sea!
                </p>
            </section>

            {/* Contact Form Section */}
            <section className="contact-content">
                <h2>{editId ? "Edit Message" : "Send Me a Message"}</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" value={form.message} onChange={handleChange} required placeholder="Your Message" rows="3"></textarea>
                    </div>
                    <div className="form-actions">
                        <button className="cta-btn" type="submit">
                            {editId ? "Update" : "Send Message"}
                        </button>
                    </div>
                </form>
            </section>

            {/* Table of Contacts */}
            <section className="contact-table">
                <h2>Contact Messages</h2>
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="no-messages">No messages yet.</td>
                                </tr>
                            ) : (
                                contacts.map((c, idx) => (
                                    <tr key={c.id}>
                                        <td>{idx + 1}</td>
                                        <td>{c.firstName}</td>
                                        <td>{c.lastName}</td>
                                        <td>{c.email}</td>
                                        <td className="message-cell">{c.message}</td>
                                        <td>
                                            <button className="icon-btn" onClick={() => handleEdit(c.id)} title="Edit">
                                                <span role="img" aria-label="edit">✏️</span>
                                            </button>
                                            <button className="icon-btn" onClick={() => handleDelete(c.id)} title="Delete">
                                                <span role="img" aria-label="delete">🗑️</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Call to Action */}
            <section className="contact-cta">
                <h2>Ready for Your Next Adventure?</h2>
                <p>
                    Let’s get your boat in top shape. Contact me today for expert service!
                </p>
                <Link to="/services" className="cta-btn">Explore My Services</Link>
            </section>
        </div>
    );
}