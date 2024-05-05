import { Task } from "../../UI/Task.jsx";

export function StatisticsCards() {
    return (
        <div className="flex gap-4 md:flex-col">
          <section className="w-1/4 grid content-center bg-clr-white p-10 text-center justify-center rounded-lg md:w-full">
            <Task number={167} description="Total Users" />
          </section>
          <section className="w-1/4 grid content-center bg-clr-white p-10 text-center justify-center rounded-lg md:w-full">
            <Task number={149} description="Are not athletes" />
          </section>
          <section className="w-1/4 grid content-center bg-clr-white p-10 text-center justify-center rounded-lg md:w-full">
            <Task number={12} description="Have accommodations" />
          </section>
          <section className="w-1/4 grid content-center bg-clr-white p-10 text-center justify-center rounded-lg md:w-full">
            <Task number={121} description="Have a scholarship" />
          </section>
        </div>
      );
}