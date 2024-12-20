import React from "react";
import { Link } from "react-router";

const LoginBtn = (props) => {
  const { img, text } = props;
  return (
    <Link to="/" className="login-btn w-full">
      <button className=" flex gap-2 items-center justify-center w-full py-4 px-1 rounded-md border border-login-border text-brand-blue">
        <img src={img} alt={`${text}-icon`} />
        <p className="font-semibold">{`Sign in with ${text}`}</p>
      </button>
    </Link>
  );
};

export default LoginBtn;
