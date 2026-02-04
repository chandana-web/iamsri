import "./Contact.css";
import { motion } from "framer-motion";

import { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef();

  // ✅ Popup State


  // ✅ Send Email Function
const sendEmail = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

  // ✅ Open Gmail Compose Directly
  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=schandana.ch29@gmail.com&su=Portfolio Contact Message&body=${encodeURIComponent(
      mailBody
    )}`,
    "_blank"
  );

  // ✅ Reset form
  e.target.reset();
};




  return (
    <section id="contact" className="contact-section">
      
      {/* ✅ Title */}
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      {/* ✅ Subtitle */}
      <p className="contact-subtitle">
        Have a burning question? Fire away to{" "}
        <span>schandana.ch29@gmail.com</span>
      </p>

      {/* ✅ Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ scaleX: 0.3, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
        />
        <textarea
          name="message"
          placeholder="Write your message..."
          required
        />

        <button type="submit" className="submit-btn">
          <span className="submit-icon">
            <i className="fa-solid fa-paper-plane"></i>
          </span>
          Submit
        </button>
      </motion.form>

      
    </section>
  );
}
