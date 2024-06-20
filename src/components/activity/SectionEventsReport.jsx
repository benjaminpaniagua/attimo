import { useState } from "react";
import { FilterSelect } from "../UI/FilterSelect.jsx";
import DonutChar from "../UI/DonutChar.jsx";
import { useEventsReport } from "../hooks/useEventsReport.js";

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
  }
];

export function Reports() {
  const [selectedOption, setSelectedOption] = useState(0); // Estado para almacenar la opción seleccionada

  // Llamar al hook useEventsReport con el usuario y la opción seleccionada
  const { data, isLoading } = useEventsReport(selectedOption);

  // Manejador de cambio de filtro
  const handleFilterChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option); // Actualizar el estado con la opción seleccionada
  };

  return (
    <div className="grid bg-white dark:bg-clr-dark-third rounded-lg p-6 lg:p-4">
      <div className="flex justify-between items-center pb-0">
        <h2 className="fs-med dark:text-white">Events Report</h2>
        <FilterSelect items={select} onChange={handleFilterChange} /> {/* Agregar onChange para capturar cambios */}
      </div>
      <DonutChar data={data} responsive={true}/>
    </div>
  );
}
