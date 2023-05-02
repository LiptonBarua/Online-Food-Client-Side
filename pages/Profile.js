import MyProfile from '@/Components/MyProfile/MyProfile';
import { Protect } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const Profile = () => {
    return (
        <div>
            <MyProfile></MyProfile>
        </div>
    );
};

export default Protect(Profile);