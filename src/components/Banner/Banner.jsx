import React, { useContext } from 'react';
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import { AuthContext } from '../../providers/AuthProviders';


const Banner = () => {
    const {navOpen}=useContext(AuthContext)
    return (
        <div className='md:grid  md:grid-cols-4 md:gap-3'>
            <div className='hidden md:block md:col-span-1'>
      
            </div>
            <div className='col-span-1 md:col-span-3'>
                <div> 
                    <img src={banner1} alt='banner1' className='w-full'/>
                </div>
                <div className='grid grid-cols-2 gap-2 md:my-4'>
                <img src={banner2} alt='banner2' className='w-full'/>
                <img src={banner3} alt='banner3' className='w-full'/>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;