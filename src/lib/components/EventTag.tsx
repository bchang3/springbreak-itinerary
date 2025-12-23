"use client";
import { useState } from "react";
import { CityEvent } from "../itinerary/plan";
import { cn, getMonthAndWeekDay, getTime } from "../utils/utils";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

interface EventTagProps {
  cityEvent: CityEvent;
}
export default function EventTag({ cityEvent }: EventTagProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const eventTypeToColor = {
    nightlife: "bg-[#0072b0]",
    food: "bg-[#edb200]",
    activities: "bg-[#e86a02]",
    nature: "bg-[#00b04f]",
    sightseeing: "bg-[#8a0027]",
    train: "bg-[#cf5a06]",
    empty: "bg-[#ffffff]",
  };
  const duration =
    cityEvent.end && cityEvent.start
      ? (cityEvent.end.getTime() - cityEvent.start.getTime()) / (1000 * 60 * 60)
      : 0;

  return (
    <div>
      <button
        className={cn(
          "flex flex-row justify-between items-center cursor-pointer gap-1 w-90 px-3 py-2 border rounded-full font-lato text-white",
          eventTypeToColor[cityEvent.type],
        )}
        style={{ height: 30 + duration * 15 }}
        onClick={toggleDrawer(true)}
      >
        <div className="flex flex-row gap-2 text-sm w-40 items-center font-bold">
          <span className="">
            {cityEvent.start && getTime(cityEvent.start)}
          </span>
          <span>-</span>
          <span>{cityEvent.end && getTime(cityEvent.end)}</span>
        </div>

        <span className="text-xs">{cityEvent.title}</span>
      </button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        disableScrollLock
        BackdropProps={{ invisible: true }}
      >
        <Box
          className="flex flex-col bg-white w-90 gap-4 p-4"
          onClick={toggleDrawer(false)}
        >
          <div className="flex flex-col">
            <span className="font-cinzel text-xl font-bold">
              {cityEvent.title}
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
              src={cityEvent.imageLink}
              alt={cityEvent.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <p className=" font-lato text-gray-700 leading-relaxed overflow-auto text-base">
            {cityEvent.description}
          </p>
        </Box>
      </Drawer>
    </div>
  );
}
