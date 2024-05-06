import Sidebar from "../components/UI/Sidebar.jsx";
import { MyEvents } from "../components/activity/MyEvents.jsx";
import { Reports } from "../components/activity/SectionEventsReport.jsx";
import { Tasks } from "../components/activity/SectionTasks.jsx";
import { Summary } from "../components/activity/SectionSummary.jsx";
import defaultImg from "../assets/imgs/image_card.png";
import {MyProfile} from "../components/activity/MyProfile.jsx";




export const events = [
  
  {
    id: 1,
    image: defaultImg,
    title: "Quizz React",
    description:"Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    percent: 5,
    date: "10 May",
    hour: "10:00",
    category: "Course",
    label: "Event",
    status: "Inactive",
  },
  {
    id: 2,
    image: defaultImg,
    title: "Lecture Seminar",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    date: "11 May",
    hour: "8:00",
    category: "Course",
    label: "Homework",
  },
  {
    id: 3,
    image: defaultImg,
    title: "ID Card Photo Day",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    date: "11 May",
    hour: "9:30",
    category: "University",
    label: "Event",
    status: "Active",
  },
  {
    id: 4,
    image: defaultImg,
    title: "Animation Logo",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    percent: 15,
    date: "11 May",
    hour: "13:00",
    category: "Course",
    label: "Homework",
    status: "Active",
  },
  {
    id: 5,
    image: defaultImg,
    title: "English Club Meeting",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    date: "12 May",
    hour: "10:00",
    category: "Students",
    label: "Events",
    status: "Active",
  },
  {
    id: 6,
    image: defaultImg,
    title: "Smash Tournament",
    description:
      "Lorem ipsum dolor sit amet consectetur. Felis odio pellentesque sed vivamus nisi...",
    date: "12 May",
    hour: "13:00",
    category: "Students",
    label: "Events",
    status: "Active",
  },
];

export const profileInfo = [

{
  key:1,
  img:"/imgs/usr-default.png",
  name:"Ernest Du",
  mail: "ernest@gmail.com",
  usr: "erne12",
  taskCompleted:"5",
  taskRemaining:"43",
  courses:
  "Composicion Inglesa · Aplicaciones Interactivas · Diseño Web ·  Repertorio · Imagen en Movimiento · Seminario"
}

]

export function Events() {
  
  return (
    <>
      <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full ">
        <aside className="w-16">
          <Sidebar username="usuario" email="email@gmail.com" image="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg" items={profileInfo}></Sidebar>

        </aside>
        <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
          <section className="w-[70%] px-2 my-2 lg:w-full lg:px-4">
            <MyEvents items={events} />
          </section>
          <section className="grid py-4 pr-4 w-[30%] lg:w-full lg:px-4 gap-4">
              <Reports />
              <Tasks />
              <Summary />
          </section>
        </main>
      </div>
    </>
  );
}

export default Events;
