import "../../index.css";
import { CardEvents } from "../UI/CardEvents.jsx";
import { EventsFilters } from "./EventsFilters.jsx";
import { CalendarOff } from "lucide-react";

export function MyEvents({ items }) {
    return (
        <>
        {items.length === 0 ? (
            <div className="grid h-full text-center m-auto">
                <CalendarOff size={54} className="m-auto mb-4 text-clr-light-gray" />
                <section>
                    <h3 className="dark:text-white">No events</h3>
                    <p className="dark:text-clr-light-gray">You have no courses yet!</p>
                </section>
            </div>
        ) : (
            <>
            <h1 className="dark:text-white">My Events</h1>
            <EventsFilters />
            <div className="grid gap-4 grid-cols-auto-300 tablet:grid-cols-auto-250 w-full max-h-[54rem] overflow-y-scroll no-scrollbar">
                {items.map((item) => (
                <CardEvents
                    key={item.title}
                    title={item.title}
                    percent={item.percent}
                    description={item.description}
                    date={item.date}
                    hour={item.hour}
                    image={item.image}
                    category={item.category}
                    label={item.label}
                    status={item.status}
                />
                ))}
            </div>
            </>
        )}
        </>
    );
}
