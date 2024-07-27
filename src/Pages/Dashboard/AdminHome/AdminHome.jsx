import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { VscListUnordered } from "react-icons/vsc";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie, Tooltip, Legend } from 'recharts';
import { Helmet } from 'react-helmet-async';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// custom shape for the bar chart
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
}; 
    
const AdminHome = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const [chartData,setChartData]=useState([]);
    useEffect(()=>{
      fetch(`https://ab-mart-ecom-server-side.vercel.app/order-states`)
      .then((res)=>res.json())
      .then((data)=>{
      const formattedData=Object.keys(data).map(category=>({
        category,
        quantity: data[category].quantity,
          revenue: data[category].revenue,
      }));
      setChartData(formattedData)
      });
    },[])
    const {data:stats={}}=useQuery({
        queryKey:['admin-states'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/admin-states');
            return res.data;
        }
      
    });
 const totalRevenue=stats.revenue;
 const convertTotalRevenue=parseFloat(totalRevenue?.toFixed(2));


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// custom shape for the pie chart
const colors2 = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
        <div className='m-6'>
          <Helmet>
            <title>adminHome</title>
          </Helmet>
           <h3 className='text-3xl lg:my-4 my-2'>
            <span>Hi, WellCome</span>
            {
                user?.displayName?user.displayName:'Back'
            }
            </h3> 
            <div className="stats stats-vertical lg:stats-horizontal shadow gap-6 w-full">

<div className="stat bg-gradient-to-r from-[#FF5757] to-[#FF8A8A] px-[35px] py-[25px] rounded">
    <div className="stat-figure text-secondary text-white">
        
        <div className="font-bold">Revenue</div>
        <div className="stat-value">{convertTotalRevenue}</div>
    </div>
    <div className="text-secondary text-white  mt-[34px]">
    <FaDollarSign className='text-3xl '></FaDollarSign>
    </div>
</div>

<div className="stat bg-gradient-to-r from-[#24D381] to-[#32EC95] px-[35px] py-[25px] rounded">
    <div className='grid grid-cols-2 gap-4 place-items-center '>
    <div>
   <FaUsers className='text-3xl text-white'></FaUsers>
   </div>
    <div className=" font-bold text-white uppercase">
       
       <div className="">Users</div>
       <div className="stat-value">{stats?.totalUsers}</div>
   </div>
  
  
    </div>
   
</div>


<div className="stat bg-gradient-to-r from-[#319CFF] to-[#78CEFF] px-[35px] py-[25px] rounded">
    
  
   {/* ll */}
     <div className='grid grid-cols-2 gap-4 place-items-center text-white '>
    <div>
    <FaBook className='text-3xl'></FaBook>
   </div>
    <div className=" font-bold text-white uppercase">
    <div className="stat-value">{stats?.totalProducts}</div>
       <div className="">Products</div>
  
   </div>
  
  
    </div>

</div>

<div className="stat bg-gradient-to-r from-[#FB3CFF] to-[#FF9BF5] px-[35px] py-[25px] rounded">
<div className='grid grid-cols-2 gap-4 place-items-center text-white '>
    <div>
    <VscListUnordered className='text-3xl'/>
   </div>
    <div className=" font-bold text-white uppercase">
    <div className="stat-value">{stats?.totalOrders}</div>
       <div className="">Orders</div>
  
   </div>
  
  
    </div>
</div>

</div>

    <div className="w-full mt-[70px]">
    
    <BarChart
      width={900}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      
      <YAxis/>
      <Tooltip/>
      <Legend />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar  />} label={{ position: 'top' }}>
    
        {chartData?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
   
<div className='w-full mt-[10px]'>

<PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
           dataKey="revenue"
          nameKey="category"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors2[index % colors2.length]} />
            ))}
          </Pie>
         
          <Tooltip/>
          <Legend></Legend>
        </PieChart>
</div>

        </div>
    );
};

export default AdminHome;