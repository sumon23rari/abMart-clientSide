import React from 'react';
import useSellData from '../../hooks/useSellData';

const Categories = () => {
    const [sales]=useSellData();
    return (
        <div className='bg-[#EEFFFC] pt-[30px]'>
            <div className='text-center pb-8'>
                <h3 className='text-xl text-[#039D55] font-bold mb-2'>Categories</h3>
                <p className='text-[#039D55]'>Choose your favorite category</p>
            </div>
            <div className='grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-8'>
     {
        sales.slice(0,8).map((saleItem,index)=> <div className="card w-full bg-base-100 shadow-xl" key={index}>
        <figure className='pt-4'><img src={saleItem.product_image}  alt="Shoes" /></figure>
        <div className="card-body mt-2">
          
          <h2 className="card-title justify-center">{saleItem.product_name}</h2>
          
         
        </div>
      </div>)
     }
     </div>
        </div>
    );
};

export default Categories;