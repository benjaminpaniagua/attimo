import React, { useState, useEffect } from "react";
import { useEventsReport } from "../hooks/useEventsReport";
import { useSelectedOption } from "../../global/selectedOptionContext";

export function SummaryWeek() {
  const { selectedOption } = useSelectedOption();
  const { totalActivities } = useEventsReport(selectedOption);
  const [activityCategory, setActivityCategory] = useState({
    category: "",
    color: "",
    time: "",
  });

  useEffect(() => {
    const getActivityCategory = () => {
      const activityCount = totalActivities;
      let category, color, time;

      if (activityCount > 10) {
        category = "full";
        color = "text-[#de4790]";
      } else if (activityCount > 5) {
        category = "busy";
        color = "text-[#6375cc]";
      } else {
        category = "light";
        color = "text-[#2aa193]";
      }

      // Ensure selectedOption is a number
      const option = Number(selectedOption);

      if (option === 0) {
        time = "semester";
      } else if (option === 1) {
        time = "week";
      } else if (option === 2) {
        time = "day";
      } else {
        console.log("Unknown selectedOption:", selectedOption); // Log unknown option
      }
      return { category, color, time };
    };
    const categoryData = getActivityCategory();
    setActivityCategory(categoryData);
  }, [totalActivities, selectedOption]);

  const { category, color, time } = activityCategory;

  return (
    <div className="bg-white dark:bg-clr-dark-third rounded-lg flex flex-col justify-center items-center gap-4 p-4 md:py-8">
      <h3 className="py-4 dark:text-white font-normal xs:text-base">
        You have a <span className={`${color} font-bold`}>{category}</span>{" "}
        <span>{time}</span> of activities
      </h3>

      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-dark-green mr-2"></div>
          <p className="dark:text-white xs:text-sm">Light (0-5)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-blue mr-2"></div>
          <p className="dark:text-white xs:text-sm">Busy (6-10)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-dark-pink mr-2"></div>
          <p className="dark:text-white xs:text-sm">Full (+10)</p>
        </div>
      </div>

      <div className="flex w-11/12 mx-auto">
        <div className="flex-1 h-4 bg-clr-dark-green rounded-l-lg"></div>
        <div className="flex-1 h-4 bg-clr-blue"></div>
        <div className="flex-1 h-4 bg-clr-dark-pink rounded-r-lg"></div>
      </div>
    </div>
  );
}
