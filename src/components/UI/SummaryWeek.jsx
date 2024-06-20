import React from 'react';
import { useFetchActivities } from '../hooks/useFetchActivities';

export function SummaryWeek({ userId }) {
  const { data } = useFetchActivities(userId);

  // Determinate category and color based on the number of activities
  const getActivityCategory = () => {
    const activityCount = data.length;

    if (activityCount > 10) {
      return { category: 'Full', color: 'text-clr-dark-pink' };
    } else if (activityCount > 5) {
      return { category: 'Busy', color: 'text-clr-blue' };
    } else {
      return { category: 'Light', color: 'text-clr-dark-green' };
    }
  };

  const { category, color } = getActivityCategory();

  return (
    <div className="bg-white dark:bg-clr-dark-third rounded-lg flex flex-col justify-center items-center gap-4 p-4 md:py-8">
      <h3 className="py-4 dark:text-white">
        You have a <span className={color}>{category}</span> week of events
      </h3>

      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-dark-green mr-2"></div>
          <p className="dark:text-white">Light (0-5)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-blue mr-2"></div>
          <p className="dark:text-white">Busy (6-10)</p>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-clr-dark-pink mr-2"></div>
          <p className="dark:text-white">Full (+10)</p>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex-1 h-4 bg-clr-dark-green rounded-l-lg"></div>
        <div className="flex-1 h-4 bg-clr-blue"></div>
        <div className="flex-1 h-4 bg-clr-dark-pink rounded-r-lg"></div>
      </div>
    </div>
  );
}
