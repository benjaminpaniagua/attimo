import { InputSearch } from "../../UI/InputSearch";
import ListActivities from "../../UI/StatisticsUI/ListActivities.jsx";
import defaultImg from "../../../assets/imgs/img_activity.png";

export function Activities() {
  const events = [
    {
        image: defaultImg,
        title: "Introduction to React",
        date: "10 May",
        hour: "10:00",
      },
      {
        image: defaultImg,
        title: "Quiz React",
        date: "12 May",
        hour: "12:00",
        percent: 10,
      },
      {
        image: defaultImg,
        title: "Introduction to Astro",
        date: "09 Jun",
        hour: "08:00",
      },
      {
        image: defaultImg,
        title: "Laboratory Astro",
        date: "13 Jun",
        hour: "10:00",
        percent: 15,
      },
      {
        image: defaultImg,
        title: "Introduction to Laravel",
        date: "13 Jun",
        hour: "10:00",
      },
      {
        image: defaultImg,
        title: "Project Exhibition",
        date: "25 Jun",
        hour: "10:00",
        percent: 25,
      },
      {
        image: defaultImg,
        title: "Final exam",
        date: "15 Jul",
        hour: "10:00",
        percent: 30,
      },
      
  ];
  return (
    <>
      <section className="w-full">
        <div className="bg-clr-white rounded-lg">
          <div className="flex justify-between items-center p-8 pb-0 md:flex-wrap">
            <h2>List of Events</h2>
            {/* <InputSearch placeholder="Search an event" /> */}
          </div>
          <div className="p-2">
            <ListActivities activities={events} />
          </div>
        </div>
      </section>
    </>
  );
}
