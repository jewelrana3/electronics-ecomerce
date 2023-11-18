import React, { useEffect, useState } from 'react';

const useAddProduct = () => {
    const [addProduct,setAddProduct] = useState([])

    useEffect(()=>{
        fetch('https://electronics-server-nine.vercel.app/addCartPost')
        .then(res => res.json())
        .then(data =>{
            setAddProduct(data)
             
        })
    },[])
    return [addProduct]
};

export default useAddProduct;