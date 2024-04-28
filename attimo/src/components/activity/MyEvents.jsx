import "../../index.css";
import { CardEvents } from "../UI/CardEvents";

export function MyEvents({ items }){
    return (
        <div className="grid grid-cols-auto-300 gap-4 w-full">
            {items.map(item => (
                <CardEvents
                    key={item.title}
                    title={item.title}
                    percent={item.percent}
                    description={item.description}
                    date={item.date}
                    hour={item.hour}
                    image={item.image}
                    category={item.category}
                    label={item.label}
                    status={item.status}
                />
            ))}
        </div>
    );
}

