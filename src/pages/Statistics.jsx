import Sidebar from "../components/UI/Sidebar.jsx";
import { StatisticsCards } from "../components/activity/Statistics/SectionContainersStatistics.jsx";
import { MiniCards } from "../components/activity/Statistics/SectionMiniCards.jsx";
import { Graphs } from "../components/activity/Statistics/SectionGraphs.jsx";
import { List } from "../components/activity/Statistics/SectionListStudents.jsx";
import { Activities } from "../components/activity/Statistics/SectionActivities.jsx";

const data = [
  { id: 0, number: 167, description: "Total Users" },
  { id: 1, number: 149, description: "Are not athletes" },
  { id: 2, number: 12, description: "Have accommodations" },
  { id: 3, number: 121, description: "Have a scholarship" }
];

const info = [
  { id: 0, number: 1, description: "Total Users" },
  { id: 1, number: 1, description: "Are not athletes" },
];
export function Statistics() {
  return (
    <>
    
      <main className="main-content min-h-screen  flex gap-5 md:flex-col p-4 w-full">
        <section className="flex flex-col gap-5 w-2/3 md:w-full">
          <h1 className="dark:text-white">Statistics</h1>
          <StatisticsCards items= {data}/>
          <Graphs />
          <MiniCards items= {info} />
          {/* <List /> */}
        </section>
        <section className="flex gap-5 w-1/3 md:w-full">
        <List />
          {/* <Activities /> */}
        </section>
      </main>
    </>
  );
}
