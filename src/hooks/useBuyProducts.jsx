import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useBuyProducts = () => {
    const axiosSecure=useAxiosSecure();
   const {data:buyProducts=[],isPending:loading,refetch}=useQuery({
    queryKey:['buyProducts'],
    queryFn:async()=>{
        const res=await axiosSecure.get('/buyProducts')
        return res.data;
    }
   })
   return [buyProducts,loading,refetch]
};

export default useBuyProducts;