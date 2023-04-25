
import { AuthContext } from '@/AuthProvider/AuthProvider';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const ShareContext = createContext()

const ShareProvider = ({ children }) => {
    const[service, setService]=useState([])
    const [ratingData, setRatingData] = useState([]);
    const[review, setReview] = useState([]);
    const[users, setUsers]=useState([])
    const{user}=useContext(AuthContext)

   useEffect(()=>{
  fetch('https://assiament-server.vercel.app/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
   }, [])

    useEffect(()=>{
        fetch('https://assiament-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    useEffect(() => {
        fetch('https://assiament-server.vercel.app/rating')
          .then(res => res.json())
          .then(data => setRatingData(data))
      }, [])


      
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

    const shareInfo = {review,  setReview,service, setService, ratingData, users}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;