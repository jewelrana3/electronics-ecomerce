import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='mb-32'>
            <div className='bg-lime-200 contact-header'>
                <div className='text-center py-32'>
                    <p className=''>GET TO KNOW US</p>
                    <h1 className='text-7xl font-bold'>Have a project in mind? <br /> Let’s talk.</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mx-auto mt-20 lg:px-32 text-center'>
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
            <div className='border border-gray-300 mt-20 md:px-28 px-10 w-4/5 mx-auto'>
                <p className='mt-5 text-3xl font-bold'>Send a message</p>
                <form className='py-10'>
                    <div className='flex flex-col md:flex-row md:justify-between gap-10'>
                        <div className='w-full md:w-3/4'>
                            <input className='bg-gray-100 pl-4 w-full md:w-4/5 h-10 md:h-14' type="text" placeholder='Enter Your Name' />
                        </div>
                        <div className='w-full md:w-3/4 mt-5 md:mt-0'>
                            <input className='bg-gray-100 pl-4 w-full md:w-4/5 h-10 md:h-14' type="email" placeholder='Enter Your Email' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:justify-between gap-10 mt-5'>
                        <div className='w-full md:w-3/4'>
                            <input className='bg-gray-100 pl-4 w-full md:w-4/5 h-10 md:h-14' type="text" placeholder='Enter Your Name' />
                        </div>
                        <div className='w-full md:w-3/4 mt-5 md:mt-0'>
                            <input className='bg-gray-100 pl-4 w-full md:w-4/5 h-10 md:h-14' type="email" placeholder='Enter Your Email' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <textarea className='bg-gray-100 w-full md:w-11/12 h-32 md:h-48 pt-3 pl-5 resize-none' name="" id="" placeholder='Your Message'></textarea>
                    </div>

                    <div className='flex items-center mt-5'>
                        <p><input type="checkbox" className="checkbox" /></p>
                        <p className='ml-3'>I am bound by the terms of the Service I accept Privacy Policy.</p>
                    </div>
                </form>
                    <button className='send hover:bg-slate-800 px-3 py-2 font-semibold text-white mb-3'>Send Message</button>

            </div>
            <div className='lg:px-48 mt-20'>
                <div className='header-two'>
                    <p className='text-start lg:text-xl'>LOCATIONS</p>
                    <h1 className='text-2xl md:text-5xl font-bold'>Come and visit our <br /> offices around the world</h1>
                </div>
              
                <div>
                    <div className='Australia mt-20 lg:flex justify-between'>
                        <div className='aus-header lg:flex items-center justify-between  office'>
                            <div>
                                <p className='text-2xl font-bold mb-3'>Australia Office</p>
                            </div>
                            <div className='lg:ml-32'>
                                <img className='m' src="https://i.ibb.co/f0WxpWV/contact-location-1.webp" alt="" />
                                <p className='text-xl text-gray-500'>contact.location@website.com <br />6866-838</p>
                            </div>
                        </div>
                        <div className='mt-4 '>
                            <p style={{width:'auto'}} className='view-btn border border-gray-200 flex items-center justify-center px-4 mt-4 py-3 text-black'><button>View Location</button></p>
                        </div>
                    </div>
                    <p className='border-b-2 mt-6'></p>
                </div>
                <div>
                    <div className='Australia mt-20 lg:flex justify-between'>
                        <div className='aus-header lg:flex items-center justify-between  office'>
                            <div>
                                <p className='text-2xl font-bold mb-3'>Australia Office</p>
                            </div>
                            <div className='lg:ml-32'>
                                <img className='m' src="https://i.ibb.co/f0WxpWV/contact-location-1.webp" alt="" />
                                <p className='text-xl text-gray-500'>contact.location@website.com <br />6866-838</p>
                            </div>
                        </div>
                        <div className='mt-4 '>
                            <p style={{width:'auto'}} className='view-btn border border-gray-200 flex items-center justify-center px-4 mt-4 py-3 text-black'><button>View Location</button></p>
                        </div>
                    </div>
                    <p className='border-b-2 mt-6'></p>
                </div>
                <div>
                    <div className='Australia mt-20 lg:flex justify-between'>
                        <div className='aus-header lg:flex items-center justify-between  office'>
                            <div>
                                <p className='text-2xl font-bold mb-3'>Australia Office</p>
                            </div>
                            <div className='lg:ml-32'>
                                <img className='m' src="https://i.ibb.co/f0WxpWV/contact-location-1.webp" alt="" />
                                <p className='text-xl text-gray-500'>contact.location@website.com <br />6866-838</p>
                            </div>
                        </div>
                        <div className='mt-4 '>
                            <p style={{width:'auto'}} className='view-btn border border-gray-200 flex items-center justify-center px-4 mt-4 py-3 text-black'><button>View Location</button></p>
                        </div>
                    </div>
                    <p className='border-b-2 mt-6'></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;