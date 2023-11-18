import React, { useEffect, useState } from 'react';

const useOne = () => {
   const [one,setOne] = useState('')
   useEffect(()=>{
    fetch('https://electronics-server-nine.vercel.app/oneData')
    .then(res => res.json())
    .then(data =>{
        setOne(data)
      
    })
   },[])
   return [one]
};

export default useOne;