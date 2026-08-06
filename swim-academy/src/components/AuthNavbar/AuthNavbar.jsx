import { Link } from "react-router-dom";
import { FaSwimmingPool } from "react-icons/fa";
import "./AuthNavbar.css";

function AuthNavbar() {
  return (
    <nav className="auth-navbar">

      <div className="auth-logo">
        <FaSwimmingPool />
        <span>Swim Academy</span>
      </div>

      <ul className="auth-menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register" className="register-btn">
            Register
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default AuthNavbar;