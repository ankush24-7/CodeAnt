import React from "react";
import { Logo } from "../assets/icons";
import { SignInPageIcons } from "../assets/icons";

const LeftSection = () => {
  return (
    <div className="w-1/2 border-r border-border-gray hidden sm:block">
      <SignInPageIcons.Subtract className="absolute h-60 bottom-0 -left-[35px] 2xl:scale-[2] 2xl:-translate-y-32 2xl:translate-x-28" />
      <div className="flex flex-col relative top-[40%] -translate-y-1/2 w-[60%] min-w-fit mx-auto rounded-2xl shadow-[0_0_24px_0_rgba(8,23,53,0.161)] border border-border-gray">
        <div className="flex gap-2 p-4 items-center border-b border-border-gray">
          <Logo />
          <h2 className="font-bold text-brand-blue">
            AI to Detect & Autofix Bad Code
          </h2>
        </div>
        <div className="flex gap-6 items-center justify-between p-4 py-6">
          <div className="flex flex-col flex-1 items-center justify-center">
            <span className="font-bold text-brand-blue">30+</span>
            <p className="text-xs text-center">Language Support</p>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center">
            <span className="font-bold text-brand-blue">10K+</span>
            <p className="text-xs text-center">Developers</p>
          </div>
          <div className="flex flex-col flex-1 items-center justify-center">
            <span className="font-bold text-brand-blue">100K+</span>
            <p className="text-xs text-center">Hours Saved</p>
          </div>
        </div>
        <div className="flex flex-col absolute -bottom-36 -right-5 w-[58%] py-4 px-6 rounded-2xl shadow-[0_0_24px_0_rgba(8,23,53,0.161)] border border-border-gray bg-white">
          <div className="flex justify-between items-center">
            <SignInPageIcons.PieChart />
            <div className="flex flex-col min-w-fit items-center">
              <span className="flex items-center">
                <SignInPageIcons.ChevronUp />
                <p className="text-sm font-semibold text-sec-blue">14%</p>
              </span>
              <p className="text-xs">This Week</p>
            </div>
          </div>
          <span className="flex flex-col min-w-fit pt-3">
            <p className="text-xs font-bold text-prim-dark">Issues Fixed</p>
            <p className="text-3xl font-bold text-prim-dark">500K+</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
