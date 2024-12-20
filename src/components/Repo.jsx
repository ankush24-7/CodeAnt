import React from "react";
import { RepoIcons } from "../assets/icons";

const Repo = (props) => {
  const { title, visibility, language, size, updated } = props;
  return (
    <div className="p-3 border-b-[1.5px] border-border-gray hover:bg-repo-hover">
      <span className="flex items-center gap-2">
        <h2 className="font-medium">{title}</h2>
        <span className="px-2 rounded-full border border-badge-border bg-badge-blue">
          <p className="text-sm text-badge-text">{visibility}</p>
        </span>
      </span>
      <div className="flex gap-5 pt-2 text-[13px] text-nav-text sm:gap-8">
        <span className="flex items-center gap-2">
          <p>{language}</p>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-blue"></span>
        </span>

        <span className="flex items-center gap-2">
          <RepoIcons.Database />
          <p>{`${size} KB`}</p>
        </span>

        <p>{`Updated ${updated} day ago`}</p>
      </div>
    </div>
  );
};

export default Repo;
