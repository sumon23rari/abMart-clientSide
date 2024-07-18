import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import './styles.css';
const Testimonials = () => {
    const [clients,setClients]=useState([])
    useEffect(()=>{
    fetch(`review.json`)
    .then(res=>res.json())
    .then(data=>setClients(data))
    },[])
    var settings = {
      dots:false,
      infinite: false,
      autoplay: true,
    
      infinite: true,
      marign:'40px',
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div>
            <div className='text-center title my-[80px]'>
                <h3 className='capitalize mb-2s text-[25px] capitalize'>Testimonials</h3>
                <h3 className='font-bold text-[#039D55] text-[30px] capitalize'>User Feedbacks</h3>
            </div>
            <div className="slider-container overflox-hidden max-w-screen-xl mx-auto mb-[80px]">
      <Slider {...settings}>
      {
        clients.map((client,index)=>{
          return  (<div key={index} className=' text-[20px] shadow-xl overflow-hidden !w-[350px]'>
          <div className='flex justify-between px-[32px] font-bold'>
            <div>  <h3>{client.reviewName}</h3>
            <h4 className='text-sm'>{client.reviewDesignation}</h4>
            </div>
            <img src={client.reviewImage} className='w-[40px] h-[40px] rounded-full'/>
          </div>
          <div  className='card-body'>
            <p>{client.reviewDescription}</p>
            <p className='flex gap-1 text-[#E4AA12]'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></p>
            </div>
          </div>)
        })
      }
      </Slider>
    </div>
            
        </div>
    );
};

export default Testimonials;