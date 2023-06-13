import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import axios from 'axios';
import Title from '../../../Share/ReuseTitle/Title';

const MyClass = () => {
    const [clases, setClases] = useState()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:5000/myclass?email=${user?.email}`)
            .then((response) => {
                // Handle successful response
                const data = response.data
               
                setClases(data)
            })
    }, [user])

    return (
        <div className='my-20'>
            <Title 
            subTitle={'----- My class -----'}
            title={'My All Classes List'}
            ></Title>
            <div>
            <h2 className='text-4xl my-4'>Total Class : {clases.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-lg'>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Image</th>
                            <th>name</th>
                            <th>Status</th>
                            <th>Students</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clases.map((clas,index) => <tr key={clas._id}>
                                <th>
                                    <label>
                                    {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={clas.classImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {clas.className}
                                </td>
                                <td>
                                    {clas.status}
                                </td>
                                <td className='text-orange-600'>{clas.available}</td>
                                <th>
                                    <button className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">Feedback</button>
                                    <button  className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">Update</button>
                                </th>
                            </tr>)
                        }
                  </tbody>
            </table>
            </div>
            </div>
        </div>
    );
};

export default MyClass;