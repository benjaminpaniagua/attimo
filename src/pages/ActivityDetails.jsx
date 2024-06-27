import { UpcomingEvents } from "../components/activity/UpcomingEvents.jsx";
import Calendar from "../components/UI/Calendar.jsx";
import { useFetchActivity } from "../components/hooks/useFetchActivity.js";
import { Loading } from "../components/UI/Loading.jsx";
import { useLocation } from "react-router-dom";
import { InfoActivity } from "../components/UI/InfoActivity.jsx";
import { useFetchActivities } from "../components/hooks/useFetchActivities.js";

export function ActivityDetails() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { data: activities } = useFetchActivities(user.id);

    const location = useLocation();
    const activityId = location.state;
    const { data, isLoading } = useFetchActivity(activityId);

    const showActivityDetails = activity => {
        return (
        <>
            <div className="grid items-center">
            <InfoActivity
                title={activity[0].name}
                image={activity[0].image}
                percent={activity[0].percent}
                date={activity[0].date}
                time={activity[0].time}
                category={activity[0].category}
                label={activity[0].label}
                status={activity[0].status}
                course={activity[0].course}
                group={activity[0].group}
                description={activity[0].description}
            />
            </div>
        </>
        );
    };

    return (
        <>
        <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
            <section className="w-[70%] px-2 my-4 lg:w-full lg:px-6 tablet:w-[60%]">
                {isLoading ? <Loading /> : showActivityDetails(data)}
            </section>
            <section className="bg-clr-light-secondary-bg dark:bg-clr-light-gray/10 m-auto h-full pt-4 w-[30%] lg:w-full tablet:w-[40%]">
            <div className="w-fit m-auto rounded-lg dark:bg-clr-light-secondary-bg/55">
                <Calendar />
            </div>
            <UpcomingEvents activities={activities} />
            </section>
        </main>
        </>
    );
}

export default ActivityDetails;
