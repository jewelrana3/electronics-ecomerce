import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    console.log(productDetails)
    const { image, title, price,suk,tags,category } = productDetails;
    return (
        <div className='pt-40 mb-10 md:flex justify-center md:px-20 px-8 gap-20 top-0'>
            <div>
                <img className='md:w-4/4 w-full' style={{ height: '40rem' }} src={image} alt="" />
            </div>
            <div>
                <button className='text-red-600 font-semibold border border-red-700 px-4 mb-5'>In Stack</button>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='text-gray-500 mt-5'>Shop Harry.com for every day low prices. Free shipping on orders <br /> $35+ or Pickup In-store and get</p>
                <p className='text-2xl font-bold mt-5'>${price}</p>
                <button onClick={() => addToCart(toast(`${title} add to cart`))} className="add_to_cart  w-48 mt-5 text-white">
                    Add Cart
                </button>
                <p className=' border-t-2 mt-5'></p>
                <div className='mt-6 text-xl product'>
                    <p><span>SKU</span> : {suk}</p>
                    <p><span>Category</span> : {category}</p>
                    <p ><span>Tags</span> : <span className='border border-gray-500 px-3 py-2'>{tags}</span></p>
                    <p><span>Share</span> : </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;