
import React, { createContext, useEffect, useState } from 'react';

export const ShareContext = createContext()

const ShareProvider = ({ children }) => {
    const[service, setService]=useState([])
    const [ratingData, setRatingData] = useState([]);

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

    const shareInfo = {service, setService, ratingData}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;