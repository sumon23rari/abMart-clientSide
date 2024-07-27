import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useProducts from '../../../hooks/useProducts';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
const ManageProducts = () => {
    const axiosSecure=useAxiosSecure();
    const [products,loading,refetch]=useProducts();
    const handleDelete=(productId)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete this products!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res=await axiosSecure.delete(`/products/${productId}`)
          if (res.data.deletedCount) {
            if (loading) {
              return <div className='text-center'>please wait delete this item</div>
            }
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: ` has been deleted`,
              showConfirmButton: false,
              timer: 1500
          });

          }
         
        }
      });
    };
    return (
        <div>
          <Helmet>
            <title>ManageProducts</title>
          </Helmet>
          <SectionTitle subHeading={"hurry up"} heading={"manage all items"}></SectionTitle>
             <div className='rounded drop-shadow-lg  p-8 m-10 bg-[#E8E8E8] min-h-screen'>
            <h3 className='uppercase font-bold text-xl py-3'>total products {products.length}</h3>
<div className="overflow-x-auto">
  <table className="table">
    
    {/* head */}
    <thead className='font-bold text-xl bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white text-white rounded'>
      <tr>
        <th>sl_No</th>
        <th>Product_Image</th>
        <th>ProductName</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
products.map((product,index)=><tr className='hover' key={index}>
    <td className='font-bold'>{index+1}</td>
 <td>
 <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.productImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
 </td> 
 
 <td className='font-bold'>{product.productName}</td>
 <td>

 <Link to={`/dashboard/updateItems/${product._id}`} className='w-[40px] h-[40px] bg-[#B91C1C] rounded flex justify-center items-center' ><FaEdit className='text-white font-bold text-xl' /></Link>

 </td>
 <td><button className='w-[40px] h-[40px] bg-[#B91C1C] rounded flex justify-center items-center' onClick={()=>handleDelete(product._id)}> <FaTrash className='text-white font-bold text-xl' /></button></td>
</tr>)}
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageProducts;