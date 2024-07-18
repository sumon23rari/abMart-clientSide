import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
    return (
        <div className='mx-[25px]'>
            <SectionTitle subHeading={"please pay to orders"} heading={"payment"}></SectionTitle>
       <Elements stripe={stripePromise}>
<CheckOutForm></CheckOutForm>
       </Elements>
        </div>
    );
};

export default Payment;