import React, { useEffect, useState } from 'react';

const useSellData = () => {
    const [sales,setSales]=useState([])
    useEffect(()=>{
        fetch('fProducts.json')
        .then((res)=>res.json())
        .then((data)=>{
            setSales(data)
        })
    },[])
    return [sales,setSales]
};

export default useSellData;