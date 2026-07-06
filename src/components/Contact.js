import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully! I'll get back to you soon.");
          form.current.reset();
          setIsSending(false);
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again.");
          console.error("EmailJS Error:", error);
          setIsSending(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always open to new opportunities, collaborations, or just a friendly chat!</p>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div><h4>Email</h4><p>minal.support@gmail.com</p></div>
            </div>

            <div className="info-item">
              <FaPhone className="info-icon" />
              <div><h4>Phone</h4><p>+92 XXX XXXXXXX</p></div>
            </div>

            <div className="info-item">
              <FaMapMarker className="info-icon" />
              <div><h4>Location</h4><p>Pakistan</p></div>
            </div>

            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                name="from_name" 
                placeholder="Your Name" 
                required 
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;