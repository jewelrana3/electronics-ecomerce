import React from 'react';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import './About.css'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
    return (

        <div className='mb-40'>

            <div className='mb-20'>
                <div className='relative'>
                    <img style={{ height: '700px' }} className='w-full' src="https://i.ibb.co/QXW2dKQ/cheerful-woman-using-laptop-workplace-109710-60-1.jpg" alt="" />
                </div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                    <div>
                        <p className='text-xl'>About us</p>
                        <h1 className='text-5xl font-bold'>Welcome to our <br />Harri Shop</h1>
                    </div>
                </div>
                <div className='mt-48 px-32 flex '>
                    <div className='' style={{ width: '1100px' }}>
                        <h2 className='text-3xl font-bold'>It started with a <br /> bang now we are here.</h2>
                    </div>
                    <div className='text-gray-500 text-lg' style={{ width: '2000px' }}>
                        <p>Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula</p>
                        <p className='mt-4'>Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.!</p>
                    </div>
                </div>
                <div className='mt-28 px-32 grid grid-cols-1 md:grid-cols-3 gap-9'>
                    <div className='card-container border border-gray-300'>
                        <div className='card-details text-2xl py-6 px-4  '>
                            <div className='flex justify-between'>
                                <p className='icons text-3xl'><AiOutlineCloudServer /></p>
                                <p><BsArrowUpRight /></p>
                            </div>
                            <div className='mt-10'>
                                <p className='text-base'>10k</p>
                                <p className='font-bold'>  <span className='cardP'>Listed Products</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='card-container border border-gray-300'>
                        <div className='card-details text-2xl py-6 px-4'>
                            <div className='flex justify-between'>
                                <p className='icons'><AiOutlineCloudServer /></p>
                                <p><BsArrowUpRight /></p>
                            </div>
                            <div className='mt-10'>
                                <p className='text-base'>5k</p>
                                <p className='font-bold'> <span className='cardP'>Lovely Customer</span></p>

                            </div>
                        </div>
                    </div>
                    <div className='card-container border border-gray-300'>
                        <div className='card-details text-2xl py-6 px-4 '>
                            <div className='flex justify-between'>
                                <p className='icons'><AiOutlineCloudServer /></p>
                                <p><BsArrowUpRight /></p>
                            </div>
                            <div className='mt-10'>
                                <p className='text-base'>5k</p>
                                <p className='font-bold'>
                                    <span className='cardP'>Support</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='w-full' src="https://i.ibb.co/ZLJhVYW/about-gallery-slider-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="https://i.ibb.co/JFbCdcg/about-gallery-slider-2.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="https://i.ibb.co/R9r554j/about-gallery-slider-3.webp" alt="" />
                    </SwiperSlide>

                </Swiper>
            </>
            <div className='px-20'>
                <h1 className='text-5xl font-bold mt-10 text-center'>Our Awards.</h1>
                <div className='border-b-2 border-t-2 md:flex items-center py-6 justify-between mx-auto mt-10'>
                    <div>
                        <h1>FREE SHIPPING</h1>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>Modern painting award jump</h2>
                        <p>Runner Up - “ Decor of the week “</p>
                    </div>
                    <div>
                        <span className='text-3xl'><HiOutlineArrowNarrowRight /></span>
                    </div>
                </div>
                <div className='border-b-2  md:flex items-center py-6 justify-between mx-auto mt-10'>
                    <div>
                        <h1>FREE RETURN</h1>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>People's choice: best design</h2>
                        <p>Runner Up - “ Decor of the week “</p>
                    </div>
                    <div>
                        <span className='text-3xl'><HiOutlineArrowNarrowRight /></span>
                    </div>
                </div>
                <div className='border-b-2  md:flex items-center py-6 justify-between mx-auto mt-10'>
                    <div>
                        <h1>SECURE PAYMENT</h1>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold'>Webby's, Site of the Year</h2>
                        <p>Runner Up - “ Decor of the week “</p>
                    </div>
                    <div>
                        <span className='text-3xl'><HiOutlineArrowNarrowRight /></span>
                    </div>
                </div>
            </div>
            <div className='md:flex mt-20 items-center'>
                <div className='absolute'>
                    <img className='' style={{ width: '700px', height: '500px' }} src="https://i.ibb.co/NW7CXKw/21617779046.jpg" alt="" />
                </div>
                <div className='border border-gray-500 w-2/3 px-20 py-20' style={{ marginLeft: '40em' }} >
                    <p>Get in touch with us to see how</p>
                    <h1 className='text-6xl font-bold'>Provide smart and flexible digital services</h1>
                    <div className="collapse collapse-plus bg-base-200 mt-5">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mt-6">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 mt-6">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-28 px-28'>
                <div className='md:flex justify-between'>
                    <h1 className='text-5xl font-bold'>One Team ,<br />Many Talents</h1>
                    <div className='flex items-center cursor-pointer hover:text-red-900 underline font-bold'>
                        <p>Join Our team</p>
                        <p><AiOutlineArrowRight /></p>
                    </div>
                </div>
            </div>
            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/WyB8byP/team-1.webp" alt="" />
                    </SwiperSlide>
                </Swiper>
            </>
        </div>


    );
};

export default About;