import Sidebar from "../components/UI/Sidebar.jsx";
import { SectionInfoCourse } from "../components/activity/InfoCourse/SectionInfoCourse.jsx";
import { UpcomingEvents } from "../components/activity/UpcomingEvents.jsx";
import myImage from "../assets/imgs/image_card.png";
import Calendar from "../components/UI/Calendar.jsx";

export const profileInfo = [
  {
    id: 1,
    name: "Ernest Du",
    mail: "ernest@gmail.com",
    usr: "erne12",
    taskCompleted: "5",
    taskRemaining: "43",
    courses:
      "Composicion Inglesa · Aplicaciones Interactivas · Diseño Web ·  Repertorio · Imagen en Movimiento · Seminario",
  },
];

const courses = [
  {
    id: 0,
    title: "Desarrollo de Aplicaciones Interactivas II",
    image:
      "https://mv1.mediacionvirtual.ucr.ac.cr/pluginfile.php/2833830/course/section/615599/TM5100%201.png",
    acronyms: "TM-5100",
    teacher: "Jorge Miranda Loría",
    email: "jorge.mirandaloria@ucr.ac.cr",
    date: "10 May",
    hour: "10:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque vel orci vitae ullamcorper. Vivamus convallis dolor id ultricies malesuada. Integer ut purus cursus, pharetra ipsum lacinia, laoreet quam. Pellentesque placerat et diam eu rhoncus. Phasellus lacinia, risus eu accumsan luctus, orci lorem laoreet nisi, nec dictum nibh nunc rutrum augue. Phasellus quis nisl massa. Sed placerat molestie interdum. Morbi scelerisque mauris eu commodo vulputate. Donec vel lacinia quam, sit amet elementum erat. Praesent convallis ut ipsum sed gravida. Nam lacinia mi at mauris venenatis ullamcorper.",
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

export function CourseDetails() {
  return (
    <>
      <div className="flex gap-4 bg-clr-light-bg dark:bg-clr-dark-bg w-full">
        <aside className="w-16">
          <Sidebar
            username="usuario"
            email="email@gmail.com"
            image="https://i.pinimg.com/564x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg"
          ></Sidebar>
        </aside>
        <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
        <section className="w-[70%] px-2 my-4 lg:w-full lg:px-6 tablet:w-[60%]">
          <SectionInfoCourse items={courses} />
          </section>

          <section className="bg-clr-light-secondary-bg dark:bg-clr-light-gray/10 m-auto h-full pt-4 w-[30%] lg:w-full tablet:w-[40%]">
          <div className="w-fit m-auto rounded-lg dark:bg-clr-light-secondary-bg/55">
              <Calendar />
            </div>
            <UpcomingEvents items={upcomingEvents} />
          </section>

        </main>
      </div>
    </>
  );
}

CourseDetails.defaultProps = {
  
}

export default CourseDetails;
