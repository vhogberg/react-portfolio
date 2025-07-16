import LinkButton from "../../../../components/LinkButton/LinkButton";
import TechStack from "./TechStack/TechStack";

import openLinkIcon from "../../../../assets/icons/open-link-icon.svg";
import demoIcon from "../../../../assets/icons/video-icon.svg";
import githubLogo from "../../../../assets/logos/github-logo.svg";

import "./ProjectItem.css";

type ProjectItemProps = {
  title: string;
  description: string[];
  githubLink?: string;
  demoLink?: string;
  openLink?: string;
  imageUrl: string;
  technologies?: string[];
};

function ProjectItem({
  title,
  description,
  githubLink,
  demoLink,
  openLink,
  imageUrl,
  technologies,
}: ProjectItemProps) {
  return (
    <div className="project-item">
      <img
        src={imageUrl}
        alt={`${title} projektbild`}
        className="project-image"
      />
      <h4>{title}</h4>

      <div className="project-description">
        {description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>

      {technologies && <TechStack technologies={technologies} />}

      <div className="project-buttons">
        {githubLink && (
          <LinkButton href={githubLink} icon={githubLogo} label={"GitHub"} />
        )}

        {demoLink && (
          <LinkButton href={demoLink} icon={demoIcon} label={"Demo"} />
        )}

        {openLink && (
          <LinkButton href={openLink} icon={openLinkIcon} label={"Öppna"} />
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
