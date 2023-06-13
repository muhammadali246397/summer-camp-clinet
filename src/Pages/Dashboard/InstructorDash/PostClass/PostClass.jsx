import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Title from '../../../Share/ReuseTitle/Title';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const PostClass = () => {
    const {user} = useContext(AuthContext)
    
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
       const {className,available, classImg,status, email, instructorName, price} = data
        const result = {className,available, classImg,status, email, instructorName, price,image:user?.photoURL}
        fetch('http://localhost:5000/class',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(result)
           
        })
       .then(res => res.json())
       .then(datas => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'pending',
            showConfirmButton: false,
            timer: 1000
        })
        if(datas.insertedId){
            reset()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Added successfully',
                showConfirmButton: false,
                timer: 1000
            })
        }
       })
    }
    return (
        <div className='my-10'>
            <Title
                subTitle={'----- Add New -----'}
                title={'Published New class'}
            ></Title>

            <div>
                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                    <div style={{ justifyContent: 'space-between' }} className="flex">
                        <div style={{ width: '80%' }} className="form-control  mr-4">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Class Name <span className='text-warning'>*</span> </span>
                            </label>
                            <input className="input input-bordered w-full " type="text" placeholder="Class Name..." {...register("className", { required: true, maxLength: 80 })} />
                            {errors.className && <span>This field is required</span>}
                        </div>
                        <div style={{ width: '80%' }} className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Instructor Name <span className='text-warning'></span> </span>
                            </label>
                            <input defaultValue={user?.displayName} className="input input-bordered w-full " type="text" placeholder="Instructor Name..." {...register("instructorName")} />
                           
                        </div>
                    </div>
                    <div style={{ justifyContent: 'space-between' }} className="flex">
                        <div style={{ width: '80%' }} className="form-control  mr-4">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Instructor Email <span className='text-warning'></span> </span>
                            </label>
                            <input defaultValue={user?.email} className="input input-bordered w-full " type="email" placeholder="Instructor Email..." {...register("email")} />
                           
                        </div>
                        <div style={{ width: '80%' }} className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Price <span className='text-warning'>*</span> </span>
                            </label>
                            <input className="input input-bordered w-full " type="number" placeholder="Price..." {...register("price", { required: true, maxLength: 80 })} />
                            {errors.price && <span>This field is required</span>}
                        </div>
                    </div>
                    <div style={{ justifyContent: 'space-between' }} className="flex">
                        <div style={{ width: '80%' }} className="form-control  mr-4">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Available seats <span className='text-warning'>*</span> </span>
                            </label>
                            <input className="input input-bordered w-full " type="number" placeholder="Available seats..." {...register("available", { required: true, maxLength: 80 })} />
                            {errors.available && <span>This field is required</span>}
                        </div>
                        <div style={{ width: '80%' }} className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Status <span className='text-warning'>*</span> </span>
                            </label>
                            <input defaultValue='pending' className="input input-bordered w-full " type="text" placeholder="Price..." {...register("status", { required: true, maxLength: 80 })} />
                            {errors.status && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Class Image <span className='text-warning'>*</span> </span>
                        </label>
                        <input className="input input-bordered w-full " type="text" placeholder="Class Image..." {...register("classImg", { required: true, })} />
                        {errors.classImg && <span>This field is required</span>}
                    </div>

                    <input className=' btn bg-[#B2AB8C] w-full text-white hover:text-orange-600 mt-4' type="submit" value='ADD CLASS' />
                   
                </form>
            </div>

        </div>
    );
};

export default PostClass;