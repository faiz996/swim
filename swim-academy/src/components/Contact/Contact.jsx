import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <motion.div
          className="contact-info"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2>Contact Us</h2>

          <div className="info">
            <FaMapMarkerAlt />
            <p>
              Al Bateen,
              <br />
              Abu Dhabi, UAE
            </p>
          </div>

          <div className="info">
            <FaPhoneAlt />
            <p>+971 50 123 4567</p>
          </div>

          <div className="info">
            <FaEnvelope />
            <p>info@swimacademy.com</p>
          </div>

          <div className="social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <h2>Send Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <textarea
              rows="5"
              placeholder="Message"
            ></textarea>

            <button>
              Send Message
            </button>

          </form>

        </motion.div>

      </div>

      <motion.div
        className="map"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=https://maps.app.goo.gl/QcbJQqVAsXJQpktq6?g_st=aw"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </motion.div>
    </section>
  );
}

export default Contact;