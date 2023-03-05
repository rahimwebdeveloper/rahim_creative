import React from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='bg-gray-100 shadow-md'>
            <div className='flex justify-between mx-12 p-1'>
                <div>
                    <a href="/">
                        <img className='w-18 h-12' src={logo} alt="" />
                    </a>
                </div>
                <div className='flex items-center'>
                    <ul className='flex text-xl'>
                        <NavLink to='/home'
                            className={({ isActive }) =>
                                isActive ? 'bg-blue-500 rounded-full text-white' : ''
                            }
                        >

                            Home
                        </NavLink>
                        <NavLink to='/service'

                            className={({ isActive }) =>
                                isActive ? 'bg-blue-500 rounded-full text-white' : undefined
                            }
                        >Service
                        </NavLink>
                        <NavLink to='/project'

                            className={({ isActive }) =>
                                isActive ? 'bg-blue-500 rounded-full text-white' : undefined
                            }
                        >
                            Project
                        </NavLink>
                        <NavLink to='/reviews'
                            className={({ isActive }) =>
                                isActive ? 'bg-blue-500 rounded-full text-white' : undefined
                            }
                        >Reviews
                        </NavLink>
                        <NavLink to='/contact'

                            className={({ isActive }) =>
                                isActive ? 'bg-blue-500 rounded-full text-white' : undefined
                            }
                        >Contact Me
                        </NavLink>
                        <NavLink to='/about'
                            className={({ isActive }) =>
                                isActive ? 'bg-blue-500 rounded-full text-white' : undefined
                            }
                        >About
                        </NavLink>
                        <NavLink to='/Blog'

                            className={({ isActive }) =>
                                isActive ? 'bg-blue-500 rounded-full text-white' : undefined
                            }

                        >Blog</NavLink>
                    </ul>
                    <div >
                        <img className='w-8 h-8 rounded-full' src={avatar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;