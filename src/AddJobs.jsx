import { object } from 'motion/react-client';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddJobs = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());

        // ✅ destructure salary fields
        const { max, min, currency, requirements, responsibilites, ...rest } = initialData;

        // ✅ make arrays
        const requirementsArray = requirements.split("\n");
        const responsibilitesArray = responsibilites.split("\n");

        // ✅ final object
        const finalData = {
            ...rest,
            salaryRange: { max, min, currency },
            requirements: requirementsArray,
            responsibilites: responsibilitesArray,
        };

        // ✅ send finalData
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finalData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("✅ Job Added:", data);
                navigate('/myPostedJob');
            })
            .catch(err => console.error(" Error adding job:", err));
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="fieldset">
                <div className='flex items-center justify-center flex-col gap-2'>

                    <label className="label text-2xl font-bold">Job Title</label>
                    <input type="text" name='title' className="input" placeholder="Job title" />

                    <label className="label text-2xl  font-bold">Job-Location</label>
                    <input type="text" name='location' className="input " placeholder="Location" />

                    <label className="label text-2xl  font-bold">Job-Type</label>
                    <select defaultValue="Pick a text editor" name='job-type' className="select select-primary">
                        <option disabled={true}>Add your jobs type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>half-time</option>
                    </select>

                    <label className="label text-2xl  font-bold">Job-field</label>
                    <select defaultValue="Pick a text editor" name='job-field' className="select select-primary">
                        <option disabled={true}>Add jobs field</option>
                        <option>Engineering</option>
                        <option>Freenancing</option>
                        <option>Tecaching</option>
                    </select>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end'>
                        <div>
                            <label className='label'>
                                <span className='label-text font-bold text-2xl'>Salary Range</span>
                            </label>
                            <input type="text " name='min' placeholder='Min' className='input input-bordered' required />
                        </div>

                        <div>
                            <input type="text " name='max' placeholder='Max' className='input input-bordered' required />
                        </div>
                        <select defaultValue="Pick a text editor" name='currency' className="select select-primary">
                            <option disabled={true}></option>
                            <option>usd</option>
                            <option>usdt</option>
                            <option>euro</option>
                        </select>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>Description</span>
                        </label>
                        <fieldset className="fieldset">
                            <textarea className="textarea h-24 w-96" name='description' placeholder="Description"></textarea>
                        </fieldset>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>Company</span>
                        </label>
                        <input type="text " name='company' placeholder='company' className='input input-bordered' required />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>Requirements</span>
                        </label>
                        <fieldset className="fieldset">
                            <textarea className="textarea h-24 w-96" name='requirements' placeholder="Requirements" required></textarea>
                        </fieldset>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>Responsibilites</span>
                        </label>
                        <fieldset className="fieldset">
                            <textarea className="textarea h-24 w-96" name='responsibilites' placeholder="Responsibilites" required></textarea>
                        </fieldset>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>HR Name</span>
                        </label>
                        <input type="text " name='hr_name' placeholder='HR Name' className='input input-bordered' required />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>HR Email</span>
                        </label>
                        <input type="text " name='hr_email' placeholder='HR Email' className='input input-bordered' required />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>DateLine</span>
                        </label>
                        <input type="date" name='dateline' placeholder='DateLine' className='input input-bordered' required />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='label-text font-bold text-2xl'>Company Logo</span>
                        </label>
                        <input type="url " name='company_logo' placeholder='Company Logo Url' className='input input-bordered' required />
                    </div>

                </div>
                <button className="btn btn-neutral mt-4">Add</button>
            </form>
        </div>
    );
};

export default AddJobs;