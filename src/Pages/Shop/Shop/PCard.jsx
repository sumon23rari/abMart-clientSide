import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const PCard = ({product}) => {
    const {productImage,productName,productPrice,_id}=product;
    return (
        <div className="p-[20px] w-full bg-base-100 shadow-xl">
            <NavLink to={`/shops/${_id}/productInfo`}>
            <div className='flex justify-center'>
  <figure><img src={productImage} alt="Shoes" className='w-[140px] h-[140px] rounded'/></figure>
  </div>
  <div className="pt-[40px]">
    <h3 className='text-[#E4AA12] flex gap-2'><FaStar/> <FaStar/> <FaStar/> <FaStar/><FaStar/></h3>
    <h2 className="card-title py-[7px]">{productName}</h2>
   
    
     <h3>${productPrice}</h3>
    
  </div>
  </NavLink>
</div>
    );
};

export default PCard;