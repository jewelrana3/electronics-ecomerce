import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductTwo = ({ product }) => {

    const { image, title, price,_id } = product;

    const [isHovered, setIsHovered] = useState(false);

    // add to cart
    const addToCart = item =>{
        const navItem = {classId:_id,image,title,price}
        fetch('http://localhost:5000/addCartPost',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(navItem)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                refetch();
                
            }
        })
    }
  



    return (
        <div
            className="product"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-content">
                <img
                    src={image ? image : 'image1'}
                    alt="product image"
                    className="hovered-image active"
                />
                <ToastContainer />
                <div className={`overlay ${isHovered ? 'active' : ''}`}>

                    <button onClick={() => addToCart(toast(`${title} add to cart`)) } className="add_to_cart w-full bg-black text-white">
                        Add Cart
                    </button>

                </div>
            </div>
            <div className="product_title ">
                <h3>{title}</h3>
                <div>
                    <span>$:{price}</span>
                </div>
            </div>
        </div>

    )
};

export default ProductTwo;