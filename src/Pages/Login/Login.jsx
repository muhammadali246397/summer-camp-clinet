import React from 'react';
import logimg from '../../assets/login/log.png'
import log from '../../assets/login/logbg.png'
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <div className="" style={{ backgroundImage: `url(${log})`,backgroundRepeat:'no-repeat' }}>

                <div className='w-full flex items-center justify-center'>
                    <div className="w-1/3 border-2 p-10 mb-12 mt-[25vh]">
                        <h3 className='text-3xl text-center font-semibold'>Login</h3>
                        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Email <span className='text-warning'>*</span> </span>
                                </label>
                                <input className="input input-bordered w-full " type="text" placeholder="Email..." {...register("email", { required: true, maxLength: 80 })} />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-lg">Password <span className='text-warning'>*</span> </span>
                                </label>
                                <input className="input input-bordered w-full " type="text" placeholder="Password..." {...register("password", { required: true, maxLength: 80 })} />
                                {errors.password && <span>This field is required</span>}
                            </div>

                            <input className=' btn bg-[#B2AB8C] w-full text-white hover:text-orange-600 mt-4' type="submit" value='Login' />
                            <p className='mt-2 '>New to our website? <Link className='font-bold text-orange-600' to='/signup' >Please Resister</Link></p>
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

export default Login;