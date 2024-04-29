import React from "react";
import {FilterSelect} from "../UI/FilterSelect.jsx";
import DonutChar from "../UI/DonutChar.jsx";
import tailwindColors from '../../../tailwind.config.js'; // Asegúrate de importar tailwindColors aquí si es necesario



export function Reports() {
    const data = [
      { id: 0, value: 2, label: 'Web Design', color: tailwindColors.theme.extend.colors['clr-dark-green'] },
      { id: 1, value: 3, label: 'Humanities', color: tailwindColors.theme.extend.colors['clr-blue'] },
      { id: 2, value: 1, label: 'Seminar', color: tailwindColors.theme.extend.colors['clr-dark-pink'] },
      { id: 3, value: 9, label: 'Others', color: tailwindColors.theme.extend.colors['clr-light-gray'] },
    ];
  
    return (
      <>
        <div className="bg-clr-white rounded-lg mt-10 pb-10">
          <div className="flex justify-between items-center p-10 pb-0">
            <h2 className="fs-med">Events Report</h2>
            <FilterSelect />
          </div>
          <DonutChar data={data} /> {/* Pasar los datos como propiedad */}
        </div>
      </>
    );
  }