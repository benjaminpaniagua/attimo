import { UpcomingEvents } from "../components/activity/UpcomingEvents.jsx";
import Calendar from "../components/UI/Calendar.jsx";
import { useFetchCourse } from "../components/hooks/useFetchCourse.js";
import { Loading } from "../components/UI/Loading.jsx";
import { useLocation } from "react-router-dom";
import { InfoCourse } from "../components/UI/InfoCourse.jsx";
import { useFetchGroupActivities } from "../components/hooks/useFetchGroupActivities.js";

export function CourseDetails() {
  const location = useLocation();
  const courseId = location.state;
  const { data, isLoading } = useFetchCourse(location.state);

  const { data: groupActivities, isLoading: groupLoading } = useFetchGroupActivities({ id: courseId });

  const showCourseDetails = course => {
    return (
      <>
        <div className="flex justify-between items-center md:flex-wrap ">
          <InfoCourse
            title={course[0].name + " - " + (course[0].number <= 9 ? "0" : "") + course[0].number}
            image={course[0].image}
            acronyms={course[0].acronym}
            teacher={course[0].teacher_name + " " + course[0].teacher_lastname1 + " " + course[0].teacher_lastname2}
            email={course[0].teacher_email}
            consultations={course[0].consultations}
            description={course[0].description}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
        <section className="w-[70%] px-2 my-4 lg:w-full lg:px-6 tablet:w-[60%]">
          {isLoading ? <Loading /> : showCourseDetails(data)}
        </section>
        <section className="bg-clr-light-secondary-bg dark:bg-clr-light-gray/10 m-auto h-full pt-4 w-[30%] lg:w-full tablet:w-[40%]">
          <div className="w-fit m-auto rounded-lg dark:bg-clr-light-secondary-bg/55">
            <Calendar />
          </div>
          {groupLoading ? (
            <Loading />
          ) : (
            <UpcomingEvents activities={groupActivities} />
          )}
        </section>
      </main>
    </>
  );
}

CourseDetails.defaultProps = {};

export default CourseDetails;
