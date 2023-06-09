import React from 'react';
import log from '../../assets/login/logbg.png'
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <div className="" style={{ backgroundImage: `url(${log})`, backgroundRepeat: 'no-repeat' }}>

                <div className='w-full flex items-center justify-center'>
                    <div className="w-1/2 border-2 p-10 mb-12 mt-[25vh]">
                        <h3 className='text-3xl text-center font-semibold'>Resister</h3>
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                            <div style={{justifyContent:'space-between'}} className="flex">
                                <div style={{width:'270px'}} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Name <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="text" placeholder="Name..." {...register("name", { required: true, maxLength: 80 })} />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                <div style={{width:'270px'}} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Email <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="email" placeholder="Email..." {...register("email", { required: true, maxLength: 80 })} />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                            </div>
                            <div style={{justifyContent:'space-between'}} className="flex">
                                <div style={{width:'270px'}} className="form-control  mr-4">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Password <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="password" placeholder="Name..." {...register("password", { required: true, maxLength: 80 })} />
                                    {errors.password && <span>This field is required</span>}
                                </div>
                                <div style={{width:'270px'}} className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold text-lg">Confirm Password <span className='text-warning'>*</span> </span>
                                    </label>
                                    <input className="input input-bordered w-full " type="password" placeholder="Confirm Password..." {...register("confirmpass", { required: true, maxLength: 80 })} />
                                    {errors.confirmpass && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Photo URL <span className='text-warning'>*</span> </span>
                                </label>
                                <input className="input input-bordered w-full " type="text" placeholder="Photo URL..." {...register("photo", { required: true, maxLength: 80 })} />
                                {errors.photo && <span>This field is required</span>}
                            </div>

                            <input className=' btn bg-[#B2AB8C] w-full text-white hover:text-orange-600 mt-4' type="submit" value='Resister' />
                            <p className='mt-2 '>Allready have an account? <Link className='font-bold text-orange-600' to='/login' >Please Login</Link></p>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">

                            <div className="divider">OR</div>

                        </div>
                        <div className='text-center'>
                            <button className='btn btn-circle btn-outline hover:text-orange-600'><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;