import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewDetails = ({ review, handleDelete }) => {

  const [ratinger, setRating] = useState(review.rating);
  const [hover, setHover] = useState(0);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => { setIsReadMore(!isReadMore) };


  const { _id, name, date, rating, serviceName, price, customer, phone, service, message, phote, title } = review;



  return (


    <div className='flex justify-between my-20'>
      <div>
        <h1 className="block text-sm font-bold">{name}</h1>
        <span className="block text-sm text-gray-500">{moment(date).format('LL')}</span>
        <div className='flex items-center'>
          <div className="-ml-1 flex gap-0.5">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label key={i}>

                  <FaStar
                    className="star"
                    color={ratingValue <= (hover || ratinger) ? '#ff4d00' : 'black'}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                  />
                </label>
              );
            })}

          </div>
          <span className="text-gray-800 ml-3">{rating > 0 ? rating.toFixed(1) : 0} Reviews</span>
        </div>
        <div className='mt-6'>
          <span className="font-bold">{title}</span>
          <p className='text-justify text-gray-600'>
            {isReadMore ? message.slice(0, 200) : message}

            {message.length > 200 &&
              <span onClick={toggleReadMore} className="text-[#020602] font-semibold">
                {isReadMore ? '...Read more' : ' ...Show less'}
              </span>
            }
          </p>
      
        </div>
      </div>
      <div>
        <button onClick={() => handleDelete(_id)} className=''>	<svg xmlns="http://www.w3.org/2000/svg" className="text-[#f96603] h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg></button>
      </div>
    </div>
  );
};

export default ReviewDetails;