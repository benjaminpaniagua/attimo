import { InfoCourse } from "../UI/InfoCourse";

export function SectionInfoCourse({items}) {
  return (
      <section className="">
          <div className="flex justify-between items-center md:flex-wrap ">
            {items.map(item => (
              <InfoCourse
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  acronyms={item.acronyms}
                  teacher={item.teacher}
                  email={item.email}
                  date={item.date}
                  hour={item.hour}
              />
            ))}
          </div>
      </section>
  );
}
