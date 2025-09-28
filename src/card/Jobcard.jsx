import React from 'react';
import { NavLink } from 'react-router-dom';

const Jobcard = ({ job }) => {
    // console.log(job)
    const { _id ,title, location, jobtype, category, salaryRange, description, company, requirements, company_logo } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex  gap-3 items-center'>
                <figure>
                    <img
                        className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <p className='font-bold text-[24px]'>{title}</p>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <p className='text-gray-300 text-wrap text-sm'>{description}</p>
                <div>
                    <h1 className='font-bold text-[16px]'>Requirements</h1>
                    {
                        requirements?.map(require => <p className='text-emerald-500'>{require}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <div>
                        <NavLink to={`/jobs/${_id}`}><button className='btn bg-green-500 py-1 px-2 rounded-lg'>Apply</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobcard;