import React from 'react';
import { FaCartPlus, FaEnvelope, FaFileInvoice, FaHome, FaList, FaUsers } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin]=useAdmin();
  console.log(isAdmin,'isAdmin')
    return (
        <div className='flex'>
           <div className='w-64 min-h-screen bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white font-bold'>
           <h3 className='uppercase ml-8 mt-6 font-bold text-2xl'>AbMart</h3>
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
                    <NavLink to="/dashboard/manageProducts">
                     <FaList></FaList>
                       Manage products</NavLink>
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
                    <NavLink to="/dashboard/paymentsHistory">
                    <FaFileInvoice />
                        parmentsHistory</NavLink>
                </li>
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
           <div className='flex-1'>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Dashboard;