import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import Cards from './Cards';
import Link from 'next/link';

const Card = () => {
    const{service}=useContext(ShareContext)
    return (
        <div>
                <div className='md:max-w-[92%] md:mx-auto mx-3 py-20'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-orange-700'>Top Collections</h1>
          </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
          
             {
               service.map(card=><Cards key={card._id} card={card}></Cards>)
             }
           </div>
           {/* <div className="text-center my-5">
				<div className="pagination ">
					{[...Array(pages).keys()].map((number) => (
						<button
							key={number}
							className={page === number ? 'selected' : 'selected1'}
							onClick={() => setPage(number)}
						>
							{number + 1}
						</button>
					))}
				</div>
			</div> */}
           <div className='grid justify-items-center my-10'>
           <Link href='/Services'><button className="bg-orange-800 px-6 py-1 text-white">See More</button></Link>
           </div>
          
            
        </div>
        </div>
    );
};

export default Card;