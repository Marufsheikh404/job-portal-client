import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/AuthHooks";

const JobApply = () => {
    const { id } = useParams();
    // custom hooks
    const { user } = useAuth();
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            email: user?.email || "",
            linkedIn,
            github,
            resume
        };

        fetch('http://localhost:5000/job-application', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/job-Application');
            });
    };
    return (

        <div className="card bg-base-100 w-full shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <label className="label w-full">LinkedIn Url</label>
                    <input type="url" name="linkedIn" className="input" placeholder="LinkedIn Url" />
                    <label className="label w-full">Github Url</label>
                    <input type="url" name="github" className="input" placeholder="GitHub Url" />
                    <label className="label w-full">Resume Url</label>
                    <input type="url" name="resume" className="input" placeholder="Resume Url" />
                    <button className="btn btn-neutral mt-4">Apply</button>
                </form>
            </div>
        </div>
    );
};

export default JobApply;