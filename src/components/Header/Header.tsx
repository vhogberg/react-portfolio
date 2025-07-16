import { useState } from "react";
import "./Header.css";

import myLogo from "../../assets/logos/my-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src={myLogo} alt="Min logga" />
      <nav className="desktop-menu">
        <a href="#about-me">Om mig</a>
        <a href="#experience">Erfarenhet</a>
        <a href="#education">Utbildning</a>
        <a href="#awards">Priser</a>
        <a href="#projects">Projekt</a>
        <a
          href="https://www.photos.viktorhogberg.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fotografi
        </a>
      </nav>
      <div className="right-buttons">
        <button className="theme-button">☀️</button>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about-me" onClick={() => setMenuOpen(false)}>
          Om mig
        </a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Erfarenhet
        </a>
        <a href="#education" onClick={() => setMenuOpen(false)}>
          Utbildning
        </a>
        <a href="#awards" onClick={() => setMenuOpen(false)}>
          Priser
        </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projekt
        </a>
        <a
          href="https://www.photos.viktorhogberg.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Fotografi
        </a>
      </div>
    </header>
  );
}

export default Header;
