import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import bang from '../../../assets/bangla.png';
import usa from '../../../assets/usa.jpg';
import './style.css';
import { FaPhoneAlt } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';
const Htop = () => {
  const [open,setOpen]=useState(false);
  const [openItem,setOpenItem]=useState(false);
  const menuRef=useRef(null);
  const buttonRef=useRef(null);
  const imageMenuRef=useRef();
  console.log('imageMenuRef',imageMenuRef)
  const navButtonRef=useRef();
  const {user}=useAuth();
  const [isAdmin]=useAdmin()
  window.addEventListener("click",(e)=>{
    if(e.target!==menuRef.current && e.target !==buttonRef.current){
      setOpen(false)
    }
  })
  window.addEventListener("click",(e)=>{
    if(e.target!==imageMenuRef.current && e.target !==navButtonRef.current){
      setOpenItem(false)
    }
  })
    const navOption=<>
    <li className='capitalize font-bold text-xl'><Link to="/">home</Link></li>
    <li className='capitalize font-bold text-xl'><Link to="/shops">shops</Link></li>
    <li className='capitalize font-bold text-xl'><Link to="/logIn">seller logIn</Link></li>
    
    {
      user && isAdmin && <li className='capitalize font-bold text-xl'><Link to="/dashboard/adminHome">Dashboard</Link></li>
    }
    {
      user && !isAdmin && <li className='capitalize font-bold text-xl'><Link to="/dashboard/userHome">Dashboard</Link></li>
    }
    <li className='capitalize font-bold text-xl'><Link to="/">Become a Seller</Link></li>
    </>
    return (
      <div className="navbar bg-base-100 px-4">
      {/* Navbar Start */}
      <div className="navbar-start flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center">
          <span className="rounded-full bg-[#039D55] text-white p-2">
            <FaPhoneAlt />
          </span>
          <span className="ml-2 text-sm sm:text-base">01*********</span>
        </div>
      </div>
    
      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
    
      {/* Navbar End */}
      <div className="navbar-end flex grow  sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
        {/* Currency Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-sm sm:btn-md m-1 p-1 "
            onClick={() => setOpen(!open)}
            ref={buttonRef}
          >
            Dollar (USD)
          </button>
          {open && (
            <ul
              ref={menuRef}
              className="p-2 shadow bg-black z-50 rounded-box absolute"
            >
              <li
                onClick={() => setOpen(false)}
                className="text-white p-2 cursor-pointer"
              >
                <a>Dollar (USD)</a>
              </li>
              <li
                onClick={() => setOpen(false)}
                className="text-white p-2 cursor-pointer"
              >
                <a>Taka (BDT)</a>
              </li>
            </ul>
          )}
        </div>
    
        {/* Language Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-sm sm:btn-md m-1 flex items-center space-x-2"
            onClick={() => setOpenItem(!openItem)}
            ref={navButtonRef}
          >
            <img src={bang} className="w-6 h-5 hidden sm:block" alt="bangladesh" />
            <span className="hover:text-orange-500">Bangla</span>
          </button>
          {openItem && (
            <ul className="w-full shadow bg-black z-50 rounded-box absolute">
              <li
                onClick={() => setOpenItem(false)}
                ref={imageMenuRef}
                className="text-white p-2 cursor-pointer flex items-center justify-around"
              >
                <img src={bang} className="w-6 h-5" alt="bangladesh" />
                <span className="hover:text-orange-500">Bangla</span>
              </li>
              <li
                onClick={() => setOpenItem(false)}
                className="text-white p-2 cursor-pointer flex items-center justify-around"
              >
                <img src={usa} className="w-6 h-5" alt="usa" />
                <span className="hover:text-orange-500">USA</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
    
    
    );
};

export default Htop;

