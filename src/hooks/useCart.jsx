import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useCart = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
    const {data:carts=[],isPending:loading,refetch}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return[carts,refetch]
};

export default useCart;