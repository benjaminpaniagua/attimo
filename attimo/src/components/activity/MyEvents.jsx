import "../../index.css";
import { CardEvents } from "../UI/CardEvents.jsx";
import { EventsFilters } from "./EventsFilters";

export function MyEvents({ items, categories, courses }){
    return (
        <>
            <div className="flex flex-wrap justify-between">
                <h1 className="mb-5">My Events</h1>
                <EventsFilters/>
            </div>
            <div className="grid grid-cols-auto-300 gap-4 w-full max-h-[54rem] overflow-scroll">
                {items.map(item => (
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
    );
}

