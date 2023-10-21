

const Five = () => {
    return (
        <div className="mt-24 mb-24">
            <div className="relative">
                <img className="w-full h-72" src="https://i.ibb.co/Dz6cLZT/merry-christmas-red-background-1361-3542-1.jpg" alt="" />
            </div>
            <div className="absolute -mt-56 inset-x-0 flex items-center justify-center">
                <div className="double flex items-center justify-between h-44 w-3/4 p-6 bg-white">
                    <h1 className="text-4xl font-bold">Subscribe for <br /> Latest Trends & Offers</h1>
                    <div className="flex justify-between items-center  p-2 border border-black h-16 w-2/5">
                        <input className="" type="email" name="email" id="email" placeholder="Enter Your Email" />
                        <button className="ml- bg-black text-white p-2  my-4 py-2">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Five;