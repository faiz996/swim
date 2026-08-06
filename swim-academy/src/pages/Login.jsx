import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaSwimmingPool } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/auth";
import "../styles/Auth.css";
import AuthNavbar from "../components/AuthNavbar/AuthNavbar";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: "",
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
      const res = await loginUser(form);

      login(res.data.access);

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="auth-page">

      <motion.div
        className="auth-card"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
      >

        <div className="logo-circle">
          <FaSwimmingPool />
        </div>

        <h2>Welcome Back</h2>

        <p>Login to your Swim Academy account</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <FaUser />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <button>
            Login
          </button>

        </form>

        <span>
          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </span>

      </motion.div>

    </div>
  );
}

export default Login;