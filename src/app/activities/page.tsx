"use client";
import EventCard from "@/lib/components/EventCard";
import { cities, CityEvent } from "@/lib/itinerary/plan";
import { useState } from "react";

export default function Activities() {
  const [eventIdx, setEventIdx] = useState<number>(0);
  const events: CityEvent[] = cities
    .map((city) => city.events.filter((ev) => ev.type == "activities"))
    .flat();
  return (
    <div className="grid grid-cols-5 gap-12 h-full p-6">
      {events.map((ev) => (
        <EventCard key={ev.title} cityEvent={ev} />
      ))}
    </div>
  );
}
