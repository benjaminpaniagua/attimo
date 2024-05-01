import "../../index.css";
import { LayoutDashboard, Home, Bell, BarChart, Sun, Moon, LogOut } from "lucide-react";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import logo from "../../assets/attimo_light.svg"
import { createContext, useContext, useState } from "react"
import { useDarkMode } from "../hooks/useDarkMode";

const SidebarContext = createContext();

export default function Sidebar({ children, image, username, email}) {
    const [expanded, setExpanded] = useState(false);
    const { theme, handleChangeTheme } = useDarkMode();
    
    return (
        <>
            <aside className="h-screen fixed z-50 text-white">
                <nav className="h-full flex flex-col bg-clr-blue dark:bg-clr-dark-blue">
                    <div className="p-4 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden object-cover transition-all ${expanded ? "w-32" : "w-0"}`} />
                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-clr-light-bg dark:bg-clr-light-secondary-bg duration-500">
                            {expanded ? <ChevronFirst className="text-clr-dark-blue" /> : <ChevronLast className="text-clr-dark-blue"/>}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex flex-col gap-4 m-auto px-3">
                            <SidebarItem icon={<Home size={20} />} text="Home" active/>
                            <SidebarItem icon={<LayoutDashboard size={20} />} text="Events"/>
                            <SidebarItem icon={<BarChart size={20} />} text="Stadistics" />
                            <SidebarItem icon={<Bell size={20} />} text="Notifications" />
                            <SidebarItem icon={theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />} text={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} onClick={handleChangeTheme}/>
                            <hr className="my-3"/>
                            <SidebarItem icon={<LogOut size={20} />} text="Log Out" />  
                        </ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        <img src={`${image}`} className="w-10 h-10 rounded-md" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="font-semibold font-regular">{username}</h4>
                                <span className="text-xs">{email}</span>
                            </div>
                            <MoreVertical size={20} className="cursor-pointer"/>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
    const { expanded } = useContext(SidebarContext);

    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr bg-clr-light-secondary-bg dark:bg-clr-light-gray text-clr-blue dark:text-clr-dark-blue" : "hover:bg-clr-dark-blue text-white dark:hover:bg-clr-dark-bg"}`}>
            <div className="flex items-center" onClick={onClick}> {}
                {icon}
                <div className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</div>
                {alert && (<div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400  ${expanded ? "" : "top-2"}`}></div>)}
            </div>

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100  text-clr-blue text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    );
}
