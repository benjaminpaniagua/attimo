import "../../index.css";
import { Link } from "react-router-dom";
import { EventSummary } from "../UI/EventSummary";
import { Smile } from "lucide-react";
import { EmptyState } from "../UI/EmptyState.jsx";
import PropTypes from "prop-types";

export function UpcomingEvents({ activities }) {
  const activeActivities = activities.filter(activity => activity.status === "Active").slice(0, 4);

  return (
    <div className="mt-2 px-6 grid">
      <section className="flex items-center justify-between">
        <h2 className="my-4 dark:text-white">Upcoming events</h2>
        <Link to="/attimo/events">
          <p className="duration-300 cursor-pointer hover:text-clr-blue dark:text-clr-light-gray dark:hover:text-white">
            View all
          </p>
        </Link>
      </section>

      {activeActivities.length === 0 ? (
        <EmptyState icon={Smile} title="No activities" message="You have not activities yet!" />
      ) : (
        <div className="grid gap-2 w-full">
          {activeActivities.map(activity => (
            <EventSummary
              key={activity.id}
              title={activity.name}
              date={activity.date}
              hour={activity.time}
              image={activity.image}
              percent={activity.percent}
            />
          ))}
        </div>
      )}
    </div>
  );
}

UpcomingEvents.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      image: PropTypes.string,
      percent: PropTypes.number,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};
