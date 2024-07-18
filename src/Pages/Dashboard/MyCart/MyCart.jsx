import React from 'react';
import useCart from '../../../hooks/useCart';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MyCart = () => {
    const [carts,refetch]=useCart();
    console.log(carts)
    const axiosSecure=useAxiosSecure();
    const totalPrice=carts.reduce((previewsValue,currentValue)=>{
        return previewsValue+currentValue.productPrice;
    },0);

    const convertedTotalPrice=parseFloat(totalPrice.toFixed(2))
    const handleCartDelete=(cartId)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           axiosSecure.delete(`/cart/${cartId}`)
           .then((res)=>{
            if (res.data?.deletedCount>0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              })
            }
        
          
            console.log(res)
           })
           .catch(()=>{
            
           })
            }
          });
    }
    return (
      <div>
        <SectionTitle subHeading={"My Cart"} heading={"WANNA ADD MORE?"} ></SectionTitle>
        <div className='rounded drop-shadow-lg p-8 m-10 bg-white min-h-screen'>
        <div className='flex justify-between '>
          <h3 className='font-bold text-xl uppercase'>total orders:{carts.length}</h3>
          <h3 className='font-bold text-xl uppercase'>total price:{convertedTotalPrice}</h3>
  <div>
      {
        carts.length ? <Link to={`/dashboard/payment`}><buton className="btn bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white">pay</buton></Link>:
        <buton disabled className="btn bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white">pay</buton>
      }
  </div>
        </div>
        <div className="overflow-x-auto mt-4">
<table className="table">
{/* head */}
<thead className='font-bold text-xl bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white rounded'>
<tr>
  <th></th>
  <th>product Image</th>
  <th>product Name</th>
  <th>productCategory</th>
  <th>productPrice</th>
 
  <th>ACTION</th>
</tr>
</thead>
<tbody>

{
carts.map((item,index)=><tr className="hover">
  <td>{index+1}</td>
  <td><img src={item.productImage} alt="image" className='w-[75px] h-[75px] rounded'/></td>
  <td>{item.productName}</td>
  <td>${item.productCategory}</td>
  <td>${item.productPrice}</td>
  <td><button className='w-[40px] h-[40px] bg-[#B91C1C] rounded flex justify-center items-center' onClick={()=>handleCartDelete(item._id)}> <FaTrash className='text-white font-bold text-xl' /></button></td>
</tr>)
}

</tbody>
</table>
</div>
      </div>
      </div>
    );
};

export default MyCart;