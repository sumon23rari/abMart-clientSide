import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaUpload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useUnicProductCategory from '../../../hooks/useUnicProductCategory';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItems = () => {
  const productLoader=useLoaderData();
  const {_id,productName,productBrandName,productCategory,productColor,productImage,productPrice}=productLoader;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [unicProductsCategory]=useUnicProductCategory();
  const axiosPublic=useAxiosPublic();
  const axiosSecure=useAxiosSecure();
  const onSubmit =async (data) =>{
    console.log('data',data);
  
    const imageFile={image:data?.images[0]};
    console.log(imageFile,'imageFile')
    const res=await axiosPublic.post(image_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
    if (res.data.success) {
      if (res.data.data.display_url) {
        
      }
      const productInfo={
        productName:data.productName,
        productCategory:data.category,
        productPrice:parseFloat(data.productPrice), 
        productBrandName:data.brandName,
        productColor:data.productColor,
        productImage:res.data.data.display_url
      }
      console.log(productInfo,'menuiaidfo')
      const updatedProduct=await axiosSecure.patch(`/products/${_id}`,productInfo)
      console.log('addProduct',updatedProduct)
     if (updatedProduct.data.modifiedCount>0) {
      reset();
      Swal.fire({
        position: "middle",
        icon: "success",
        title: `your ${data.productName} item updated successfully`,
        showConfirmButton: false,
        timer: 1500
      })
     
     }
 
     
    console.log(productInfo)
    }
  
  };
    return (
        <div>
            <SectionTitle subHeading={'update an items'} heading={"update now"}></SectionTitle>
            <div className='rounded drop-shadow-lg  p-8 m-10 bg-[#E8E8E8] min-h-screen'>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mb-[25px]">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input type='text' placeholder='items name' name="productName" defaultValue={productName} className='px-3 py-3 rounded' {...register("productName", { required: true })} />
                {errors.name && <span className='text-red-400 '>productName is required</span>}
              </div>
              <div className='flex justify-between gap-[26px] mb-[25px]'>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Category</span>
                </label>
       
                <select defaultValue={productCategory} className="select select-bordered"  {...register("category")}>
    <option disabled value="default">select a category</option>
    {unicProductsCategory.map((pCategory)=><option value={pCategory}>{pCategory}</option>)}
 
  </select>
 

 

              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type='number' placeholder='productPrice' defaultValue={productPrice} name='productPrice' className='px-3 py-3 rounded' {...register("productPrice", { required: true })} />
                {errors.productPrice && <span className='text-red-400 '>productPrice is required</span>}
              </div>
              </div>
              <div className='flex justify-between gap-[26px] mb-[25px]'>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">productBrandName</span>
                </label>
                <input type='text' placeholder='brandName' defaultValue={productBrandName} name='brandName' className='px-3 py-3 rounded' {...register("brandName", { required: true })} />
                {errors.brandName && <span className='text-red-400 '>brandName is required</span>}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">productColor</span>
                </label>
                <input type='text' placeholder='productColor' defaultValue={productColor} name='productColor' className='px-3 py-3 rounded' {...register("productColor", { required: true })} />
                {errors.productColor && <span className='text-red-400 '>productColor is required</span>}
              </div>
              </div>
              <div>
              <input type="file"   className="file-input w-full max-w-xs" {...register("images", )} />
           
              </div>
              <div className="mt-6">
            <button className='btn' type='submit'>updateItems  <FaUpload></FaUpload></button>
              </div>
            </form>
            </div>
     
        </div>
    );
};

export default UpdateItems;