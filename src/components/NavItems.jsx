import React from "react";
import { Link, useLocation } from "react-router";

const NavItems = (props) => {
  const location = useLocation();
  const { Icon, text, to, onClick } = props;
  const isActive = location.pathname === to;
  return (
    <Link to={to} onClick={onClick}>
      <li
        className={`flex items-center gap-2 py-2 px-2 rounded-md group hover:bg-primary-blue ${isActive && "bg-primary-blue"}`}>
        {React.cloneElement(Icon, {
          className: `w-5 h-5 group-hover:fill-white ${isActive && "fill-white"}`,
        })}
        <span className={`font-inter font-medium text-nav-text group-hover:text-white ${isActive && "text-white"}`}>
          {text}
        </span>
      </li>
    </Link>
  );
};

export default NavItems;
