

const Five = () => {
    return (
        <div className="head mt-4 lg:mt-24 md:mb-24 lg:mb-32 mb-2">
            <div className="relative">
                <img className="w-full h-auto md:h-72" src="https://i.ibb.co/Dz6cLZT/merry-christmas-red-background-1361-3542-1.jpg" alt="" />
            </div>
            <div className="absolute inset-x-0 flex items-center justify-center px-4">
                <div className="double text-left md:-mt-72 lg:flex items-center justify-between w-full md:w-3/4 p-4 md:p-6 bg-white lg:h-48">
                    <div className="lg:w-1/2">
                        <h1 className="text-xl lg:text-3xl font-bold">Subscribe for <br /> Latest Trends & Offers</h1>
                    </div>
                    <div className="lg:w-1/2 flex flex-col lg:flex-row lg:items-center justify-between p-2 lg:border border-black lg:h-14 z-10 w-full -ml-2 ">
                        <input className=" w-full mb-2 h-12 md:mb-0 pl-8 " type="email" name="email" id="email" placeholder="Enter Your Email" />
                        <button className=" bg-black text-white my-2 md:my-4 py-2 mt-10 mb-10 lg:py-3 lg:px-6 ">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Five;