import React, { useEffect, useState } from 'react';

const CountDownTimer = () => {
    const calculateTimeRemaiing=()=>{
        const offerLastDate=new Date('2024-09-23');
        const currentTime=new Date();
        const difference=offerLastDate-currentTime;
        let timeRemaining={
            days:Math.floor(difference/(1000 * 60 * 60 * 24)),
            hours:Math.floor((difference / (1000 * 60 * 60 * 24)) %24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
        return timeRemaining
    };
    const [timeRemaining,setTimeRemaining]=useState(calculateTimeRemaiing());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeRemaining(calculateTimeRemaiing());
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, []);
    return (
        <div className="bg-[#D6FEEB] rounded p-3 flex font-bold items-center">
        <div className='mx-2 text-center'>
              <h3 className='text-lg md:text-xl p-1 sm:p-2 bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white font-semibold'>
                {timeRemaining.days}
              </h3>
              <span >Days</span>
            </div>
           <span className ="items-center -mt-6  text-2xl">  :</span>
            <div className='mx-2 '>
            <h3 className='text-lg md:text-xl p-1 sm:p-2 bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white font-semibold'>
                {timeRemaining.hours}</h3>
              <span>Hours</span>
            </div>
           <span className ="items-center -mt-6  text-2xl">  :</span>
            <div  className='mx-2'>
            <h3 className='text-lg md:text-xl p-1 sm:p-2 bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white font-semibold'>
                {timeRemaining.minutes}</h3>
              <span>Min</span>
            </div>
           <span className ="items-center -mt-6  text-2xl">  :</span>
            <div  className='mx-2'>
            <h3 className='text-lg md:text-xl p-1 sm:p-2 bg-gradient-to-r from-[#24D381] to-[#32EC95] text-white font-semibold'>
                {timeRemaining.seconds}</h3>
              <span>Sec</span>
            </div>
        </div>
    );
};

export default CountDownTimer;