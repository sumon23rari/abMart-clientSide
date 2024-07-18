import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

export const axiosSecure=axios.create({
     baseURL:`https://ab-mart-ecom-server-side.vercel.app`
})
const useAxiosSecure = () => {
  const navigate=useNavigate();
  const {logOut}=useContext(AuthContext)
    // Add a request interceptor
  axiosSecure.interceptors.request.use((config)=>{
    const token=localStorage.getItem('abMartAccess-token');
    config.headers.authorization=`Bearer ${token}`
console.log('request stopped by interceptors');
return config;
  },(error)=>{
 // Do something with response error
 return Promise.reject(error);
  });
  // Add a response interceptor
  axiosSecure.interceptors.response.use((response)=>{
    return response;
  },async(error)=>{
    console.log(error,'errro dekhao amare')
    const status=error.response.status;
    console.log('status error in the interceptors',status);
    if (status===401 || status===403) {
      await logOut();
      navigate('/logIn')
    }
  })
    return axiosSecure;
};

export default useAxiosSecure;