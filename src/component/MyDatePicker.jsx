import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {Link, NavLink} from 'react-router-dom'
// import Signin from "./component/Signin.jsx";

import "./Mydatepicker.css";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyDatePicker = (props) => {
  // setUsername(newValue);
  // console.log('Username:', newValue); 
  console.log(props.setUsername.value)
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [username, setUsername] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  return (
    <div className=" ml-52 flex flex-col items-center shadow-xl">
      <img src="src/component/img/p1.png" className="h-60 home-animation " alt="Logo" />


      <span className="font-medium text-2xl"> DashBoard</span>
      <div className="flex flex-col items-center justify-start min-h-screen ">

        <div className="border-2 border-orange-900 my-5 p-20 rounded-md flex flex-col items-center justify-center shadow ">
          <h1 className="text-xl font-medium">Choose the date and lecture.</h1>
          <div className="relative max-w-md mt-8 w-52 ">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
              className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:border-blue-300 bg-slate-900 text-white hover:bg-gray-700 w-54 font-medium text-lg"
            />
          </div>
          <div className=" m-6  flex flex-col items-center justify-center  ">
          <Menu as="div" className="relative inline-block text-left ">
      <div >
        <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter Subject here"
        className="border border-black bg-black text-white rounded-xl"
      />
      </div>
    </Menu>
    </div>
          <NavLink to='End'>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex flex-col items-center justify-start m-24">Submit</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MyDatePicker;