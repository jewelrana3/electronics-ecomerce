import React, { useEffect, useState } from 'react';

const useAddProduct = () => {
    const [addProduct,setAddProduct] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/addCartGet')
        .then(res => res.json())
        .then(data =>{
            setAddProduct(data)
        })
    },[])
    return [addProduct]
};

export default useAddProduct;