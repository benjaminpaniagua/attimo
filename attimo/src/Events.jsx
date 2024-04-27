import { LayoutDashboard, Home, StickyNote, Layers, Flag, LifeBuoy, Settings, Eraser, Filter, Bell, BarChart, SunDim, Sun, Moon, LogOut } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/UI/Sidebar.jsx"
import React, { useState } from 'react';
import { MyEvents } from "./components/activity/MyEvents.jsx"; 

export function Events() {

  const events = [
    {
      id: 1,
      image: "/imgs/image_card.png",
      title: "Quizz React",
      percentage: "5%",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
      dateHour: "10 May, 10:00 AM",
      btn1: "Course",
      btn2: "Events",
    },
    {
      id: 2,
      image: "/imgs/image_card.png",
      title: "Quizz React",
      percentage: "5%",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
      dateHour: "10 May, 10:00 AM",
      btn1: "Course",
      btn2: "Events",
    },
    {
      id: 3,
      image: "/imgs/image_card.png",
      title: "Quizz React",
      percentage: "5%",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
      dateHour: "10 May, 10:00 AM",
      btn1: "Course",
      btn2: "Events",
    },
    {
      id: 4,
      image: "/imgs/image_card.png",
      title: "Quizz React",
      percentage: "5%",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
      dateHour: "10 May, 10:00 AM",
      btn1: "Course",
      btn2: "Events",
    },
    {
      id: 5,
      image: "/imgs/image_card.png",
      title: "Investigacion",
      percentage: "5%",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
      dateHour: "10 May, 10:00 AM",
      btn1: "Course",
      btn2: "Events",
    },
    {
      id: 6,
      image: "/imgs/image_card.png",
      title: "Matricula TCU",
      percentage: "5%",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
      dateHour: "10 May, 10:00 AM",
      btn1: "Course",
      btn2: "Events",
    },
  ];

  return (
    <>
    <div className="flex bg-clr-light-bg w-screen">
      <Sidebar username="usuario" email="email@gmail.com" image='https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg'>
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Events" />
          <SidebarItem icon={<BarChart size={20} />} text="Stadistics" />
          <SidebarItem icon={<Bell size={20} />} text="Notifications" />
          <SidebarItem icon={<Moon size={20} />} text="Dark Mode" />
          <hr className="my-3"/>
          <SidebarItem icon={<LogOut size={20} />} text="Log Out" />
        </Sidebar>

        <main className="min-h-screen w-full ml-20 flex gap-4 md:flex-col"> 
          <section className="w-[72%] p-2 pt-4  md:w-full">
            <MyEvents items={events}/>
          </section>

          <section className="p-4 bg-clr-light-secondary-bg w-[27%] md:w-full">
            <h1>Calendario Acá</h1>

          </section>
        </main>
    </div>
    </>
  )
}

export default Events;