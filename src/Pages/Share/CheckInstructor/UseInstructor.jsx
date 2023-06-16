import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {
 const {user} = useContext(AuthContext)
 const token = localStorage.getItem('access-token')
 const {data: isInstructor,isLoading} = useQuery({
    queryKey:['isInstructor',user?.email],
    queryFn:async() => {
        const res = await fetch(`https://assignment-twelve-server-muhammadali246397.vercel.app/users/checkinstructor/${user?.email}`,{
            headers:{
                authorization:`bearer ${token}`
            }
        })
        return res.json()
    }
 })

 return {isInstructor,isLoading}
};

export default UseInstructor;