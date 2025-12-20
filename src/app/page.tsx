import { plan } from "@/lib/itinerary/plan";

export default function Home() {
  return (
    <div className="h-full">
      <div className="w-full h-[40vh] overflow-hidden">
        <img
          src="/pictures/seville-castle.jpg"
          className="w-full h-full object-cover"
          alt="Seville Castle"
        />
      </div>
      <div className="p-6">
        <h1 className="font-cinzel text-5xl font-semibold mb-2">March</h1>
        <div className="flex flex-row gap-4 w-full h-96 p-4 overflow-scroll">
          {plan.days.map((dayPlan) => {
            return (
              <div
                className="relative min-w-80 border p-4 rounded-2xl h-80 hover:scale-103 transition-all"
                key={dayPlan.date.toString()}
              >
                <div className="absolute top-4 left-4">
                  <p className="font-bold text-xl font-cinzel ">
                    {dayPlan.date.getDate()}
                  </p>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
