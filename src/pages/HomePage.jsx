import { MyCourses } from "../components/activity/MyCourses.jsx";
import { UpcomingEvents } from "../components/activity/UpcomingEvents.jsx";
import Calendar from "../components/UI/Calendar.jsx";
import { Loading } from "../components/UI/Loading.jsx";
import { useFetchActivities } from "../components/hooks/useFetchActivities.js";

export function HomePage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { data: activities, isLoading } = useFetchActivities(user.id);

  return (
    <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
      <section className="w-[70%] px-2 my-2 lg:w-full lg:px-4 tablet:w-[60%]">
        <MyCourses className="w-full" />
      </section>
      <section className="bg-clr-light-secondary-bg dark:bg-clr-light-gray/10 m-auto h-full pt-4 w-[30%] lg:w-full tablet:w-[40%]">
        <div className="w-fit m-auto rounded-lg dark:bg-clr-light-secondary-bg/55">
          <Calendar />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          activities ? (
            <UpcomingEvents activities={activities} />
          ) : (
            <span>No activities availables</span>
          )
        )}
      </section>
    </main>
  );
}

export default HomePage;