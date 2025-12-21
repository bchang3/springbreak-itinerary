"use client";
import EventCard from "@/lib/components/EventCard";
import { cities, CityEvent } from "@/lib/itinerary/plan";

export default function NightLife() {
  const events: CityEvent[] = cities
    .map((city) => city.events.filter((ev) => ev.type == "nightlife"))
    .flat();
  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src="/pictures/nightlife.jpg"
          className="w-full h-full object-cover"
          alt="Night Life"
        />
      </div>
      <div className="grid grid-cols-5 gap-12 h-full p-6">
        {events.map((ev) => (
          <EventCard key={ev.title} cityEvent={ev} />
        ))}
      </div>
    </div>
  );
}
