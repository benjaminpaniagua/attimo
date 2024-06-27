import PropTypes from "prop-types";
import defaultImage from "../../assets/imgs/image_card.png";

export function InfoActivity({ title, image, percent, course, group, label, category, date, time, status, description }) {
  // Go back to the previous page
    const handleBackClick = () => {
        window.history.back(); 
    };

    return (
        <section className="grid gap-4">
        <h1 className="dark:text-clr-white">
            <span className="cursor-pointer" onClick={handleBackClick}>&lt; </span>
            {title}.
        </h1>
        <div className="bg-fit rounded-md overflow-hidden h-[22rem]">
            <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
        <div className="grid gap-4">
            <section>
                <h3 className="dark:text-clr-white">Course</h3>
                <p className="dark:text-clr-light-gray">{course} - {(group <= 9 ? "0" : "") + group}.</p>
            </section>
            <section>
                <h3 className="dark:text-clr-white">Label</h3>
                <p className="dark:text-clr-light-gray">{label}{label === "Homework" ? `: ${percent}%` : "."}</p>
            </section>
            <section>
                <h3 className="dark:text-clr-white">Category</h3>
                <p className="dark:text-clr-light-gray">{category}.</p>
            </section>
            <section>
                <h3 className="dark:text-clr-white">Datetime</h3>
                <p className="dark:text-clr-light-gray">{date}, {time}.</p>
            </section>
            <section>
                <h3 className="dark:text-clr-white">Status</h3>
                <p className="dark:text-clr-light-gray">{status}.</p>
            </section>
            <section>
                <h3 className="dark:text-clr-white">Description</h3>
                <p className="dark:text-clr-light-gray">{description}.</p>
            </section>
        </div>
        </section>
    );
}

InfoActivity.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    group: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    percent: PropTypes.number,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

InfoActivity.defaultProps = {
    title: "Activity's Title",
    image: defaultImage,
    course: "Course",
    percent: 0,
    group: 0,
    label: "Activity",
    category: "University",
    date: "10 May",
    time: "8:00",
    status: "Active",
    description: "Activity's description"
};