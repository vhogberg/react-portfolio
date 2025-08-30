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
import reactLogo from "../../../assets/logos/tech-logos/react.svg";
import typescriptLogo from "../../../assets/logos/tech-logos/typescript.svg";
import viteLogo from "../../../assets/logos/tech-logos/vite.svg";

import "./Proficiencies.css";

const proficiencies = [
  { icon: html5Logo, title: "HTML5" },
  { icon: cssLogo, title: "CSS" },
  { icon: javascriptLogo, title: "JavaScript" },
  { icon: reactLogo, title: "React" },
  { icon: typescriptLogo, title: "TypeScript" },
  { icon: flutterLogo, title: "Flutter" },
  { icon: javaLogo, title: "Java" },
  { icon: jetpackComposeLogo, title: "Jetpack" },
  { icon: kotlinLogo, title: "Kotlin" },
  { icon: gitLogo, title: "Git" },
  { icon: viteLogo, title: "Vite" },
  { icon: figmaLogo, title: "Figma" },
];

function Proficiencies() {
  return (
    <section id="proficiencies">
      <h1>Färdigheter</h1>
      <div id="proficiency-list">
        {proficiencies.map((item, index) => (
          <ProficiencyItem key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
      <p>
        Utöver de tekniska färdigheter som visas ovan har jag också erfarenhet
        från flera områden genom mina studier. Jag har gått kurser innehållande
        C#, Python, SQL, sökmotorer, beslutstödssystem, informationssäkerhet,
        databasmetodik, assemblykodning, projekthantering med agila metoder,
        människa-dator-interaktion, IT-integrering i organisationer och mer!
      </p>
      <p>
        Denna bredd gör att jag kan bidra i olika delar av ett projekt, från
        design och utveckling till problemlösning och systemförståelse.
      </p>
    </section>
  );
}

export default Proficiencies;
