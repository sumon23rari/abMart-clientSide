import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useBuyProducts from '../../../hooks/useBuyProducts';

const BuyProducts = () => {
    const [buyProducts]=useBuyProducts();
    console.log(buyProducts,'buyProducts')
    const totalPrice=buyProducts.reduce((previewsValue,currentValue)=>{
        return previewsValue+currentValue.productPrice;
    },0);
    console.log(totalPrice,'adsdfs')
    const convertedTotalPrice=parseFloat(totalPrice.toFixed(2))

   
    return (
        <div className='mt-8'>
           <SectionTitle subHeading={'buyProducts'} heading={'buy this product'}></SectionTitle> 
           <div className='my-8 rounded drop-shadow-lg p-8 m-10 bg-white min-h-screen'>
           <div className='flex justify-between '>
          <h3 className='font-bold text-xl uppercase'>total orders:{buyProducts.length}</h3>
          <h3 className='font-bold text-xl uppercase'>total price:{convertedTotalPrice}</h3>
  <div>
    {buyProducts.length ?   <Link to={`/dashboard/payment`}><buton className="btn bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white">pay</buton></Link>:<buton disabled className="btn bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white">pay</buton>}
           </div>
        </div>
            </div>
        </div>
    );
};

export default BuyProducts;