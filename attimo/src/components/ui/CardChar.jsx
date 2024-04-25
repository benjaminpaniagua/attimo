import { SelectChar } from "../UI/EventsReport/BtnSelect.jsx";
export function CardChar() {
  return (
    <div className="bg-clr-white rounded-lg p-10 mt-10">
      <div className="flex justify-between items-center gap-12">
        <h2 className="fs-med">Events Report</h2>
        <SelectChar />
      </div>
    </div>
  );
  
}
