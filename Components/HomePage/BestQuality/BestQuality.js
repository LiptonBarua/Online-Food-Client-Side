import React from 'react';

const BestQuality = () => {
    return (
        <section className=" lg:px-36 pb-20 mb-16 pt-10">
        <div className="container mx-auto max-w-3xl text-center text-black">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error consectetur commodi voluptas maiores, laborum illo et amet magnam! Quis?</p>
        </div>
        <div className="container mx-auto mt-10 grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-lg flex flex-col items-center p-8  bg-[#eee7e7] hover:bg-black hover:text-white" style={{transition: `3s`}}>
               <img className='w-8 h-8' src="https://i.ibb.co/VBzZhZs/bibimbap-removebg-preview.png" alt="" />

                <h3 className="my-3 text-2xl font-semibold">Eat Good Food</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-justify'>It is a long established fact that a reader will distracted by the readable content of apage when looking at its layout.</p>
                </div>
            </div>
            <div className="shadow-lg flex flex-col items-center p-4  bg-[#eee7e7] hover:bg-black hover:text-white" style={{transition: `3s`}}>
            <img className='w-9 h-9' src="https://i.ibb.co/cgD2LCZ/certificate-removebg-preview.png" alt="" />


                <h3 className="my-3 text-2xl font-semibold">Best Quality</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-justify'>It is a long established fact that a reader will distracted by the readable content of apage when looking at its layout.</p>
                </div>
            </div>
            <div className="shadow-lg flex flex-col items-center p-4  bg-[#eee7e7] hover:bg-black hover:text-white" style={{transition: `3s`}}>
            <img className='w-9 h-9' src="https://i.ibb.co/2gBGH7d/delivery-man-removebg-preview.png" alt="" />


                <h3 className="my-3 text-2xl font-semibold">Fastest Delivery</h3>
                <div className="space-y-1 leading-tight">
                    <p className='text-justify'>It is a long established fact that a reader will distracted by the readable content of apage when looking at its layout.</p>
                </div>
            </div>

        </div>
    </section>
    );
};

export default BestQuality;