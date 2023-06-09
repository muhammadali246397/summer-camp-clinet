import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import user from '../../../assets/user.png'

const Navbar = () => {
    const navitem = <>
       <li><NavLink className='font-bold hover:text-white' to='/'>HOME</NavLink></li>
       <li><NavLink className='font-bold hover:text-white' to='/class'>CLASSES</NavLink></li>
       <li><NavLink className='font-bold hover:text-white' to='/insntractor'>INSTRACTORS</NavLink></li>
       <li><NavLink className='font-bold hover:text-white' to='/dashborad'>DASHBOARD</NavLink></li>
       <li><NavLink className='font-bold hover:text-white' to='/login'>LOGIN</NavLink></li>
    </>
    return (
        <div className=''>
            <div className="navbar bg-[#146C94] fixed z-10 max-w-7xl mx-auto bg-opacity-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navitem}
                        </ul>
                    </div>
                    <Link><img className='w-3/4' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navitem}
                    </ul>
                </div>
                <div className="">
                    <img className='w-16 rounded-full ml-4' src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;