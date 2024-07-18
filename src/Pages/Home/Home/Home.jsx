import React from 'react';
import Banner from '../../../components/Banner/Banner';
import FSales from '../../../components/FSales/FSales';
import Categories from '../../../components/Categories/Categories';
import ToDeals from '../../../components/ToDeals/ToDeals';
import OffBanner from '../../../components/OffBanner/OffBanner';
import ServiceInfo from '../../../components/ServiceInfo/ServiceInfo';



const Home = () => {

    return (
        <div className='mt-4'>
<Banner></Banner>
<FSales></FSales>
<Categories></Categories>
<ToDeals></ToDeals>
<OffBanner></OffBanner>
<ServiceInfo></ServiceInfo>

        </div>
    );
};

export default Home;