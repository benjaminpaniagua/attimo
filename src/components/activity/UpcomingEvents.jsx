import "../../index.css";
import { Link } from "react-router-dom";
import { EventSummary } from "../UI/EventSummary";
import { Smile } from "lucide-react";
import { EmptyState } from "../UI/EmptyState.jsx";

export function UpcomingEvents({ items }) {
  return (
    <div className="mt-2 px-6 grid">
      <section className="flex items-center justify-between">
        <h2 className="my-4 dark:text-white">Upcoming events</h2>
        <Link to="/attimo/events"><p className="duration-300 cursor-pointer hover:text-clr-blue dark:text-clr-light-gray dark:hover:text-white">View all</p></Link>
      </section>
      
      {items.length === 0 ? (
        <EmptyState 
          icon={Smile} 
          title="No events" 
          message="You have not events yet!" 
        />
      ) : (
        <div className="grid gap-2 w-full">
          {items.slice(0, 4).map((item) => (
            <EventSummary
              key={item.id}
              title={item.title}
              date={item.date}
              hour={item.hour}
              image={item.image}
              percent={item.percent}
            />
          ))}
        </div>
      )}
    </div>
  );
}
