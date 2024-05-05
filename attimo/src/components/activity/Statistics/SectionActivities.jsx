import { InputSearch } from "../../UI/InputSearch";
import ListActivities from "../../UI/StatisticsUI/ListActivities.jsx";
import defaultImg from "../../../assets/imgs/img_activity.png";

export function Activities() {
  const events = [
    {
        image: defaultImg,
        title: "Quiz React",
        date: "10 May",
        hour: "10:00",
        percent: 5,
      },
      {
        image: defaultImg,
        title: "Investigación Seminario",
        date: "12 Jun",
        hour: "12:00",
        percent: 30,
      },
      {
        image: defaultImg,
        title: "Charla de Linux",
        date: "09 Jul",
        hour: "10:00",
      },
      {
        image: defaultImg,
        title: "Exposición Proyecto",
        date: "16 May",
        hour: "10:00",
        percent: 25,
      },
      {
        image: defaultImg,
        title: "Laboratorio de Ingeniería",
        date: "08 May",
        hour: "10:00",
        percent: 5,
      },
      {
        image: defaultImg,
        title: "Quiz Inglés",
        date: "15 May",
        hour: "10:00",
        percent: 7.5,
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
