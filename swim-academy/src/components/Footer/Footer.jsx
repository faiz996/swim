import "./Footer.css";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 Swim Academy | Designed with{" "}
        <FaHeart className="heart" /> by Swim
      </p>
    </footer>
  );
}

export default Footer;