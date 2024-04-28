import { LayoutDashboard, Home, StickyNote, Layers, Flag, LifeBuoy, Settings, Eraser, Filter, Bell, BarChart, SunDim, Sun, Moon, LogOut } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/UI/Sidebar.jsx"
import { MyCourses } from "./components/activity/MyCourses.jsx";
import {UpcomingEvents} from "./components/activity/UpcomingEvents.jsx";
import myImage from './assets/image_card.png';
import Calendar from './components/Calendar';

export function HomePage() {
    const courses = [
        {
            id: 1,
            image: myImage,
            title: "Web Design",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 56,
        },
        {
            id: 2,
            image: myImage,
            title: "Fundamentals of Drawing",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 12,
        },
        {
            id: 3,
            image: myImage,
            title: "Photography Basics",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 76,
        },
        {
            id: 4,
            image: myImage,
            title: "Programming",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 89,
        },
        {
            id: 5,
            image: myImage,
            title: "Video Editing Techniques",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 22,
        },
        {
            id: 6,
            image: myImage,
            title: "Networking and Communications",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 38,
        },
        {
            id: 7,
            image: myImage,
            title: "Database Design and Management",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 45,
        },
        {
            id: 8,
            image: myImage,
            title: "Mobile Application Development",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 67,
        },
        {
            id: 9,
            image: myImage,
            title: "Introduction to Cibersecurity",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 81,
        },
        {
            id: 10,
            image: myImage,
            title: "Digital Graphic Design",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 93,
        }
    ];

    const upcomingEvents = [
        {
            id: 1,
            image: myImage,
            title: "Quizz React",
            date: "10 May",
            hour: "10:00",
            percent: 5,
        },
        {
            id: 2,
            image: myImage,
            title: "Smash Tournament",
            date: "10 May",
            hour: "17:00",
            percent: null,
        },
        {
            id: 3,
            image: myImage,
            title: "Seminar Investigation",
            date: "10 May",
            hour: "14:30",
            percent: 25,
        },
        {
            id: 4,
            image: myImage,
            title: "Python Meet",
            date: "10 May",
            hour: "17:00",
            percent: null,
        }
    ];

    return (
        <>
        <div className="flex gap-4 bg-clr-light-bg w-screen">
            <div className="w-16">
                <Sidebar username="usuario" email="email@gmail.com" image='https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg'>
                    <SidebarItem icon={<Home size={20} />} text="Home" active/>
                    <SidebarItem icon={<LayoutDashboard size={20} />} text="Events"/>
                    <SidebarItem icon={<BarChart size={20} />} text="Stadistics" />
                    <SidebarItem icon={<Bell size={20} />} text="Notifications" />
                    <SidebarItem icon={<Moon size={20} />} text="Dark Mode" />
                    <hr className="my-3"/>
                    <SidebarItem icon={<LogOut size={20} />} text="Log Out" />
                    </Sidebar>
                </div>
                <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col"> 
                    <section className="w-[70%] px-2 my-4 lg:w-full lg:px-6">
                        <MyCourses className='w-full' items={courses} name='Valeria'/>
                    </section>
                    
                    <section className="bg-clr-light-secondary-bg m-auto h-full pt-4 w-[30%] lg:w-full">
                        <div className="px-4"><Calendar/></div>
                        <UpcomingEvents items={upcomingEvents}/>
                    </section>
                </main>
            </div>
        </>
    )
}

export default HomePage;