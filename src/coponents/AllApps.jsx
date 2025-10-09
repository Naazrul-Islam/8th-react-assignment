import React from "react";
import { Link } from "react-router";

const AllApps = ({ singleApplication }) => {
  return (
    <Link to={`/apps/${singleApplication.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 hover:scale-105 transform">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v4h16v-4M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
                />
              </svg>
              {singleApplication.downloads >= 1000000
                ? `${(singleApplication.downloads / 1000000).toFixed(1)}M`
                : `${(singleApplication.downloads / 1000).toFixed(1)}K`}
            </div>

            <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.196-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
              {singleApplication.ratingAvg.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllApps;
