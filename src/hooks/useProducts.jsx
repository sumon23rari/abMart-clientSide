import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";


const useProducts = () => {
    const axiosPublic=useAxiosPublic();
    // const [page,setPage]=useState(0);
    // const [pageCount,setPageCount]=useState(0);
    // const [displayProducts,setDisplayProducts]=useState([]);
    // const size=10;
    const {data: products = [], isPending: loading, refetch} = useQuery({
        queryKey: ['products'], 
        queryFn: async() =>{
          //  const res = await axiosPublic.get(`/products?page=${page}&&size=${size}`);
          const res=await axiosPublic.get('/products')
           // setDisplayProducts(res.data);
            // const count=data.count;
            // const pageNumber=Math.ceil(count/size);
            // setPageCount(pageNumber)
            return res.data;
        }
    })
    return [products,loading,refetch]
};

export default useProducts;