import { useState } from "react";
import { CardEvents } from "../UI/CardEvents.jsx";
import { EventsFilters } from "./EventsFilters.jsx";
import { EmptyState } from "../UI/EmptyState.jsx";
import { Loading } from "../UI/Loading.jsx";
import { CalendarOff } from "lucide-react";
import { useFetchActivities } from "../hooks/useFetchActivities.js";
import { useFetchGroupActivities } from "../hooks/useFetchGroupActivities.js";
import "../../index.css";

export function MyEvents() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user.id : null;

  const { data: activities, isLoading: isLoadingActivities, error: errorActivities } = useFetchActivities(userId);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { data: groupActivities, isLoading: isLoadingGroupActivities, error: errorGroupActivities } = useFetchGroupActivities(selectedGroup);

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const createCardsActivities = (data) => {
    return data.map((item) => (
      <CardEvents
        key={item.id}
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

  const filteredData = (selectedGroup ? groupActivities : activities)?.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
    const matchesCourse = selectedCourses.length === 0 || selectedCourses.includes(item.course);
    return matchesSearch && matchesCategory && matchesCourse;
  });

  return (
    <>
      <h1 className="dark:text-white">My Activities</h1>
      {isLoadingActivities || (selectedGroup && isLoadingGroupActivities) ? (
        <Loading />
      ) : errorActivities || errorGroupActivities ? (
        <span className="text-clr-blue dark:text-clr-white">
          Error loading events
        </span>
        ) : (selectedGroup ? groupActivities : activities).length === 0 ? (
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
            setSelectedGroup={setSelectedGroup}
          />
          {filteredData.length === 0 ? (
            <EmptyState
              icon={CalendarOff}
              title="No events on the horizon!"
              message="Looks like you have some free time. Relax and enjoy!"
            />
          ) : (
            <div className="grid gap-4 grid-cols-auto-300 tablet:grid-cols-auto-250 w-full max-h-[50rem] overflow-y-scroll no-scrollbar">
              {createCardsActivities(filteredData)}
            </div>
          )}
        </>
      )}
    </>
  );
}