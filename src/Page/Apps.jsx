import React, { useState } from "react";
import { Link } from "react-router";
import useApplication from "../coponents/useApplication";
import AllApps from "../coponents/AllApps";
import ApplicationError from "../coponents/ApplicationError";
import Footer from "../coponents/Footer";
import AnimatedSpinner from "../coponents/AnimatedSpinner";

const Apps = () => {
  const { application, loading, error } = useApplication();

  const [search, setSearch] = useState("");
  const trim = search.trim().toLowerCase();
  const searchApplication = trim
    ? application.filter((singleApplication) =>
        singleApplication.title.toLowerCase().includes(trim)
      )
    : application;

  if (loading) return <AnimatedSpinner></AnimatedSpinner>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div className="flex flex-col items-center justify-center  p-4 my-10 gap-5">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          ({searchApplication.length}) Apps Found
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 items-center justify-center">
        {searchApplication.length > 0 ? (
          searchApplication.map((singleApplication) => (
            <AllApps
              key={singleApplication.id}
              singleApplication={singleApplication}
            />
          ))
        ) : (
          <div className="col-span-full flex items-center justify-center">
            <ApplicationError onShowAll={() => setSearch("")} />
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
    
  );
};

export default Apps;
