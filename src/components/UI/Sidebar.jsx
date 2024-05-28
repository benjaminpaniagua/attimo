import { ChevronFirst, ChevronLast, MoreVertical, LayoutDashboard, Home, Bell, BarChart, Sun, Moon, LogOut } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";
import { ProfileContent } from "../activity/ProfileContent";
import ProfileModal from "./ProfileModal";
import GenericModal from "../UI/GenericModal";
import NotificationsContent from "../activity/NotificationsContent";
import logo from "../../assets/imgs/attimo_light.svg";
import PropTypes from "prop-types";

const SidebarContext = createContext();

export default function Sidebar({ children, image, username, email, items }) {
  const [expanded, setExpanded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { theme, handleChangeTheme } = useDarkMode();
  const [notificationsModalIsOpen, setNotificationsModalIsOpen] =
    useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      mandated: "Jorge Miranda",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "5 minutes ago",
    },
    {
      id: 2,
      mandated: "David Smith",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "18 minutes ago",
    },
    {
      id: 3,
      mandated: "María Jiménez",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "2 hours ago",
    },
    {
      id: 4,
      mandated: "Pedro Corsh",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Yesterday",
    },
    {
      id: 5,
      mandated: "Gonzalo Jyma",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Last week",
    },
    {
      id: 6,
      mandated: "Andres Cortes",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Last week",
    },
    {
      id: 7,
      mandated: "Andres Cortes",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Last week",
    },
    {
      id: 8,
      mandated: "Andres Cortes",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Last week",
    },
    {
      id: 9,
      mandated: "Andres Cortes",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Last week",
    },
    {
      id: 10,
      mandated: "Andres Cortes",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Last week",
    },
    {
      id: 11,
      mandated: "Andres Cortes",
      mandatedImg:
        "https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
      description: "created an event",
      time: "Last week",
    },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <>
      <aside className="h-screen fixed z-[1] text-white">
        <nav className="h-full flex flex-col bg-clr-blue dark:bg-clr-dark-blue">
          <div className="p-4 flex justify-between items-center">
            <img
              alt={`${username} photo`}
              src={logo}
              className={`overflow-hidden object-cover transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            />
            <button
              onClick={() => {
                if (!modalIsOpen) {
                  setExpanded((prevExpanded) => !prevExpanded);
                }
              }}
              className="p-1.5 rounded-lg bg-clr-light-bg dark:bg-clr-light-secondary-bg duration-500"
            >
              {expanded ? (
                <ChevronFirst className="text-clr-dark-blue" />
              ) : (
                <ChevronLast className="text-clr-dark-blue" />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex flex-col gap-4 m-auto px-3">
              <SidebarItem icon={<Home size={20} />} text="Home" to="/attimo/home" />
              <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text="Events"
                to="/attimo/events"
              />
              <SidebarItem
                icon={<BarChart size={20} />}
                text="Statistics"
                to="/attimo/statistics"
              />
              <SidebarItem
                icon={<Bell size={20} />}
                text="Notifications"
                onClick={() => {
                  setNotificationsModalIsOpen(true);
                  setExpanded(false);
                }}
              />
              <SidebarItem
                icon={theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                text={theme === "dark" ? "Light Mode" : "Dark Mode"}
                onClick={handleChangeTheme}
              />
              <hr className="my-3" />
              <SidebarItem
                icon={<LogOut size={20} />}
                text="Log Out"
                to="/login"
              />
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <div className="w-10 h-10 rounded-md overflow-hidden">
              <img src={image} className="w-full h-full" alt="Profile" />
            </div>

            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{username}</h4>
                <span className="text-xs">{email}</span>
              </div>
              <MoreVertical
                size={20}
                className="cursor-pointer"
                onClick={() => {
                  setModalIsOpen(true);
                  setExpanded(false);
                }}
              />
            </div>
          </div>
        </nav>
      </aside>

      {/* Profile Modal */}

      <ProfileModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {items.map((item) => (
          <ProfileContent
            key={item.id}
            img={item.img}
            name={item.name}
            lastName1={item.lastName1}
            lastName2={item.lastName2}
            mail={item.mail}
            usr={item.usr}
            taskCompleted={item.taskCompleted}
            taskRemaining={item.taskRemaining}
            courses={item.courses}
          />
        ))}
      </ProfileModal>

      {/* Notifications Modal */}
      <GenericModal
        isOpen={notificationsModalIsOpen}
        onClose={() => setNotificationsModalIsOpen(false)}
        title="Notifications"
      >
        <NotificationsContent
          notifications={notifications}
          clearNotifications={clearNotifications}
        />
      </GenericModal>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert, onClick, to }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr bg-clr-light-secondary-bg dark:bg-clr-light-gray text-clr-blue dark:text-clr-dark-blue"
          : "hover:bg-clr-dark-blue text-white dark:hover:bg-clr-dark-bg"
      }`}
    >
      <Link to={to} className="flex items-center" onClick={onClick}>
        {icon}
        <div
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </div>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}
      </Link>

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-clr-blue text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      lastName1: PropTypes.string.isRequired,
      lastName2: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      usr: PropTypes.string.isRequired,
      taskCompleted: PropTypes.number.isRequired,
      taskRemaining: PropTypes.number.isRequired,
      courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
  ),
};
