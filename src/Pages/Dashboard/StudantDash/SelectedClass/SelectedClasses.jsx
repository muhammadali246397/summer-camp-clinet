import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Title from '../../../Share/ReuseTitle/Title'
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SelectedClasses = () => {
    const { user } = useContext(AuthContext)
    const token = localStorage.getItem('access-token')
    const { data: addClass = [], refetch } = useQuery({
        queryKey: ['addClass', user?.email],
        queryFn: async () => {
            const data = await fetch(`http://localhost:5000/addcls?email=${user?.email}`,{
                headers:{
                    authorization:`bearer ${token}`
                }
            })
            return data.json()
        }
    })

    const deleteClass = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addclass/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                 if(data.deletedCount > 0){
                    console.log(data)
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                 }
                })
            }
          })
    }
    return (
        <div className='my-14'>
            <Title
                subTitle={'----- Class List -----'}
                title={'My Selected Classes'}
            ></Title>
            <h2 className='text-4xl my-4'>Total Class : {addClass.length}</h2>
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
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addClass.map((clas,index) => <tr key={clas._id}>
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
                                    {clas.instructorName}
                                </td>
                                <td className='text-orange-600'>${clas.price}</td>
                                <th>
                                    <button className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">Pay</button>
                                    <button onClick={() => deleteClass(clas._id)} className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                  </tbody>
            </table>
            </div>
        </div>
    );
};

export default SelectedClasses;