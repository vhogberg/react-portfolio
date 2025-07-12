import "./TimelineItem.css";

export type TimelineItemProps = {
  date: string;
  title: string;
  organisation: string;
  description: string[];
  logo: string;
};

function TimelineItem({
  date,
  title,
  organisation,
  description,
  logo,
}: TimelineItemProps) {
  return (
    <div className="timeline-item-container">
      <div className="timeline-item-vertical-timeline">
        <div className="timeline-item-vertical-line"></div>
        <img
          src={logo}
          alt={`${logo}-logga`}
          className="timeline-item-vertical-line-logo"
        />
      </div>
      <div className="timeline-item-description">
        <span>{date}</span>
        <h4>{title}</h4>
        <h5>{organisation}</h5>
        <div className="timeline-item-description-text">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="timeline-item-separator-line"></div>
      </div>
    </div>
  );
}

export default TimelineItem;
