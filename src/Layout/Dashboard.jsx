import React from 'react';
import { FaBars, FaCartPlus, FaEnvelope, FaFileInvoice, FaHome, FaList, FaUsers } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { FaComments } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin]=useAdmin();
  console.log(isAdmin,'isAdmin',isAdmin)
    return (
      <>
      <div className='hidden md:block'>
        <div className='flex'>
           <div className='w-full md:w-64 py-10 md:py-0 md:min-h-screen bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white font-bold'>
           <h3 className='uppercase ml-8 md:mt-6 font-bold text-2xl'>AbMart</h3>
           <p className='ml-8 tracking-wider text-2xl'>shopping</p>
            <ul  className='menu font-bold uppercase mt-4'>
                {
                    isAdmin?<>
                    <li>
                    <NavLink to="/dashboard/adminHome">
                     <FaHome></FaHome>
                        admineHome</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/users">
                     <FaUsers></FaUsers>
                        users</NavLink>
                </li>
            <li>
                    <NavLink to="/dashboard/cart">
                       <FaCartPlus></FaCartPlus>
                        cart</NavLink>
                </li>
          
                <li>
                    <NavLink to="/dashboard/addProducts">
                       <FaCartPlus></FaCartPlus>
                    addProducts</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/manageProducts">
                  <FaList></FaList>
                        manageProducts</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/userMessage">
                    <FaComments />
                    userMessage
                    </NavLink>
                </li>
               
                    </>:<>
                    <li>
                    <NavLink to="/dashboard/userHome">
                     <FaHome></FaHome>
                        users</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/paymentsHistory">
                    <FaFileInvoice />
                        parmentsHistory</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/cart">
                       <FaCartPlus></FaCartPlus>
                        cart</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/addProducts">
                       <FaCartPlus></FaCartPlus>
                        addProducts</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/manageProducts">
                     <FaList></FaList>
                        manageProducts</NavLink>
                </li>
                    </>
                }
            
            <div className="divider"></div>
         
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shops">
                        <FaShop></FaShop>
                        shop</NavLink>
                </li>
                <li>
                    <NavLink to="/orders/contact">
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                </li>
            </ul>
            </div> 
           <div className='flex-1 px-5 '>
            <Outlet></Outlet>
           </div>
        </div>
</div>
<div className='md:hidden'>
<div>
<div className="drawer flex justify-between p-4 bg-[#039D55] text-white">
  
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" drawer-button text-2xl"><FaBars></FaBars></label>
  </div>
  <h3 className='text-xl'>AbMartShopping</h3>

  <div className="drawer-side z-50">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu text-base-content  min-h-full bg-[#039D55] w-2/3 p-4 py-6"htmlFor="my-drawer" aria-label="close sidebar">
      {/* Sidebar content here */}
      
                {
                    isAdmin?<>
                    <li>
                    <NavLink to="/dashboard/adminHome">
                     <FaHome></FaHome>
                        admineHome</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/users">
                     <FaUsers></FaUsers>
                        users</NavLink>
                </li>
            <li>
                    <NavLink to="/dashboard/cart">
                       <FaCartPlus></FaCartPlus>
                        cart</NavLink>
                </li>
          
                <li>
                    <NavLink to="/dashboard/addProducts">
                       <FaCartPlus></FaCartPlus>
                    addProducts</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/manageProducts">
                  <FaList></FaList>
                        manageProducts</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/userMessage">
                    <FaComments />
                    userMessage
                    </NavLink>
                </li>
               
                    </>:<>
                    <li>
                    <NavLink to="/dashboard/userHome">
                     <FaHome></FaHome>
                        users</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/paymentsHistory">
                    <FaFileInvoice />
                        parmentsHistory</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/cart">
                       <FaCartPlus></FaCartPlus>
                        cart</NavLink>
                </li>
                    <li>
                    <NavLink to="/dashboard/addProducts">
                       <FaCartPlus></FaCartPlus>
                        addProducts</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/manageProducts">
                     <FaList></FaList>
                        manageProducts</NavLink>
                </li>
                    </>
                }
            
            <div className="divider"></div>
         
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shops">
                        <FaShop></FaShop>
                        shop</NavLink>
                </li>
                <li>
                    <NavLink to="/orders/contact">
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                </li>
           
    </ul>
  </div>
</div>
</div>
<div className='overflow-y-hidden'><Outlet></Outlet></div>
  </div>        
</>
    );
};

export default Dashboard;




