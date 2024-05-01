import DonutChar from "../../UI/DonutChar.jsx";
import BarChart from "../../UI/StatisticsUI/BarChar.jsx";
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
    { id: 0, label: "-4h", value: 49 },
    { id: 1, label: "4-6h", value: 65 },
    { id: 2, label: "7-8h", value: 42 },
    { id: 3, label: "+9h", value: 11 },
  ];

  return (
    <>
      <section className="grid grid-cols-3 gap-5">
        <div className="bg-clr-white rounded-lg">
          <div className="flex justify-between items-center p-10 pb-0">
            <h2 className="fs-med">To Qualify</h2>
          </div>
          <div>
            <DonutChar data={toQualify} />{" "}
            {/* Pasar los datos como propiedad */}
          </div>
        </div>

        <div className="bg-clr-white rounded-lg">
          <div className="flex justify-between items-center p-10 pb-0">
            <h2 className="fs-med">Average hours of sleep</h2>
          </div>
          <BarChart data={hoursSleep}/>
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
