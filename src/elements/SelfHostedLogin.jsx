import React from "react";
import key from "../assets/img/key.png";
import LoginBtn from "../components/LoginBtn";
import gitlab from "../assets/img/gitlab.png";

const SelfHostedLogin = () => {
  return (
    <div className="min-h-80 flex flex-col gap-4 py-5 px-3 items-center">
      <LoginBtn img={gitlab} text="GitLab" />
      <LoginBtn img={key} text="SSO" />
    </div>
  );
};

export default SelfHostedLogin;
