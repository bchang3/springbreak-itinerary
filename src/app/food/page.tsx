"use client";
import EventCard from "@/lib/components/EventCard";
import { CityEvent, cities } from "@/lib/itinerary/plan";

export default function Food() {
  const events: CityEvent[] = cities
    .map((city) => city.events.filter((ev) => ev.type == "food"))
    .flat();
  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-[70vh] min-h-[45vh] overflow-hidden">
        <img
          src="/pictures/food.jpg"
          className="w-full h-full object-cover"
          alt="Night Life"
        />
      </div>
      <div className="grid grid-cols-5 gap-12 h-fit p-6">
        {events.map((ev) => (
          <EventCard key={ev.title} cityEvent={ev} />
        ))}
      </div>
    </div>
  );
}
