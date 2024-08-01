import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useBuyProducts from '../../../hooks/useBuyProducts';

const CheckOutForm = (params) => {
  console.log(params,'params')
    const stripe=useStripe();
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
    const [clientSecret,setClientSecret]=useState('');
    const [transectionId,setTransectionId]=useState('');
    const [cart,refetch]=useCart();
    const {user}=useAuth();
    const navigate=useNavigate();
    const prevPath=params?.prevPath;
    console.log(prevPath,'dfsfs')
    let cartIds;
    let productIds;
 
  const [buyProducts]=useBuyProducts();
    
  const totalBuyPrice=buyProducts.reduce((previewsValue,currentValue)=>{
      return previewsValue+currentValue.productPrice;
  },0);
 
    const [error,setError]=useState('');
    console.log('cart',cart)
    const totalPrice=cart.reduce((previewsValue,currentValue)=>{
        return previewsValue+currentValue.productPrice
    },0);
    useEffect(()=>{
      if (totalPrice>0||totalBuyPrice>0) {
        axiosSecure.post('/create-payment-intent',{price:totalPrice || totalBuyPrice})
        .then((res)=>{
    
          setClientSecret(res?.data?.clientSecret)
        })
      }
    
    },[axiosSecure,totalPrice,totalBuyPrice])
    console.log('clientSecret',clientSecret,totalPrice,totalBuyPrice)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if (!stripe || !elements) {
          return
        }
        const card=elements.getElement(CardElement)
        if (card===null) {
          return ;
        }
         // Use your card Element with other Stripe.js APIs
         const {error,paymentMethod}=await stripe.createPaymentMethod({
          type:'card',
          card
         })
         if (error) {
          console.log('payment error',error)
          setError(error.message)
         } else {
          console.log('paymentmethod error',paymentMethod)
          setError('')
         }
        //  confirm payment
        const {paymentIntent, error:confirmError}=await  stripe.confirmCardPayment(clientSecret,{
          payment_method: {
            card: card,
            billing_details: {
             email: user?.email || "anonymous",
             name:user?.displayName || "anonymous"
            },
          },
        });
        if (confirmError) {
          console.log('confirmError',confirmError)
        } else {
          console.log('paymentIntentError',paymentIntent)
          if (paymentIntent.status==='succeeded') {
            console.log('transction id',paymentIntent.id)
            setTransectionId(paymentIntent.id);
            // now save payment on the database
        
            if (buyProducts.length>0) {
              cartIds=buyProducts?.map((item)=>item._id),
              console.log('cartIds',cartIds)
              productIds=buyProducts.map((item)=>item.productId)
            }
         else{
       
            cartIds=cart?.map((item)=>item._id),
            productIds=cart?.map((item)=>item.productId)
        
         }
            const paymentInfo={
              email:user?.email,
              name:user?.displayName,
              price:totalPrice,
              transectionId:paymentIntent.id,
              date:new Date(),//convert utc time
              cartIds:cartIds,
              productIds:productIds,
              status:'pending'
            };
            const res=await axiosSecure.post('/payments',paymentInfo)
            console.log(res);
            refetch();
            if (res.data?.paymentResult.insertedId) {
              Swal.fire({
                position: "middle",
                icon: "success",
                title: "Thank you for the taka paisa",
                showConfirmButton: false,
                timer: 1500
            });
            }
            navigate('/dashboard/paymentsHistory')
          }
        }
    }
    return (
     <form onSubmit={handleSubmit}>
        <CardElement   options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}/>
     <button type="submit" className='mt-4 btn btn-sm btn-primary my-4' disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-500 bold'>{error}</p>
      {transectionId && <p className='text-green-600'>your transection Id:{transectionId}</p>}
       
     </form>
    );
};

export default CheckOutForm;