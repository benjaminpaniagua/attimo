import "../../index.css";
import "../UI/CardCourses.jsx";
import { LibraryBig } from "lucide-react";
import { EmptyState } from "../UI/EmptyState.jsx";
import { CardCourses } from "../UI/CardCourses.jsx";

export function MyCourses({ items, name }) {
  return (
    <>
      <h1 className="dark:text-white dark:duration-300">My Courses</h1>
      {items.length === 0 ? (
        <EmptyState 
          icon={LibraryBig} 
          title="No courses to display!" 
          message="Time to take a breather and plan your next adventure!" 
        />
      ) : (
        <>
          <p className="mt-2 mb-5 dark:text-clr-light-gray">
            Have a nice day {name}, are you ready for your next event?
          </p>
          <div className="grid grid-cols-auto-300 tablet:grid-cols-auto-250 gap-4 w-full max-h-[47rem] overflow-y-scroll no-scrollbar">
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
      )}
    </>
  );
}
