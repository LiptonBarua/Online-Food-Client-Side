import React from 'react';

const DeliveryBanner = () => {

    return (
        <section className=" bg-[#c83822] lg:px-36 py-16">
            <div className="container mx-auto max-w-3xl text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Us Shop</h2>
                <p className="dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error consectetur commodi voluptas maiores, laborum illo et amet magnam! Quis?</p>
            </div>
            <div className="container mx-auto mt-10 grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4  bg-white hover:bg-black hover:text-white" style={{transition: `3s`}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 dark:text-violet-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>

                    <h3 className="my-3 text-3xl font-semibold">Phone</h3>
                    <div className="space-y-1 leading-tight">
                        <p>+8801638776808</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4  bg-white hover:bg-black hover:text-white" style={{transition: `3s`}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 dark:text-violet-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <h3 className="my-3 text-3xl font-semibold">Location</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Chittagong, Bangladesh</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4  bg-white hover:bg-black hover:text-white" style={{transition: `3s`}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 dark:text-violet-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <h3 className="my-3 text-3xl font-semibold">E-Mail</h3>
                    <div className="space-y-1 leading-tight">
                    <p>liptonbarua274@gmail.com</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DeliveryBanner;


// style={{clipPath:`circle(77% at 78% 39%)`}}
