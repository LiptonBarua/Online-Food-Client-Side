import React from 'react';
import Link from 'next/link';


const Banner = () => {
  return (
    <div>
      <div className="banner hero md:px-8 py-16 md:py-0 md:pt-16">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src='https://i.ibb.co/9ghWQ08/3510d3dce324644a5b3dc2ac60d27250-removebg-preview.png' className=" md:max-w-lg rounded-lg" alt='' />
          <div className='text-white md:pr-36'>
            <h1 className="text-2xl md:text-6xl font-italic">Best & Fastest <span className='font-bold text-orange-500'>Delivery</span> Please</h1>
            <p className="py-6 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] hover:bg-none border border-[#83281a] hover:text-white px-5 py-3 rounded-3xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Get Started</button>
            <Link href='/review' className="relative ml-1 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group">
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-whitie">My Reviews</span>
              <span className="absolute inset-0 border border-[#5c1e14] rounded-full"></span>
            </Link>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Banner;