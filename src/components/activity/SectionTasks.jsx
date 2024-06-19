// Tasks.jsx
import { Task } from "../UI/Task.jsx";
import useActivities from "../hooks/useActivities";

export function Tasks() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null; // Asegurarse de que user existe y obtener userId

  const { remainingTasks } = useActivities(userId);

  return (
    <div className="flex w-full gap-4 md:flex-col">
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task number={3} description="Completed Tasks" />
      </section>
      <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
        <Task number={remainingTasks} description="Remaining Activities" />
      </section>
    </div>
  );
}
