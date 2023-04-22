import React from 'react';

const Gallery = () => {
    return (
        <div className='md:max-w-[92%] md:mx-auto px-4 md:px-0'> 
		  
           <section className="py-16">
		   <h1 className='text-center my-10 text-3xl font-bold text-black'>Our Food <span className='text-orange-700'>Gallery</span></h1>
	<div className="">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" alt='' />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt=''/>
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg" alt=''/>
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg" alt=''/>
		</div>
	</div>
	
</section> 


        </div>
    );
};

export default Gallery;