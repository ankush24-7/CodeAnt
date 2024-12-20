import NavItems from "./NavItems";
import "../styles/media-query.css";
import BrandHeader from "./BrandHeader";
import React, { useState } from "react";
import { NavbarIcons } from "../assets/icons";

const Navbar = ({ setIsAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full flex flex-col border-b border-border-gray bg-white">
      <div className="relative z-20 pt-2 pb-1 px-3 flex justify-between items-center bg-white">
        <BrandHeader />
        <button onClick={() => setShowMenu(!showMenu)} className="hamburger-btn">
          {showMenu ? <NavbarIcons.Close /> : <NavbarIcons.Bars />}
        </button>
      </div>

      <div 
        className={`delay menu-bg absolute inset-0 bg-[#6C6C6C4D] ${showMenu ? "bottom-0" : "bottom-full"}`}
        onClick={() => setShowMenu(false)}>
      </div>
      <div className={`slide-in menu absolute left-0 z-10 w-full px-3 bg-white ${showMenu ? "top-10" : "-top-96"}`}>
        <select name="user" id="#" className="w-full py-2 px-1 mt-3.5 rounded-md shadow-sm whitespace-nowrap overflow-hidden text-ellipsis focus:outline-none border border-btn-border">
            <option value="user">UtkarshDhariyaPanwar</option>
            <option value="user">SampleOption1</option>
            <option value="user">SampleOption2</option>
        </select>
        <div className="flex flex-col pt-4 pb-6 sm:justify-between sm:flex-grow">
          <ul>
            <NavItems Icon={<NavbarIcons.Home className="w-5 h-5 group-hover:fill-white" />} text="Repositories" to="/" />
            <NavItems Icon={<NavbarIcons.Code className="w-5 h-5 group-hover:fill-white" />} text="AI Code Review" to="/code-review" />
            <NavItems Icon={<NavbarIcons.Cloud className="w-5 h-5 group-hover:fill-white" />} text="Cloud Security" to="/cloud-security" />
            <NavItems Icon={<NavbarIcons.Book className="w-5 h-5 group-hover:fill-white" />} text="How to Use" to="/how-to-use" />
            <NavItems Icon={<NavbarIcons.Gear className="w-5 h-5 group-hover:fill-white" />} text="Settings" to="/settings" />
          </ul>
          <ul>
            <NavItems Icon={<NavbarIcons.Phone className="w-5 h-5 group-hover:fill-white" />} text="Support" to="/support" />
            <NavItems Icon={<NavbarIcons.SignOut className="w-5 h-5 group-hover:fill-white" />} text="Logout" to="/sign-in" onClick={() => setIsAuthenticated(false)} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
