import emailIcon from "../../assets/icons/email-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import portrait from "../../assets/images/portrait.png";

import LinkButton from "../LinkButton/LinkButton";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside>
      <img src={portrait} alt="Porträtt" id="portrait" />
      <h1>Viktor Högberg</h1>
      <h3>Data- och systemvetare</h3>
      <h4>📍 Stockholm, Sverige 🇸🇪</h4>
      <h3>Kontakta mig!</h3>
      <div id="contact-buttons">
        <LinkButton
          href="https://www.linkedin.com/in/viktor-hogberg/"
          icon={linkedinIcon}
          label="LinkedIn"
        />
        <LinkButton
          href="https://github.com/vhogberg"
          icon={githubIcon}
          label="GitHub"
        />
        <LinkButton
          href="mailto:viktor.hogberg.work@gmail.com"
          icon={emailIcon}
          label="Email"
        />
        <LinkButton
          href="https://www.instagram.com/vhogbergphoto/"
          icon={instagramIcon}
          label="Instagram"
        />
      </div>
    </aside>
  );
}

export default Sidebar;
