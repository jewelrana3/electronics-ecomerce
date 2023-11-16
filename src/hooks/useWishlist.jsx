import React, { useEffect, useState } from 'react';

const useWishlist = () => {
   const [wishs,setWishs] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/wishlist')
    .then(res => res.json())
    .then(data =>{
        setWishs(data)
  
    })
   },[])
   return [wishs]
};

export default useWishlist;
