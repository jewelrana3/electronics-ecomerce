import { useState } from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FourMan.css'
import { BiLink } from 'react-icons/bi';

const FourMan = ({ product }) => {

    const { image, title, price, _id, suk, category, tags, Share } = product;
    const [isHovered, setIsHovered] = useState(false);



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
    
                <div className="left text-2xl cursor-pointer ">
                    <div>
                        <p className="icon"><BiLink /></p>
                        <span className="text">Product Details</span>
                    </div>
                </div>
            </div>

            <div className="product_title ">
                <h3>{title}</h3>
                <div>
                    <span>Developer</span>
                </div>
            </div>
        </div>

    )
};

export default FourMan;