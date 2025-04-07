import "./css/Navigation.css";
import { FaHome, FaBinoculars, FaUser, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navigation({ menuOpen }) {
  return (
    <nav id="main-nav" className={menuOpen ? "open" : ""}>
      <ul>
        <li>
          <Link to="/">
            <FaHome color="#dad7cd" /> Home
          </Link>
        </li>
        <li>
          <Link to="/explore">
            <FaBinoculars color="#dad7cd" /> Explore
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser color="#dad7cd" /> Profile
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaQuestionCircle color="#dad7cd" /> About
          </Link>
        </li>
        <li className="search-bar">
          <input type="text" placeholder="Search..." />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
