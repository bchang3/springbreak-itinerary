import EventTag from "@/lib/components/EventTag";
import { plan } from "@/lib/itinerary/plan";
import { cn, getWeekdayShort } from "@/lib/utils/utils";

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
        <div className="flex flex-col md:flex-row gap-4 w-full md:h-130 p-4 md:overflow-scroll">
          {plan.days.map((dayPlan) => {
            return (
              <div
                className="flex flex-col flex-1 gap-2 relative w-full md:min-w-100  border p-4 rounded-2xl h-120 hover:scale-103 transition-all"
                key={dayPlan.date.toString()}
              >
                <div>
                  <p className="font-bold text-xl font-cinzel ">
                    {dayPlan.date.getDate()} - {getWeekdayShort(dayPlan.date)}
                  </p>
                  <hr />
                </div>
                <div className="flex flex-col h-full gap-2 justify-center w-full">
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
                                key={ev.title}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
