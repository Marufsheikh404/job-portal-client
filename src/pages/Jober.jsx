import React, { useEffect, useState } from 'react';
import Jobcard from '../card/Jobcard';

const Jober = () => {
    const [jobs , setJobs] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
        });
    },[])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {
                jobs.map(job =><Jobcard key={job._id} job={job}></Jobcard>)
            }
        </div>
    );
};

export default Jober;