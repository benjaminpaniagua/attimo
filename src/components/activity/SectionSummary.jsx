import { SummaryWeek } from "../UI/SummaryWeek.jsx";

export function Summary() {
  const userId = JSON.parse(localStorage.getItem("user"));

  return (
    <SummaryWeek userId={userId.id} />
  );
}