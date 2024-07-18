import React from 'react';
import BradCumb from '../Shared/BradCumb/BradCumb';
import { Link } from 'react-router-dom';
import img from '../../assets/notFound.png';
const NotFound = () => {
    return (
        <div className='mb-[50px]'>
            <BradCumb title={"not found"}></BradCumb>
            <div className='flex flex-col items-center justify-center'>
                <img src={img} className='w-[600px] h-[400px] py-[40px]'/>
               
                    <Link className='btn font-bold text-xl text-white mb-[30px] bg-[#039D55] py-2' to={'/'}>back to home</Link>
                
            </div>
        </div>
    );
};

export default NotFound;