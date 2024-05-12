import React from "react";

export default function ListStudents({ students }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {students.map((student) => (
        <li
          key={student.email}
          className="flex justify-between gap-x-6 py-5 hover:bg-clr-light-bg transition duration-300 cursor-pointer rounded-lg p-3 w-full"
        >
          <div className="flex items-center gap-x-5 hover:translate-x-4 transition duration-300 w-full">
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
    </ul>
  );
}
