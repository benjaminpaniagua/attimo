import { SummaryWeek } from "../UI/SummaryWeek.jsx";
export function Summary() {
  return (
    <>
      <div className="bg-clr-white rounded-lg flex flex-col justify-center items-center gap-10 p-10">
        <p>You have a <span className="text-clr-dark-pink">full</span> week of events</p>
        <SummaryWeek />
      </div>
    </>
  );
}
