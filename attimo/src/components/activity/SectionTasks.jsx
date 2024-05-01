import { Task } from "../UI/Task.jsx";
export function Tasks() {
    return (
        <div className="flex w-full gap-4 md:flex-col">
          <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
            <Task number={3} description="Completed Tasks" />
          </section>
          <section className="w-1/2 grid items-center content-center bg-white dark:bg-clr-dark-third p-4 text-center rounded-lg md:py-8 md:w-full">
            <Task number={12} description="Remaining Tasks" />
          </section>
        </div>
      );
}