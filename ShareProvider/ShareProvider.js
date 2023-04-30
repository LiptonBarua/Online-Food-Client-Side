
import { AuthContext } from '@/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const ShareContext = createContext()

const ShareProvider = ({ children }) => {
    // const [ratingData, setRatingData] = useState([]);
    const[review, setReview] = useState([]);
    const[users, setUsers]=useState([])
    const{user}=useContext(AuthContext)


    // ..........User Data Load.........
  useEffect(()=>{
  fetch('https://assiament-server.vercel.app/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
   }, [])


  //  .........User Profile Data Load...................

  const{data: userProfile=[]}=useQuery({
    queryKey: ['profileData'],
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



// ...........rating data load...................


      const{data: ratingData=[], refetch}=useQuery({
        queryKey: ['reviewData'],
        queryFn: async()=>{
            const res=await fetch('https://assiament-server.vercel.app/rating')
            const data=res.json()
            return data;
        }
      })
      

      
   useEffect(()=>{
    if(user?.email){
        fetch(`https://assiament-server.vercel.app/myReview?email=${user?.email}`,{
          headers:{
            authorization: `Bearer ${localStorage.getItem('assianment')}`
          }
        })
        .then(res=>res.json())
        .then(data=>setReview(data))
    }
    }, [user?.email])

    const shareInfo = {review,  setReview, service, ratingData, users, refetch, serviceLoad, userProfile}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;