import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Mainlayout from "../mainlayout/Mainlayout";
import Register from "../pages/Register";
import Lottie from "lottie-react";
import errorPage from "../assets/errorPage/Error 404.json"
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import JobApply from "../pages/JobApply";
import JobApplication from "../pages/jobApplication/JobApplication";
import AddJobs from "../AddJobs";
import MyPostedJob from "../pages/MyPostedJob";
import ViewApplication from "../pages/ViewApplication";
import { param } from "motion/react-client";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <Lottie className="max-w-96 mx-auto" animationData={errorPage}></Lottie>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/apply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/jobs/${params.id}`);
                    if (!res.ok) throw new Error('Failed to fetch job');
                    const data = await res.json();
                    return data;
                }
            },
            {
                path: '/job-Application',
                element: <PrivateRoute><JobApplication></JobApplication></PrivateRoute>
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/myPostedJob',
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path: '/viewApplication/:job_id',
                element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
                loader: ({ params }) =>fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
            }
        ]
    }
])

export default Router;

