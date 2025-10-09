import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-16 gap-5'>
            <img src="/error-404.png" alt="" />
            <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
            <Link to="/"><button className='btn btn-primary hover:bg-[#632EE3]'>Go Home</button></Link>
        </div>
    );
};

export default Error;