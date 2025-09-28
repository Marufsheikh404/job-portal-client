import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
    const applications = useLoaderData();

    const handleStatus = (e, id) => {
        console.log(e.target.value, id);
        const data = {
            status: e.target.value
        };

        fetch(`http://localhost:5000/job-application/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log("Update response:", result);
                // চাইলে এখানে UI আপডেট করতে পারো (reload না করে)
            })
            .catch(err => console.error("Update failed:", err));
    };
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Update Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applications.map((app, index) => (
                            <tr key={app._id} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{app.email}</td>
                                <td>
                                    <select onChange={(e) => handleStatus(e, app._id)} defaultValue={app.status || "Change Status"} className="select appearance-none">
                                        <option disabled={true}>Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ViewApplication;