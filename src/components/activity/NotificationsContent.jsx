import PropTypes from "prop-types";
import { CardNotifications } from "../UI/CardNotifications";

export function NotificationsContent({ notifications, clearNotifications }) {
  const handleClearNotifications = () => {
    clearNotifications(); // Llama a la función para limpiar las notificaciones
  };

  return (
    <>
      {notifications.length === 0 ? (
        <h2>There are no notifications</h2>
      ) : (
        notifications.map((notification, index) => (
          <CardNotifications
            key={index}
            mandated={notification.mandated}
            mandatedImg={notification.mandatedImg}
            description={notification.description}
            time={notification.time}
          />
        ))
      )}
      {notifications.length > 0 && (
        <button
          className="text-clr-white p-4 bg-clr-blue rounded-lg hover:bg-clr-dark-blue"
          onClick={handleClearNotifications}
        >
          Clear All
        </button>
      )}
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
  clearNotifications: PropTypes.func.isRequired,
};

export default NotificationsContent;
