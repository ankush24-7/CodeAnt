import React from "react";
import SaasLogin from "../elements/SaasLogin";
import LeftSection from "../elements/LeftSection";
import BrandHeader from "../components/BrandHeader";
import SelfHostedLogin from "../elements/SelfHostedLogin";

const SignIn = () => {
  const [isSaaS, setIsSaaS] = React.useState(true);
  return (
    <div className="sign-in-page h-full w-full"> 
      <LeftSection /> 
      <div className="h-full flex flex-col gap-4 px-4 items-center justify-center w-full sm:w-1/2 2xl:max-w-[600px] 2xl:ml-60">
        <div className="w-full pb-2 pt-5 rounded-lg shadow-sm border border-border-gray">
          <div className="flex flex-col pb-5 px-3 gap-6 items-center border-b border-border-gray">
            <BrandHeader />
            <h1 className="text-xl font-semibold text-brand-blue">
              Welcome to CodeAnt AI
            </h1>
            <div className="flex w-full border border-border-gray rounded-lg">
              <button
                className={`w-1/2 px-5 py-2.5 rounded-lg font-semibold ${isSaaS ? "bg-primary-blue text-white" : "bg-white text-nav-text"}`}
                onClick={() => setIsSaaS(true)}>
                <p>SAAS</p>
              </button>
              <button
                className={`w-1/2 px-5 py-2.5 rounded-lg font-semibold ${!isSaaS ? "bg-primary-blue text-white" : "bg-white text-nav-text"}`}
                onClick={() => setIsSaaS(false)}>
                <p>Self Hosted</p>
              </button>
            </div>
          </div>

          {isSaaS ? <SaasLogin /> : <SelfHostedLogin />}
        </div>
            
        <p className="text-brand-blue text-center text-sm">
          By signing up you agree to the{" "}
          <span className="text-brand-blue font-bold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
