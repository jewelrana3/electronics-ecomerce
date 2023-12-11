import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineEye } from 'react-icons/ai';
import { GiSelfLove } from 'react-icons/gi';
import { BiLink } from 'react-icons/bi';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Modal from "../../modal/Modal";


const ProductTwo = ({ product }) => {
    console.log(product)
    const { image, title, price, _id, suk, category, tags, Share } = product;
    const [isHovered, setIsHovered] = useState(false);


    // add to cart
    const addToCart = item => {
        const navItem = { classId: _id, image, title, price, suk, category, tags, Share }
        fetch('https://electronics-server-nine.vercel.app/addCartPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(navItem)
        })

    }

    const wishlist = (item) => {
        (item)
        const wishItem = { classId: _id, image, title, price, suk, category, tags, Share }
        fetch('https://electronics-server-nine.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishItem)
        })
            .then(res => res.json())
            .then(data => {
                ''
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
                    <button onClick={() => addToCart(toast(`${title} add to cart`))} className="add_to_cart w-full bg-black text-white">
                        <div className="flex items-center justify-center gap-5">
                            <div><CiShoppingCart className="text-2xl" /></div>
                            <div>   Add To Cart</div>
                        </div>
                    </button>
                </div>
                <div className="leftDrawer text-2xl cursor-pointer">
                    <div>
                        <p className="icon"><GiSelfLove onClick={() => wishlist(toast(`${title}add to wishlist`))} /></p>
                        <span className="text">Add To Wishlist</span>
                    </div>
                    <div>
                        <p className="icon"><Modal /></p>
                        <span className="text">View Details</span>

                    </div>
                    <div>
                        <p className="icon"><Link to={`/productDetails2/${_id}`}><BiLink /></Link></p>
                        <span className="text">Product Details</span>
                    </div>
                </div>
            </div>
            <div className="product_title ">
                <h3>{title}</h3>
                <div>
                    <span>$:{price}00</span>
                </div>
            </div>

        </div>

    )
};

export default ProductTwo;