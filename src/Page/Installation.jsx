import React from "react";
import  { useEffect, useState } from "react";
import {
  getInstalledApps,
  removeInstalledApp,
} from "../localStorage/localStorage";
import InstallationCard from "../coponents/InstallationCard";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../coponents/Footer";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortType, setSortType] = useState("none");
  console.log(sortType);
  

  useEffect(() => {
    const stored = getInstalledApps();
    setApps(stored);
  }, []);


  const handleUninstall = (id) => {
    removeInstalledApp(id);
    setApps((prev) => prev.filter((app) => app.id !== id));
     toast.success("App Uninstalled!");
  };

  const handleSort = (type) => {
    setSortType(type);
    const sorted = [...apps].sort((a, b) => {
      if (type === "High-Low") return b.downloads - a.downloads;
      if (type === "Low-High") return a.downloads - b.downloads;
      return 0;
    });
    setApps(sorted);
  };

  return (
    <div className="max-w-[1440px] mx-auto text-center p-4 ">
      <div className="flex flex-col items-center justify-center p-4 my-10 gap-5">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p>Explore all the apps you’ve installed.</p>
      </div>

      <div className="flex justify-between items-center px-10 mb-6">
        <h1 className="text-2xl font-bold">
          <span>{apps.length}</span> Apps Found
        </h1>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 bg-blue-600 text-white">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-blue-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handleSort("High-Low")}>High-Low</button>
            </li>
            <li>
              <button onClick={() => handleSort("Low-High")}>Low-High</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Cards */}
      <div className="gap-6 px-10">
        {apps.map((app) => (
          <InstallationCard key={app.id} app={app} handleUninstall={handleUninstall}></InstallationCard>
        ))}
         <ToastContainer />
         <Footer></Footer>
      </div>
    </div>
  );
};

export default Installation;

