import { AuthContext } from '@/AuthProvider/AuthProvider';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import UserCommentsServiceData from './UserCommentsServiceData';

const UserCommentService = () => {
    const{user}=useContext(AuthContext)
    const{ratingData}=useContext(ShareContext)

    const comments = ratingData.filter(rating => rating.userEmail === user?.email);

    return (
        <div className='py-24 md:max-w-[92%] md:mx-auto mx-3'>
         {
            comments.map(comment=><UserCommentsServiceData key={comment._id} comment={comment}></UserCommentsServiceData>)
         }

        </div>
    );
};

export default UserCommentService;