import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/AuthHooks';
import { NavLink } from 'react-router-dom';

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email]);
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job-Title</th>
                        <th>Description</th>
                        <th>applicationCount</th>
                        <th>viewApplication</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{job.company}</td>
                            <td>{job.title}</td>
                            <td>{job.description}</td>
                            <td>{job.applicationCount}</td>
                            <td>
                               <NavLink to={`/viewApplication/${job._id}`}><button className='btn btn-link'>viewApplication</button></NavLink>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPostedJob;