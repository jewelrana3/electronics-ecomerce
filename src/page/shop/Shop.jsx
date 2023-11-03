import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ShopProduct from './ShopProduct';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { PiDiamondsFourBold } from 'react-icons/pi';
import './Dropdown.css'


const Shop = () => {
    const [products] = useProducts();
    const [selectedSubject, setSelectedSubject] = useState("");
    const subjectArray = ["Front-end", "Back-end", "Node-end"];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };





    return (
        <div className="md:px-20 mt-10">
            <div className="flex">
                <h2 className="ml-2 font-bold mb-10 flex items-center gap-2"><p><FaHome className='bg-white' /></p>Home <p><IoIosArrowForward /></p> Product</h2>
            </div>
            <div className='flex justify-between border border-gray-300 px-5 py-3'>
                <div>
                    <p>Showing 1-9 of 27 results</p>
                </div>
                <div className='flex items-center'>
                    <p><FiMenu className='mr-3' /></p>
                    <p><PiDiamondsFourBold className='mr-40' /></p>
                    <form name="form1" id="form1">
                        <select name="subject" value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                            {subjectArray.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
            </div>

            <div className='flex  gap-10'>
                <div className={`dropdown mt-28 w-3/5 ${isDropdownOpen ? 'show' : ''}`}>
                    <button onClick={toggleDropdown} className={`content ${isDropdownOpen ? 'bg-red' : ''}`}>
                        <div className='flex items-center gap-2'>
                            <div> Ipad Phone & Tablets</div>
                            <div>{isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                        </div>
                    </button>
                    {isDropdownOpen && (
                        <div className='myDropdown'>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28">
                    {
                        products.map(product => <ShopProduct
                            key={product._id}
                            product={product}
                        ></ShopProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;






