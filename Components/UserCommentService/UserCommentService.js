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
            <div>
                <h1 className="mb-4 text-center text-2xl font-bold text-black md:mb-8 lg:text-3xl xl:mb-12">Customer Review</h1>
            </div>
        <div>
        {
            comments.map(comment=><UserCommentsServiceData key={comment._id} comment={comment}></UserCommentsServiceData>)
         }
        </div>

        </div>
    );
};

export default UserCommentService;