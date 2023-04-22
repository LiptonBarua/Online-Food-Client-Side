import { BiTimer } from "react-icons/bi";
// import { BsShop } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import './Delivery.css'


const Delivery = () => {
    return (
        <div className='md:max-w-[92%] md:mx-auto my-20 delivery'>
            <section className="p-4 md:p-0">
                <div className="">
                    <div className="flex flex-col overflow-hidden rounded-md lg:flex-row">

                        <div className='mr-5'>

                            {/* <video className="max-w-xl md:h-[400px]" autoplay muted controls>
                                <source src="Food_Delivery_Advertisement_(Ken)(1080p).mp4" type="video/mp4" />

                            </video> */}
                        </div>
                        <img src="https://www.rewardsnetwork.com/wp-content/uploads/2020/11/restaurant-delivery-service-2.jpg" alt="" className="lg:h-96 lg:w-1/2 md:mr-12 " />
                        <div className="flex flex-col justify-center flex-1 pt-4 ">
                            <h3 className="text-4xl text-black font-bold"><span className='text-[#c83822] font-italic'>Sit</span> at Home</h3>
                            <h3 className="text-4xl font-bold text-black">We Will <span className='text-[#c83822]'>Take Care</span></h3>
                            <p className="my-6 dark:text-gray-400 text-justify">You just order your favourite food and rest at your place we will delivery it in time. No delay no time lose and no frustration. Chill and relax and enjoy the food at time.</p>

                            <div className='grid grid-cols-3 gap-3 mb-5 md:mr-20'>
                                <div className='text-[#c83822] font-bold'>
                                    <BiTimer className='text-4xl'></BiTimer>
                                    <h1>Fast Delivery in 1 hour</h1>
                                </div>
                                <div className='text-[#c83822] font-bold'>
                                    <TbTruckDelivery className='text-4xl'></TbTruckDelivery>
                                    <h1>150 + Delivery Man</h1>
                                </div>

                                <div className='text-[#c83822] font-bold'>
                                    <HiOutlineLocationMarker className='text-4xl text-[#c83822]'></HiOutlineLocationMarker>
                                    <h1>More Area Coverage</h1>
                                </div>

                            </div>
                            <button type="button" className="bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] w-28 rounded-md">Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Delivery;