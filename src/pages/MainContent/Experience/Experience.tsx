import Timeline from "../../../components/Timeline/Timeline";
import { experienceItems } from "../../../data/experienceData";

import "./Experience.css";

function Experience () {
    return (
        <>
        <h1>Erfarenhet</h1>
        <Timeline items={experienceItems}/>
        </>
    );
}

export default Experience;