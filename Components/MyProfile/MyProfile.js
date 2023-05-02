import { ShareContext } from '@/ShareProvider/ShareProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import MyProfieData from './MyProfieData';
import MyProfileModal from './MyProfileModal';
import { AuthContext } from '@/AuthProvider/AuthProvider';
import Link from 'next/link';

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const { userProfile, cards, ratingData } = useContext(ShareContext);


    const comments = ratingData.filter(rating => rating.userEmail === user?.email)
    console.log(comments)

    const handleDeleteService = (id) => {
        fetch(`https://assiament-server.vercel.app/service/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('delete successfully')
                }
            })
    }
    return (
        <div>
            <div className="pt-52 pb-20">
                <div className='md:max-w-[92%] md:mx-auto mx-3'>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            {/* <div>
                            <p className="font-bold text-gray-700 text-xl">22</p>
                            <p className="text-gray-600">Friends</p>
                        </div> */}
                            <div>
                                <p className="font-bold text-gray-700 text-xl">{cards?.length}</p>
                                <p className="text-gray-600">Service</p>
                            </div>
                            <div>
                                <Link href='/UserComment'><p className="font-bold text-gray-700 text-xl">{comments?.length}</p>
                                    <p className="text-gray-600">Comments</p></Link>
                            </div>


                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-gradient-to-r from-[#0D0605] via-[#120101] to-[#B43B07] mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <img src={userProfile[0]?.image} alt="" className="self-center flex-shrink-0 w-44 h-44 border rounded-full md:justify-self-start " />
                            </div>
                    </div>
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        {/* <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Connect</button> */}
                        <label htmlFor="profile-modal" className="btn btn-info text-black">Edit Profile</label>
                        {/* <button className="text-white py-2 px-4 uppercase rounded bg-info hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Message</button> */}
                    </div>
                </div>
                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-[black]">{userProfile[0]?.name} </h1>
                    <p className="font-semibold text-gray-800 mt-3">{userProfile[0]?.email}</p>
                    <p className="mt-8 text-gray-600">{userProfile[0]?.position}</p>
                    <p className="mt-2 text-gray-600">{userProfile[0]?.education}</p>
                </div>
                <div className="mt-12 flex flex-col justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                    {/* <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>    <button className="text-indigo-500 py-2 px-4  font-medium mt-4">  Show more</button> */}
                    {
                        cards.map(cardData => <MyProfieData key={cardData._id} cardData={cardData} handleDeleteService={handleDeleteService}></MyProfieData>)
                    }
                </div>

                <div>
                    <MyProfileModal></MyProfileModal>
                </div>
            </div>
        </div>
        </div >
    );
};

export default MyProfile;