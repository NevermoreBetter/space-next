"use client";

import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="navbar  text-white flex justify-between items-center pt-8 relative mb-[48px] z-10 w-[100%] sm:pt-0 lg:pt-8">
      <div className="flex justify-center items-center lg:after:w-[35%] after:h-[1px] after:bg-[#383B4B] after:inline after:absolute after:left-[7rem] after:z-10">
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>
      </div>
      <AiOutlineMenu
        className="text-3xl cursor-pointer sm:hidden"
        onClick={() => {
          document.getElementById("menu").classList.remove("right-[-100%]");
          document.getElementById("menu").classList.add("right-0");
        }}
      />
      <div
        id="menu"
        className="flex flex-col px-7 py-8 bg-gray-800 fixed right-[-100%] top-0 w-1/2 h-[100vh] duration-500 sm:static sm:flex-row sm:h-[100px] sm:w-[60%] sm:items-center sm:justify-centersm sm:px-12  sm:justify-center   "
      >
        <AiOutlineClose
          className="text-white text-3xl relative left-0 self-end cursor-pointer mb-12 sm:hidden"
          onClick={() => {
            document.getElementById("menu").classList.remove("right-0");
            document.getElementById("menu").classList.add("right-[-100%]");
          }}
        />
        <ul className="sm:gap-8 sm:flex sm:px-8 lg:flex lg:gap-16">
          <li className="menu-item mb-6 uppercase sm:mb-0 ">
            <Link href="/">
              <span className="font-bold tracking-wider sm:hidden lg:inline lg:mr-2">
                00
              </span>{" "}
              Home
            </Link>
          </li>
          <li className="menu-item mb-6 uppercase  sm:mb-0">
            <Link href="/destination">
              <span className="font-bold tracking-wider sm:hidden lg:inline lg:mr-2">
                01
              </span>{" "}
              Destination
            </Link>
          </li>
          <li className="menu-item mb-6 uppercase  sm:mb-0">
            <Link href="/crew">
              <span className="font-bold tracking-wide sm:hidden lg:inline  lg:mr-2">
                02
              </span>{" "}
              Crew
            </Link>
          </li>
          <li className="menu-item  uppercase">
            <Link href="/technology">
              <span className="font-bold tracking-wider sm:hidden lg:inline lg:mr-2">
                03
              </span>{" "}
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
