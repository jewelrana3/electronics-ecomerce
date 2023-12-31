import { GoArrowRight } from 'react-icons/go';
import { FaCarSide } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { BiMessageRounded } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const Four = () => {
    return (
        <>
            <div className='phone mt-20 flex md:flex justify-around lg:flex lg:justify-between  md:px-14 lg:px-20 mb-20 mx-auto'>
                <div className='w-2/2 header-four md:mb-10'>
                    <p className='mt-20 ml-10 text-gray-500 font-semibold text-xl mb-5'>Apple iPhone 12 Pro</p>
                    <h1 className='iphone ml-10 text-5xl md:text-3xl font-bold'>The wait is on: <br /> iphone 12 max pro</h1>
                    <p className='ml-10 text-gray-600 font-semibold text-xl mt-3'>Last call for up to <span className='text-3xl text-black'>32%</span> off!</p>
                    <div className='ml-10 mt-10 flex items-center justify-around  border-none w-28 bg-zinc-200 p-2'>
                        <button >Buy Now</button>
                        <p><GoArrowRight /></p>
                    </div>
                </div>
                <div className='images'>
                    <img src="https://i.ibb.co/CQRQ3kx/apple-5-new-products-come-out-together-2.jpg" alt="image" />
                </div>
            </div>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 gap-7 mt-20'>
                <div className="flex items-center">
                    <p className='fourPtag'><FaCarSide /></p>
                    <div>
                        <h1>Free Shipping</h1>
                        <p>Free Shipping for order sover $120</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className='fourPtag'><BiDollar /></p>
                    <div>
                        <h1>Refund</h1>
                        <p>Within 30 days for an exchange.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className='fourPtag'><BiMessageRounded /></p>
                    <div>
                        <h1>Support</h1>
                        <p>24 hours a day, 7 days a week</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className='fourPtag'><RiSecurePaymentLine /></p>
                    <div>
                        <h1>Payment</h1>
                        <p>Pay with Multiple Credit Cards</p>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Four;