"use client";
import { useState } from "react";
import { ItineraryEvent } from "../itinerary/plan";
import { cn, getMonthAndWeekDay, getTime } from "../utils/utils";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MouseEvent } from "react";

interface EventTagProps {
  cityEvent: ItineraryEvent;
  hideTime?: boolean;
}
export default function EventTag({ cityEvent, hideTime }: EventTagProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleEventClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleEventClickClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen(false);
  };

  const eventTypeToColor = {
    nightlife: "bg-red-950",
    food: "bg-[#edb200]",
    activities: "bg-[#00aab0]",
    nature: "bg-[#00b04f]",
    sightseeing: "bg-[#8a0027]",
    train: "bg-[#cf5a06]",
    plane: "bg-[#63d4b9]",
    empty: "bg-[#ffffff]",
  };
  const duration =
    cityEvent.end && cityEvent.start
      ? (cityEvent.end.getTime() - cityEvent.start.getTime()) / (1000 * 60 * 60)
      : 0;

  return (
    <div className="w-full">
      <button
        className={cn(
          "flex flex-row justify-between items-center cursor-pointer gap-1 w-full px-3 py-2 border rounded-4xl font-lato text-white",
          eventTypeToColor[cityEvent.event.type],
        )}
        style={{ height: Math.min(30 + duration * 15, 250) }}
        onClick={cityEvent.event.type != "empty" ? handleEventClick : () => {}}
      >
        {!hideTime && (
          <div className="flex flex-row gap-2 text-sm min-w-fit items-center font-bold">
            <span className="">
              {cityEvent.start && getTime(cityEvent.start)}
            </span>
            <span>-</span>
            <span>{cityEvent.end && getTime(cityEvent.end)}</span>
          </div>
        )}

        <span className="text-sm truncate text-center w-full">
          {cityEvent.event.title}
        </span>
      </button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        disableScrollLock
        BackdropProps={{ invisible: true }}
        onClick={handleEventClickClose}
      >
        <Box
          className="flex flex-col bg-white w-70 md:w-90 gap-4 p-4"
          onClick={handleEventClickClose}
        >
          <div className="flex flex-col">
            <span className="font-cinzel text-xl font-bold">
              {cityEvent.event.title}
            </span>
            <div className="flex flex-col">
              <span className="text-sm">
                {cityEvent.start && getMonthAndWeekDay(cityEvent.start)}{" "}
              </span>
              <span className="text-xs -mt-1">
                {cityEvent.start && getTime(cityEvent.start)} -{" "}
                {cityEvent.end && getTime(cityEvent.end)}
              </span>
            </div>
          </div>
          <div className="flex-1 overflow-hidden rounded-sm">
            <img
              src={cityEvent.event.imageLink}
              alt={cityEvent.event.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className=" font-lato text-gray-700 leading-relaxed overflow-auto text-base">
            {cityEvent.event.description}
          </p>
        </Box>
      </Drawer>
    </div>
  );
}
