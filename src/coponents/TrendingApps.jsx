import React from "react";
import { Link } from "react-router";
import useApplication from "./useApplication";
import ApplicationCard from "./ApplicationCard";

const TrendingApps = () => {
  const { application, loading, error } = useApplication();
  // console.log(application);

  const featureApplication = application.slice(0, 8);
  // console.log(featureApplication);
   if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-[1440px] mx-auto my-10  ">
      <h1>Trending Apps</h1>
      <p>Explore All Trending Apps on the Market developed by us</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {featureApplication.map((singleApplication) => (
          <ApplicationCard
            key={singleApplication.id}
            singleApplication={singleApplication}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
        to="/apps"
        className="bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white px-4 py-4 rounded-lg my-10 items-center "
      >
        Show All
      </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
