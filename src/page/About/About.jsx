import React from 'react';

const About = () => {
    return (
        <div>
            <div className='relative'>
                <img style={{ height: '700px' }} className='w-full' src="https://i.ibb.co/QXW2dKQ/cheerful-woman-using-laptop-workplace-109710-60-1.jpg" alt="" />
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <div>
                    <p className='text-xl'>About us</p>
                    <h1 className='text-5xl font-bold'>Welcome to our <br />Harri Shop</h1>
                </div>
            </div>
        </div>
    );
};

export default About;