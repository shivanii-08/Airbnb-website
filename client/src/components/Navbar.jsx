import React from "react";
import { CiSearch } from "react-icons/ci";
import Dropdown from "../utils/Dropdown";
import Home from "../pages/Home";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex items-center justify-between mt-5 px-10 py-2 pb-6  border-b">
      {/* logo  */}
      <Link to={'/'}>
      <div className="flex items-center gap-2">
        <div className=" flex gap-2 h-7 w-8">   
        <img
            className="h-full w-full object-contain object-center"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fYsTmR0-TXLa06mx13LRXBgbNyBgylU3cw&s"
            alt=""
          />
        <h1 className="text-2xl text-pink-600 font-bold">airbnb</h1>     
        </div>
      </div>
      </Link>
     
      
      {/* centre  */}
      <div className="flex justify-evenly border px-3 py-2 rounded-3xl gap-x-4 shadow-md">
        <div className="font-medium">Anywhere</div>
        <div className="h-8 border border-gray-300"></div>
        <div className="font-medium">Any week</div>
        <div className="h-8 border border-gray-300"></div>
        <div className="font-medium text-slate-400">Add guests</div>
        <div className="bg-pink-500 px-2 py-2 rounded-2xl size-8">
          <CiSearch className="text-white font-bolda"/>
        </div>
      </div>
      {/* buttons  */}
      <div className="flex items-center space-x-3 font-medium">
        <div>Airbnb your home</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </div>
        <div className="">
         <Dropdown title = {<><span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span></>} />    
        </div>
      </div>
    </div>
  );
}

export default Navbar;
