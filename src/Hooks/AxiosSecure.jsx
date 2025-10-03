import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './AuthHooks';
const {} = useAuth();

const axiosInstant = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

const AxiosSecure = () => {
    useEffect(()=>{
        axiosInstant.interceptors.response.use(response=>{
            return response;
        } , error =>{
            if(error.status === 401 || error.status ===403){

            }
            return Promise.reject(error);
        })
    },[])

   return axiosInstant;
};

export default AxiosSecure;