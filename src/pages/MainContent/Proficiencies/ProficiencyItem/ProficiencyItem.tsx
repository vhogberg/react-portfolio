import "./ProficiencyItem.css";

type ProficiencyItemProps = {
    icon: string;
    title: string;
    bgColor: string;
}

function ProficiencyItem ({icon, title, bgColor} : ProficiencyItemProps) {
    return (
        <div className="proficiency-item">
            <img src={icon} alt={`${title}-ikon`} className="proficiency-logo" style={{ backgroundColor: bgColor }} />
            <div>
                <h4>{title}</h4>
                
            </div>
        </div>
    );
}

export default ProficiencyItem;