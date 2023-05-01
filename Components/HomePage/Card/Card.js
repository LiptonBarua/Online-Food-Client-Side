import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext, useState } from 'react';
import Cards from './Cards';
import Link from 'next/link';
import { Pagination } from 'antd';

const Card = () => {
  const { service } = useContext(ShareContext);

  const [total, setTotal] = useState("")
  const [page, setPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(3);


  const indexofLastPage = page + postPerPage;
  const indexofFirstPage = indexofLastPage - postPerPage;
  const currentPosts = service.slice(indexofFirstPage, indexofLastPage);

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize)
  }

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>
    }
    if (type === 'next') {
      return <a>Next</a>
    }
    return originalElement;
  }

  // const handleDeleteService=(id)=>{
  //   fetch(`http://localhost:5000/service/${id}`,{
  //     method: 'DELETE',
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     if(data.deletedCount>0){
  //     alert('delete successfully')
  //     }
      
  //   })
  //   .catch(error=>{
  //     alert('delete error')
  //   })
  // }
  return (
    <div>
      <div className='md:max-w-[92%] md:mx-auto mx-3 py-20'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-orange-700'>Top Collections</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>

          {
            currentPosts.map(card => <Cards key={card._id} card={card}></Cards>)
          }
        </div>
 
        <div className='flex justify-center'>

          <Pagination onChange={(value) => setPage(value)}
            pageSize={postPerPage}
            total={total} current={page}
            showSizeChanger
            // showQuickJumper
            onShowSizeChange={onShowSizeChange}
            itemRender={itemRender}
          />

        </div>

        <div className='grid justify-items-center my-10'>
          <Link href='/Services'><button className="bg-orange-800 px-6 py-1 text-white">See More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;