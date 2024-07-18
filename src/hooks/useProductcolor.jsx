import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProductcolor = (colorName) => {
    const axiosPublic=useAxiosPublic();
    const {data:productColors=[],isPending:loading,refetch}=useQuery({
        queryKey:['productColors',colorName],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/productColors?productColor=${colorName}`)
            return res.data;
        }
    })
    return [productColors,loading,refetch]
};

export default useProductcolor;