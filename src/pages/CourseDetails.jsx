import { SectionInfoCourse } from "../components/activity/SectionInfoCourse.jsx";
import { UpcomingEvents } from "../components/activity/UpcomingEvents.jsx";
import myImage from "../assets/imgs/image_card.png";
import Calendar from "../components/UI/Calendar.jsx";
import {events} from "./Events.jsx";

const courses = [
  {
    id: 0,
    title: "Desarrollo de Aplicaciones Interactivas II",
    image: myImage,
    acronyms: "TM-5100",
    teacher: "Jorge Miranda Loría",
    email: "jorge.mirandaloria@ucr.ac.cr",
    date: "10 May",
    hour: "10:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque vel orci vitae ullamcorper. Vivamus convallis dolor id ultricies malesuada. Integer ut purus cursus, pharetra ipsum lacinia, laoreet quam. Pellentesque placerat et diam eu rhoncus. Phasellus lacinia, risus eu accumsan luctus, orci lorem laoreet nisi, nec dictum nibh nunc rutrum augue. Phasellus quis nisl massa. Sed placerat molestie interdum. Morbi scelerisque mauris eu commodo vulputate. Donec vel lacinia quam, sit amet elementum erat. Praesent convallis ut ipsum sed gravida. Nam lacinia mi at mauris venenatis ullamcorper.",
  },
];

export function CourseDetails() {
  return (
      <main className="main-content min-h-screen w-full flex gap-4 lg:flex-col">
        <section className="w-[70%] px-2 my-4 lg:w-full lg:px-6 tablet:w-[60%]">
          <SectionInfoCourse items={courses} />
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

CourseDetails.defaultProps = {
  
}

export default CourseDetails;