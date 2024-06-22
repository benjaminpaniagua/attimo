import { MyEvents } from "../components/activity/MyEvents.jsx";
import { Reports } from "../components/activity/SectionEventsReport.jsx";
import { Tasks } from "../components/activity/SectionTasks.jsx";
import { SummaryWeek } from "../components/UI/SummaryWeek.jsx";

export function Events() {
  return (
      <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
        <section className="w-[70%] px-2 my-2 lg:w-full lg:px-4">
          <MyEvents />
        </section>
        <section className="grid py-4 pr-4 w-[30%] lg:w-full lg:px-4 gap-4">
          <Reports />
          <Tasks />
          <SummaryWeek />
        </section>
      </main>
  );
}

export default Events;
