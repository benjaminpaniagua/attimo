import "../../index.css";
import { EventSummary } from "../UI/EventSummary";
import { Smile } from "lucide-react";

export function UpcomingEvents({ items }) {
  return (
    <div className="mt-2 px-6 grid">
      <section className="flex items-center justify-between">
        <h2 className="my-4 dark:text-white">Upcoming events</h2>
        <p className="duration-300 cursor-pointer hover:text-clr-blue dark:text-clr-light-gray dark:hover:text-white">View all</p>
      </section>
      
      {items.length === 0 ? (
        <div className="grid h-full text-center m-auto pt-14 pb-4">
          <Smile size={46} className="m-auto mb-4 text-clr-blue/70 dark:text-clr-light-gray" />
          <section className="w-96">
            <h3 className="dark:text-white">No events on the horizon!</h3>
            <p className="dark:text-clr-light-gray">Looks like you have some free time. Relax and enjoy!</p>
          </section>
        </div>
      ) : (
        <div className="grid gap-2 w-full">
          {items.map((item) => (
            <EventSummary
              key={item.id}
              title={item.title}
              date={item.date}
              hour={item.hour}
              image={item.image}
              percent={item.percent}
            />
          ))}
        </div>
      )}
    </div>
  );
}
