// StudentsPortal.js
import React from "react";
import Row from "./Row";

const StudentsPortal = () => {
  const students = [
    {
      name: "John Doe",
      rollNumber: "12345",
      gender: "Male",
      progress: 30, // Change progress to a number (without "%")
    },
    {
      name: "Jane Smith",
      rollNumber: "67890",
      gender: "Female",
      progress: 80, // Change progress to a number (without "%")
    },
    // Add more student data as needed
  ];
  return (
    <div>
      <div className="relative overflow-x-auto my-8 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student name
              </th>
              <th scope="col" className="px-6 py-3">
                Roll Number
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Progress
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <Row key={index} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPortal;
