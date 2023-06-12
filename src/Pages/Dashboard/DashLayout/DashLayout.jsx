import React from 'react';
import { FaBookmark, FaGoogleWallet, FaHome, FaRegListAlt } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const DashLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-4/5 mx-auto">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-orange-200 bg-opacity-50 text-base-content">
                       
                        {/* Sidebar content here */}
                        <li style={{ marginBottom: '10px' }}><NavLink className='font-bold text-orange-800' to='dashborad/classes'><FaBookmark></FaBookmark> SELECTED CLASSES</NavLink></li>
                        <li style={{ marginBottom: '10px' }}><NavLink className='font-bold text-orange-800' to='dashborad/enrolled'><FaRegListAlt></FaRegListAlt> ENROLLED CLASSES</NavLink></li>
                        <li style={{ marginBottom: '10px' }}><NavLink className='font-bold text-orange-800' to='dashborad/history'><FaGoogleWallet></FaGoogleWallet> PAYMENT HISTORY</NavLink></li>
                        <div className="flex flex-col w-full my-10">
                           
                            <div className="divider bg-orange-700 h-0.5"></div>
                           
                        </div>
                        <li style={{ marginBottom: '10px' }}><NavLink className='font-bold text-orange-800' to='/'><FaHome></FaHome> HOME</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashLayout;