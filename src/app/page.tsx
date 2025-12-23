import EventTag from "@/lib/components/EventTag";
import { plan } from "@/lib/itinerary/plan";
import { getWeekdayShort } from "@/lib/utils/utils";

export default function Home() {
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
        <div className="flex flex-row gap-4 w-full h-120 p-4 overflow-scroll">
          {plan.days.map((dayPlan) => {
            return (
              <div
                className="flex flex-col flex-1 gap-2 relative min-w-100 border p-4 rounded-2xl h-110 hover:scale-103 transition-all"
                key={dayPlan.date.toString()}
              >
                <div>
                  <p className="font-bold text-xl font-cinzel ">
                    {dayPlan.date.getDate()} - {getWeekdayShort(dayPlan.date)}
                  </p>
                  <hr />
                </div>
                <div className="flex flex-col gap-2">
                  {dayPlan.events.map((ev) => {
                    return <EventTag cityEvent={ev} key={ev.title} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
