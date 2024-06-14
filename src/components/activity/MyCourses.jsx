import "../../index.css";
import { LibraryBig } from "lucide-react";
import { EmptyState } from "../UI/EmptyState.jsx";
import { CardCourses } from "../UI/CardCourses.jsx";
import { Loading } from "../UI/Loading.jsx";
import { useFetchCourses } from "../hooks/useFetchCourses";

export function MyCourses({ name }) {
  const { data, isLoading } = useFetchCourses();

  const truncate = (text, maxLength) => {
    //check if the text length is less than or equal to the maximum allowed limit
    if (text.length <= maxLength) return text;
    // If the text exceeds the maximum length, the text is cut off and "..." is added
    return text.substring(0, maxLength) + "...";
  };

  const createCards = (data) => {
    return data.map((item) => (
      <CardCourses
        key={item.id}
        title={item.name}
        description={truncate(item.description, 100)}
        date={item.date}
        hour={item.hour}
        image={item.image}
        progress={item.progress}
      />
    ));
  };

  return (
    <>
      <h1 className="dark:text-white dark:duration-300">My Courses</h1>
      {isLoading ? ( <Loading /> ) : data.length === 0 ? (
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
          <div className="grid grid-cols-auto-300 tablet:grid-cols-auto-250 gap-4 w-full max-h-[50rem] overflow-y-scroll no-scrollbar">
            {createCards(data)}
          </div>
        </>
      )}
    </>
  );
}
