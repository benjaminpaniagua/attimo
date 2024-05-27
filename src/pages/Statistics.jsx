import { StatisticsCards } from "../components/activity/SectionContainersStatistics.jsx";
import { Graphs } from "../components/activity/SectionGraphs.jsx";

export function Statistics() {
  return (
      <main className="main-content min-h-screen flex gap-5 md:flex-col px-2 lg:px-4 py-2 w-full">
        <section className="flex flex-col gap-4 w-full">
          <h1 className="dark:text-white">Statistics</h1>
          <StatisticsCards/>
          <Graphs />
        </section>
      </main>
  );
}
