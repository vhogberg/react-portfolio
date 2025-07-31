import { useState } from "react";
import "./Header.css";

import myLogo from "../../assets/logos/my-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const nextMode = !isLightMode;
    document.documentElement.classList.toggle("light-mode", nextMode);
    setIsLightMode(nextMode);
  };

  return (
    <header>
      <img src={myLogo} alt="Min logga" />
      <nav className="desktop-menu">
        <a href="#experience">Erfarenhet</a>
        <a href="#education">Utbildning</a>
        <a href="#awards">Utmärkelser</a>
        <a href="#projects">Projekt</a>
        <a
          href="https://www.photos.viktorhogberg.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fotografiportfölj
        </a>
      </nav>
      <div className="right-buttons">
        <button className="theme-button" onClick={toggleTheme}>
          {isLightMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-sun-icon lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-moon-icon lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </button>

        <button className="menu-toggle" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 12h16" />
            <path d="M4 18h16" />
            <path d="M4 6h16" />
          </svg>
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Erfarenheter
        </a>
        <a href="#education" onClick={() => setMenuOpen(false)}>
          Utbildning
        </a>
        <a href="#awards" onClick={() => setMenuOpen(false)}>
          Utmärkelser
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
          Fotografiportfölj
        </a>
      </div>
    </header>
  );
}

export default Header;
