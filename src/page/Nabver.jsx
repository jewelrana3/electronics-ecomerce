import { GoArrowRight } from 'react-icons/go';

const Nabver = () => {
    return (
        <div className="md:flex px-16 justify-around  bg-slate-100">
            <div className="mt-36 ">
                <p className="text-xl">Best Ear <br /> Headphones</p>
                <h1 className="text-7xl font-bold">Find Your <br />Best Studio<span>.</span></h1>
                <div className="mt-10 w-24 items-center border border-indigo-600 md:flex justify-around">
                    <button>Show </button>
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