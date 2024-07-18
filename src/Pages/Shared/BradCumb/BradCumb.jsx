import React from 'react';

const BradCumb = ({title}) => {
    return (
        <div className='bg-[#E9FEF4] text-center mt-[25px] py-[30px]'>
            <h3 className='font-bold text-2xl mb-[5px]'>{title} Page</h3>
            <h3 className='text-lg'>Home/{title}</h3>
        </div>
    );
};

export default BradCumb;