"use client";
import EventCard from "@/lib/components/EventCard";
import { CityEvent, cities } from "@/lib/itinerary/plan";
import { useState } from "react";

export default function Food() {
  const [eventIdx, setEventIdx] = useState<number>(0);
  const events: CityEvent[] = cities
    .map((city) => city.events.filter((ev) => ev.type == "food"))
    .flat();
  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          src="/pictures/food.jpg"
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
