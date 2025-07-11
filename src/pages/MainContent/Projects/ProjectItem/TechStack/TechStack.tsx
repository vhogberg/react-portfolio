import { techLogoMap } from "./TechLogos";
import "./TechStack.css";

type TechStackProps = {
  technologies: string[];
};

function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="tech-stack">
      {technologies.map((tech, index) => {
        const logoSrc = techLogoMap[tech];
        if (!logoSrc) return null;
        return (
          <div key={index} className="tooltip">
            <img
              src={logoSrc}
              alt={tech}
              className={`tech-icon ${tech.toLowerCase()}-logo`}
            />
            <div className="tooltip-text">{tech}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TechStack;
