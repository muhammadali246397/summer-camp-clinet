import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
 const {user} = useContext(AuthContext)
 const token = localStorage.getItem('access-token')
 const {data: isAdmin,isLoading} = useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async() => {
        const res = await fetch(`https://assignment-twelve-server-muhammadali246397.vercel.app/users/checkadmin/${user?.email}`,{
            headers:{
                authorization:`bearer ${token}`
            }
        })
        return res.json()
    }
 })

 return {isAdmin,isLoading}
};

export default UseAdmin;

