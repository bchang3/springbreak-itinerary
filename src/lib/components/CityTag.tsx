import { CityType } from "../itinerary/plan";
import { cn } from "../utils/utils";

interface CityTagProps {
  cityName: CityType;
}
export default function CityTag({ cityName }: CityTagProps) {
  const cityToColorStyle = {
    Barcelona: "text-white bg-[#DB0030]",
    Madrid: "bg-[#00529F] text-white",
    Seville: "bg-[#179152] text-white",
    Cordoba: "bg-[#a68e62] text-white",
  };
  return (
    <div
      className={cn(
        "min-w-fit px-3 py-2 h-fit border rounded-full font-lato text-xs",
        cityToColorStyle[cityName],
      )}
    >
      {cityName}
    </div>
  );
}
