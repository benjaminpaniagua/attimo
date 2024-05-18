import PropTypes from "prop-types";
import { CardNotifications } from "../UI/CardNotifications";

export function NotificationsContent({ notifications }) {
  return (
    <>
      {notifications.map((notification, index) => (
        <CardNotifications
          key={index}
          mandated={notification.mandated}
          mandatedImg={notification.mandatedImg}
          description={notification.description}
          time={notification.time}
        />
      ))}
      <button className="text-clr-white p-4 bg-clr-blue rounded-lg">
        Clear All
      </button>
    </>
  );
}

NotificationsContent.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      mandated: PropTypes.string.isRequired,
      mandatedImg: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NotificationsContent;
