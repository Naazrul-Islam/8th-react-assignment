import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navber = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-[80px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Apps</NavLink>
            </li>
            <li>
              <NavLink>Installation</NavLink>
            </li>
          </ul>
        </div>

        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="w-[40px]" />
            <h1 className="font-bold text-blue-600">HERO.IO</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li>
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn  text-white bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)]" href="https://github.com/"><FaGithub />Contribute</a>
      </div>
    </div>
  );
};

export default Navber;
