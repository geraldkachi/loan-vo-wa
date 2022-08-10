// import { Button } from 'arvara/lib';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-scroll';
import ArvoIcon from '../../images/svg/ArvoIcon';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// const IMG = require('../../images/logo.png');
import { Button, Checkbox } from 'arvara';

const Navbar = ({ whyavro, scrollToSection, contact, product, faqs }: any) => {
  const navigate = useNavigate()
  const [nav, setNav] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);
  const closeMenu = () => setClick(false)

  const handleNav = () => setNav(!nav);
  const handleClick = () => setClick(!click);

  return (
    <div ref={whyavro} className=''>
      <div className='px-5 pt-5 flex flex-wrap items-center justify-between mx-auto max-w-[1200px]'>
        <div className=' md:flex items-center justify-between '>
          <Link to="/"><h1 className='text-3xl font-bold mr-4'><ArvoIcon /></h1></Link>

          {/* <div className=' items-center hidden lg:flex'> */}
          <div className=' items-center hidelogin lg:flex'>
            <Link to="/" onClick={() => scrollToSection(whyavro)} className='px-4 text-sm flex cursor-pointer'>Why Arvo?</Link>
            <Link to="" onClick={() => scrollToSection(product)} className='cursor-pointer px-4 text-sm flex'>Products  {" "}  &nbsp;<span className="rotate-180 scale-75">&#8896;</span></Link>
            <Link to="" onClick={() => scrollToSection(faqs)} className='cursor-pointer px-4 text-sm flex'>FAQs</Link>
            <Link to="" onClick={() => scrollToSection(whyavro)} className='cursor-pointer px-4 text-sm flex'>Blog</Link>
            <Link to="" onClick={() => scrollToSection(contact)} className='cursor-pointer px-4 text-sm flex'>Contact Us</Link>
          </div>
        </div>
        <div className=' items-center flex gap-1'>
          {/* <div className='hidden lg:flex gap-4'> */}
          <div className='hidelogin lg:flex gap-4 text-base font-bold'>
            <button onClick={() => navigate('login')} className='bg-white border-[#065373] border-2 p-3 px-7 rounded-xl text-[#065373]'>Sign In</button>
            <button onClick={() => navigate('login')} className="bg-[#065373] p-3 px-12 rounded-xl text-white">Create Account</button>
          </div>
          {/* <div onClick={handleNav} className=' hidelogin text-black'> */}
          <div onClick={handleNav} className='block lg:hidden text-black'>
            {/* {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />} */}
            {/* <div className='hideOnlyonNavMobile md:hidden'> */}
            {nav ? "close" : "Press to open"}
          </div>
          {/* </div> */}
        </div>

        {/* <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}> */}
        <ul className={nav ? 'fixed left-0 top-0 w-[100%] z-20 border-r border-r-gray-900 bg-white ease-in-out duration-500 shadow-lg' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'><ArvoIcon /></h1>
          {/* <li className='p-4 border-b border-gray-600'>Products <span className='rotate-180'>{">"}</span></li> */}
          {/* <li className='p-4 border-b border-gray-600'>Products {"∨"}</li> */}
          <li className='p-4 border-b border-gray-600'><Link to="" onClick={() => scrollToSection(faqs)}>FAQs</Link></li>
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
