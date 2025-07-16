import portrait from "../../assets/images/portrait.png";
import githubLogoLight from "../../assets/logos/github-logo-light-mode.svg";
import githubLogo from "../../assets/logos/github-logo.svg";
import gmailLogo from "../../assets/logos/gmail-logo.svg";
import instagramLogo from "../../assets/logos/instagram-logo.svg";
import linkedinLogo from "../../assets/logos/linkedin-logo.svg";

import LinkButton from "../LinkButton/LinkButton";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside>
      <img src={portrait} alt="Porträtt" id="portrait" />
      <h1>Viktor Högberg</h1>
      <h3>Data- och systemvetare</h3>
      <h4>📍 Stockholm, Sverige 🇸🇪</h4>
      <div id="contact-buttons">
        <LinkButton
          href="https://www.linkedin.com/in/viktor-hogberg/"
          icon={linkedinLogo}
          label="LinkedIn"
        />
        <LinkButton
          href="https://github.com/vhogberg"
          icon={githubLogo}
          iconLight={githubLogoLight}
          label="GitHub"
        />
        <LinkButton
          href="mailto:viktor.hogberg.work@gmail.com"
          icon={gmailLogo}
          label="Email"
        />
        <LinkButton
          href="https://www.instagram.com/vhogbergphoto/"
          icon={instagramLogo}
          label="Instagram"
        />
      </div>
    </aside>
  );
}

export default Sidebar;
