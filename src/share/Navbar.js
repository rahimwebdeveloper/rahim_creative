import React from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';

const Navbar = () => {
    return (
        <div className='bg-gray-200 shadow-md'>
            <div className='flex justify-between mx-12 p-1'>
                <div>
                    <img className='w-18 h-12' src={logo} alt="" />
                </div>
                <div className='flex items-center'>
                    <ul className='flex text-xl'>
                        <a className='mr-10' href='/'>Home</a>
                        <a className='mr-10' href='/service'>Service</a>
                        <a className='mr-10' href='/project'>Project</a>
                        <a className='mr-10' href='/reviews'>Reviews</a>
                        <a className='mr-10' href='/contact'>Contact Me</a>
                        <a className='mr-10' href='/about'>About</a>
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