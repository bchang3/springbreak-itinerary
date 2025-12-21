"useclient";

import { CityEvent } from "../itinerary/plan";

interface EventCard {
  cityEvent: CityEvent;
}

export default function EventCard({ cityEvent }: EventCard) {
  return (
    <div>
      <div className="flex flex-col py-6 px-4 rounded-md border-gray-200 border gap-4 hover:bg-gray-200 justify-between hover:scale-103 shadow-md transition-transform duration-300 h-80 min-w-70 ">
        <div className="font-semibold text-black text-xl font-cinzel">
          {cityEvent.title}
        </div>
        <div className="flex flex-col gap-3 w-full h-full overflow-hidden rounded-xs">
          <img
            src={cityEvent.imageLink}
            alt={cityEvent.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
