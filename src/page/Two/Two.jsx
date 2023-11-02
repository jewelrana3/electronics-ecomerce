
import useProducts from "../../hooks/useProducts";
import ProductTwo from "./productTwo";



const Two = () => {

    const [products] = useProducts();
   

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
        </div>
    );
};

export default Two;