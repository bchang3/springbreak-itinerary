"use client";
import EventCard from "@/lib/components/EventCard";
import { cities, CityEvent } from "@/lib/itinerary/plan";

export default function SightSeeing() {
  const events: CityEvent[] = cities
    .map((city) => city.events.filter((ev) => ev.type == "sightseeing"))
    .flat();
  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-[70vh] min-h-[45vh] overflow-hidden">
        <img
          src="/pictures/sightseeing.jpg"
          className="w-full h-full object-cover"
          alt="Sight seeing"
        />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-5 gap-12 h-fit p-6">
        {events.map((ev) => (
          <EventCard key={ev.title} cityEvent={ev} />
        ))}
      </div>
    </div>
  );
}
