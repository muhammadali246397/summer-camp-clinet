import React from 'react';
import Title from '../../../Share/ReuseTitle/Title';
import { useQuery } from '@tanstack/react-query';
import ClassTable from './ClassTable';

const ManageClass = () => {
    const token = localStorage.getItem('access-token')
    const { data: allclasses = [], refetch } = useQuery({
        queryKey: ['allclasses'],
        queryFn: async () => {
            const res = await fetch('https://assignment-twelve-server-muhammadali246397.vercel.app/postclass',{
                headers:{
                    authorization:`bearer ${token}`
                }
            })
            return res.json()
        }

    })
    console.log(allclasses)
    return (
        <div className='my-20'>
            <Title
                subTitle={'------ All Class -----'}
                title={'Manage All Instructor Class'}
            ></Title>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr style={{backgroundColor:'lavenderblush'}} className='font-bold'>
                                <th>
                                    <label>
                                       #
                                    </label>
                                </th>
                                <th>Class Img</th>
                                <th>Class Name</th>
                                <th>Ins: Name</th>
                                <th>Ins: Email</th>
                                <th>Status</th>
                                <th>Price</th>
                                <th>Avilable</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allclasses?.map((classes,index) => <ClassTable 
                                key={classes._id}
                                classes={classes}
                                index={index}
                                refetch={refetch}
                                ></ClassTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;