import React from 'react';

const Subscribe = () => {
    return (
        <div className=''>
            <section className="py-6 bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07]">
                <div className=" flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-4 text-center lg:text-left text-white">
                        <h1 className="text-lg font-bold leading-none">Get the latest news our offers</h1>
                        <p className="text-2xl md:text-5xl font-bold">Subscribe to our newsletter</p>
                    </div>
                    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                        <div className="flex flex-row">
                            <input type="text" placeholder="Enter Your Email" className="w-72 md:w-80 rounded-l-lg pl-3" />
                            <button type="button" className="w-2/5 text-white p-3 font-semibold rounded-r-lg sm:w-1/3 bg-gradient-to-r from-[#401a14] via-[#340505] to-[#cd450a]">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;