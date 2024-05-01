import "../../index.css";
import { EventSummary } from "../UI/EventSummary";

export function UpcomingEvents({ items}) {
  return (
    <>
    <div className="my-6 px-6">
    <section className="flex justify-between">
        <h2 className="mb-2 dark:text-white">Upcoming events</h2>
        <p className="duration-300 cursor-pointer hover:text-clr-blue dark:text-clr-light-gray dark:hover:text-white">View all</p>
      </section>
        <div className="grid gap-4 w-full">
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
    </div>
    </>
  )
}