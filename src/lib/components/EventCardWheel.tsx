import { CityEvent } from "../itinerary/plan";
import EventCard from "./EventCard";

interface EventCardWheelProps {
  events: CityEvent[];
}

export default function EventCardWheel({ events }: EventCardWheelProps) {
  return (
    <div className="flex flex-row gap-6 w-full overflow-scroll h-80">
      {events.map((ev) => (
        <EventCard key={ev.title} cityEvent={ev} />
      ))}
    </div>
  );
}
