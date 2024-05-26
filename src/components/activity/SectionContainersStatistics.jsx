import {StatisticsCard} from "../UI/StatisticsCard.jsx";
import { Users, Dumbbell, BookA, GraduationCap } from "lucide-react";

const data = [
  { id: 0, number: 167, description: "Total Users", icon: Users},
  { id: 1, number: 59, description: "Play Sports", icon: Dumbbell},
  { id: 2, number: 12, description: "Have accommodations", icon: BookA},
  { id: 3, number: 121, description: "Have a scholarship", icon: GraduationCap}
];

export function StatisticsCards() {
  return (
    <div className="grid gap-4 grid-cols-4 lg:grid-cols-2">
      {data.map((item) => (
        <StatisticsCard
          key={item.id}
          number={item.number}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}