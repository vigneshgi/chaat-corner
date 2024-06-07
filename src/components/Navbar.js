import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTwitter, FaRupeeSign, FaCode } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
                <div className="cursor-pointer">
                    <h1 className='font-bold text-3xl sm:text-4xl lg:text-4xl '>BT Chaat Corner</h1>
                </div>
                <div className='flex items-center'>
                    {/* <div className="flex justify-center bg-gray-200 h-10 rounded-md sm:pl-2 sm:w-[400px] lg:w-[400px] items-center">
                        <input type="search" className='hidden sm:flex bg-transparent p-2 sm:w-full focus:outline-none text-black ' placeholder='search..' />
                        <FiSearch size={20} className="bg-black text-white p-[10px] h-10 rounded-md w-10 font-bold " />
                    </div> */}
                    <div className="flex items-center space-x-4 ml-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaFacebook size={25} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaInstagram size={25} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaTwitter size={25} />
                        </a>
                    </div>
                    <div className="flex items-center ml-4">
                        <a href="https://www.facebook.com/vignesh.karuppasamy.m/" target="_blank" rel="noopener noreferrer" className="text-black">
                            <FaCode size={25} />
                        </a>
                    </div>
                    {/* <div className="login">
                        <button className='bg-black text-white px-5 py-1 ml-2 h-10 w-[100px] rounded-md'>Login</button>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
