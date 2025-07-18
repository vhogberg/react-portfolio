import "./ProficiencyItem.css";

type ProficiencyItemProps = {
  icon: string;
  title: string;
};

function ProficiencyItem({ icon, title }: ProficiencyItemProps) {
  const key = title.toLowerCase();
  return (
    <div className="proficiency-item">
      <img
        src={icon}
        alt={`${title}-ikon`}
        className={`proficiency-logo proficiency-logo--${key}`}
      />
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default ProficiencyItem;
