import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='mb-32'>
            <div className='bg-lime-200'>
                <div className='text-center py-32'>
                    <p className=''>GET TO KNOW US</p>
                    <h1 className='text-7xl font-bold'>Have a project in mind? <br /> Let’s talk.</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-auto mt-20 px-40 text-center'>
                <div className='contact-image'>
                    <div className='flex items-center justify-center'>
                        <img src="https://i.ibb.co/Hr7tLYW/contact-icon-1.webp" alt="" />
                    </div>
                    <p className='firstP'>Contact</p>
                    <p className='secondP'>location@website.com <br />+(602) 762 472 96</p>
                </div>

                <div className='contact-image'>
                    <div className='flex items-center justify-center'>
                        <img src="https://i.ibb.co/64zR6Tc/contact-icon-2.webp" alt="" />
                    </div>
                    <p className='firstP'>Location</p>
                    <p className='secondP'>88 New South Head Rd, <br /> Triple, New York</p>
                </div>
                <div className='contact-image'>
                    <div className='flex items-center justify-center'>
                        <img src="https://i.ibb.co/qxt0Npd/contact-icon-3.webp" alt="" />
                    </div>
                    <p className='firstP'>Social Media</p>
                    <p className='secondP'>Follow on social media</p>
                </div>
            </div>
            <div className='border border-gray-300 mt-20 px-28 w-4/5 mx-auto'>
                <p className='mt-5 text-3xl font-bold'>Send a message</p>
                <form className='py-10'>
                    <div>
                        <div className='flex justify-between gap-10'>
                            <div >
                                <input style={{ width: '500px', height: '80px' }} className='bg-gray-100 pl-4' type="text" placeholder='Enter Your Nabe' />
                            </div>
                            <div>
                                <input style={{ width: '500px', height: '80px' }} className='bg-gray-100 h-20 w-96 pl-4' type="email" placeholder='Enter Your Email' />
                            </div>
                        </div>
                        <div className='flex justify-between gap-10 mt-10'>
                            <div >
                                <input style={{ width: '500px', height: '80px' }} className='bg-gray-100 pl-4' type="text" placeholder='Enter Your Moblie' />
                            </div>
                            <div>
                                <input style={{ width: '500px', height: '80px' }} className='bg-gray-100 h-20 w-96 pl-4' type="email" placeholder='Enter Your Company' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <textarea style={{ width: '1040px', height: '200px' }} className='bg-gray-100 w-full pt-3 pl-5' name="" id="" placeholder='Your Meassage'></textarea>
                    </div>
                    <div className='flex'>
                        <p><input type="checkbox" className="checkbox" /></p>
                        <p className='ml-3'>I am bound by the terms of the Service I accept Privacy Policy.</p>
                    </div>
                    <button className='send hover:bg-slate-800 px-3 py-2 font-semibold  text-white mt-3'>Send Message</button>
                </form>
            </div>
            <div className='px-64 mt-20'>
                <div className='px-16'>
                    <p className='text-xl'>LOCATIONS</p>
                    <h1 className='text-5xl font-bold'>Come and visit our <br /> offices around the world</h1>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-20 '>
                        <div className='flex justify-around'>
                            <p className='text-2xl font-bold'>Australia Office</p>
                            <img src="https://i.ibb.co/f0WxpWV/contact-location-1.webp" alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xl text-gray-500'>contact.location@website.com <br />6866-838</p>
                            <p className='border border-gray-200 flex items-center justify-center px-4'><button>View Location</button></p>
                        </div>
                    </div>
                    <p className='border-b-2 mt-6'></p>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-20 '>
                        <div className='flex justify-around'>
                            <p className='text-2xl font-bold'>Australia Office</p>
                            <img src="https://i.ibb.co/f0WxpWV/contact-location-1.webp" alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xl text-gray-500'>contact.location@website.com <br />6866-838</p>
                            <p className='border border-gray-200 flex items-center justify-center px-4'><button>View Location</button></p>
                        </div>
                    </div>
                    <p className='border-b-2 mt-6'></p>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 mt-20 '>
                        <div className='flex justify-around'>
                            <p className='text-2xl font-bold'>Australia Office</p>
                            <img src="https://i.ibb.co/f0WxpWV/contact-location-1.webp" alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xl text-gray-500'>contact.location@website.com <br />6866-838</p>
                            <p className='border border-gray-200 flex items-center justify-center px-4'><button>View Location</button></p>
                        </div>
                    </div>
                    <p className='border-b-2 mt-6'></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;