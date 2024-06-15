import { InfoCourse } from "../UI/InfoCourse";

export function SectionInfoCourse({ items }) {
  return (
    <section className="">
      <div className="flex justify-between items-center md:flex-wrap ">
        <InfoCourse
          key={item.id}
          title={item[0].name + " " + item[0].number}
          image={item[0].image}
          acronyms={item[0].acronym}
          teacher={item[0].professor_name}
          email={item[0].professor_email}
          consultations={item[0].consultations}
          description={item[0].description}
        />
      </div>
    </section>
  );
}
