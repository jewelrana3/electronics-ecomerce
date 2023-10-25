
import useProducts from "../../hooks/useProducts";
import ProductTwo from "./productTwo";



const Two = () => {

    const [products] = useProducts();
   

    // const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="md:px-20 mt-28">
            <div className="global">
                <h2 className="ml-2 text-4xl font-bold mb-10 ">Popular Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    products.map(product => <ProductTwo
                    key={product._id}
                    product={product}
                    ></ProductTwo>)
                }
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div
                    className="product"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="image-content">
                        <img
                            src="https://i.ibb.co/ZMjL5rs/product-3.webp"
                            alt=""
                            className="hovered-image active"
                        />
                        <div className={`overlay ${isHovered ? 'active' : ''}`}>
                            <button type="button" className="add_to_cart w-full bg-black text-white">
                                Add Cart
                            </button>
                        </div>
                    </div>
                    <div className="product_title ">
                        <h3>Apple Watch Series 8</h3>
                        <div>
                            <span>$188.00</span>
                        </div>
                    </div>
                </div>

        




                <div>
                    <img src="https://i.ibb.co/ZMjL5rs/product-3.webp" alt="" />
                    <p>TECLAST Tablet Protective Cover Case</p>
                    <p> $899.00 $791.12</p>
                </div>
                <div>
                    <img src="image1" alt="products image" />
                    <p>ViewSonic Professional Monitor</p>
                    <p>$299.00 $281.06</p>
                </div>
                <div>
                    <img src="image1" alt="products image" />
                    <p>Buy Guild Planer - 900w</p>
                    <p className="bordered-text">$239.00</p>
                </div>
                <div>
                    <img src="image1" alt="products image" />
                    <p>Xiaomi Poco M4 pro 5G</p>
                    <p className="bordered-text">$67.00</p>
                </div>
                <div>
                    <img src="image1" alt="products image" />
                    <p>Tempo Sphera Spinning Reel</p>
                    <p className="bordered-text">$799.00 $679.15</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/pwDwY9G/product-5.webp" alt="" />
                    <p>TECLAST Tablet Protective Cover Case</p>
                    <p> $899.00 $791.12</p>
                </div>
                <div>
                    <img src="image1" alt="products image" />
                    <p>VR Virtual Reality Headset</p>
                    <p className="bordered-text">$137.00 $123.30</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
                <div>
                    <img src="https://i.ibb.co/bdbKV7h/product-11.webp" alt="" />
                    <p>Braun Series Electric Shaver Clean</p>
                    <p>$299.00 $263.12</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/GQCjphC/product-4.webp" alt="" />
                    <p>Stariver Electric Kettle</p>
                    <p>$59.00</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/GcDC7tv/product-12.webp" alt="" />
                    <p>Bluefin Fitness Unisex Adult Tour</p>
                    <p>$996.00</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/xHFLJrF/product-10.webp" alt="" />
                    <p>STANLEY STPP7502 750W 2mm Planer</p>
                    <p>$356.00</p>
                </div>
            </div> */}
        </div>
    );
};

export default Two;