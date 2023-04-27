import { Protect } from '@/Components/PrivateRoute/PrivateRoute';
import Review from '@/Components/Review/Review';
import React from 'react';

const MyReview = () => {
    return (
        <div>
            <Review></Review>
        </div>
    );
};

export default Protect(MyReview);