import DonutChar from "../../UI/DonutChar.jsx";
import tailwindColors from "../../../../tailwind.config.js";

export function Graphs() {
  const toQualify = [
    {
      id: 0,
      value: 12,
      label: "To Qualify",
      color: tailwindColors.theme.extend.colors["clr-blue"],
    },
    {
      id: 1,
      value: 19,
      label: "Qualified",
      color: tailwindColors.theme.extend.colors["clr-light-gray"],
    },
    {
      id: 2,
      value: 4,
      label: "Not sent",
      color: tailwindColors.theme.extend.colors["clr-dark-pink"],
    },
  ];

  const gender = [
    {
      id: 0,
      value: 79,
      label: "Boys",
      color: tailwindColors.theme.extend.colors["clr-blue"],
    },
    {
      id: 1,
      value: 81,
      label: "Girls",
      color: tailwindColors.theme.extend.colors["clr-dark-pink"],
    },
    {
      id: 2,
      value: 4,
      label: "Not sent",
      color: tailwindColors.theme.extend.colors["clr-light-gray"],
    },
  ];

  return (
    <>
      <div className="bg-clr-white rounded-lg mt-10 pb-10">
        <div className="flex justify-between items-center p-10 pb-0">
          <h2 className="fs-med">To Qualify</h2>
        </div>
        <div>
          <DonutChar data={toQualify} /> {/* Pasar los datos como propiedad */}
        </div>
      </div>
    </>
  );
}
