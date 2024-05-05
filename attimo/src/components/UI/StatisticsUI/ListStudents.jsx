import React from 'react';

export default function ListStudents({ students }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {students.map((student) => (
        <li key={student.email} className="flex justify-between gap-x-6 py-5">
          <div className="hover:bg-clr-light-bg transition duration-300 cursor-pointer rounded-lg p-2 w-full">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={student.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <h3>{student.name}</h3>
              <p>{student.email}</p>
            </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
