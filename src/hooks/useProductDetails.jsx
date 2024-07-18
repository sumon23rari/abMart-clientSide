import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProductDetails = (productId) => {
    const axiosPublic=useAxiosPublic();
    const {data:products=[],refetch,isPending:loading}=useQuery({
        queryKey:['products',productId],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/products/${productId}`);
            return res.data;
        }
    })
    return [loading,products,refetch]
};

export default useProductDetails;
