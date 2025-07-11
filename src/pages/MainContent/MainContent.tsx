import About from "./About/About";
import Awards from "./Awards/Awards";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Proficiencies from "./Proficiencies/Proficiencies";
import Projects from "./Projects/Projects";

function MainContent() {
  return (
    <div>
      <About/>
      <Proficiencies/>
      <Experience/>
      <Education/>
      <Awards/>
      <Projects/>
    </div>
  );
}

export default MainContent;
