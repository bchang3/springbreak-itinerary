"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { DayPlan } from "../itinerary/plan";
import { getWeekdayShort, cn } from "../utils/utils";
import EventTag from "./EventTag";

interface DayCardProps {
  dayPlan: DayPlan;
}
export default function DayCard({ dayPlan }: DayCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="w-full md:w-100 h-fit md:h-120 hover:scale-103 transition-all perspective cursor-pointer"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? -180 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 backface-hidden flex flex-col flex-1 gap-2 w-full  border p-4 rounded-2xl h-full ">
          <div className="flex flex-row justify-between w-full items-center">
            <div>
              <p className="font-bold text-xl font-cinzel ">
                {dayPlan.date.getUTCDate()} - {getWeekdayShort(dayPlan.date)}{" "}
                (Day)
              </p>
              <hr />
            </div>
            <p className="text-3xl">☀️</p>
          </div>
          <div className="flex flex-col h-full gap-2 justify-end w-full">
            {dayPlan.events.map((events) => {
              if (events[0].start)
                return (
                  <div
                    key={events[0].start.getTime()}
                    className={cn("flex flex-row gap-1")}
                  >
                    {events.map((ev, i) => {
                      return (
                        <div
                          key={ev.event.title}
                          className={
                            events.length > 1
                              ? i > 0
                                ? "w-2/5"
                                : "w-3/5"
                              : "w-full"
                          }
                        >
                          <EventTag cityEvent={ev} hideTime={i > 0} />
                        </div>
                      );
                    })}
                  </div>
                );
            })}
          </div>
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col flex-1 gap-2 w-full  border p-4 rounded-2xl h-full bg-black text-white">
          <div className="flex flex-row justify-between w-full items-center">
            <div>
              <p className="font-bold text-xl font-cinzel">
                {dayPlan.date.getUTCDate()} - {getWeekdayShort(dayPlan.date)}{" "}
                (Night)
              </p>
              <hr />
            </div>
            <p className="text-3xl">🍻🌃</p>
          </div>
          <div className="flex flex-col h-full gap-2 justify-start w-full">
            {dayPlan.nightEvents.map((events) => {
              if (events[0].start)
                return (
                  <div
                    key={events[0].start.getTime()}
                    className={cn("flex flex-row gap-1")}
                  >
                    {events.map((ev, i) => {
                      return (
                        <div
                          key={ev.event.title}
                          className={
                            events.length > 1
                              ? i > 0
                                ? "w-2/5"
                                : "w-3/5"
                              : "w-full"
                          }
                        >
                          <EventTag cityEvent={ev} hideTime={i > 0} />
                        </div>
                      );
                    })}
                  </div>
                );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
