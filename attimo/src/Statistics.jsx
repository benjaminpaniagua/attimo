import Sidebar from "./components/UI/Sidebar.jsx";
import { StatisticsCards } from "./components/activity/Statistics/SectionContainersStatistics.jsx";
import { Graphs } from "./components/activity/Statistics/SectionGraphs.jsx";
import { List } from "./components/activity/Statistics/SectionListStudents.jsx";
import { Activities } from "./components/activity/Statistics/SectionActivities.jsx";
export function Statistics() {
  return (
    <>
      <div className="flex gap-4 bg-clr-light-bg">
        <aside className="w-16">
          <Sidebar
            username="usuario"
            email="email@gmail.com"
            image="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg"
          ></Sidebar>
        </aside>

        <main className="flex gap-5 md:flex-col p-2 w-full">
          <section className="flex flex-col gap-5 w-2/3 md:w-full">
            <StatisticsCards />
            <Graphs />
            <List />
          </section>
          <section className="flex gap-5 w-1/3 md:w-full">
            <Activities />
          </section>
        </main>
      </div>
    </>
  );
}
