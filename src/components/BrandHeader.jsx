import React from "react";
import { Link } from "react-router";
import { Logo } from "../assets/icons";

const BrandHeader = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-1.5">
        <Logo />
        <span className="text-brand-blue text-lg">CodeAnt AI</span>
      </div>
    </Link>
  );
};

export default BrandHeader;
