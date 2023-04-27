import AddProductCard from '@/Components/AddProductCard/AddProductCard';
import { Protect } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <AddProductCard></AddProductCard>
        </div>
    );
};

export default Protect(AddProduct);