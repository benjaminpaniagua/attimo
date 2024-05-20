import React from "react";
import {FilterSelect} from "../UI/FilterSelect.jsx";
import DonutChar from "../UI/DonutChar.jsx";
import tailwindColors from '../../../tailwind.config.js';

export const select = [
  {
    id: 1,
    title: "This Week",
  },
  {
    id: 2,
    title: "Today",
  },
];

export function Reports() {
    const data = [
      { id: 0, value: 2, color: tailwindColors.theme.extend.colors['clr-dark-green']},
      { id: 1, value: 3, color: tailwindColors.theme.extend.colors['clr-blue'] },
      { id: 2, value: 1, color: tailwindColors.theme.extend.colors['clr-dark-pink'] },
      { id: 3, value: 9, color: tailwindColors.theme.extend.colors['clr-light-gray'] },
    ];
  
    return (
      <>
        <div className="grid bg-white dark:bg-clr-dark-third rounded-lg p-6 lg:p-4">
          <div className="flex justify-between items-center pb-0">
            <h2 className="fs-med dark:text-white">Events Report</h2>
            <FilterSelect items={select}/>
          </div>
          <DonutChar data={data} /> {/* Send data as property */}
            <div className="flex justify-center">
              <div className="w-5 h-5 bg-teal-700 mx-2 "></div>
                <p className="dark:text-clr-white text-base">Web Design</p>
                <div className="w-5 h-5 bg-purple-900 mx-2"></div>
                <p className="dark:text-clr-white text-base">Humanities</p>
                <div className="w-5 h-5 bg-pink-700 mx-2"></div>
                <p className="dark:text-clr-white text-base">Seminar</p>
                <div className="w-5 h-5 bg-gray-400 mx-2"></div>
                <p className="dark:text-clr-white text-base">Not sent</p>
            </div>
        </div>
      </>
    );
  }