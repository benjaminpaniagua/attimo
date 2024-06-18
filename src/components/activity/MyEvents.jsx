import React, { useState } from "react";
import { CardEvents } from "../UI/CardEvents.jsx";
import { EventsFilters } from "./EventsFilters.jsx";
import { EmptyState } from "../UI/EmptyState.jsx";
import { Loading } from "../UI/Loading.jsx";
import { CalendarOff } from "lucide-react";
import { useFetchActivities } from "../hooks/useFetchActivities.js";
import "../../index.css";

export function MyEvents() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { data, isLoading, error } = useFetchActivities(user.id); // User id
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const createCardsActivities = (data) => {
    return data.map((item) => (
      <CardEvents
        id={item.id}
        title={item.name}
        percent={item.percent}
        description={truncate(item.description, 62)}
        date={item.date}
        hour={item.time}
        image={item.image}
        category={item.category}
        label={item.label}
        status={item.status}
      />
    ));
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesCourse = selectedCourses.length === 0 || selectedCourses.includes(item.course);
    return matchesSearch && matchesCategory && matchesCourse;
  });

  return (
    <>
      <h1 className="dark:text-white">My Events</h1>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <span className="text-clr-blue dark:text-clr-white">
          Error loading events
        </span>
      ) : data.length === 0 ? (
        <EmptyState
          icon={CalendarOff}
          title="No events on the horizon!"
          message="Looks like you have some free time. Relax and enjoy!"
        />
      ) : (
        <>
          <EventsFilters 
            setSearch={setSearch} 
            selectedCategories={selectedCategories} 
            setSelectedCategories={setSelectedCategories} 
            selectedCourses={selectedCourses} 
            setSelectedCourses={setSelectedCourses} 
          />
          <div className="grid gap-4 grid-cols-auto-300 tablet:grid-cols-auto-250 w-full max-h-[50rem] overflow-y-scroll no-scrollbar">
            {createCardsActivities(filteredData)}
          </div>
        </>
      )}
    </>
  );
}