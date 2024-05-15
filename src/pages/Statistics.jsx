import Sidebar from "../components/UI/Sidebar.jsx";
import { StatisticsCards } from "../components/activity/Statistics/SectionContainersStatistics.jsx";
import { Graphs } from "../components/activity/Statistics/SectionGraphs.jsx";

export function Statistics() {
  return (
    <>
      <main className="main-content min-h-screen flex gap-5 md:flex-col p-4 w-full">
        <section className="flex flex-col gap-4 w-full">
          <h1 className="dark:text-white">Statistics</h1>
          <StatisticsCards/>
          <Graphs />
        </section>
      </main>
    </>
  );
}
