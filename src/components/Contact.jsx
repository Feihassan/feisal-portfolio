// src/components/Contact.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uuisc6i",     
        "__ejs-test-mail-service__",    
        form.current,
        "Ofe_8OnOOAZMZxQd7"         
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 md:px-20 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <p className="text-gray-300">
            Let’s connect! Feel free to reach out through the form or any of the platforms below.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.me/254727109399"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/faisal-abdi-a09907360/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Feihassan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right: EmailJS Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-800 p-3 rounded text-white focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-gray-800 p-3 rounded text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full bg-gray-800 p-3 rounded text-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-primary text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
