import { Button } from 'arvara/lib';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArvoIcon from '../../images/svg/ArvoIcon';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// const IMG = require('../../images/logo.png');
const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className='griid'>

      <div className='flex flex-wrap items-center justify-between max-w-[1600px] mx-auto'>
        <div className=' md:flex items-center justify-between'>
          <h1 className='text-3xl font-bold mr-4'><ArvoIcon /></h1>
          <div className='flex items-center'>
            <Link to="#" className='px-4 text-sm flex'>Why Arvo?</Link>
            <Link to="#" className='px-4 text-sm flex'>Products &#8896;</Link>
            <Link to="#" className='px-4 text-sm flex'>FAQs</Link>
            <Link to="#" className='px-4 text-sm flex'>Blog</Link>
            <Link to="#" className='px-4 text-sm flex'>Contact Us</Link>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <div className="hidden sm:flex">
            <Button size='sm' className='p-2'>Sign In</Button>
            <Button size='sm' className='p-2 text-sm'>Create Account                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </Button>
          </div>
          <div onClick={handleNav} className='block md:hidden text-black'>
            {/* {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />} */}
            {nav ? "close" : "Press to open"}
          </div>
        </div>
        {/* <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}> */}
        <ul className={nav ? 'fixed left-0 top-0 w-[100%] h-[30%] border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'><ArvoIcon /></h1>
          <li className='p-4 border-b border-gray-600'>Products &#8896;</li>
          <li className='p-4 border-b border-gray-600'>FAQs</li>
          <li className='p-4 border-b border-gray-600'>Blog</li>
          <li className='p-4 border-b border-gray-600'>Contact Us</li>
          <li className='p-4'>Contact</li>
          <li className='p-4' onClick={handleNav}>{nav ? "close" : "Press to open"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
