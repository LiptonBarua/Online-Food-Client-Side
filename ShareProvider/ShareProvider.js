
import { AuthContext } from '@/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const ShareContext = createContext()

const ShareProvider = ({ children }) => {
    const[users, setUsers]=useState([])
    const{user}=useContext(AuthContext)


    // ..........User Data Load.........
  useEffect(()=>{
  fetch('https://assiament-server.vercel.app/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
   }, [])


  //  .........User Profile Data Load...................

  const{data: userProfile=[], refetch:profileFetch}=useQuery({
    queryKey: ['profileData', user?.email],
    queryFn: async()=>{
      const res=await fetch(`https://assiament-server.vercel.app/profile?email=${user?.email}`)
      const data=res.json();
      return data;
    }
  })

// ...............Service Data Load.............


    const{data:service=[], refetch:serviceLoad}=useQuery({
      queryKey: ['serviceData'],
      queryFn: async()=>{
        const res=await fetch('https://assiament-server.vercel.app/services')
        const data=res.json()
        return data;
      }
    })

// .........Personal Card Data Load..................

const{data:cards=[], refetch:cardRefetch}=useQuery({
  queryKey: ['cardsData', user?.email],
  queryFn: async()=>{
      const res= await fetch(`https://assiament-server.vercel.app/cards?email=${user?.email}`)
      const data=await res.json()
      return data;
  }
})

// ...........rating data load...................


      const{data: ratingData=[], refetch}=useQuery({
        queryKey: ['reviewData'],
        queryFn: async()=>{
            const res=await fetch('https://assiament-server.vercel.app/rating')
            const data=res.json()
            return data;
        }
      })
      

    //  ...........Review Data Load.....................
    
    



    const{data:review=[], refetch:reviewRefetch}=useQuery({
      queryKey: ['reviewData', user?.email],
      queryFn: async()=>{
        const res=await fetch(`https://assiament-server.vercel.app/myReview?email=${user?.email}`)
        const data=res.json()
        return data;
      }
    })

    const shareInfo = {review, reviewRefetch, service, ratingData, users, refetch, serviceLoad, userProfile, cards, profileFetch, cardRefetch}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;