import React, { useContext, useEffect, useState } from 'react';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaStar } from 'react-icons/fa';
import { ShareContext } from '../../ShareProvider/ShareProvider';
import Link from 'next/link';


const ServicePageDetails = ({item, handleDelete}) => {
// const{ratingData}=useContext(ShareContext)

  const[avgStars, setAvgStars]=useState();
  const [hover, setHover] = useState(0);

    const {img, title, price, details, _id} = item;

  
  
//     const reviews=ratingData.filter(rating=>rating.cardId===item._id)
  
  
//    useEffect(() => {
//     const starsReview = reviews?.map((stars) => stars.rating);
//     if (starsReview.length > 0) {
//         const totalReview =
//             starsReview?.reduce((a, b) => a + b, 0) / starsReview.length;
  
//         setAvgStars(totalReview);
//     }
//   }, [reviews]);


    return (
      <div>

      <div data-aos="fade-up">
        <div 
          className="card relative h-[550px] rounded-lg bg-[#f7e6e6] shadow-lg">
          <a href="#!" data-te-ripple-init data-te-ripple-color="light">
            <PhotoProvider>
              <PhotoView src={img}>
                <img className="image rounded-t-lg h-72 w-full" src={img} alt="" />
              </PhotoView>

            </PhotoProvider>

          </a>
          <div className="p-6">
       <div className='flex justify-between'>
       <h5 className="mb-2 text-xl font-medium leading-tight text-[#612219] dark:text-neutral-50">{title} </h5>

       </div>
       <div className='flex items-center'>
              {/* <div className="mb-3 flex gap-0.5">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                  <label key={i}>
         
                    <FaStar
                      className="star"
                      color={ratingValue <= (hover || avgStars) ? '#ff4d00' : 'gray'}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}

            </div>
            <div className='mb-3 ml-1'>
            (
              {
                  avgStars > 0 ? avgStars.toFixed(1) : 0
                }
            )
            </div>

               */}
              </div>
       <h2 className='font-bold text-xl text-black'>${price}</h2>
            {/* <p>{details}</p> */}
            <p className="my-2 text-justify text-neutral-600 dark:text-neutral-200">
              {details?.length > 100 ? details?.slice(0, 100) + '...' : details}
            </p>
           <div className=''>
           {/* <Link to={`/service/${_id}`}>  <button type="button" className="mb-3 absolute bottom-0 inline-block rounded bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" data-te-ripple-init data-te-ripple-color="light">Datails</button></Link> */}
           </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default ServicePageDetails;