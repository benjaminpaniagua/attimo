import React from "react";
import { FilterSelect } from "../UI/FilterSelect.jsx";
import DonutChar from "../UI/DonutChar.jsx";
import { useEventsReport } from "../hooks/useEventsReport.js";
import { useSelectedOption } from "../../global/selectedOptionContext.jsx";

export const select = [
  {
    id: 0,
    name: "All time",
  },
  {
    id: 1,
    name: "This week",
  },
  {
    id: 2,
    name: "Today",
  },
];

export function Reports() {
  const { selectedOption, setSelectedOption } = useSelectedOption(); 
  const { data } = useEventsReport(selectedOption);

  //  Update the selected option when the user changes it
  const handleFilterChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
  };

  return (
    <div className="grid bg-white dark:bg-clr-dark-third rounded-lg p-6 lg:p-4">
      <div className="flex justify-between items-center pb-0">
        <h2 className="fs-med dark:text-white">Events Report</h2>
        <FilterSelect items={select} onChange={handleFilterChange} />
      </div>
      <DonutChar data={data} responsive={true} />
    </div>
  );
}
