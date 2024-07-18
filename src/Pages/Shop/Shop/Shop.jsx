import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BradCumb from '../../Shared/BradCumb/BradCumb';
import { Outlet } from 'react-router-dom';
import CategoryList from '../../../components/CategoryList/CategoryList';
import './style.css';
import useProducts from '../../../hooks/useProducts';
import PCard from './PCard';
import useProductCategory from '../../../hooks/useProductCategory';
import useProductcolor from '../../../hooks/useProductcolor';
import useProductBrand from '../../../hooks/useProductBrand';

const Shop = () => {
  const [products]=useProducts();
  
  const [selectItem,setSelectedItem]=useState('allCategory');
  const [selectColor,setSelectedColor]=useState('allColors');
  const [checkedValue,setCheckedValue]=useState('allBrand');
  const handleCheck=(e)=>{
      setCheckedValue(e.target.value)
  };
  
const abc=useProductBrand(checkedValue);
console.log(abc,'adsdsdds')
  const handleSelectColor=(e)=>{
    setSelectedColor(e.target.value)
  }
  const handleSelectItem=(e)=>{
setSelectedItem(e.target.value)
  };
  let showProducts;

  const displayProductCategory=useProductCategory(selectItem);
  showProducts=displayProductCategory[0];

const displayProductColor=useProductcolor(selectColor)
console.log('displayProductColor',displayProductColor[0])
// showProducts=displayProductColor[0]
    return (
        <div>
            <Helmet>
                <title>shop page</title>
            </Helmet>
            <BradCumb title={'shops'}></BradCumb>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1 mr-[50px] flex flex-col gap-[35px]'>
                <CategoryList handleCheck={handleCheck}></CategoryList>
                <div className=' px-5 py-[25px] bg-[#EAFFF4]'>
                    <h3 className='text-center font-bold text-2xl'>Filter</h3>
                    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick the best fantasy franchise</span>

  </div>
  
  <select className="select select-bordered" value={selectItem} onChange={handleSelectItem}>
    <option disabled selected>Pick one</option>
<option>allCategory</option>
    <option>Electronics</option>
    <option>Wearables</option>
    <option>Home Appliances</option>
    <option>Cameras</option>
    <option>Personal Care</option>
    <option>Kitchen Appliances</option>
    <option>Outdoor</option>
    <option>Home Decor</option>
  </select>
 
</label>
<div>
    <h3 className='my-2 font-semibold text-lg'>Price</h3>
    <div>
        <input type='number' className='w-[90px] rounded-lg py-2'/> <span className='mx-1 font-semibold'>To</span> <input type='number' className='w-[90px]  rounded-lg py-2'/> 
    </div>
</div>

  <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text font-semibold text-lg">Choose color</span>

  </div>
  <select className="select select-bordered" value={selectColor} onChange={handleSelectColor}>
    <option disabled selected>Pick one</option>
    <option>allColors</option>
    <option>Black</option>
    <option>Silvar</option>
    <option>White</option>
    <option>Blue</option>
    <option>Red</option>
    <option>Gray</option>
  </select>
 
</label>
                </div>
                <div className=' shopSideBottom text-center'>
                    <h3 className='pt-[100px]'></h3>
                    <h3 className=' text-center text-[#38464F] font-semibold relative top-[-82px]'>Discount price</h3>
                    <h3 className='pt-[80px] text-white font-semibold text-3xl'>winter sale</h3>
                    <button className='btn text-center mt-[30px] mb-[60px] bg-[#696969] font-bold text-white capitilize text-xl border-0'>shop now</button>
                </div>
                </div>
                <div className='col-span-3'>
                    <div className='grid grid-cols-3 gap-8 overflo-x-hidden my-4'>
                 { 
                 showProducts?.length>0?
                 showProducts?.map((product,index)=><PCard key={index} product={product}></PCard>):products.map((product,index)=><PCard key={index} product={product}></PCard>)
                 }
                     
                      
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;