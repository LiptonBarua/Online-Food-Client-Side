"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { useContext } from "react";
import { Navigation, Pagination } from "swiper";
import { ShareContext } from "@/ShareProvider/ShareProvider";
import moment from "moment/moment";


const Testimonails = () => {
    const { ratingData } = useContext(ShareContext);

    return (
        <div id='testimonail' className="px-4 md:px-0 md:max-w-[92%] md:mx-auto pb-24">
            <div className='md:text-center text-black my-10'>
                <h1 className='text-center font-semibold'>Testimonials</h1>
                <p className="text-3xl md:text-4xl font-bold">Our Customers <span className='text-orange-700'>Feedback</span></p>
            </div>
            <section className="text-gray-600 body-font">
                <div className="">

                    <div>
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


                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}

                            className="mySwiper"
                        >
                            <div>
                                {
                                    ratingData?.map((tester, i) => <SwiperSlide key={i}>
                                        <div className="">
                                            <div className="h-full bg-gradient-to-r from-[#0D0605] to-[#B43B07] text-white p-8 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block text-orange-700 w-8 h-8 mb-4" viewBox="0 0 975.036 975.036">
                                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                                </svg>
                                                <p className="leading-relaxed mb-6 text-justify">{tester.message}</p>
                                                <a className="inline-flex items-center">

                                                    {
                                                        tester?.phote ? <img alt="testimonial" src={tester?.phote} className="w-9 h-9 rounded-full flex-shrink-0 object-cover object-center" /> : <img alt="testimonial" src="https://media.istockphoto.com/id/1311315541/photo/headshot-portrait-of-smiling-businessman-posing-in-office.jpg?s=170667a&w=0&k=20&c=r7s-FSwf6caTo3W2TnjCeujMzWRYkwu3_uUt2QYaNTc=" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                    }

                                                    <span className="flex-grow flex flex-col pl-4">
                                                        <span className="title-font font-medium">{tester.name}</span>
                                                        <span className="text-sm">{moment(tester.date).format('lll')}</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                                }
                            </div>

                        </Swiper>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonails;