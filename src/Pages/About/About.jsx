import React, { useEffect, useState } from 'react';
import BradCumb from '../Shared/BradCumb/BradCumb';
import about from '../../assets/about/about.png';
import left from '../../assets/about/left.png';

const About = () => {
    const [teams,setTeams]=useState([])
    useEffect(()=>{
        fetch(`review.json`)
        .then((res)=>res.json())
        .then((data)=>setTeams(data))
    },[])
    return (
        <div>
            <BradCumb title={"About-us"}></BradCumb>
            <div className='flex items-center flex-col'>
                <img src={about} alt="aboutImg" className='mt-[40px] h-[300px]'/> <br />
                <h3 className='text-center text-3xl mb-[50px] font-semibold'>
                Life is <span className='text-[#039D55]'>enough hard</span> already <br/>
Let us make it a much <span className='text-[#039D55]'>more easier</span>
                </h3>
            </div>
            <div className='grid grid-cols-2 gap-6'>
        <div className='lg:mr-[60px] grid content-center'>
            <h3 className='font-bold text-2xl pb-4 text-center '>Why do you <span className='text-[#039D55]'>choose us?</span></h3>
            <p>nce Q4 of 2020, consumer priorities have centered heavily 
on how to cut costs — whether that’s favoring a cheaper 
product, selecting an item with free shipping, or comparing 
several products for the best deal. Ecommerce is continuing 
to dominate the consumer playing field as spending 
preferences and comfort levels radically shift with our new 
normal. And with the many perks of online shopping, it’s no 
surprise that consumers have turned to screens instead of stores.
43% of consumers say they would be fine if they never shopped 
in a physical store again, and nearly three-quarters of consumers
(73%) believe the majority of consumer shopping will happen 
online in the future.</p>
        </div>
        <div>
<img src={left} className='h-[320px] w-full'/>
        </div>
            </div>
            <div className='pt-[60px]'>
<h3 className='text-center font-bold text-2xl pb-[20px]'>
    Meet our <span className='text-[#039D55]'>team</span>
</h3>
<div className='grid grid-cols-3 gap-x-[60px] mb-[40px]'>
   {
teams.slice(0,3).map((team,index)=><div key={index}>
<img src={team.reviewImage} className='h-[340px] w-full'/>
<br/>
<h3 className='text-center font-bold text-2xl'>
    {team.reviewName} <br/>
    <span className='text-xl'>{team.reviewDesignation}</span>
</h3>
</div>)
   }
</div>
            </div>
         
        </div>
    );
};

export default About;