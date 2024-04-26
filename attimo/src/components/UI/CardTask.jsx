import { Task } from "../UI/EventsReport/Task.jsx";
import "../../index.css";
export function CardTask() {
    return (
        <div className="flex gap-5">
          <div className="w-full bg-clr-white rounded-lg p-12 flex flex-col items-center">
            <Task number={3} description="Completed Tasks" />
          </div>
          <div className="w-full bg-clr-white rounded-lg p-12 flex flex-col items-center mr-10">
            <Task number={12} description="Remaining Tasks" />
          </div>
        </div>
      );
}
