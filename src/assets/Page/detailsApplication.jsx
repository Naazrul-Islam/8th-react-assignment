import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import useApplication from '../../coponents/useApplication';

const detailsApplication = () => {
    const {id} = useParams();
    console.log(id);
    
    const {application, loading, error}=useApplication();
    console.log(application);
    
    return (
        <div>
            
        </div>
    );
};

export default detailsApplication;