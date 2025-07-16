import About from "./About/About";
import Awards from "./Awards/Awards";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Proficiencies from "./Proficiencies/Proficiencies";
import ProjectReports from "./ProjectReports/ProjectReports";
import Projects from "./Projects/Projects";

function MainContent() {
  return (
    <div className="main-content">
      <About/>
      <Proficiencies/>
      <Experience/>
      <Education/>
      <Awards/>
      <Projects/>
      <ProjectReports/>
    </div>
  );
}

export default MainContent;
