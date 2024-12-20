import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const UserMessages = () => {
    const userMessage=useLoaderData();
    return (
        <div>
            <SectionTitle subHeading={'check message'} heading={'users all messages'}></SectionTitle>
            <div className='rounded drop-shadow-lg overflow-x-hidden md:p-8 m-10 bg-[#E8E8E8] min-h-screen'>
            <h3 className='text-center'>userMessage total:{userMessage.length}</h3>
            <div className='!overflow-x-scroll'>
            <table className="table ">
            <thead className='font-bold text-xl bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white rounded'>
                        <tr>
                        <th>#</th>
                            <th>userName</th>
                            <th>userRole</th>
                            <th>userMessage</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
        {
            userMessage.map((user,index)=><tr className="hover" key={user._id}>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><img src={`${user?.photo}`} className='w-[30px] h-[30px]'/></td>    
                    <td>{user?.role}</td>    
                
                </tr>)
        }
                    </tbody>
                </table>
                </div>
        </div>
        </div>
    );
};

export default UserMessages;