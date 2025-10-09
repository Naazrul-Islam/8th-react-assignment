import React from 'react';

const Description = ({app}) => {
    return (
        <div className='my-10 max-w-[1440px] mx-auto '>
            <h1 className='text-2xl font-bold mb-5 '>Description</h1>
          <h1 className='px-5 '>{app.description}</h1>  
        </div>
    );
};

export default Description;