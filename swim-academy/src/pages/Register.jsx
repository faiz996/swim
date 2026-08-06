import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSwimmingPool,
} from "react-icons/fa";

import { registerUser } from "../services/auth";
import "../styles/Auth.css";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser(form);

      alert("Registration Successful");

      navigate("/login");

    } catch {

      alert("Registration Failed");

    }

  };

  return (

    <div className="auth-page">

      <motion.div
        className="auth-card"
        initial={{ opacity:0, scale:.8 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:.7 }}
      >

        <div className="logo-circle">
          <FaSwimmingPool/>
        </div>

        <h2>Create Account</h2>

        <p>Join Swim Academy Today</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <FaUser/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaEnvelope/>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaLock/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button>
            Register
          </button>

        </form>

        <span>

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </span>

      </motion.div>

    </div>

  );

}

export default Register;