import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseInstructor = () => {
 const {user} = useContext(AuthContext)
 const token = localStorage.getItem('access-token')
 const {data: isInstructor,isLoading} = useQuery({
    queryKey:['isInstructor',user?.email],
    queryFn:async() => {
        const res = await fetch(`http://localhost:5000/users/checkinstructor/${user?.email}`,{
            headers:{
                authorization:`bearer ${token}`
            }
        })
        return res.json()
    }
 })
 console.log(isInstructor)
 return {isInstructor,isLoading}
};

export default UseInstructor;