import React, { useContext, useRef, useState } from 'react';
import Htop from './Htop';
import logo from '../../../assets/logo.png';
import { FaBabyCarriage, FaBaseballBall, FaCamera, FaCameraRetro, FaFemale, FaHeadphones, FaShoppingBag, FaUser,FaBars,FaShoppingCart  } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { BiShuffle } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  // const {navOpen,setNavOpen}=useContext(AuthContext);
  const [navOpen,setNavOpen]=useState(false);
  const {user,logOut}=useAuth();
  console.log(user,'userInfo')
  const itemsRef=useRef();
  const hButtonRef=useRef();

  window.addEventListener("click",(e)=>{
    if(e.target!==itemsRef.current && e.target !==hButtonRef.current){
     
      setNavOpen(false)
    }
  })
  const handleLogOut=()=>{
    logOut();
  }
    return (
        <>
        <Htop></Htop>
        <div className="navbar bg-[#039D55] sticky top-0 z-30">
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
        <div className="navbar-center hidden lg:flex grow mx-[35px]">
        <label className="input input-bordered flex items-center gap-2 w-full">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
        </div>
        <div className="navbar-end lg:w-auto text-white px-4 font-bold ">
    {
      user? <><span className='mr-2'>{user?.displayName}</span><button onClick={handleLogOut}>signOut</button></>: <> <FaUser/>  <Link to="/logIn" className=' cursor-pointer'><span className='px-2'>Log In</span></Link> | <Link to='/register' className='text-white cursor-pointer'><span className='px-2'>Sign Up</span></Link></>
    }
         <FaShoppingCart className='ml-2'/>
        </div>
      </div>
      </>
    );
};

export default Header;