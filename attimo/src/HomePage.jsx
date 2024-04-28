import { LayoutDashboard, Home, StickyNote, Layers, Flag, LifeBuoy, Settings, Eraser, Filter, Bell, BarChart, SunDim, Sun, Moon, LogOut } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/UI/Sidebar.jsx"
import { CardsSection } from "./components/activity/CardsSection.jsx";
import {UpcomingEvents} from "./components/activity/UpcomingEvents.jsx";
import myImage from './assets/image_card.png';
import Calendar from './components/Calendar';

export function HomePage() {
    const courses = [
        {
            id: 1,
            image: myImage,
            title: "Diseño Web",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 56,
        },
        {
            id: 2,
            image: myImage,
            title: "Manipulación de audio y video",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 12,
        },
        {
            id: 3,
            image: myImage,
            title: "Diseño Web",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 76,
        },
        {
            id: 4,
            image: myImage,
            title: "Programación",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 89,
        },
        {
            id: 5,
            image: myImage,
            title: "Captura de imágenes digitales",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 22,
        },
        {
            id: 6,
            image: myImage,
            title: "Diseño de bases de datos",
            description: "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
            progress: 38,
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
            title: "Investigación Seminario",
            date: "10 May",
            hour: "14:30",
            percent: 25,
        },
        {
            id: 3,
            image: myImage,
            title: "Reunión Python",
            date: "10 May",
            hour: "17:00",
        },
        {
            id: 4,
            image: myImage,
            title: "Reunión Python",
            date: "10 May",
            hour: "17:00",
        }
    ];

    return (
        <>
        <div className="flex bg-clr-light-bg w-screen max-w-[100vw]">
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
                        <CardsSection items={courses} title='Welcome back!' description='Have a nice day Valeria, are you ready for your next event?'/>
                    </section>
                    
                    <section className="p-4 bg-clr-light-secondary-bg w-[27%] md:w-full">
                        <div className="bg-white h-[25rem] m-auto mb-4 w-full rounded-lg">
                            <Calendar/>
                        </div>
                        <UpcomingEvents items={upcomingEvents}/>
                    </section>
                </main>
            </div>
        </>
    )
}

export default HomePage;