import { CardChar } from "../../components/UI/CardChar.jsx";
import { CardTask } from "../UI/CardTask.jsx";
import { CardSummary } from "../UI/CardSummary.jsx";

export function CardReports() {
  return (
    <>
      <section className="grid gap-5">
      <CardChar />
      <CardTask />
      <CardSummary />
      </section>
    </>
  );
}
