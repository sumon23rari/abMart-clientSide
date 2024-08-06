import React from 'react';
import img1 from "../../assets/delivery/de1.png";
import img2 from "../../assets/delivery/de2.png";
import img3 from "../../assets/delivery/de3.png";
import img4 from "../../assets/delivery/de4.png";
const ServiceInfo = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 py-[40px] bg-[#fff]'>
            <div className="card w-full">
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold">Fast Delivery all <br/>
across the country</h2>
    
  </div>
</div>
  <div className="card w-full">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold">Safe Payment</h2>
    
  </div>
</div>
  <div className="card w-full">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold">7 Days Return Policy</h2>
    
  </div>
</div>
  <div className="card w-full">
  <figure><img src={img4} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-center font-bold">100% Authentic Products</h2>
    
  </div>
</div>
        </div>
    );
};

export default ServiceInfo;