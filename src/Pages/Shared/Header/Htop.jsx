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
  const menuRef=useRef();
  const buttonRef=useRef();

  const imageMenuRef=useRef();
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
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <span className=' rounded-full bg-[#039D55] text-white p-2'> < FaPhoneAlt className=''/></span> <span className='ml-2'>01*********</span>
       
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navOption}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown">
  <div className="btn m-1" onClick={()=>setOpen(!open)} ref={buttonRef}> Doller (USD)</div>
 {
  open&&  <ul ref={menuRef} className="p-2 shadow bg-black z-50 rounded-box  drpCont">
  <li onClick={()=>setOpen(false)} className='text-white p-2 cursor-pointer'><a>Doller (USD)</a></li>
  <li onClick={()=>setOpen(false)} className='text-white p-2 cursor-pointer'><a>Taka (BDT)</a></li>

</ul>
 }
</div>

<div className="dropdown">
  <div className="btn m-1" onClick={()=>setOpenItem(!openItem)} ref={navButtonRef}><img src={bang} className='w-[25px] h-[20px]' alt='bangladesh'/> <span className='hover:text-orange-500'>bangla</span></div>
 {
 openItem &&  <ul ref={imageMenuRef} className=" w-full shadow bg-black z-50 rounded-box  drpCont">
  <li onClick={()=>setOpenItem(false)} className='text-white p-2 cursor-pointer flex justify-around'><img src={bang} className='w-[25px] h-[20px]' alt='bangladesh'/> <span className='hover:text-orange-500'>bangla</span></li>
  <li onClick={()=>setOpenItem(false)} className='text-white p-2 cursor-pointer flex justify-around '> <img src={usa} className='w-[25px] h-[20px]' alt="usa"/> <span className='hover:text-orange-500'>usa</span></li>

</ul>
 }
</div>
        </div>
      </div>
    );
};

export default Htop;