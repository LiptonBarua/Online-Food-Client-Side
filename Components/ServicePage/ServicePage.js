import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import ServicePageDetails from './ServicePageDetails';

const ServicePage = () => {
    const{service}=useContext(ShareContext)
    return (
        <div className='md:max-w-[92%] md:mx-auto'>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto py-24'>
           
           {
            service.map(item=><ServicePageDetails key={item._id} item={item} ></ServicePageDetails>)
           }
        </div>
        </div>
    );
};

export default ServicePage;

