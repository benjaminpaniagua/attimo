import React, { useState } from "react";
import { CardEvents } from "../UI/CardEvents.jsx";
import { EventsFilters } from "./EventsFilters.jsx";
import { EmptyState } from "../UI/EmptyState.jsx";
import { Loading } from "../UI/Loading.jsx";
import { CalendarOff } from "lucide-react";
import { useFetchActivities } from "../hooks/useFetchActivities.js";
import "../../index.css";

export function MyEvents() {
  const { data, isLoading, error } = useFetchActivities();
  const [search, setSearch] = useState("");

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
        description={truncate(item.description, 62)}
        date={item.date}
        hour={item.hour}
        image={item.image}
        category={item.category}
        label={item.label}
        status={item.status}
      />
    ));
  };

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="dark:text-white">My Events</h1>
      {isLoading ? ( <Loading /> ) : error ? (<span className="text-clr-blue dark:text-clr-white">Error loading events</span>) : data.length === 0 ? (
        <EmptyState
          icon={CalendarOff}
          title="No events on the horizon!"
          message="Looks like you have some free time. Relax and enjoy!"
        />
      ) : (
        <>
          <EventsFilters setSearch={setSearch} />
          <div className="grid gap-4 grid-cols-auto-300 tablet:grid-cols-auto-250 w-full max-h-[50rem] overflow-y-scroll no-scrollbar">
            {createCardsActivities(filteredData)}
          </div>
        </>
      )}
    </>
  );
}
