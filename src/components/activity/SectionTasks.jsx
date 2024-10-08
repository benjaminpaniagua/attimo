import React from "react";
import { Task } from "../UI/Task.jsx";
import { useEventsReport } from "../hooks/useEventsReport.js";
import { useSelectedOption } from "../../global/selectedOptionContext.jsx";

export function Tasks() {
  const { selectedOption } = useSelectedOption(); 
  const { activeActivities, inactiveActivities } = useEventsReport(selectedOption);

  // Convert the string values to numbers
  const activeCount = Number(activeActivities);
  const inactiveCount = Number(inactiveActivities);

  return (
    <div className="flex w-full gap-4 md:flex-col">
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task number={inactiveCount} description="Inactive Activities" />
      </section>
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task number={activeCount} description="Remaining Activities" />
      </section>
    </div>
  );
}
