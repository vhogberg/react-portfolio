import "./Header.css";

function Header() {
  return (
    <header>
      <a href="#about-me">Om mig</a>
      <a href="#experience">Erfarenhet</a>
      <a href="#education">Utbildning</a>
      <a href="#awards">Priser</a>
      <a href="#projects">Projekt</a>
      <a
        href="https://drive.google.com/file/d/1ko6YJcgwaNSFovzffVD9ntclJnnVz_x_/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
      <a
        href="https://www.photos.viktorhogberg.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fotografiportfölj
      </a>
    </header>
  );
}

export default Header;
