"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { ShareContext } from "@/ShareProvider/ShareProvider";
// import { Link } from "react-router-dom";


const Recipes = () => {
const{service}=useContext(ShareContext)
    const [tes, setTest] = useState([])

    useEffect(() => {
        fetch('https://assiament-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setTest(data))
    }, [])
    
    return (
        <div className="max-w-[92%] mx-auto my-20">
            <div className="flex justify-between">
                <h1 className="text-2xl md:text-3xl font-semibold">Trending Recipes</h1>
                <h1 className="text-orange-700 font-semibold">View All</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}

                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                
                className="mySwiper"
            >
                <div>
                    {
                        service.map((tester, i) => <SwiperSlide key={i}>
                            <div className="card card-compact py-10">
                                <PhotoProvider>
                                    <PhotoView src={tester.img}>
                                        <figure><img className="rounded-full w-32 h-32 md:w-28 md:h-28" src={tester.img} alt="" /></figure>
                                    </PhotoView>

                                </PhotoProvider>

                                <div className=" text-center mt-2">
                                    <h2 className="font-bold">{tester.title}</h2>
                                    <h2>Price: ${tester.price}</h2>
                                
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
}

export default Recipes;