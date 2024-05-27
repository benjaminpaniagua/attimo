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
      { id: 0, value: 2, color: tailwindColors.theme.extend.colors['clr-dark-green'], label: 'Web Design'},
      { id: 1, value: 3, color: tailwindColors.theme.extend.colors['clr-blue'], label: 'Humanities'},
      { id: 2, value: 1, color: tailwindColors.theme.extend.colors['clr-dark-pink'], label: 'Seminar'},
      { id: 3, value: 9, color: tailwindColors.theme.extend.colors['clr-light-gray'], label: 'Other' },
    ];
  
    return (
        <div className="grid bg-white dark:bg-clr-dark-third rounded-lg p-6 lg:p-4">
          <div className="flex justify-between items-center pb-0">
            <h2 className="fs-med dark:text-white">Events Report</h2>
            <FilterSelect items={select}/>
          </div>
          <DonutChar data={data} /> {/* Send data as property */}
        </div>
    );
  }