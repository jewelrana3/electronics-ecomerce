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


    // Brands section
    const [filter, setFilter] = useState('');
    const [data, setData] = useState([
        { name: 'Alfreds Futterkiste', country: 'Germany' },
        { name: 'Berglunds snabbkop', country: 'Sweden' },
        { name: 'Island Trading', country: 'UK' },
    ])

    const handleFilter = e => {
        setFilter(e.target.value.toUpperCase())
    }


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
                <div className='w-4/5'>
                    <div className="button-container mt-28">
                        <button onClick={toggleDropdown} className={`content ${isDropdownOpen ? 'bg-red' : ''}`}>
                            <div className="flex items-center gap-2">
                                <div> Ipad Phone & Tablets</div>
                                <div>{isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                            </div>
                        </button>
                        <div className={`myDropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button-container mt-2">
                        <button onClick={toggleDropdown} className={`content ${isDropdownOpen ? 'bg-red' : ''}`}>
                            <div className="flex items-center gap-2">
                                <div> Ipad Phone & Tablets</div>
                                <div>{isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                            </div>
                        </button>
                        <div className={`myDropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button-container mt-2">
                        <button onClick={toggleDropdown} className={`content ${isDropdownOpen ? 'bg-red' : ''}`}>
                            <div className="flex items-center gap-2">
                                <div> Ipad Phone & Tablets</div>
                                <div>{isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                            </div>
                        </button>
                        <div className={`myDropdown ${isDropdownOpen ? 'open' : ''}`}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    {/* Brands */}
                    <div className='mt-16'>
                        <h1 className='text-2xl text-gray-800'>Brands</h1>
                        <p className='border-b-2'></p>
                        <div className='mt-4'>
                            <input className='border border-black pl-5 mb-7' type="text" placeholder='Search Names..' id='Input' onChange={handleFilter} />
                          
                            <tbody className=''>
                                {data.map((item, index) =>
                                    (filter === '' || item.name.toUpperCase().includes(filter)) && (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                           
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </div>
                    </div>
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






