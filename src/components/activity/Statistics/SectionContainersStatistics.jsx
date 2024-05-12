import react from "react";
import { Task } from "../../UI/Task.jsx";

export function StatisticsCards({ items }) {
  return (
    <div className="flex gap-4 md:flex-col">
      {items.map(item => (
        <section key={item.id} className="w-1/4 grid content-center bg-clr-white dark:bg-clr-dark-third py-[7.5rem] text-center justify-center rounded-lg md:w-full">
          <Task
            number={item.number}
            description={item.description}
          />
        </section>
      ))}
    </div>
  );
}