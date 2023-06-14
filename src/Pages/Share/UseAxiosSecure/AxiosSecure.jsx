import axios from 'axios';
import React, { useEffect } from 'react';


    const axiosSecure = axios.create({
        baseUrl:`http://localhost:5000`
    })

    const UseAxiosSecure = () => {
        useEffect(() => {
            axiosSecure.interceptors.request.use((req) => {
                const token = localStorage.getItem('access-token')
                if(token){
                    req.headers.authorization =`bearer ${token}`
                }
                return req;
            })
            axiosSecure.interceptors.response.use(response => response,
                error => {
                    if(error.response && (error?.response.status === 403 || error?.response.status === 401)){
                        console.log('forbiden access from axios secure')
                    }
                }
                )
        },[])
        return [axiosSecure];
    }
  

export default UseAxiosSecure;