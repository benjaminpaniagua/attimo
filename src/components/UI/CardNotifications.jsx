import PropTypes from "prop-types";
import defaultImage from "../../assets/imgs/image_card.png";
export function CardNotifications({
  mandated,
  mandatedImg,
  description,
  time,
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <img
          className="w-14 rounded-lg"
          src={`${mandatedImg}`}
          alt={description}
        />
        <section className="grid">
          <h3 className="dark:text-clr-light-gray font-light">
            <span className="font-medium dark:text-clr-white">{mandated} </span>
            {description}
          </h3>
          <p className="dark:text-clr-light-gray">{time}</p>
        </section>
        </div>
      <hr className="border-t-1 border-clr-light-gray my-2" />
    </>
  );
}

CardNotifications.propTypes = {
  mandated: PropTypes.string.isRequired,
  mandatedImg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

CardNotifications.defaultProps = {
  mandated: "John Doe",
  mandatedImg: defaultImage,
  description: "created an event",
  time: "12 minutes ago"
}
