import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import "./Gallery.css";

import img1 from "../../assets/images/gallery1.jpg";
import img2 from "../../assets/images/gallery2.jpg";
import img3 from "../../assets/images/gallery3.jpg";

const galleryImages = [
  {
    id: 1,
    image: img1,
    title: "Kids Swimming",
  },
  {
    id: 2,
    image: img2,
    title: "Professional Training",
  },
  {
    id: 3,
    image: img3,
    title: "Swimming Competition",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <motion.div
        className="gallery-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Gallery</h2>
        <p>
          Moments from our swimming classes, training sessions,
          and competitions.
        </p>
      </motion.div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <motion.div
            className="gallery-card"
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <FaSearchPlus className="gallery-icon" />
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="gallery-btn-box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="gallery-btn">
          See More
        </button>
      </motion.div>

    </section>
  );
}

export default Gallery;