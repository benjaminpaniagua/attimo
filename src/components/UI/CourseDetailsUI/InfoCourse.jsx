
import PropTypes from "prop-types";

export function InfoCourse({
  title,
  image,
  acronyms,
  teacher,
  email,
  date,
  hour,
  description,
}) {
  return (
    <div className="grid gap-2 p-4 pb-0 ">
      <h1>{title}</h1>
      <div className="bg-fit">
        <img className="" src={`${image}`} alt={title} />
      </div>

      <div>
        <h3>Course Acronyms:</h3>
        <p>{acronyms}</p>
      </div>

      <div>
        <h3>Teacher:</h3>
        <p>{teacher}</p>
      </div>

      <div>
        <h3>E-mail:</h3>
        <p>{email}</p>
      </div>

      <div>
        <h3>Office and consultation hours for students:</h3>
        <p>
          {date}, {hour}
        </p>
      </div>

      <div>
        <h3>Course Description:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Set required props
InfoCourse.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    acronyms: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
