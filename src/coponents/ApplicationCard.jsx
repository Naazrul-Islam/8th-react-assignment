import React from "react";
import { Link } from "react-router";

const ApplicationCard = ({ singleApplication }) => {
  return (
    <Link to={`/apps/${singleApplication.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden lg:hover:scale-105 transition-shadow duration-300 p-4">
        <div className="lg:w-[350px]  bg-gray-200">
          <img
            src={singleApplication.image}
            alt={singleApplication.title}
            className="lg:w-[300px] lg:h-[300px] object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {singleApplication.title}
          </h2>

          <div className="flex items-center justify-between mt-2">
            
            <div className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-md text-sm font-medium">
              {/* <FaCloudDownloadAlt /> */}
              {singleApplication.downloads >= 1000000
                ? `${(singleApplication.downloads / 1000000).toFixed(1)}M`
                : `${(singleApplication.downloads / 1000).toFixed(1)}K`}
            </div>
            <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-sm font-medium">
              
              {singleApplication.ratingAvg.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApplicationCard;
