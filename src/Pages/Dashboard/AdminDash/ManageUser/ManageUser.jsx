import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Title from '../../../Share/ReuseTitle/Title';
import Swal from 'sweetalert2';
import TableBody from './TableBody';

const ManageUser = () => {
   
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/users')
            return result.json()
        }
    })



    return (
        <div className='my-20'>
            <Title 
            subTitle={'----- Users -----'}
            title={'Manage All Users'}
            ></Title>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <TableBody
                            key={user._id}
                            user={user}
                            refetch={refetch}
                            ></TableBody>)
                        }
                        
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;