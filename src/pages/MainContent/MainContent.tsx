import About from "./About/About";
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
    </div>
  );
}

export default MainContent;
