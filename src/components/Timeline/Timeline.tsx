import "./Timeline.css";
import type { TimelineItemProps } from "./TimelineItem";
import TimelineItem from "./TimelineItem";

type TimelineProps = {
  items: TimelineItemProps[];
};

function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          date={item.date}
          title={item.title}
          organisation={item.organisation}
          description={item.description}
          logo={item.logo}
        />
      ))}
    </div>
  );
}

export default Timeline;