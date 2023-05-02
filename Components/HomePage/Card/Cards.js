
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import moment from 'moment/moment';


const Cards = ({card}) => {
  const { ratingData } = useContext(ShareContext)
  const [avgStars, setAvgStars] = useState();
  const [hover, setHover] = useState(0);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  const { img, title, price, details, _id, date, phote, userName} = card;





  const reviews = ratingData.filter(rating => rating.cardId === card._id)


  useEffect(() => {
    const starsReview = reviews?.map((stars) => stars.rating);
    if (starsReview.length > 0) {
      const totalReview =
        starsReview?.reduce((a, b) => a + b, 0) / starsReview.length;

      setAvgStars(totalReview);
    }
  }, [reviews]);


  return (
    <div>


      <div className="relative group h-[610px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">

        <div className=" overflow-hidden">

          {/* <img src={img} alt="" className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"/> */}
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" className="w-full h-72 object-cover object-center transition-all duration-300 transform group-hover:scale-110" />
            </PhotoView>

          </PhotoProvider>

        </div>


        <div className="my-6 py-3 px-6 flex flex-col justify-around">

          <h1 className="title-font text-2xl bg-gradient-to-r from-[#401a14] via-[#340505] to-[#cd450a] bg-clip-text text-transparent font-medium no-underline transform font-bold ">{title}</h1>
          <div className='flex items-center'>
            <div className="mb-3 flex gap-0.5">
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


          </div>
          <h1 className='font-semibold text-xl'>${price}</h1>
          <p className="my-2 text-justify text-neutral-600 dark:text-neutral-200">
            {details.length > 100 ? details.slice(0, 100) + '...' : details}
          </p>


          <div className='absolute bottom-16 flex justify-between'>
            <Link href={`/serviceDetails/[id]`} as={`/serviceDetails/${_id}`} className="py-2 bg-gradient-to-br from-[green] to-[red] bg-clip-text text-transparent font-medium no-underline transform hover:scale-105">Read more</Link>

          </div>

          {/* <Link to={`/service/${_id}`}>  <button type="button" className="mb-3 absolute bottom-0 inline-block rounded bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" data-te-ripple-init data-te-ripple-color="light">Datails</button></Link> */}
        </div>


        <div className="absolute bottom-0 py-3 flex w-full justify-around border-t border-gray-200">
        <span className="py-0.5 flex items-center text-xs font-semibold tracking-wide cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>

            {/* {
              phote ? <img alt="" className="w-7 h-7 border rounded-full dark:bg-gray-500 dark:border-gray-700" src={phote} /> : <img alt="" className="w-7 h-7 border rounded-full dark:bg-gray-500 dark:border-gray-700" src='https://media.istockphoto.com/id/1311315541/photo/headshot-portrait-of-smiling-businessman-posing-in-office.jpg?s=170667a&w=0&k=20&c=r7s-FSwf6caTo3W2TnjCeujMzWRYkwu3_uUt2QYaNTc=' />
            } */}
            {
              userName ? <p className='ml-1'>{userName}</p> : <h1 className='ml-1'>User Name</h1>
            }
          </span>

          <span className="py-0.5 px-1.5 flex items-center text-xs font-semibold tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {moment(date).format('LL')}
          </span>

          <span className="py-0.5 px-1.5 flex items-center text-xs font-semibold tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {
              date ? <h1>{moment(date).startOf('hour').fromNow()}</h1> : <h1>No Date</h1>
            }

          </span>

        
        </div>
      </div>

    </div>

  );
};

export default Cards;



