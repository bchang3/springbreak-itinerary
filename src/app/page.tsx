"use client";
import DayCard from "@/lib/components/DayCard";
import { Plan, plan_v1, plan_v2 } from "@/lib/itinerary/plan";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Home() {
  const [plan_name, setPlanName] = useState<string>("v1");
  const [plan, setPlan] = useState<Plan>(plan_v1);

  const handleChange = (event: SelectChangeEvent) => {
    setPlanName(event.target.value);
    if (event.target.value == "v2") {
      setPlan(plan_v2);
    } else if (event.target.value == "v1") {
      setPlan(plan_v1);
    }
  };

  return (
    <div className="h-full">
      <div className="w-full h-[35vh] overflow-hidden">
        <img
          src="/pictures/seville-castle.jpg"
          className="w-full h-full object-cover"
          alt="Seville Castle"
        />
      </div>
      <div className="p-6">
        <h1 className="font-cinzel text-5xl font-semibold mb-2">March</h1>
        <Select
          value={plan_name}
          onChange={handleChange}
          className="w-36 h-10"
          sx={{
            "& .MuiSelect-select": {
              fontFamily: "'Cinzel', serif",
              fontSize: "0.95rem",
              fontWeight: 600,
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                fontFamily: "'Cinzel', serif",
                "& .MuiMenuItem-root": {
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.95rem",
                },
              },
            },
          }}
        >
          <MenuItem value={"v1"}>Plan 1</MenuItem>
          <MenuItem value={"v2"}>Plan 2</MenuItem>
        </Select>
        <div className="flex flex-col md:flex-wrap gap-4 w-full md:h-140 py-10 px-4 md:overflow-scroll">
          {plan.days.map((dayPlan) => {
            return <DayCard dayPlan={dayPlan} key={dayPlan.date.toString()} />;
          })}
        </div>
      </div>
    </div>
  );
}
