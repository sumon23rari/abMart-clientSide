import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';


import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
   // const history= useHistory();
   const location=useLocation();
   console.log(location.pathname,'sdfsdfs')
   const [prevPath, setPrevPath] = useState('');
   useEffect(()=>{
    const currentPath = location.pathname;
    setPrevPath((prev) => {
      return currentPath !== prev ? currentPath : prev;
    });
   },[location]);
   console.log('prevPath',prevPath)
    return (
        <div className='mx-[25px]'>
            <SectionTitle subHeading={"please pay to orders"} heading={"payment"}></SectionTitle>
       <Elements stripe={stripePromise}>
<CheckOutForm prevPath={prevPath}></CheckOutForm>
       </Elements>
        </div>
    );
};

export default Payment;