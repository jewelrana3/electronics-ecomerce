import React from 'react';
import useOne from '../hooks/useOne';
import useProducts from '../hooks/useProducts';

const One = () => {
  const [products] = useProducts();
  {/* image
Wireless & Watches
image
Camera Bluetooth & Headset
image
Ipad Phone & Tablets
image
Planer & Virtual
image
Spinning Reel & Kettle
image
Computers Monitor & Laptop
image
Exercise Bike & Shaver Clean */}
  return (
    <div className='container-img mt-20'>
      <div className='slide-container'>
      <div className='slide-image'>
          <img src="https://i.ibb.co/T2Y1Gm4/product-cat-3-1.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        
        <div className='slide-image'>
          <img src="https://i.ibb.co/YjqD8n8/product-cat-5.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/kKmZgnZ/product-cat-2.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/T2Y1Gm4/product-cat-3-1.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/bg134GH/product-cat-1-1.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/K0pJ5KY/product-cat-7.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        {/*  */}
        <div className='slide-image'>
          <img src="https://i.ibb.co/T2Y1Gm4/product-cat-3-1.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/YjqD8n8/product-cat-5.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/dQskGfv/product-cat-6.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/kKmZgnZ/product-cat-2.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/K0pJ5KY/product-cat-7.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://i.ibb.co/bg134GH/product-cat-1-1.webp" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
        <div className='slide-image'>
          <img src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F9hsZsq3%2Fproduct-cat-7.jpg&w=384&q=75" alt="" />
          <p>Exercise Bike & Shaver Clean</p>
        </div>
       
       
       
      </div>
    </div>
  );
};

export default One;