import { NavLink, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const job = useLoaderData();
    const { _id,title, jobType, category, description, company,company_logo } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm bg-gradient-to-r from-amber-300 to-lime-200 m-auto mb-5">
            <figure className="px-10 pt-10">
                <img
                    src={company_logo}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h2>{company}</h2>
                <p>{description}</p>
                <h3>{category}</h3>
                <h3>{jobType}</h3>
                <div className="card-actions">
                    <NavLink to={`/apply/${_id}`}><button className="btn btn-primary">Apply Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;