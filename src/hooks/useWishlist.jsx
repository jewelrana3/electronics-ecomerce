import React, { useEffect, useState } from 'react';

const useWishlist = () => {
   const [wish,setWish] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/wishlist')
    .then(res => res.json())
    .then(data =>{
        setWish(data)
  
    })
   },[])
   return [wish]
};

export default useWishlist;