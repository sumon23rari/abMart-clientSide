import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PrductInfo = () => {
    const pDetails=useLoaderData();
    const {productImage}=pDetails;
    return (
        <div className='py-4'>
         <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  md:ml-[60px]'>
            <div className='col-span-3'>
            <ul class="list-disc mx-5 overflow-hidden">
              <li className="my-1 font-semibold">
                Beautiful Saddam Double Sofa 2 Seat For Small Family and Office Usage
           A very good product to decorate your office and room. It’s easily movable. 
           This budgetary sofa has a great look. 
                </li>
              <li className="my-1 font-semibold">
                Durable Colour friendly Authentic Budgetary Awesome look  
                </li>
              <li className="my-1 font-semibold">Durable: This sofa is made with high-quality materials that will last for years to come.</li>
              <li className="my-1 font-semibold">Color-friendly: This sofa is available in a variety of colors to match any décor.</li>
              <li className="my-1 font-semibold">Authentic: This sofa is made with traditional craftsmanship and attention to detail.</li>
              <li className="my-1 font-semibold">Budgetary: This sofa is a great value for the price.</li>
              <li className="my-1 font-semibold">Awesome look: This sofa has a stylish and modern look that will add a touch of 
                sophistication to any room.</li>
                </ul>
                </div>
                <div>
                    <img src={productImage} alt="image" className='w-full'/>
                </div>
         </div>
        </div>
    );
};

export default PrductInfo;