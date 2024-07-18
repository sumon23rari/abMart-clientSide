import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useReviews = (productId) => {
    console.log(productId,'ids')
    const axiosPublic=useAxiosPublic();
    const {data:review=[],isPending:loading,refetch}=useQuery({
        queryKey:['review',productId],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/review?productId=${productId}`);
            return res.data;
        }
    });
    return [review,refetch,loading]
};

export default useReviews;