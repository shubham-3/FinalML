// Row.js
import React from "react";
import { Link } from "react-router-dom";

const Row = ({ student }) => {
  const progressStyle = {
    width: `${student.progress}%`,
  };

  const getProgressColor = (progress) => {
    if (progress < 50) {
      return "bg-red-500";
    } else if (progress >= 50 && progress < 80) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {student.name}
      </td>
      <td className="px-6 py-4">{student.rollNumber}</td>
      <td className="px-6 py-4">{student.gender}</td>
      <td className="px-6 py-4">
        <div className="relative pt-1">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
            <div
              style={progressStyle}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getProgressColor(
                parseInt(student.progress, 10) // Ensure progress is parsed as a number
              )}`}
            ></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <Link to="/data" className="text-blue-600 hover:underline">
          View
        </Link>
      </td>
    </tr>
  );
};

export default Row;
