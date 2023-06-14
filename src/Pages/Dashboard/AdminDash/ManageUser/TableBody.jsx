import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TableBody = ({user,refetch,index}) => {
    
    const [disabled, setDisaled] = useState(user.role === 'admin' )
    const [insdisabled, setInsDisabled] = useState(user.role === 'instructor')
   
    const makeAdmin = (user) => {
        console.log(user.role)
       
       
        const data = user._id
        fetch(`http://localhost:5000/users/admin/${data}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            refetch();
          
          
            if(data.modifiedCount){
               setDisaled(true)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an admin`,
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }


    const makeInstructor = (user) => {

        console.log(user)
        const data = user._id
        fetch(`http://localhost:5000/users/instructor/${data}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            if(data.modifiedCount){
                setInsDisabled(true)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an admin`,
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
    return (
        
            <tr>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.userEmail}</td>
                <td>{user?.role}</td>
                <td>
                    <button disabled={disabled} onClick={() => makeAdmin(user)} className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">make admin</button>
                    <button disabled={insdisabled} onClick={() => makeInstructor(user)} className="btn bg-[#B2AB8C] text-white hover:text-orange-600 btn-xs">make instructor</button>
                </td>
            </tr>
       
    );
};

export default TableBody;