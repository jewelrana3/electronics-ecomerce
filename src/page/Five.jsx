

const Five = () => {
    return (
        <div className="mt-4 md:mt-24 lg:mt-32 md:mb-24 lg:mb-32 mb-2">
            <div className="relative">
                <img className="w-full h-auto md:h-72" src="https://i.ibb.co/Dz6cLZT/merry-christmas-red-background-1361-3542-1.jpg" alt="" />
            </div>
            <div className="absolute  inset-x-0 flex items-center justify-center">
                <div className="double text-left -mt-80 md:flex items-center justify-between h-60 md:h-44 w-full md:w-3/4 p-4 md:p-6 bg-white ">
                    <div>
                        <h1 className="text-xl md:text-4xl lg:text-4xl font-bold">Subscribe for <br /> Latest Trends & Offers</h1>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between p-2 w-full md:w-2/5 -ml-2">
                        <input className="w-full md:w-auto mb-2 h-20 md:mb-0 pl-8 border border-black" type="email" name="email" id="email" placeholder="Enter Your Email" />
                        <button className="bg-black text-white my-2 md:my-4 py-2 mt-10 mb-20">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Five;