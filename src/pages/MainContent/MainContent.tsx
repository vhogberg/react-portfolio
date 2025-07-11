import About from "./About/About";
import Awards from "./Awards/Awards";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Proficiencies from "./Proficiencies/Proficiencies";

function MainContent() {
  return (
    <div>
      <About/>
      <Proficiencies/>
      <Experience/>
      <Education/>
      <Awards/>
    </div>
  );
}

export default MainContent;
