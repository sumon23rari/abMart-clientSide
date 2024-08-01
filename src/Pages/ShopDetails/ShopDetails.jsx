import React, { useContext, useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa';
import './style.css';
import { Link, NavLink, Outlet, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaShippingFast,FaRegNewspaper,FaShoppingBag } from "react-icons/fa";
import { BiSolidDislike,BiSolidLike } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import useProductCategory from '../../hooks/useProductCategory';
import { AuthContext } from '../../providers/AuthProviders';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const ShopDetails = () => {
    const {user}=useContext(AuthContext);
    const pDetails=useLoaderData();
    const navigate=useNavigate();
    const axiosSecure=useAxiosSecure();
    const location=useLocation();
    const items=['L','M','S'];
    const [productNumber,setProductNumber]=useState(1);
    const [selectedItem, setSelectedItem] = useState('L');
    const {productName,productPrice,productCategory,productBrandName,productColor,productImage,_id}=pDetails; 
    console.log(productPrice,productNumber) 
   const [similarProduct]=useProductCategory(productCategory);
   const calculateProductPrice=productPrice*productNumber;


   const handleMinus=()=>{
    if (productNumber<2) {
        return Swal.fire({
            position: "middle",
            icon: "error",
            title: "productnumber is not negoative",
            showConfirmButton: false,
            timer: 1500
          });
    }
setProductNumber(productNumber-1)
   }
    const handlePlus=()=>{
setProductNumber(productNumber+1)
    }
    const cartItem={
      productId:_id,
      email:user?.email,
      productName,
      productBrandName,
      productCategory,
      productSize:selectedItem,
      productQuntity:productNumber,
      productColor,
      productImage,
      productPrice:calculateProductPrice
    }
    const handleAddCart=()=>{
        if (user && user?.email) {
            
            axiosSecure.post('/carts',cartItem)
            .then((res)=>{
              if (res.data?.insertedId) {
                Swal.fire({
                  title: "success!",
                  text: "You cart add successfully!",
                  icon: "success"
                });
                console.log(res,'res')
           
              }
             
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        else{
            Swal.fire({
              title: "You are not logged In",
              text: "please logIn to add this cart!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, logIn!"
            }).then((result) => {
              if (result.isConfirmed) {
           navigate('/logIn',{state:{from:location}})
              }
            });
          }

    }
    const handleBuyNow=()=>{
      if (user && user?.email) {
            
        axiosSecure.post('/buyProduct',cartItem)
        .then((res)=>{
          if (res.data?.insertedId) {
            Swal.fire({
              title: "success!",
              text: "You cart add successfully!",
              icon: "success"
            });
            console.log(res,'res')
       
          }
         
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else{
        Swal.fire({
          title: "You are not logged In",
          text: "please logIn to add this cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logIn!"
        }).then((result) => {
          if (result.isConfirmed) {
       navigate('/logIn',{state:{from:location}})
          }
        });
      }
    }
    return (
        <div className='my-[60px]'>
            <Helmet>
              <title>ShopDetails</title>
            </Helmet>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <img src={productImage} alt='productimage' className='w-full'/>
                </div>
                <div className='font-bold  text-lg pl-7'>
                    <h3 >Availability:In stock</h3>
                <h3 className='font-bold  my-1'>{productName}</h3>
                    <h3>{productBrandName}</h3>
                    <h3 className='my-1'>TK:{productPrice}</h3>
                    <h3>productCateagory:{productCategory}</h3>
                    <h3 className='my-1'>productColor:{productColor}</h3>
                    <h3 className=' flex gap-3 items-center text-lg my-[15px]'>
                        size:  <div className='gap-2 flex'><button onClick={()=>setSelectedItem('L')} className='btn' style={{border:selectedItem==='L'?'1px solid blue':''}}>L</button><button  onClick={()=>setSelectedItem('M')} className='btn'style={{border:selectedItem==='M'?'1px solid blue':''}}>M</button><button  onClick={()=>setSelectedItem('S')} className='btn'style={{border:selectedItem==='S'?'1px solid blue':''}}>S</button></div>
           
                     
      
                        
                      <div>
                        
                      </div>

                    </h3>
                    <h3 className='flex font-bold items-center text-lg my-[15px]'>Quntity:
                        <div class="flex ml-4 gap-1">
                           <button id="case-minus" class="btn btn-default" onClick={handleMinus} >
                           <FaMinus/>
                           </button>
                           <input id="case-number" min="0" class="text-center w-[30px]" value={productNumber}/>
                           <button id="case-plus"  class="btn btn-default" onClick={handlePlus}><FaPlus/></button>

                        </div>
                       
                       
                  
                    </h3>
                    <div className='flex gap-4 '>
                        <button className='btn bg-[#0FA855] hover:bg-[#0FA855] text-white font-bold rounded btn-sm' onClick={handleBuyNow}><NavLink to="/dashboard/buyProducts">Buy Now</NavLink> </button> <button className='btn btn-sm border-2 rounded border-[#0FA855]' onClick={handleAddCart}>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className='shadow-xl p-8 mb-4'>
                        <ul className='flex flex-col gap-2 text-lg font-bold'>
                            <li className='flex gap-3 items-center'><FaShippingFast/>Fast Delivery all across the country</li>
                            <li className='flex gap-3 items-center'><AiOutlineSafetyCertificate />safe payment</li>
                            <li className='flex gap-3 items-center'><FaShoppingBag/>7 Days Return Policy</li>
                            <li className='flex gap-3 items-center'><FaRegNewspaper/>100% Authentic Products</li>
                        </ul>
                    </div>
                    <div className='p-8 shadow-xl mt-[30px]'>
        <div>
            <h3 className='text-center font-bold text-lg'>Ab Mart</h3>
            <div className='divide-x grid grid-cols-2 divide-black my-[20px] text-center font-bold text-lg '>
             <div className=''>
          <h3 className='grid justify-items-center'>
          <BiSolidDislike/>
          <BiSolidLike/>
            </h3>
             <h3>
             reivews
             </h3>
             </div>
             <div className='grid justify-items-center'>
<BsBoxes/>
products
             </div>
            </div>
            <Link to="" className='btn bg-[#0FA855] text-white font-bold text-lg w-full hover:bg-[#0FA855]'><FaStore/> view store</Link>
        </div>
                    </div>
                </div>
            </div>
            {/* ====================product information================= */}
            <div>
<div className='my-7'>
<div className='text-xl font-bold '>
<button className='px-4 border-r-2 border-black cursor-pointer'><NavLink to={`/shops/${_id}/productInfo`}>product Info</NavLink></button> 
 
 <button className='px-4 border-r-2 border-black cursor-pointer'> <NavLink to={`/shops/${_id}/wServices`}>warranty services</NavLink></button> 

 <button className='px-4 cursor-pointer'><NavLink to={`/shops/${_id}/review`}> Reviews </NavLink></button> 
</div>
<div>
    <Outlet></Outlet>

  
           





</div>
</div>

            </div>
            {/*====================== similar products==================== */}
            <div className='grid grid-cols-4 gap-6 pb-[30px]'>

{
    similarProduct.slice(0,4).map((smProduct,index)=><div className="card bg-base-100 w-full shadow-xl" key={index}>
  <Link to={`/shops/${smProduct._id}/productInfo`}>
  <div className='flex justify-center'>
  <figure><img src={smProduct.productImage} alt="Shoes" className='w-full h-[140px] rounded'/></figure>
  </div>
  <div className="pt-[40px] py-6 grid justify-items-center ">
    <h3 className='text-[#E4AA12] flex gap-2'><FaStar/> <FaStar/> <FaStar/> <FaStar/><FaStar/></h3>
    <h2 className="card-title py-[7px]">{smProduct.productName}</h2>
   
    
     <h3>${smProduct.productPrice}</h3>
    
  </div>
  </Link>
  </div>)
}
            </div>
        </div>
    );
};

export default ShopDetails;