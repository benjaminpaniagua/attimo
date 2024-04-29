import { LayoutDashboard, Home, StickyNote, Layers, Flag, LifeBuoy, Settings, Eraser, Filter, Bell, BarChart, SunDim, Sun, Moon, LogOut } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/UI/Sidebar.jsx"
import React, { useState } from 'react';
import { MyEvents } from "./components/activity/MyEvents.jsx"; 
import { Search } from "./components/activity/Search.jsx";
import { Reports } from "./components/activity/SectionEventsReport.jsx"
import { Tasks } from "./components/activity/SectionTasks.jsx"
import { Summary } from "./components/activity/SectionSummary.jsx"

export const events = [
  {
    id: 1,
    image: "/imgs/image_card.png",
    title: "Quizz React",
    description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    percent: "5",
    date: "10 May",
    hour: "10:00",
    category: "Course",
    label: "Event",
    status: "Active",
  },
  {
    id: 2,
    image: "/imgs/image_card.png",
    title: "Lecture Seminar",
    description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    date: "11 May",
    hour: "8:00",
    category: "Course",
    label: "Homework",
  },
  {
    id: 3,
    image: "/imgs/image_card.png",
    title: "ID Card Photo Day",
    description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    date: "11 May",
    hour: "9:30",
    category: "University",
    label: "Event",
    status: "Active",
  },
  {
    id: 4,
    image: "/imgs/image_card.png",
    title: "Animation Logo",
    description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    percent: "15",
    date: "11 May",
    hour: "13:00",
    category: "Course",
    label: "Homework",
    status: "Active",
  },
  {
    id: 5,
    image: "/imgs/image_card.png",
    title: "Smash Tournament",
    description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    date: "12 May",
    hour: "13:00",
    category: "Students",
    label: "Events",
    status: "Active",
  },
];

export function Events() {
  return (
    <>
    <div className="flex gap-4 bg-clr-light-bg w-screen">
      <div className="w-16">
        <Sidebar username="usuario" email="email@gmail.com" image='https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg'>
            <SidebarItem icon={<Home size={20} />} text="Home"/>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Events" active/>
            <SidebarItem icon={<BarChart size={20} />} text="Stadistics" />
            <SidebarItem icon={<Bell size={20} />} text="Notifications" />
            <SidebarItem icon={<Moon size={20} />} text="Dark Mode" />
            <hr className="my-3"/>
            <SidebarItem icon={<LogOut size={20} />} text="Log Out" />
          </Sidebar>
          </div>
          <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col"> 
          <section className="w-[70%] px-2 my-4 lg:w-full lg:px-6">
            <MyEvents items={events}/>
          </section>
          <section className="m-auto h-full pt-4 w-[30%] lg:w-full">
            <div className="grid gap-4">
              <Reports />
              <Tasks />
              <Summary />
            </div>
          </section>
        </main>
    </div>
    </>
  )
}

export default Events;