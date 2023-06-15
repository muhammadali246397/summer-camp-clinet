import React from 'react';
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <div className='my-20'>
            <footer style={{ background: 'lavenderblush' }} className=" p-10">
                <div className=' md:grid grid-cols-3'>
                    <div className='text-center'>
                        <p className="footer-title text-orange-700 text-lg">Menu</p>
                        <NavLink className='hover:text-orange-600 font-semibold' to='/'>HOME</NavLink>
                        <br />
                        <NavLink className='hover:text-orange-600 font-semibold' to='/class'>CLASSES</NavLink>
                        <br />
                        <NavLink className='hover:text-orange-600 font-semibold' to='/insntractor'>INSTRUCTOR</NavLink>
                    </div>
                    <div className='text-center border-x-2'>
                        <p className="footer-title text-orange-700 text-lg">Adress</p>
                        <p>1 888 123 4567</p>
                        <p>info@crownart.com</p>
                        <p>566 Potter Ave, Ridgewood,</p>
                        <p>NY 11385</p>
                    </div>
                    <div className='px-4'>
                        <p className="footer-title  text-orange-700 text-lg">Social</p>
                        <div>
                            <div className="flex space-x-3">
                                <NavLink> <span className='text-3xl hover:text-orange-600'><FaFacebookSquare></FaFacebookSquare></span></NavLink>
                                <NavLink> <span className='text-3xl hover:text-orange-600'><FaLinkedin></FaLinkedin></span></NavLink>
                                <NavLink> <span className='text-3xl hover:text-orange-600'><FaInstagramSquare></FaInstagramSquare></span></NavLink>
                            </div>
                            <div className='my-10'>
                                <input className='py-3 px-3' type="text" placeholder='Email...' />
                                <button className='bg-[#B2AB8C] rounded-none text-white  hover:text-orange-600 btn'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center my-10'>
                    <h2 className='text-3xl text-orange-600 font-bold'>CROWN ART</h2>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;