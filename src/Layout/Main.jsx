import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import EInfo from '../components/EInfo/EInfo';

const Main = () => {
    return (
        <div>
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