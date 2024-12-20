import React from "react";
import LoginBtn from "../components/LoginBtn";
import github from "../assets/img/github.png";
import gitlab from "../assets/img/gitlab.png";
import bitBucket from "../assets/img/bitBucket.png";
import azureDevops from "../assets/img/azureDevops.png";

const SaasLogin = () => {
  return (
    <div className="flex flex-col gap-4 py-5 px-3 items-center">
      <LoginBtn img={github} text="Github" />
      <LoginBtn img={bitBucket} text="Bitbucket" />
      <LoginBtn img={azureDevops} text="Azure Devops" />
      <LoginBtn img={gitlab} text="GitLab" />
    </div>
  );
};

export default SaasLogin;
