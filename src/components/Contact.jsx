import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_uuisc6i",
        "__ejs-test-mail-service__",
        form.current,
        "Ofe_8OnOOAZMZxQd7"
      );
      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "feisalabdi@example.com",
      link: "mailto:feisalabdi@example.com"
    },
    {
      icon: "📱",
      label: "WhatsApp",
      value: "+254 727 109 399",
      link: "https://wa.me/254727109399"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Nairobi, Kenya",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/faisal-abdi-a09907360/",
      icon: "💼",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "GitHub",
      url: "https://github.com/Feihassan",
      icon: "💻",
      color: "from-gray-700 to-gray-800"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/254727109399",
      icon: "💬",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Ready to bring your project to life? Let's discuss how we can work together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="glass-dark rounded-2xl p-4 sm:p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl flex-shrink-0">{info.icon}</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-primary">{info.label}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm sm:text-base break-words">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-dark rounded-3xl p-6 sm:p-8 border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`glass border border-primary/30 px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r ${social.color} hover:from-primary hover:to-cyan-400 hover:text-black text-sm sm:text-base`}
                  >
                    <span className="text-lg sm:text-xl">{social.icon}</span>
                    <span className="hidden sm:inline">{social.name}</span>
                    <span className="sm:hidden">{social.name.slice(0, 3)}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-3xl p-6 sm:p-8 border border-primary/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Send Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full glass border border-primary/30 p-3 sm:p-4 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 text-sm sm:text-base"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full glass border border-primary/30 p-3 sm:p-4 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 text-sm sm:text-base"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full glass border border-primary/30 p-3 sm:p-4 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 text-sm sm:text-base"
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full glass border border-primary/30 p-3 sm:p-4 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300 resize-none text-sm sm:text-base"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary to-cyan-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {/* Status Messages */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-xl text-center font-semibold ${
                  submitStatus === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {submitStatus === "success"
                  ? "Message sent successfully! I'll get back to you soon."
                  : "Failed to send message. Please try again."}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;