import React from 'react';
import { Task } from "../UI/Task.jsx";
import useActivities from "../hooks/useActivities";

export function Tasks() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;

  const { activities, remainingTasks } = useActivities(userId);

  const inactiveActivities = activities.filter(activity => activity.status !== 'Active');

  return (
    <div className="flex w-full gap-4 md:flex-col">
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task number={inactiveActivities.length} description="Inactive Activities" />
      </section>
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task number={remainingTasks} description="Remaining Activities" />
      </section>
    </div>
  );
}
