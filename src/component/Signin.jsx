import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signin.css';
import { NavLink } from "react-router-dom";
// import MyDatePicker from './MyDatePicker';
import MyDatePicker from "./MyDatePicker.jsx";



export default function Signin(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogIn = async (event) => {
    // ... (existing code for handleLogIn function)
  };

  const handleUsernameChange = (e) => {
    const newValue = e.target.value;
    setUsername(newValue);
    props.setUsername(newValue)
    console.log('Username:', newValue);
    localStorage.setItem("username", newValue) // Log username in the console
  };

  return (
    <div className="flex min-h-full justify-center px-6  lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img src="src/component/img/ILl1.png" className="h-80 image-to-slide-and-bounce mt-20" alt="Logo" />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm borderr">
        <h2 className="py-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login in to your account
        </h2>
        <form className="space-y-6 " method="POST" onSubmit={handleLogIn}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900  text-left">
              Username
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
<div className='center'>
          <NavLink
            to="/Session"
            className={(isActive) =>
              `block w-28 py-2 pr-4 pl-3 duration-200 ${isActive ? 'gray' : 'orange'
              } text-black bg-indigo-400 focus:ring-4 focus:ring-orange-300 font-medium 
    rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none`
            }
          // state={{ setUsername }} // Pass setUsername to /Session route when clicking the button
          >

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-00  text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </NavLink>
          </div>

          {/* <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div> */}
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
