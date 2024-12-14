import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProductBrand = (brandName) => {
    const axiosPublic=useAxiosPublic();
    const {data:brandProducts,isPending:loading,refetch}=useQuery({
        queryKey:['brandProducts',brandName],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/brandProducts?brandProduct=${brandName}`)
            return res.data;
        
        }
    })
    return[brandProducts,loading,refetch]
};

export default useProductBrand;