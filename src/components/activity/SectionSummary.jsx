import { SummaryWeek } from "../UI/SummaryWeek.jsx";
export function Summary() {
  return (
      <div className="bg-white dark:bg-clr-dark-third rounded-lg flex flex-col justify-center items-center gap-4 p-4 md:py-8">
        <h3 className="py-4 dark:text-white">You have a <span className="text-clr-dark-pink">full</span> week of events</h3>
        <SummaryWeek />
      </div>
  );
}
