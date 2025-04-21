import "./css/Header.css";
import { useState } from "react";
import Navigation from "./Navigation";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div id="header-content">
        <h1>OutdoorSC</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars color="var(--secondary)" />
        </button>
        <Navigation menuOpen={menuOpen} />
      </div>
    </header>
  );
}

export default Header;
