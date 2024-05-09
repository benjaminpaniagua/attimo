import Sidebar from "../components/UI/Sidebar.jsx";
import { StatisticsCards } from "../components/activity/Statistics/SectionContainersStatistics.jsx";
import { Graphs } from "../components/activity/Statistics/SectionGraphs.jsx";
import { List } from "../components/activity/Statistics/SectionListStudents.jsx";
import { Activities } from "../components/activity/Statistics/SectionActivities.jsx";

export function Statistics() {
  return (
    <>
      <main className="flex gap-5 md:flex-col p-4 w-full">
        <section className="flex flex-col gap-5 w-2/3 md:w-full">
          <StatisticsCards />
          <Graphs />
          <List />
        </section>
        <section className="flex gap-5 w-1/3 md:w-full">
          <Activities />
        </section>
      </main>
    </>
  );
}
