import { AuthContext } from '@/AuthProvider/AuthProvider';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
// import ReactStars from 'react-stars';
const serviceId = ({serviceData}) => {
  const{user} =useContext(AuthContext);
  const{ ratingData}=useContext(ShareContext);

  const [rating, setRating] = useState();
  const [hover, setHover] = useState(0);

  const[avgStars, setAvgStars]=useState();


    const {img, title, price, details, _id} = serviceData;



    const reviews=ratingData.filter(rating=>rating.cardId===serviceData._id)

  
   useEffect(() => {
    const starsReview = reviews?.map((stars) => stars.rating);
    if (starsReview.length > 0) {
        const totalReview =
            starsReview?.reduce((a, b) => a + b, 0) / starsReview.length;

        setAvgStars(totalReview);
    }
}, [reviews]);



const date= new Date()

    const handleReview=(event)=>{
      event.preventDefault();
      const form = event.target;
     
      const name = user?.displayName;
      const email = user?.email || 'unregister';
      const message = form.message.value;
      const phote= user?.photoURL;

      console.log(name, email, message)
      const order={
        name,
        email,
        message,
        phote,
        rating,
        date,
        cardId:_id
    }

    fetch(`https://assiament-server.vercel.app/rating`,{
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.acknowledged){
        alert('Review Submitted successfully!')
        form.reset();
      }
     
    })
    .catch(error=>console.error(error))
    }
  return (
    <div>
    <div className='md:max-w-[92%] md:mx-auto pb-10 pt-24'>
    <div className="px-4 md:px-0" >
      <div className=" md:flex">
      
        <img alt="ecommerce" className="lg:w-[640px] w-full lg:h-[480px] rounded" src={img} />
        <div className=" w-full lg:pl-10 lg:py-2 mt-6 lg:mt-0" >
          <h2 className="text-sm title-font text-gray-600 tracking-widest">ON SALE</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" >{title}</h1>
          <div className="flex mb-4 ">
            <span className="flex items-center">
            <div className=" flex gap-0.5">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
    
                    return (
                      <label key={i}>
             
                        <FaStar
                          className="stars font-bold"
                          color={ratingValue <= (hover || avgStars) ? '#ff4d00' : <li></li>}
                          // onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                        />
                      </label>
                    );
                  })}
    
                </div>
          
              <span className="text-gray-600 ml-3">{avgStars >0? avgStars.toFixed(1) : 0} Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-[#ff4d00] space-x-2s">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p className=" text-justify">{details}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-[#ff4d00] mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-[#ff4d00] rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
            <button className="flex ml-auto text-white bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</button>
            {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </div>
    
    
    
    <div className="px-4 md:px-0 pt-20 flex flex-col w-full">
        <h2 className="text-2xl text-black font-semibold">Product Description</h2>
    <div className='flex items-center my-3'>
    <p className='text-black font-bold'>Your Rating: </p>
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
    </div>
      <form action="" onSubmit={handleReview}>
      <textarea rows="6" required name='message' placeholder="Write a Message..." className="border border-gray-400 p-4 w-full reviewItem rounded-md resize-none"></textarea>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-4'>
      <input type="text" name='name' placeholder="Your Name" required="" className="reviewItemFrom block border border-gray-400 w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
      <input  type="email" name='email' placeholder="Your Email" required="" className="reviewItemFrom1 border border-gray-400 bg-outline block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
      </div> */}
      <button type='submit' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-black text-white rounded hover:bg-black group">
    <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-[#401a14] via-[#340505] to-[#B43B07] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Post Review</span>
    </button>
      
      </form>
      </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({params:{id}}) {
    const res=await fetch(`https://assiament-server.vercel.app/service/${id}`)
    const data=await res.json()
  return {
    props: {
        serviceData: data
    }, 
  }
}

export default serviceId;

