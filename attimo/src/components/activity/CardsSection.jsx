import "../../index.css";
import "../UI/CardCourses.jsx";
import { CardCourses } from "../UI/CardCourses.jsx";

export function CardsSection({ items, title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <p className="mt-2 mb-5">{description}</p>
      <div className="grid grid-cols-auto-300 gap-4 w-full">
        {items.map((item) => (
          <CardCourses
            key={1}
            title={item.title}
            description={item.description}
            image={item.image}
            progress={item.progress}
          />
        ))}
      </div>
    </>
  );
}
