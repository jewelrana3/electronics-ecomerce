
import { BiLogoFacebook } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoInstagram } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-20 mb-14">
            <div className="foter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  border-b-2">
                <div>
                    <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
                    <p className="mt-5 text-gray-500">The home and elements <br /> needed to create <br /> beautiful products.</p>
                    <div className='flex gap-3 mt-3 text-xl'>
                        <p><BiLogoFacebook /></p>
                        <p><FaTwitter /></p>
                        <p><AiFillLinkedin /></p>
                        <p className='mb-16'><BiLogoInstagram /></p>
                    </div>

                </div>
                <div>
                    <h1 className="text-xl mb-7 font-bold">Company</h1>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Store Locations</p>
                    <p>Our Blog</p>
                    <p>Reviews</p>
                </div>
                <div>
                    <h1 className="text-xl mb-7 font-bold">Shop</h1>
                    <p>Game & Video</p>
                    <p>Phone &Tablets</p>
                    <p>Computers & Laptop</p>
                    <p>Sport Watches</p>
                    <p>Discounts</p>
                </div>
                <div>
                    <h1 className="text-xl mb-7 font-bold">Support</h1>
                    <p>FAQs</p>
                    <p>Reviews</p>
                    <p>Contact Us</p>
                    <p>Shipping</p>
                    <p>Returns</p>
                </div>
                <div>
                    <h1 className="text-xl mb-7 font-bold">Talk To Us</h1>
                    <p>Find a location nearest <br /> you. See Our Stores</p>
                    <p>+880 1716-752129</p>
                    <p>support@harry.com</p>
                    <p></p>
                </div>
            </div>

            <div className='mt-10 md:flex justify-between'>
                <p>Copyright © 2023 by Hamart All rights reserved.</p>
                <img src="https://i.ibb.co/84qMfBh/footer-payment.webp" alt="" />
            </div>
            <Link to='/header'>go</Link>
        </div>
    );
};

export default Footer;