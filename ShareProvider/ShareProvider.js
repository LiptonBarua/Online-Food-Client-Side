
import React, { createContext, useEffect, useState } from 'react';

export const ShareContext = createContext()

const ShareProvider = ({ children }) => {
    const[service, setService]=useState([])
    

    useEffect(()=>{
        fetch('https://assiament-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    const shareInfo = {service, setService}
    return (
        <ShareContext.Provider value={shareInfo}>
            {children}
        </ShareContext.Provider>
    );
};

export default ShareProvider;