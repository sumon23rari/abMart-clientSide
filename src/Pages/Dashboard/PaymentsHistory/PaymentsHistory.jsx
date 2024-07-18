import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentsHistory = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:payments=[],isPending:loading}=useQuery({
        queryKey:['payments',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text3-xl">Total Payments: {payments.length}</h2>
            <div className='overflow-x-auto mt-4'>
                <table className='table'>
                    <thead className='font-bold text-xl bg-orange-400 text-white rounded'>
                        <tr>
                        <th>#</th>
                            <th>price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        payments.map((payment,index)=><tr key={index}>
                            <td>{index+1}</td>
                            <td>{payment.price}</td>
                            <td>{payment.transectionId}</td>
                            <td>{payment.status}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentsHistory;