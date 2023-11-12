import { GoArrowRight } from 'react-icons/go';

const Nabver = () => {
    return (
        <div className="md:flex px-16 justify-around pt-40 bg-slate-100">
            <div className="side ">
                <div className='global'>
                    <p className="text-xl ml-2"> <span className=''>Best Ear</span> <br /> Headphones</p>
                </div>
                <h1 className="text-7xl font-bold">Find Your <br />Best Studio<span>.</span></h1>
                <div className="mt-10 w-28 items-center border border-indigo-600 flex justify-around">
                    <button className=''>Show </button>
                    <p><GoArrowRight /></p>
                </div>
            </div>
            <div className='mt-32'>
                <img src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.b3c73448.png&w=640&q=75" alt="" />
            </div>
        </div>
    );
};

export default Nabver;