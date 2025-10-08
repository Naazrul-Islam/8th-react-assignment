import React from 'react';
import { Link } from 'react-router';

const ApplicationError = ({onShowAll}) => {
    return (
        <div className='flex flex-col items-center justify-center  p-4 my-10 gap-5 text-center max-w-[1440px] mx-auto'>
            <div className=''>
                <img src="/AppError.png" alt="" className='w-[300px] mx-auto mb-10'/>
            <h1 className='text-3xl font-bold text-red-600'>OPPS!! APP NOT FOUND</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <div className="flex justify-center">
        <Link
        to="/apps"
        className="bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white px-4 py-4 rounded-lg my-10 items-center " onClick={onShowAll}
      >
        Show All
      </Link>
      </div>
            </div>
        </div>
    );
};

export default ApplicationError;