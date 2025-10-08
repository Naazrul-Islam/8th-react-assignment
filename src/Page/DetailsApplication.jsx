import React from "react";
import { Link, useParams } from "react-router";
import useApplication from "../coponents/useApplication";

const DetailsApplication = () => {
  const { id } = useParams();
  const { application, loading, error } = useApplication();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const app = application.find(
    (singleApplication) => singleApplication.id == Number(id)
  );

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex my-20 gap-20">
        <div>
          <img src="/clock.png" alt="" className="lg:w-[300px] w-[200px] flex justify-center items-center my-10" />
        </div>
        <div>
          <div className="my-10">
            <h1 className="text-4xl font-bold">SmPlan:ToDo List with Reminder</h1>
            <p className="text-gray-400 text-xl">Developed by productive.io</p>
          </div>
          <hr />
          <div className="flex my-10 gap-20 ">
            <div className="">
              <img src="/icon.png" alt="" className="w-[40px]" />
              <p>Downloads</p>
              <h1 className="text-4xl font-bold">8M</h1>
            </div>
            <div>
              <img src="/iconR.png" alt="" className="w-[40px]" />
              <p>Average Ratings</p>
              <h1 className="text-4xl font-bold">8M</h1>
            </div>
            <div>
              <img src="/iconRe.png" alt="" className="w-[40px]" />
              <p>Total Revews</p>
              <h1 className="text-4xl font-bold">8M</h1>
            </div>
          </div>
          <Link  className="bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white px-4 py-2 rounded-lg my-10 items-center" >Install Now (291 MB)</Link>
        </div>
        
      </div>

    </div>
  );
};

export default DetailsApplication;
