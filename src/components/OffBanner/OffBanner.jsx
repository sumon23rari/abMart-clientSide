import React from 'react';
import ban1 from '../../assets/offBan/Rectangle 41.png';
import ban2 from '../../assets/offBan/Rectangle 42.png';
const OffBanner = () => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            <img src={ban1} alt="ban1" className='w-full'/>
            <img src={ban2} alt="ban2" className='w-full'/>
        </div>
    );
};

export default OffBanner;