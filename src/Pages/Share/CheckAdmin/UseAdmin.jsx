import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
 const {user} = useContext(AuthContext)
 const token = localStorage.getItem('access-token')
 const {data: isAdmin,isLoading} = useQuery({
    queryKey:['isAdmin',user?.email],
    queryFn:async() => {
        const res = await fetch(`http://localhost:5000/users/checkadmin/${user?.email}`,{
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

