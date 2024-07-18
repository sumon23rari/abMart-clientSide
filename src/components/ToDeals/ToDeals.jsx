import { useState } from "react";
import useSellData from "../../hooks/useSellData";
import { FaChevronRight, FaStar } from "react-icons/fa";


const ToDeals = () => {
    const [sales]=useSellData();
    const [viewAll,setViewAll]=useState(false);
    let topSells;
    if (viewAll)   {
        topSells=  sales.map((saleItem,index)=><div className="card w-full bg-base-100 shadow-xl hove:shadow-xl hover:scale-[95px]" key={index}>
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
        topSells=  sales.slice(0,4).map((saleItem,index)=><div className="card w-full bg-base-100 shadow-xl hover:shadow-xl hover:scale-[95px]" key={index}>
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
        <div className="py-[70px]">
            <div className="flex justify-between px-8">
                <h3 className=" font-bold text-2xl">Today's Deals</h3>
                {viewAll?'': <button className='capitalize btn bg-[#EEFFFC] text-[#0FA855] rounded p-2  font-bold text-lg' onClick={()=>setViewAll(!viewAll)}>view all <FaChevronRight/></button>}
            </div>
            <div className="grid grid-cols-4 gap-8 py-12">
            {topSells}
            </div>
        </div>
    );
};

export default ToDeals;