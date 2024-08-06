import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BradCumb from '../../Shared/BradCumb/BradCumb';

import CategoryList from '../../../components/CategoryList/CategoryList';
import './style.css';
import PCard from './PCard';
import useProductCategory from '../../../hooks/useProductCategory';

import useProductBrand from '../../../hooks/useProductBrand';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Shop = () => {

  
  const [selectItem,setSelectedItem]=useState('allCategory');
  const [selectColor,setSelectedColor]=useState('allColors');
  const [checkedValue,setCheckedValue]=useState('allBrand');
  const [products,setProducts]=useState([]);
  const [productCategory,setProductCategory]=useState('');
  const [productColor,setProductColor]=useState('');
 //const [products]=useProducts()
  const [itemPerPage,setItemPerPage]=useState(10);
  const [currentPage,setCurrentPage]=useState(0);
  const [count,setCount]=useState(0);
  const [minPrice,setMinPrice]=useState('');
  const [maxPrice,setMaxPrice]=useState('');
  const numberOfPages=Math.ceil(count/itemPerPage);
  const pages=[...Array(numberOfPages).keys()]

  const handleCheck=(e)=>{
      setCheckedValue(e.target.value)
  };

const abc=useProductBrand(checkedValue);

  const handleSelectColor=(e)=>{
    setSelectedColor(e.target.value)

    setProductColor(selectColor)
  }
  const handleSelectItem=(e)=>{
setSelectedItem(e.target.value)
console.log(e.target.value)
setProductCategory(e.target.value)
  };

  

useEffect(()=>{
  fetch(`https://ab-mart-ecom-server-side.vercel.app/conditionProducts?page=${currentPage}&size=${itemPerPage}&productCategory=${productCategory}&productColor=${productColor}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
  .then((res)=>res.json())
  .then((data)=>{
     setCount(data.totalProducts)
    setProducts(data.result)

  })
},[currentPage,itemPerPage,productCategory,productColor,minPrice,maxPrice])

const handleItemsPerPage=(e)=>{
const displayItem=parseInt(e.target.value);
console.log('displayItem',displayItem)
setItemPerPage(displayItem);
setCurrentPage(0);
};
const handleMinPrice=(e)=>{
  setMinPrice(e.target.value)
  console.log(e.target.value)
  setCurrentPage(0)
};
const handleMaxPrice=(e)=>{
  setMaxPrice(e.target.value)
  console.log(e.target.value)
  setCurrentPage(0)
}
const handlePrevPage=()=>{
if (currentPage>0) {
  setCurrentPage(currentPage-1)
}
}
const handleNextPage=()=>{
  if (currentPage<pages.length-1) {
    setCurrentPage(currentPage+1)
  }
};
const handlePageChange=(newPage)=>{
  console.log(newPage,'page') 
 setCurrentPage(newPage)
 };


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
        <input type='number' className='w-[90px] rounded-lg py-2' value={minPrice} onChange={handleMinPrice}/> <span className='mx-1 font-semibold'>To</span> <input type='number' className='w-[90px]  rounded-lg py-2' value={maxPrice} onChange={handleMaxPrice}/> 
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
                    <h3 className='pt-[30px] text-white font-semibold text-3xl'>winter sale</h3>
                    <button className='btn text-center mt-[30px] mb-[60px] bg-[#696969] font-bold text-white capitilize text-xl border-0'>shop now</button>
                </div>
                </div>
                <div className='col-span-3'>
                  <div className='flex justify-between py-4 px-2'>
                    <h3 className='flex items-center capitilize font-bold text-xl'>Show display products</h3>
                    <select className="select select-bordered" value={itemPerPage} onChange={handleItemsPerPage}>
    
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">15</option>
                    <option value="50">20</option>
  </select>
                  </div>
                    <div className='grid grid-cols-3 gap-8 overflo-x-hidden my-4'>
             
                     {
                      products?.map((product,index)=><PCard key={index} product={product}></PCard>)
                     }
                      
                
                    </div>
                    <div className='col-span-3 lg:mt-[50px] mb-[30px] mx-auto grid justify-items-center'>
                      <div>
                      <button onClick={handlePrevPage} className='mx-3 btn' disabled={currentPage===0}><FaChevronLeft/> </button>
{
  pages.map((page,index)=><button key={page} disabled className={currentPage===page?'bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white p-[4px_8px] mx-3':'mx-3'}><span>{page+1}</span></button>)
}
<button onClick={handleNextPage} className='mx-3 btn' disabled={currentPage===pages.length-1}><FaChevronRight/> </button>
  </div> 
  </div>
                </div>
               
            </div>
        </div>
    );
};

export default Shop;