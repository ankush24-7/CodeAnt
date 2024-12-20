import React, {useState} from "react";
import Repo from "../components/Repo";
import Navbar from "../components/Navbar";
import { Data } from "../utils/RepoData";
import { RepositoryPageIcons } from "../assets/icons";
import { render } from "react-dom";

const Body = () => {
  const [repoData, setRepoData] = useState(Data);

  function renderRepo(repoData) {
    let repoArray = [];
    repoData.map((repo) => {
      repoArray.push(
        <Repo
          key={repo.id}
          title={repo.title}
          visibility={repo.visibility}
          language={repo.language}
          size={repo.size}
          updated={repo.updated}
        />
      );
    });
    return repoArray;
  }

  function handleChange(e) {
    if(e.target.value === ""){
      setRepoData(Data);
      return;
    }
    let filteredData = Data.filter((repo) => {
      return repo.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRepoData(filteredData);
  }

  return (
    <div className="flex flex-col h-full w-full sm:flex-row">
      <Navbar />
      <div className="body h-full">
        <div className="container h-full">
          <div className="px-3 pt-2 pb-4 border-b border-border-gray">
            <div className="header">
              <div>
                  <h1 className="text-xl font-semibold leading-7 text-brand-blue">
                  Repositories
                  </h1>
                  <p className="text-xs text-nav-text">{`${Data.length} total repositories`}</p>
              </div>
              <div className="flex gap-4 py-3">
                  <button 
                    onClick={renderRepo(Data)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-md shadow-sm border border-btn-border hover:bg-blue-50">
                    <RepositoryPageIcons.Refresh />
                    <span className="text-sm text-nav-text">Refresh All</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-md shadow-sm bg-primary-blue hover:bg-[#1064D1]">
                    <RepositoryPageIcons.Plus />
                    <span className=" text-sm text-white">Add Repository</span>
                  </button>
              </div>
            </div>

            <div className="search-bar w-full flex items-center gap-4 px-3 py-1.5 rounded-lg drop-shadow-sm border border-btn-border">
              <RepositoryPageIcons.Search className="absolute" />
              <input
                type="text"
                placeholder="Search Repositories"
                onChange={handleChange}
                className="w-full pl-7 bg-transparent focus:outline-none placeholder:text-sm text-brand-blue placeholder:text-nav-text"
              />
            </div>
          </div>

          <div className="repo-list h-full overflow-y-scroll vertical-scrollbar">
            <div>{renderRepo(repoData)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
