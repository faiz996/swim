import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Branches.css";

const branches = [
  {
    id: 1,
    name: "Al Bateen",
    address: "Near Corniche Road, Abu Dhabi",
  },
  {
    id: 2,
    name: "Al Nahyan",
    address: "Al Nahyan Camp Area, Abu Dhabi",
  },
  {
    id: 3,
    name: "Khalifa City",
    address: "Khalifa City A, Abu Dhabi",
  },
];

function Branches() {
  return (
    <section className="branches" id="branches">

      <motion.div
        className="branches-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Our Branches</h2>
        <p>
          Visit any of our modern swimming academy locations.
        </p>
      </motion.div>

      <div className="branch-grid">
        {branches.map((branch, index) => (
          <motion.div
            key={branch.id}
            className="branch-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            viewport={{ once: true }}
          >
            <FaMapMarkerAlt className="branch-icon" />

            <h3>{branch.name}</h3>

            <p>{branch.address}</p>

            <button>View Location</button>

          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Branches;