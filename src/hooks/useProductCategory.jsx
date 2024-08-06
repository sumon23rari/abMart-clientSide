import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProductCategory = (productCategory) => {
    const axiosPublic=useAxiosPublic();
    const {data:similarProduct=[],refetch,isPending: loading}=useQuery({
        queryKey:['similarProducts',productCategory],
        queryFn:async()=>{
           const res=await axiosPublic.get(`/similarProducts?productCategory=${productCategory}`)
           return res.data;
        }
    })
    return[similarProduct,refetch,loading]
};

export default useProductCategory;