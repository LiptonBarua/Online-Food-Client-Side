import { Protect } from '@/Components/PrivateRoute/PrivateRoute';
import ServicePage from '@/Components/ServicePage/ServicePage';
import React from 'react';

const Services = () => {
    return (
        <div>
            <ServicePage></ServicePage>
        </div>
    );
};

export default Protect(Services);