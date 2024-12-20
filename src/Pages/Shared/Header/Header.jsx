import React, { useContext, useRef, useState } from 'react';
import Htop from './Htop';
import logo from '../../../assets/logo.png';
import { FaBabyCarriage, FaBaseballBall, FaCamera, FaSearch,FaCameraRetro, FaFemale, FaHeadphones, FaShoppingBag, FaUser,FaBars,FaShoppingCart, FaUsers, FaHome  } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { BiShuffle } from 'react-icons/bi';
import { IoPerson } from "react-icons/io5";

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import useAuth from '../../../hooks/useAuth';
import { FaShop } from 'react-icons/fa6';
import useAdmin from '../../../hooks/useAdmin';



const Header = () => {
  // const {navOpen,setNavOpen}=useContext(AuthContext);
  const [navOpen,setNavOpen]=useState(false);
 
  const {user,logOut}=useAuth();
  console.log(user,'userInfo')
  const itemsRef=useRef();
  const hButtonRef=useRef();
  const [isAdmin]=useAdmin()
  window.addEventListener("click",(e)=>{
    if(e.target!==itemsRef.current && e.target !==hButtonRef.current){
     
      setNavOpen(false)
    }
  })
  const handleLogOut=()=>{
    logOut();
  }
  const navOption=<>
      <li className='capitalize font-bold text-xl'><NavLink to="/">home</NavLink></li>
      <li className='capitalize font-bold text-xl'><NavLink to="/shops">shops</NavLink></li>
      <li className='capitalize font-bold text-xl'><NavLink to="/logIn">seller logIn</NavLink></li>
      
      {
        user && isAdmin && <li className='capitalize font-bold text-xl'><NavLink to="/dashboard/adminHome">Dashboard</NavLink></li>
      }
      {
        user && !isAdmin && <li className='capitalize font-bold text-xl'><NavLink to="/dashboard/userHome">Dashboard</NavLink></li>
      }
      
      </>
  console.log(user,'user')
    return (
        <>
        <Htop></Htop>
        <div className='hidden md:block'>
        <div className="navbar  bg-[#039D55] sticky top-0 z-30 dark:!bg-gray-700 text-black dark:!text-white">
        <div className="navbar-start lg:w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
           
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <img src={logo} alt='logo'/> <span className='font-bold text-white text-xl ml-2'>AB Mart   </span> <span className='font-bold text-white text-xl ml-2 cursor-pointer btn bg-transparent border-0 hover:bg-transparent' onClick={()=>setNavOpen(!navOpen)} ref={hButtonRef}><FaBars/></span>
      
        
        </div>
        {
            navOpen && <div ref={itemsRef} className='px-[1px] bg-white absolute top-[100%] z-50 shadow-xl' >
                <ul className='capitalize px-3 py-4 text-lg' >
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><FaFemale></FaFemale> <span>woman's fashon</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><FaUser/><span>men's fashon</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><FaCamera /><span>Photography</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><IoWatchOutline /><span>Watches & Accessories</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><FaCameraRetro /><span>  TV & Home Appliances</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><FaBabyCarriage /><span>  Bags & Shoes</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><FaHeadphones /><span>  headphones</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><FaBaseballBall /><span>  sports & outdoor</span></li>
                    <li className='p-2 py-4 hover:text-sky-700 ease-linear cursor-pointer text-xl text-black-500 flex items-center gap-3 font-bold'><BiShuffle /><span>  others</span></li>
                    

                  

                </ul>
            </div>
        }
    <div className="flex items-center bg-white rounded-full mx-3 flex-grow">
  <input
    type="text"
    placeholder="Search here"
    className="w-full px-4 py-2 text-sm text-gray-700 outline-none outline-offset-0 rounded-full"
  />
  <button className="p-[10px] bg-[#AFDFB4] rounded-r-full">

<FaSearch className='text-white'/>
  </button>
</div>
        <div className="navbar-end lg:w-auto text-white px-4 font-bold ">
         
    {
      user? <><button onClick={handleLogOut}>signOut</button></>: <> <FaUser/>  <Link to="/logIn" className=' cursor-pointer'><span className='px-2'>Log In</span></Link> | <Link to='/register' className='text-white cursor-pointer'><span className='px-2'>Sign Up</span></Link>  <FaShoppingCart className='ml-2'/></>
    }
        
    
       
        </div>
      </div>
      </div>
      <div className='block md:hidden'>
         <div className="flex drawer items-center bg-[#039D55] p-3">
      {/* Menu Icon */}
     

      {/* Logo */}
   
      <span className="text-white font-bold text-xl">β</span>
      {/* <button className="text-white mx-3">
     <FaBars/>
      </button> */}
       <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-3 -mb-[5px] text-white mt-2s">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" drawer-button text-2xl"><FaBars></FaBars></label>
        </div>
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full mx-3 flex-grow">
        <input
          type="text"
          placeholder="Search here"
          className="w-full px-4 py-2 text-sm text-gray-700 outline-none rounded-full"
        />
        <button className="p-2">
        <FaSearch/>
        </button>
      </div>

      {/* Profile Icon */}
      <button className="text-white p-2 mx-2">
       <FaUser/>
      </button>

      {/* Cart Icon with Badge */}
      <div className="relative">
        <button className="text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.6 3M7 13h10l4-8H5.6M7 13L5.6 3M7 13L9 20h6l2-7M9 20h6M10 20a2 2 0 11-4 0 2 2 0 014 0zm8 0a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
        <span className="absolute top-0 right-0 text-xs bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center">
          3
        </span>
      </div>
       <div className="drawer-side z-50">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu text-base-content  min-h-full bg-[#039D55] w-2/3 p-4 py-6"htmlFor="my-drawer" aria-label="close sidebar">
            {/* Sidebar content here */}
            
                   
                          
                       
                          
          {navOption}
               
          </ul>
        </div>
    </div>
         </div>
      </>
    );
};

export default Header;

{/* <
); */}














