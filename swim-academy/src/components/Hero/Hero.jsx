import { motion } from "framer-motion";
import "./Hero.css";
import hero from "../../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Dive Into Confidence.
            <br />
            Swim Towards Success.
          </h1>

          <p>
            Whether you're taking your first stroke or training for
            competition, our certified coaches provide expert guidance in
            a safe, modern and supportive environment for kids and adults.
          </p>

          <button className="hero-btn">
            Admission Open
          </button>

        </motion.div>

      </div>

      <div className="scroll-down">
        ↓
      </div>

    </section>
  );
}

export default Hero;