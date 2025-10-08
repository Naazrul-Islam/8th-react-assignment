import React from "react";

const InstallationCard = ({ app, handleUninstall }) => {
  return (
    <div className="card card-side bg-base-100 shadow-sm flex justify-between p-5 mb-10 items-center">
      <div className="flex gap-10">
        <div className="flex justify-between">
          <img
            src={app.image}
            alt="Apps" className="w-[80px] h-[80px] rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="card-title">{app.title}</h2>
          <div className="flex gap-10">
            <h1>{app.downloads}</h1>
            <h1>Rating : {app.ratingAvg}</h1>
            <h1>{app.size}MB</h1>
          </div>
        </div>
        
      </div>
      <div className="">
          <button onClick={() => handleUninstall(app.id)} className="btn btn-primary">Uninstall</button>
        </div>
    </div>
  );
};

export default InstallationCard;
