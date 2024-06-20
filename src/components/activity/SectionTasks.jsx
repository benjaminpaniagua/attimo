import React from "react";
import { Task } from "../UI/Task.jsx";
import { useFetchActivities } from "../hooks/useFetchActivities";

export function Tasks() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  const { data } = useFetchActivities(userId);
  const activeActivities = data.filter(
    (activity) => activity.status === "Active"
  );
  const inactiveActivities = data.filter(
    (activity) => activity.status === "Inactive"
  );

  return (
    <div className="flex w-full gap-4 md:flex-col">
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task
          number={inactiveActivities.length}
          description="Inactive Activities"
        />
      </section>
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task
          number={activeActivities.length}
          description="Remaining Activities"
        />
      </section>
    </div>
  );
}
