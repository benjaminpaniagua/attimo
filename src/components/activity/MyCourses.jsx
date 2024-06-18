import "../../index.css";
import { LibraryBig } from "lucide-react";
import { EmptyState } from "../UI/EmptyState.jsx";
import { CardCourses } from "../UI/CardCourses.jsx";
import { Loading } from "../UI/Loading.jsx";
import { useFetchCourses } from "../hooks/useFetchCourses";

export function MyCourses() {
  // Obtain the user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  const { data, isLoading, error } = useFetchCourses(user.id);

  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const createCards = (data) => {
    return data.map((item) => (
      <CardCourses
        key={item.id}
        id={item.id}
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
      {isLoading ? (
        <Loading />
      ) : error ? (
        <span className="text-clr-blue dark:text-clr-white">Error loading events</span>
      ) : data.length === 0 ? (
        <EmptyState
          icon={LibraryBig}
          title="No courses to display!"
          message="Time to take a breather and plan your next adventure!"
        />
      ) : (
        <>
          <p className="mt-2 mb-5 dark:text-clr-light-gray">
            Have a nice day {user.name}, are you ready for your next event?
          </p>
          <div className="grid grid-cols-auto-300 tablet:grid-cols-auto-250 gap-4 w-full max-h-[50rem] overflow-y-scroll no-scrollbar">
            {createCards(data)}
          </div>
        </>
      )}
    </>
  );
}