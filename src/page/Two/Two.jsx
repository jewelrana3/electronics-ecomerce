
import useProducts from "../../hooks/useProducts";
import ProductTwo from "./productTwo";
import './ProductTwo.css'



const Two = () => {

    const [products] = useProducts();


    return (
        <div className="md:px-20 mt-28">
            <div className="global lg:flex justify-between">
                <div>
                    <h2 className="ml-2 text-4xl font-bold mb-10 ">Popular Products</h2>
                </div>
                <div className="flex gap-5">
                    <div>
                        <p>Top Rated</p>
                    </div>
                    <div>
                        <p>Best Selling</p>
                    </div>
                    <div>
                        <p>Latest Product</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    products.map(product => <ProductTwo
                        key={product._id}
                        product={product}
                    ></ProductTwo>)
                }
            </div>
        </div>
    );
};

export default Two;