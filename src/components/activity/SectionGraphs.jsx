import DonutChar from "../UI/DonutChar.jsx";
import BarChart from "../UI/BarChar.jsx";
import tailwindColors from "../../../tailwind.config.js";
export function Graphs() {
  const typeScholarship = [
    {
      id: 0,
      value: 12,
      //label: "To Qualify",
      color: tailwindColors.theme.extend.colors["clr-blue"],
    },
    {
      id: 1,
      value: 19,
      //label: "Qualified",
      color: tailwindColors.theme.extend.colors["clr-light-gray"],
    },
    {
      id: 2,
      value: 4,
      //label: "Not sent",
      color: tailwindColors.theme.extend.colors["clr-dark-pink"],
    },
  ];

  const gender = [
    {
      id: 0,
      value: 80,
      //label: "Boys",
      color: tailwindColors.theme.extend.colors["clr-blue"],
    },
    {
      id: 1,
      value: 79,
      //label: "Girls",
      color: tailwindColors.theme.extend.colors["clr-dark-pink"],
    },
    {
      id: 2,
      value: 8,
      //label: "Undefined",
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
      <section className="grid grid-cols-3 md:grid-cols-1 gap-5">
        <div className="bg-clr-white dark:bg-clr-dark-third rounded-lg">
          <div className="flex justify-between items-center p-5 pb-0">
            <h2 className="fs-med dark:text-clr-white">Students with scholarship</h2>
          </div>
          <div>
          <DonutChar data={typeScholarship} />
            <div className="flex justify-center mb-5">
                <div className="w-5 h-5 bg-clr-blue mx-2 mt-1 rounded-full"></div>
                <p className="dark:text-clr-white">Academic</p>
                <div className="w-5 h-5 bg-clr-dark-pink mx-2 mt-1 rounded-full"></div>
                <p className="dark:text-clr-white">Socioeconomic</p>
                <div className="w-5 h-5 bg-clr-light-gray mx-2 mt-1 rounded-full"></div>
                <p className="dark:text-clr-white">Sports</p>
            </div>
          </div>
        </div>
        <div className="bg-clr-white dark:bg-clr-dark-third rounded-lg">
          <div className="flex justify-between items-center p-5 pb-0">
            <h2 className="fs-med dark:text-clr-white">Average hours of sleep</h2>
          </div>
          <BarChart data={hoursSleep} color={tailwindColors.theme.extend.colors["clr-mint-green"]}/>
        </div>
        <div className="bg-clr-white dark:bg-clr-dark-third rounded-lg">
          <div className="flex justify-between items-center p-5 pb-0">
            <h2 className="fs-med dark:text-clr-white">Users Gender Breakdown</h2>
          </div>
          <DonutChar data={gender} />
          <div className="flex justify-center mb-5 ">
                <div className="w-5 h-5 bg-clr-blue mx-2 mt-1 rounded-full"></div>
                <p className="dark:text-clr-white">Boys</p>
                <div className="w-5 h-5 bg-clr-dark-pink mx-2 mt-1 rounded-full"></div>
                <p className="dark:text-clr-white">Girls</p>
                <div className="w-5 h-5 bg-clr-light-gray mx-2 mt-1 rounded-full"></div>
                <p className="dark:text-clr-white">Undefined</p>
            </div>
        </div>
      </section>
  );
}