import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import {Link} from 'react-router-dom'
import "./Mydatepicker.css";
import { Link, NavLink } from "react-router-dom";
import Gap from "./Gap";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TeacherDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <h1 className=" flex justify-center ml-40 text-3xl font-bold text-center mt-8 mb-4">
        DashBoard
      </h1>
      <div className="flex px-5 ml-48 ">
        <div className="border border-black  rounded-xl justify-center m-10 h-35 w-25">
          <img src="src\component\img\gif2.gif" className=" img p-4" alt="Logo" />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error aliquid architecto ducimus alias autem, voluptatem exercitationem amet magni velit. Nemo?
          <div className="flex items-center justify-center m-5">
            <NavLink
              to="/Session"
              className={(isActive) =>
                `block w-28 py-2 pr-4 pl-3 duration-200 ${isActive ? "gray" : "orange"
                } text-black w-auto border border-black shadow-2xl hover:bg-indigo-600  focus:ring-4 focus:ring-orange-300 font-medium 
            rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
              }
            >
              <button>Start a session</button>
            </NavLink>
          </div>

        </div>
        <div className="border border-black rounded-xl justify-center m-10 h-35 w-25">
          <img src="src\component\img\gif3.gif" className=" img p-4" alt="Logo" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur veritatis ipsum, in asperiores ipsam vel quae aut omnis maxime.
          <div className="flex items-center justify-center m-5" m-5>
            <NavLink
              to="/TeacherSession"
              className={(isActive) =>
                `block w-28 py-2 pr-4 pl-3 duration-200 ${isActive ? "gray" : "orange"
                } text-black border w-auto border-black shadow-2xl hover:bg-indigo-600 focus:ring-4 focus:ring-orange-300 font-medium 
            rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
              }
            >
              <button>Choose a session</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;