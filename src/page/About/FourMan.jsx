import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FourMan.css'
import { HiShare } from 'react-icons/hi';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const FourMan = ({ product }) => {

    const { image, title, price, _id, suk, category, tags, Share } = product;
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div
            className="product1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="">
                <div className="image-content1">

                    <img
                        src={image ? image : 'image1'}
                        alt="product image"
                        className="hovered-image1 active"

                    />

                    <div className="leftDrawer1 text-2xl cursor-pointer ">
                        <div>
                            <p className="icon1 mb-2"><BiSolidMessageDetail /></p>
                            <p className="icon1"><HiShare /></p>
                            <div className="text1">
                                <p className="icons right-border"><FaLinkedinIn /></p>
                                <p className="icons right-border"><AiOutlineTwitter /></p>
                                <p className="icons"><BiLogoFacebook /></p>
                            </div>
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
        </div>

    )
};

export default FourMan;