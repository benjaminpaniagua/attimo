import { StatisticsCards } from "./components/activity/Statistics/SectionContainersStatistics.jsx";
import { Graphs } from "./components/activity/Statistics/SectionGraphs.jsx";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  LifeBuoy,
  Settings,
  Eraser,
  Filter,
  Bell,
  BarChart,
  SunDim,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import Sidebar, { SidebarItem } from "./components/UI/Sidebar.jsx";
export function Statistics() {
  return (
    <>
      <div className="flex gap-4 bg-clr-light-bg">
        <div className="w-16">
          <Sidebar
            username="usuario"
            email="email@gmail.com"
            image="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg"
          >
            <SidebarItem icon={<Home size={20} />} text="Home" />
            <SidebarItem
              icon={<LayoutDashboard size={20} />}
              text="Events"
              active
            />
            <SidebarItem icon={<BarChart size={20} />} text="Stadistics" />
            <SidebarItem icon={<Bell size={20} />} text="Notifications" />
            <SidebarItem icon={<Moon size={20} />} text="Dark Mode" />
            <hr className="my-3" />
            <SidebarItem icon={<LogOut size={20} />} text="Log Out" />
          </Sidebar>
        </div>
        <div className="">
        <StatisticsCards />
        <Graphs />
        <Graphs />
        </div>
      </div>
    </>
  );
}
