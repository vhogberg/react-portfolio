/* eslint-disable @typescript-eslint/no-unused-vars */
import ProficiencyItem from "./ProficiencyItem/ProficiencyItem";

import cssLogo from "../../../assets/logos/tech-logos/css.svg";
import figmaLogo from "../../../assets/logos/tech-logos/figma.svg";
import flutterLogo from "../../../assets/logos/tech-logos/flutter.svg";
import gitLogo from "../../../assets/logos/tech-logos/git.svg";
import html5Logo from "../../../assets/logos/tech-logos/html5.svg";
import javaLogo from "../../../assets/logos/tech-logos/java.svg";
import javascriptLogo from "../../../assets/logos/tech-logos/javascript.svg";
import jetpackComposeLogo from "../../../assets/logos/tech-logos/jetpack-compose.svg";
import kotlinLogo from "../../../assets/logos/tech-logos/kotlin.svg";
import pythonLogo from "../../../assets/logos/tech-logos/python.svg";
import reactLogo from "../../../assets/logos/tech-logos/react.svg";
import typescriptLogo from "../../../assets/logos/tech-logos/typescript.svg";

import "./Proficiencies.css";

const proficiencies = [
  { icon: html5Logo, title: "HTML5", bgColor: "rgb(73, 46, 42)" },
  { icon: cssLogo, title: "CSS", bgColor: "rgb(52, 37, 59)" },
  { icon: javascriptLogo, title: "JavaScript", bgColor: "rgb(89, 79, 32)" },
  { icon: reactLogo, title: "React", bgColor: "rgb(39, 54, 61)" },
  { icon: typescriptLogo, title: "TypeScript", bgColor: "rgb(36, 49, 85)" },
  { icon: flutterLogo, title: "Flutter", bgColor: "rgb(31, 53, 73)" },
  { icon: javaLogo, title: "Java", bgColor: "rgb(63, 51, 40)" },
  {
    icon: jetpackComposeLogo,
    title: "Jetpack",
    bgColor: "rgba(32, 77, 65, 1)",
  },
  { icon: figmaLogo, title: "Figma", bgColor: "rgba(42, 61, 51, 1)" },
  { icon: kotlinLogo, title: "Kotlin", bgColor: "rgb(49, 40, 66)" },
  { icon: pythonLogo, title: "Python", bgColor: "rgb(50, 60, 71)" },
  { icon: gitLogo, title: "Git", bgColor: "rgb(73, 46, 42)" },
];

function Proficiencies() {
  return (
    <>
      <h1>Färdigheter</h1>
      <div id="proficiency-list">
        {proficiencies.map((item, index) => (
          <ProficiencyItem
            key={index}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
      <p>
        Utöver de tekniska färdigheter som visas ovan har jag också erfarenhet
        från flera områden genom mina studier. Jag har gått kurser inom C#, SQL,
        objektorienterad programmering, prototyputveckling, sökmotorer,
        beslutstödssystem, informationssäkerhet, databasmetodik,
        assemblykodning, projekthantering med agila metoder,
        människa-dator-interaktion, IT-integrering i organisationer och mer.
      </p>
      <p>
        Denna bredd gör att jag kan bidra i olika delar av ett projekt, från
        design och utveckling till problemlösning och systemförståelse.
      </p>
    </>
  );
}

export default Proficiencies;
