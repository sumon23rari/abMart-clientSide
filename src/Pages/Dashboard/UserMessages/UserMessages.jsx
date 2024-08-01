import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const UserMessages = () => {
    const userMessage=useLoaderData();
    return (
        <div>
            <SectionTitle subHeading={'check message'} heading={'users all messages'}></SectionTitle>
            <h3>userMessage total:{userMessage.length}</h3>
            <div  className='rounded drop-shadow-lg  p-8 m-10 bg-[#E8E8E8] min-h-screen'>
            <table className="table">
            <thead className='font-bold text-xl bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white text-white rounded'>
                        <tr>
                        <th>#</th>
                            <th>userName</th>
                            <th>userRole</th>
                            <th>userMessage</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default UserMessages;