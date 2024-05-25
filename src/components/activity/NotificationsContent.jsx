import PropTypes from "prop-types";
import { CardNotifications } from "../UI/CardNotifications";
import { ModalButtons } from "../UI/ModalButtons";
import { Bell } from "lucide-react";

export function NotificationsContent({ notifications, clearNotifications }) {
  const handleClearNotifications = () => {
    clearNotifications(); 
  };

  return (
    <>
      {notifications.length === 0 ? (
        <div className="grid m-auto">
          <Bell size={34} className="m-auto mb-4 text-clr-light-gray"/>
          <p className="dark:text-clr-light-gray">You have no notifications</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 h-[23rem] max-w-[30rem] md:max-w-[30rem] overflow-y-scroll no-scrollbar">
          {notifications.map((notification, index) => (
            <CardNotifications
              key={index}
              mandated={notification.mandated}
              mandatedImg={notification.mandatedImg}
              description={notification.description}
              time={notification.time}
            />
          ))}
        </div>
      )}
      {notifications.length > 0 && (
        <ModalButtons text="Clear All" onClick={handleClearNotifications}/>
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

NotificationsContent.defaultProps = {
  notifications: [],
  clearNotifications: () => {},
}

export default NotificationsContent;