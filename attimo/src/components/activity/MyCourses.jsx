import "../../index.css";
import "../UI/CardCourses.jsx";
import { CardCourses } from "../UI/CardCourses.jsx";

export function MyCourses({ items, name }) {
  return (
    <>
      <h1>My Courses</h1>
      <p className="mt-2 mb-5">Have a nice day {name}, are you ready for your next event?</p> 
      <div className="grid grid-cols-auto-300 gap-4 w-full max-h-[50rem] overflow-y-scroll">
        {items.map((item) => (
          <CardCourses
            key={item.id}
            title={item.title}
            description={item.description}
            date={item.date}
            hour={item.hour}
            image={item.image}
            progress={item.progress}
          />
        ))}
      </div>
    </>
  );
}
