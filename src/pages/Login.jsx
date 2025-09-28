import Lottie from "lottie-react";
import loginAnimation from '../assets/register/register.json'
import { useContext } from "react";
import AuthContext from "../context/authcontext/AuthContext";
import Social from "./sharePage/Social";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {

    const location = useLocation();
    console.log(location);
    const from = location.state || '/'

    const { createSign } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createSign(email, password)
            .then(result => {
                console.log(result.user)
                Navigate(from);
            })
            .catch(error => {
                console.log(error.message)
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className="max-w-96" animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <Social></Social>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;