import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import EInfo from '../components/EInfo/EInfo';
import { ThemeContext } from '../providers/ThemeProvider';

const Main = () => {
const {theme}=useContext(ThemeContext)
    return (
        <div className='dark:!bg-gray-700 text-black dark:!text-white'>

            
            <Header></Header>
            <div  className='max-w-screen-xl mx-auto'>
            <Outlet></Outlet>
            </div>
            <EInfo></EInfo>
            <Footer></Footer>
        </div>
    );
};

export default Main;