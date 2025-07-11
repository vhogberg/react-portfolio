import Timeline from "../../../components/Timeline/Timeline";
import { experienceItems } from "../../../data/experienceData";

function Experience() {
  return (
    <section id="experience">
      <h1>Erfarenhet</h1>
      <Timeline items={experienceItems} />
    </section>
  );
}

export default Experience;
