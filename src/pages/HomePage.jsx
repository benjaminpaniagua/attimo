import { MyCourses } from "../components/activity/MyCourses.jsx";
import { UpcomingEvents } from "../components/activity/UpcomingEvents.jsx";
import myImage from "../assets/imgs/image_card.png";
import Calendar from "../components/UI/Calendar.jsx";
import {events} from "./Events.jsx";

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
    progress: 50,
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

export function HomePage({name}) {
  return (
    <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
      <section className="w-[70%] px-2 my-2 lg:w-full lg:px-4 tablet:w-[60%]">
        <MyCourses className="w-full" items={courses} name={name} />
      </section>
      <section className="bg-clr-light-secondary-bg dark:bg-clr-light-gray/10 m-auto h-full pt-4 w-[30%] lg:w-full tablet:w-[40%]">
        <div className="w-fit m-auto rounded-lg dark:bg-clr-light-secondary-bg/55">
          <Calendar />
        </div>
        <UpcomingEvents items={events} />
      </section>
    </main>
  );
}

export default HomePage;