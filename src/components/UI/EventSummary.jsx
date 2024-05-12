import "../../index.css";
import PropTypes from "prop-types";

export function EventSummary({ title, date, hour, image, percent }) {
  return (
    <>
      <div className="rounded-lg bg-white dark:bg-clr-dark-bg p-2 flex gap-4 items-center">
        <div className="size-20 w-24 overflow-hidden rounded-lg">
          <img className="object-cover w-full h-full" src={`${image}`} alt="Event photo" />
        </div>
        <section className="w-full">
          <section className="flex justify-between">
            <h3 className="dark:text-white">{title}</h3>
            {percent ? <h3 className="dark:text-white">{percent}%</h3> : null}
          </section>
          <p className="dark:text-clr-light-gray">{date}, {hour}</p>
        </section>
      </div>
    </>
  );
}

// Set required props
EventSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

EventSummary.defaultProps = {
  title: "Title",
  description: "Description",
  date: "10 May",
  hour: "11:10",
  image: "https://images.unsplash.com/photo-1622834085294-0b1a1c7f2f0e",
};
