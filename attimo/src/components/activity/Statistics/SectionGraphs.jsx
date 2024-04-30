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
      value: 80,
      label: "Boys",
      color: tailwindColors.theme.extend.colors["clr-blue"],
    },
    {
      id: 1,
      value: 79,
      label: "Girls",
      color: tailwindColors.theme.extend.colors["clr-dark-pink"],
    },
    {
      id: 2,
      value: 8,
      label: "Undefined",
      color: tailwindColors.theme.extend.colors["clr-light-gray"],
    },
  ];

  const hoursSleep = [
    {
      id: 0,
      value: 49,
      label: "-4h",
      color: tailwindColors.theme.extend.colors["clr-blue"],
    },
    {
      id: 1,
      value: 65,
      label: "4-6h",
      color: tailwindColors.theme.extend.colors["clr-dark-pink"],
    },
    {
      id: 2,
      value: 42,
      label: "7-8h",
      color: tailwindColors.theme.extend.colors["clr-light-gray"],
    },
    {
      id: 3,
      value: 11,
      label: "+9h",
      color: tailwindColors.theme.extend.colors["clr-light-gray"],
    },
  ];

  return (
    <>
    <section className="grid grid-cols-3 gap-5">
      <div className="bg-clr-white rounded-lg">
        <div className="flex justify-between items-center p-10 pb-0">
          <h2 className="fs-med">To Qualify</h2>
        </div>
        <div>
          <DonutChar data={toQualify} /> {/* Pasar los datos como propiedad */}
        </div>
      </div>

      <div className="bg-clr-white rounded-lg">
        <div className="flex justify-between items-center p-10 pb-0">
          <h2 className="fs-med">Average hours of sleep</h2>
        </div>
      </div>


      <div className="bg-clr-white rounded-lg">
        <div className="flex justify-between items-center p-10 pb-0">
          <h2 className="fs-med">Gender</h2>
        </div>
        <DonutChar data={gender} />
      </div>
      </section>
    </>
  );
}
