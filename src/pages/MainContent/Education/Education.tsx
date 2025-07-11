import Timeline from "../../../components/Timeline/Timeline";
import { educationItems } from "../../../data/educationData";

function Education() {
  return (
    <section id="education">
      <h1>Utbildning</h1>
      <Timeline items={educationItems} />
    </section>
  );
}

export default Education;
