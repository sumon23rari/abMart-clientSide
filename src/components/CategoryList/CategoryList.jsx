import React, { useState } from 'react';

const CategoryList = ({handleCheck}) => {
 


   
    return (
        <div className='w-full'>
           

 <ul className='px-8 py-[20px] mt-[25px] font-semibold border rounded'>
    <h3 className='pb-2 border-b border-black mb-3'>By Brands</h3>
    <li> <input type='checkbox' value='TechBrand' onChange={handleCheck}/> <label className='ml-2'>TechBrand</label></li>
    <li><input type='checkbox' value='SoundBrand' onChange={handleCheck}/> <label className='ml-2'>SoundBrand</label> </li>
  <li><input type='checkbox' value='WatchBrand' onChange={handleCheck}/><label className='ml-2'>WatchBrand</label> </li>
  <li><input type='checkbox' value='PhotoBrand' onChange={handleCheck}/> <label className='ml-2'>PhotoBrand</label> </li>
  <li><input type='checkbox' value='HealthBrand' onChange={handleCheck}/> <label className='ml-2'>HealthBrand</label> </li>
  <li><input type='checkbox' value='SecureBrand' onChange={handleCheck}/> <label className='ml-2'>SecureBrand</label> </li>
  <li><input type='checkbox' value='GroomBrand' onChange={handleCheck}/> <label className='ml-2'>GroomBrand</label> </li>
  <li><input type='checkbox' value='FlyBrand' onChange={handleCheck}/> <label className='ml-2'>FlyBrand      </label> </li>
 </ul>

    
        </div>
    );
};

export default CategoryList;