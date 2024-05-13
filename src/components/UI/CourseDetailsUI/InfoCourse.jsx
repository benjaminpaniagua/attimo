
import PropTypes from "prop-types";

export function InfoCourse({
  id,
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    acronyms: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

InfoCourse.defaultProps = {
  id: 0,
  title: "Desarrollo de Aplicaciones Interactivas II",
  image:
    "https://mv1.mediacionvirtual.ucr.ac.cr/pluginfile.php/2833830/course/section/615599/TM5100%201.png",
  acronyms: "TM-5100",
  teacher: "Jorge Miranda Loría",
  email: "jorge.mirandaloria@ucr.ac.cr",
  date: "10 May",
  hour: "10:00",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque vel orci vitae ullamcorper. Vivamus convallis dolor id ultricies malesuada. Integer ut purus cursus, pharetra ipsum lacinia, laoreet quam. Pellentesque placerat et diam eu rhoncus. Phasellus lacinia, risus eu accumsan luctus, orci lorem laoreet nisi, nec dictum nibh nunc rutrum augue. Phasellus quis nisl massa. Sed placerat molestie interdum. Morbi scelerisque mauris eu commodo vulputate. Donec vel lacinia quam, sit amet elementum erat. Praesent convallis ut ipsum sed gravida. Nam lacinia mi at mauris venenatis ullamcorper.",
}


