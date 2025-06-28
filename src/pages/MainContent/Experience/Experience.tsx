import Timeline from "../../../components/Timeline/Timeline";
import { experienceItems } from "../../../data/experienceData";

import "./Experience.css";

function Experience () {
    return (
        <>
        <h1>Erfarenhet</h1>
        <p>ERR. 404: Tidigare jobberfarenhet inom programmering ej funnet..</p>
        <p>Övriga tidigare erfarenheter:</p>

        <Timeline items={experienceItems}/>
        </>
    );
}

export default Experience;