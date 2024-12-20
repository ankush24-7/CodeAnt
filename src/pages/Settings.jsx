import React from "react";
import Navbar from "../components/Navbar";

const Settings = () => {
  return (
    <div className="flex flex-col h-full w-full sm:flex-row">
      <Navbar />
      <div className="body h-full">
        <div className="container h-full">
          <div className="px-3 pt-4">
            <div className="header">
              <div>
                <h1 className="text-xl font-semibold leading-7 text-brand-blue">
                  Settings
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
