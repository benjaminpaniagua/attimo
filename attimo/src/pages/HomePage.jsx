import Sidebar from "../components/UI/Sidebar.jsx";
import { MyCourses } from "../components/activity/MyCourses.jsx";
import { UpcomingEvents } from "../components/activity/UpcomingEvents.jsx";
import myImage from "../assets/imgs/image_card.png";
import Calendar from "../components/UI/Calendar.jsx";
import {MyProfile} from "../components/activity/MyProfile.jsx";

export const courses = [
  {
    id: 1,
    image: myImage,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 56,
  },
  {
    id: 2,
    image: myImage,
    title: "Fundamentals of Drawing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 12,
  },
  {
    id: 3,
    image: myImage,
    title: "Photography Basics",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 76,
  },
  {
    id: 4,
    image: myImage,
    title: "Programming",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 89,
  },
  {
    id: 5,
    image: myImage,
    title: "Video Editing Techniques",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 22,
  },
  {
    id: 6,
    image: myImage,
    title: "Networking and Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 38,
  },
  {
    id: 7,
    image: myImage,
    title: "Database Design and Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 45,
  },
  {
    id: 8,
    image: myImage,
    title: "Mobile Application Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 67,
  },
  {
    id: 9,
    image: myImage,
    title: "Introduction to Cibersecurity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 81,
  },
  {
    id: 10,
    image: myImage,
    title: "Digital Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    progress: 93,
  },
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
    percent: 0,
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
    percent: 0,
  },
];

export const profileInfo = [

  {
    id:1,
    name:"Ernest Du",
    mail: "ernest@gmail.com",
    usr: "erne12",
    taskCompleted:"5",
    taskRemaining:"43",
    courses:
    "Composicion Inglesa · Aplicaciones Interactivas · Diseño Web ·  Repertorio · Imagen en Movimiento · Seminario"
  }
  
  ]

export function HomePage() {
  return (
    <>
      <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full">
        <aside className="w-16">
          <Sidebar
            username="usuario"
            email="email@gmail.com"
            image="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg"
            items={profileInfo}
          ></Sidebar>
          |
        </aside>
        <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
          <section className="w-[70%] px-2 my-4 lg:w-full lg:px-6 tablet:w-[60%]">
            <MyCourses className="w-full" items={courses} name="Valeria" />
          </section>
          <section className="bg-clr-light-secondary-bg dark:bg-clr-light-gray/10 m-auto h-full pt-4 w-[30%] lg:w-full tablet:w-[40%]">
            <div className="w-[90%] m-auto rounded-lg ">
              <Calendar />
            </div>
            <UpcomingEvents items={upcomingEvents} />
          </section>
        </main>
      </div>
    </>
  );
}

export default HomePage;