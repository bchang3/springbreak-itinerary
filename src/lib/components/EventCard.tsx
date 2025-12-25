"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CityEvent } from "../itinerary/plan";
import CityTag from "./CityTag";

interface EventCardProps {
  cityEvent: CityEvent;
}

export default function EventCard({ cityEvent }: EventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-80 min-w-70 cursor-pointer perspective hover:scale-103 transition-all"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 backface-hidden flex flex-col py-6 px-4 rounded-md border bg-white border-gray-200 gap-4 shadow-md">
          <div className="flex flex-row items-center relative pr-4 w-full justify-between font-semibold text-black text-xl">
            <span className="font-cinzel">{cityEvent.title}</span>
            {/* <img
                src="/star.png"
                alt="star"
                className="absolute top-1 right-1 h-4 w-4"
              /> */}
          </div>

          <div className="flex-1 overflow-hidden rounded-sm">
            <img
              src={cityEvent.imageLink}
              alt={cityEvent.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col py-6 px-4 rounded-md border border-gray-200 shadow-md bg-gray-50">
          <div className="flex flex-row w-full justify-between font-semibold text-black text-xl mb-2">
            <span className="font-cinzel">{cityEvent.title}</span>
            <CityTag cityName={cityEvent.city} />
          </div>

          <div className="text-sm text-gray-700 leading-relaxed overflow-auto">
            {cityEvent.description}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
