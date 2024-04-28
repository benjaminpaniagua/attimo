import "../../index.css";
import { EventSummary } from "../UI/EventSummary";

export function UpcomingEvents({ items}) {
  return (
    <>
    <div className="my-6 px-6">
    <section className="flex justify-between">
        <h2 className="mb-2">Upcoming events</h2>
        <p className="cursor-pointer hover:text-clr-blue">View all</p>
      </section>
        <div className="grid gap-4 w-full">
        {items.map((item) => (
          <EventSummary
            key={1}
            title={item.title}
            date={item.date}
            hour={item.hour}
            image={item.image}
            percent={item.percent}
          />
        ))}
        </div>
    </div>
    </>
  )
}