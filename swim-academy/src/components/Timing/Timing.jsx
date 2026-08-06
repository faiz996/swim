import { motion } from "framer-motion";
import "./Timing.css";

import kid from "../../assets/images/kids.png";
import men from "../../assets/images/men.png";
import women from "../../assets/images/women.png";

function Timing() {
  return (
    <section className="timing-section" id="classes">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >
        <h2>Classes & Timing</h2>

        <p>
          Choose the perfect session and start your swimming journey with
          expert coaching.
        </p>
      </motion.div>

      <div className="timing-grid">

        <motion.div
          className="timing-card info-card"
          whileHover={{ y: -10, scale: 1.03 }}
        >
          <h3>🏊 Timing</h3>

          <ul>
            <li>Sat & Sun</li>
            <li>10:00 AM - 7:00 PM</li>

            <li>Mon, Tue, Wed & Thu</li>
            <li>10:00 AM - 7:00 PM</li>

            <li>Friday</li>
            <li>Closed</li>
          </ul>
        </motion.div>

        <motion.div
          className="timing-card image-card"
          whileHover={{ scale: 1.05 }}
        >
          <img src={kid} alt="Kids Swimming" />
        </motion.div>

        <motion.div
          className="timing-card info-card"
          whileHover={{ y: -10, scale: 1.03 }}
        >
          <h3>🏊 Adult Men</h3>

          <ul>
            <li>Sat & Sun</li>
            <li>2:00 PM</li>

            <li>Tue & Thu</li>
            <li>8:00 PM</li>
          </ul>
        </motion.div>

        <motion.div
          className="timing-card image-card"
          whileHover={{ scale: 1.05 }}
        >
          <img src={men} alt="Adult Men" />
        </motion.div>

        <motion.div
          className="timing-card info-card"
          whileHover={{ y: -10, scale: 1.03 }}
        >
          <h3>🏊 Adult Women</h3>

          <ul>
            <li>Sat & Sun</li>
            <li>3:00 PM</li>

            <li>Mon, Wed & Fri</li>
            <li>8:00 PM</li>
          </ul>
        </motion.div>

        <motion.div
          className="timing-card image-card"
          whileHover={{ scale: 1.05 }}
        >
          <img src={women} alt="Adult Women" />
        </motion.div>

      </div>

    </section>
  );
}

export default Timing;