import PropTypes from "prop-types";
import defaultImage from "../../assets/imgs/image_card.png";
export function InfoCourse({title, image, acronyms, teacher, email, date, hour, description}) {
  return (
    <section className="grid gap-4">
      <h1 className="dark:text-clr-white">{title}</h1>
      <div className="bg-fit rounded-md overflow-hidden h-72">
          <img className="w-full h-full object-cover" src={`${image}`} alt={title} />
        </div>

      <div className="grid gap-4">
        <section>
          <h3 className="dark:text-clr-white">Course Acronyms</h3>
          <p className="dark:text-clr-light-gray">{acronyms}</p>
        </section>

        <section>
          <h3 className="dark:text-clr-white">Teacher</h3>
          <p className="dark:text-clr-light-gray">{teacher}</p>
        </section>

        <section>
          <h3 className="dark:text-clr-white">Teachers email</h3>
          <p className="dark:text-clr-light-gray">{email}</p>
        </section>

        <section>
          <h3 className="dark:text-clr-white">Office and consultation hours for students</h3>
          <p className="dark:text-clr-light-gray">
            {date}, {hour}
          </p>
        </section>

        <section>
          <h3 className="dark:text-clr-white">Course Description</h3>
          <p className="dark:text-clr-light-gray">{description}</p>
        </section>
      </div>
    </section>
  );
}

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

InfoCourse.defaultProps = {
  title: "Desarrollo de Aplicaciones Interactivas II",
  image: defaultImage,
  acronyms: "TM-5100",
  teacher: "Jorge Miranda Loría",
  email: "jorge.mirandaloria@ucr.ac.cr",
  date: "10 May",
  hour: "10:00",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque vel orci vitae ullamcorper. Vivamus convallis dolor id ultricies malesuada. Integer ut purus cursus, pharetra ipsum lacinia, laoreet quam. Pellentesque placerat et diam eu rhoncus. Phasellus lacinia, risus eu accumsan luctus, orci lorem laoreet nisi, nec dictum nibh nunc rutrum augue. Phasellus quis nisl massa. Sed placerat molestie interdum. Morbi scelerisque mauris eu commodo vulputate. Donec vel lacinia quam, sit amet elementum erat. Praesent convallis ut ipsum sed gravida. Nam lacinia mi at mauris venenatis ullamcorper.",
}