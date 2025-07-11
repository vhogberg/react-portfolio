import "./AwardItem.css";


type AwardItemProps = {
  title: string;
  organisation: string;
  description: string;
  date: string;
};

function AwardItem({ title, organisation, description, date }: AwardItemProps) {
  return (
    <div className="award-item">
      <h4>{title}</h4>
      <h5>{organisation} <span>({date})</span></h5>
      <p>{description}</p>
    </div>
  );
}

export default AwardItem;
