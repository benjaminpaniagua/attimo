import "../../index.css";
import { CardEvents } from "../UI/CardEvents.jsx";
import { EventsFilters } from "./EventsFilters.jsx";
import { EmptyState } from "../UI/EmptyState.jsx";
import { CalendarOff } from "lucide-react";
import { useFetchActivities } from "../hooks/useFetchActivities.js";

export function MyEvents({ items }) {
  const { data, isLoading, error } = useFetchActivities();

  const truncate = (text, maxLength) => {
    // Check if the length of the text is less than or equal to the maximum length allowed
    if (text.length <= maxLength) return text;
    // If the text exceeds the maximum length, the text is cut off and "..." is added
    return text.substring(0, maxLength) + "...";
  };

  const createCardsActivities = (data) => {
    return data.map((item) => (
      <CardEvents
        key={item.title}
        title={item.name}
        percent={item.percent}
        description={truncate(item.description, 50)}
        date={item.date}
        hour={item.hour}
        image={item.image}
        category={item.category}
        label={item.label}
        status={item.status}
      />
    ));
  };

  return (
    <>
      <h1 className="dark:text-white">My Events</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading events</p>
      ) : data.length === 0 ? (
        <EmptyState
          icon={CalendarOff}
          title="No events on the horizon!"
          message="Looks like you have some free time. Relax and enjoy!"
        />
      ) : (
        <>
          <EventsFilters />
          <div className="grid gap-4 grid-cols-auto-300 tablet:grid-cols-auto-250 w-full max-h-[52rem] xl:max-h-[55rem] overflow-y-scroll no-scrollbar">
            {createCardsActivities(data)}
          </div>
        </>
      )}
    </>
  );
}
