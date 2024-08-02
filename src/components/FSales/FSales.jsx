
import { FaStar, FaChevronRight  } from "react-icons/fa";
import useSellData from '../../hooks/useSellData';
import { useState } from "react";
import CountDownTimer from "../CountDownTimer/CountDownTimer";
const FSales = () => {
    const [sales]=useSellData();
    const [viewAll,setViewAll]=useState(false)
    
    let selsData;
    if (viewAll)   {
      selsData=  sales.map((saleItem,index)=><div className="card w-full bg-base-100 shadow-xl" key={index}>
        <figure className='pt-4  relative'><img src={saleItem.product_image}  alt="Shoes" /> <span className="radius text-white px-4 rounded-lg bg-[#039D55] z-30 absolute top-3 left-3">10%</span></figure>
        <div className="card-body mt-2">
            <h2 className='font-bold text-lg text-[#E4AA12] flex '><FaStar/> <FaStar className='mx-1'/> <FaStar/> <FaStar className='mx-1'/><FaStar/></h2>
          <h2 className="card-title">{saleItem.product_name}</h2>
          
          <div className="flex gap-4">
            <del>${saleItem.product_deal}.00</del> 
            <h3>${saleItem.product_price}.00</h3>
          </div>
        </div>
      </div>)
    } else   {
      selsData=  sales.slice(0,4).map((saleItem,index)=><div className="card w-full bg-base-100 shadow-xl" key={index}>
         <figure className='pt-4  relative'><img src={saleItem.product_image}  alt="Shoes" /> <span className="radius text-white px-4 rounded-lg bg-[#039D55] z-30 absolute top-3 left-3">10%</span></figure>
        <div className="card-body mt-2">
            <h2 className='font-bold text-lg text-[#E4AA12] flex '><FaStar/> <FaStar className='mx-1'/> <FaStar/> <FaStar className='mx-1'/><FaStar/></h2>
          <h2 className="card-title">{saleItem.product_name}</h2>
          
          <div className="flex gap-4">
            <del>${saleItem.product_deal}.00</del> 
            <h3>${saleItem.product_price}.00</h3>
          </div>
        </div>
      </div>)
    }
    return (
        <div className='py-[40px]'>
            <div className='flex justify-between items-center mb-[50px]'>
                <div className="text-2xl font-bold capitilize"><h3>Flash Sale</h3></div>
              
                <CountDownTimer></CountDownTimer>
           

            </div>
            <div className='grid grid-cols-4 gap-4'>
             
              {selsData}
            </div>
            <div className='flex justify-center my-3'>

         
           {viewAll?'': <button className='capitalize btn bg-[#EEFFFC] text-[#0FA855] rounded p-2 my-4 font-bold text-lg' onClick={()=>setViewAll(!viewAll)}>view all <FaChevronRight/></button>}
        </div>
        </div>
    );
};

export default FSales;