import { Protect } from '@/Components/PrivateRoute/PrivateRoute';
import UserCommentService from '@/Components/UserCommentService/UserCommentService';
import React from 'react';

const UserComment = () => {
    return (
        <div>
           <UserCommentService></UserCommentService> 
        </div>
    );
};

export default Protect(UserComment);