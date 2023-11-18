import { useEffect, useState } from "react";


const useProducts = () => {
    const [products,setProduct] = useState([])
    useEffect(()=>{
        fetch('https://electronics-server-nine.vercel.app/products')
        .then(res => res.json())
        .then(data =>{
            setProduct(data)
          
        })
    },[])
    return [products]
};

export default useProducts;