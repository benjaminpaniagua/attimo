import React from "react";

export default function ListStudents({ students }) {
  return (
    <ul role="list">
      {students.map((student) => (
        <li
          key={student.email}
          className="flex justify-between gap-x-6 hover:bg-clr-light-bg transition duration-300 cursor-pointer rounded-lg px-4 py-4 w-full"
        >
          <div className="flex items-center gap-x-4 hover:translate-x-4 transition duration-300 w-full">
            <img
              className="h-12 w-12 rounded-full"
              src={student.imageUrl}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <h3>{student.name}</h3>
              <p>{student.email}</p>
            </div>
          </div>
        </li>
      ))}
      <h3 className="flex justify-center items-center hover:bg-clr-light-gray  transition duration-300 cursor-pointer rounded-lg p-5">View All</h3>

    </ul>
  );
}
