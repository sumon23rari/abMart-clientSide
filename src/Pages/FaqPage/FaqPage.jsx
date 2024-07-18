import React from 'react';
import BradCumb from '../Shared/BradCumb/BradCumb';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Testimonials from './Testimonials';


const FaqPage = () => {
 

   return (
      <div>
         <BradCumb title={'FAQ'}></BradCumb>
         <div className='faqTitle py-[40px] text-center'>
          <h2 className='text-[#039D55] font-bold'>Help Center</h2>
          <h3 className='font-semiBold text-2xl'>How can we <span className='text-[#039D55] '>help you?</span></h3>
         </div>
         <div className='grid grid-cols-2 gap-4 mt-4 my-[50px] mx-[25px]' >
         <div className='mt-[20px] mr-[30px]'>
  <div className="collapse  shadow-lg">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium  !p-0">
    <div className='flex justify-between p-[16px]'>
    <p>How To Make Website Easy Edit?</p> <span className='faPlusIcon'><FaPlus/></span> <span className='faMinus'><FaMinus/></span>
    </div>
  
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse  shadow-lg my-[25px]">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium  !p-0">
    <div className='flex justify-between p-[16px]'>
    <p>Click to open this one and close others</p> <span className='faPlusIcon'><FaPlus/></span> <span className='faMinus'><FaMinus/></span>
    </div>
  
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse  shadow-lg">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium  !p-0">
    <div className='flex justify-between p-[16px]'>
    <p>Click to open this one and close others</p> <span className='faPlusIcon'><FaPlus/></span> <span className='faMinus'><FaMinus/></span>
    </div>
  
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
</div>
<div className='mt-[20px]'>
  <div className="collapse  shadow-lg">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium  !p-0">
    <div className='flex justify-between p-[16px]'>
    <p>Click to open this one and close others</p> <span className='faPlusIcon'><FaPlus/></span> <span className='faMinus'><FaMinus/></span>
    </div>
  
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse  shadow-lg my-[25px]">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium  !p-0">
    <div className='flex justify-between p-[16px]'>
    <p>Click to open this one and close others</p> <span className='faPlusIcon'><FaPlus/></span> <span className='faMinus'><FaMinus/></span>
    </div>
  
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className="collapse  shadow-lg">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium  !p-0">
    <div className='flex justify-between p-[16px]'>
    <p>Click to open this one and close others</p> <span className='faPlusIcon'><FaPlus/></span> <span className='faMinus'><FaMinus/></span>
    </div>
  
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
</div>
         </div>
         <Testimonials></Testimonials>
     
      </div>
   );
};

export default FaqPage;