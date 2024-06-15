import { FilterSelect } from "../UI/FilterSelect.jsx";
import DonutChar from "../UI/DonutChar.jsx";
import { useEventsReport } from "../hooks/useEventsReport.js";
import React from "react";

export const select = [
  {
    id: 1,
    name: "This Week",
  },
  {
    id: 2,
    name: "Today",
  }
];

export function Reports() {
  const data = useEventsReport();

  return (
    <div className="grid bg-white dark:bg-clr-dark-third rounded-lg p-6 lg:p-4">
      <div className="flex justify-between items-center pb-0">
        <h2 className="fs-med dark:text-white">Events Report</h2>
        <FilterSelect items={select} />
      </div>
      <DonutChar data={data} responsive={true}/>
    </div>
  );
}
