import React, { useState } from 'react';
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BradCumb from '../Shared/BradCumb/BradCumb';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const Contacts = () => {
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const [message,setMessage]=useState('');
    const axiosPublic=useAxiosPublic();
    const handleContact=()=>{
        const userMessage={
            userName:name,
            userPhone:phone,
            userMessage:message
        }
        console.log('userMessage',userMessage)
        axiosPublic.post('/userContact',userMessage)
        .then(res=>{
            if (res.data?.insertedId) {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `your message submit successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            } setName('');
            setPhone('');
            setMessage('');

        })
       
        .catch(function (error) {
            console.log(error);
          });
       
    }
    return (
        <div>
            <BradCumb title={'Contact'}></BradCumb>
            <div className=' my-[40px]'>
                <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-1 mr-[30px]'>
                    <h2 className='font-bold text-xl'>Contact Info</h2>
                 <div className='flex flex-col gap-4 mt-4'>
                 <div className='flex gap-4 items-center'>
                     <span className='font-bold text-xl text-white p-2 rounded-full bg-[#039D55]'><FaPhoneAlt/></span>
                     <div>
                        <h3>Support@gmail.com</h3>
                        <h3>+00 874436482</h3>
                     </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                     <span className='font-bold text-xl text-white p-2 rounded-full bg-[#039D55]'><FaLocationDot/></span>
                     <div>
                        <h3>67 W House # 45 Kansos</h3>
                        <h3>Hawk , Albela</h3>
                     </div>
                    </div>
                    <div className='flex gap-4 items-center'>
                     <span className='font-bold text-xl text-white p-2 rounded-full bg-[#039D55]'><FaClock/></span>
                     <div>
                        <h3>Mon-Sat , 11.00 am to </h3>
                        <h3>11.00 pm. Close -Sunday</h3>
                     </div>
                    </div>
                 </div>
                </div>
                <div className='col-span-2'>
            <h2 className='font-bold text-xl'>Leave a massage</h2>
            <div className='grid grid-cols-2 gap-4 mt-4'>
            <input className='p-2 border-2' value={name} onChange={(e)=>setName(e.target.value)} placeholder='name'/>
            <input className='p-2 border-2' value={phone} onChange={(e)=>setPhone(e.target.value)}  placeholder='phone no'/>
            <div className='col-span-2'>
                <input className='w-full p-4 border-2' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='your message'/>
            </div>
            <button className='w-full btn bg-[#039D55] text-center font-bold  col-span-2 mra-4 font-bold text-white text-xl' onClick={handleContact}>find an agent</button>
            </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;