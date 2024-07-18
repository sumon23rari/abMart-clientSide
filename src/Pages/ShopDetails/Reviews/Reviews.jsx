import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import useReviews from '../../../hooks/useReviews';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const axiosPublic=useAxiosPublic();
    const productData=useLoaderData();
    console.log(productData,'dataa')
    const [review,refetch]=useReviews(productData._id)
    console.log('product',review)
  const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();
      const onSubmit=async(data)=>{
        const reviewItem={
          name:data.name,
          reviewText:data.review,
          productId:productData._id
        };
        axiosPublic.post('/review',reviewItem)
        .then((res)=>{
          if (res.data.insertedId) {
            Swal.fire({
              title: "success!",
              text: "You cart add successfully!",
              icon: "success"
            });
          
            refetch(); 
            reset();
          }
         
        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(reviewItem,'reee')
       
      }
    return (
        <div className='my-[40px]'>
          
            <form  onSubmit={handleSubmit(onSubmit)} className='mx-auto md:max-w-screen-md'>
                
      <div className="form-control">
            
                <input type="text" name="name" placeholder="enter your name" {...register("name", { required: true })} className="input input-bordered" />
                {errors.name && <span className='text-red '>name is required</span>}
              </div>
              
      <div className="form-control my-4">
                
            
                <textarea name="review" placeholder="reviews"  {...register("review", { required: true })}  className="input input-bordered md:h-[100px]"></textarea>
                {errors.review && <span className='text-red '>review is required</span>}
              </div> 
              <div className="form-control mt-6">
        <input className="btn btn-primary w-1/4 font-bold text-xl bg-[#039D55] text-white hover:bg-[#039D55]" type="submit" value="submit  reviews"  />
        </div>
            </form>
            <div className='py-[25px] max-w-screen-md mx-auto'>
              {
                review.map((reviewText,index)=><div key={index} className='w-full py-6 px-4 border rounded'>
                 
                  <p>{reviewText.reviewText}</p>
                <div className='flex gap-2 items-center'>
                  <span className='flex mx-1 text-[#E4AA12]'><FaStar/> <FaStar/><FaStar/><FaStar/><FaStar/> </span>
                  <h3>{reviewText.name}</h3>
                </div>
                </div>)
              }
            </div>
        </div>
    );
};

export default Reviews;