import { SummaryWeek } from "../UI/SummaryWeek.jsx";
export function Summary() {
  return (
    <>
      <div className="bg-clr-white rounded-lg flex flex-col justify-center items-center gap-10 px-4 py-8">
        <p className="pt-4">You have a <span className="text-clr-dark-pink">full</span> week of events</p>
        <SummaryWeek />
      </div>
    </>
  );
}
