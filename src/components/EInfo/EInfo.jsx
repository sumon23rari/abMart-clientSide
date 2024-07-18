import React from 'react';
import img1 from '../../assets/Einfo/aCompany.png';
import img2 from '../../assets/Einfo/contact.png';
import img3 from '../../assets/Einfo/faq.png';
import { Link } from 'react-router-dom';

const EInfo = () => {
    return (
        <div className='bg-[#FFE1C5] py-[40px]'>
            <div className='grid grid-cols-3 gap-4'>
            <div className="card w-full">
              <Link to={`/about`} className='text-black'>
  <figure><img src={img1} alt="Shoes" /></figure>
  <div className=" ">
    <h2 className="text-center py-3">About Company</h2>
  </div>
  </Link>
</div>
            <div className="card w-full">
            <Link to={'/contact'} className='text-black'>
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className=" ">
    <h2 className="text-center py-3">
    contact
    </h2>
    
  </div>
  </Link>
</div>
            <div className="card w-full">
            <Link to={`/faq`} className='text-black'>
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className=" ">
    <h2 className="text-center uppercase py-3">
    Faq
    </h2>
    
  </div>
  </Link>
</div>
            </div>
        </div>
    );
};

export default EInfo;