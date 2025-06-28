import "./Timeline.css";
import TimelineItem from "./TimelineItem";

import ifInsuranceLogo from "../../assets/logos/if-insurance-logo.svg";

function Timeline () {
    return (
        <div className="timeline-container">
            <TimelineItem
            date="Sommar 2023 och 2024"
            title="Service Desk Analytiker"
            organisation="If Försäkringar AB"
            description="Jag hanterade över 1200 incidenter med verktyg som Azure, Active Directory och Exchange under två somrar, vilket krävde snabb problemlösning och stresstålighet.

I rollen ansvarade jag för att identifiera, felsöka och åtgärda tekniska fel, vilket bidrog till att upprätthålla driftsstabiliteten och minimera driftstoppens omfattning.

Genom att även optimera processerna för incidenthantering förbättrade jag arbetsflödet, vilket ledde till kortare svarstider och högre effektivitet inom teamet."
            logo={ifInsuranceLogo}
            />
        </div>
    );
}

export default Timeline;