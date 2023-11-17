import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ShopProduct from './ShopProduct';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { PiDiamondsFourBold } from 'react-icons/pi';
import './Dropdown.css'



const Shop = () => {
    const [products] = useProducts();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [DropdownOpen, setDropdownOpen] = useState(false);
    const [DropdownOpen3, setDropdownOpen3] = useState(false);
    const [brand, setBrand] = useState(false);
    const [color, setColor] = useState(false);
    const [price, setPrice] = useState(false);
    const [priceRange, setPriceRange] = useState('all');





    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const toggleDropdown2 = () => {
        setDropdownOpen(!DropdownOpen);
    };
    const toggleDropdown3 = () => {
        setDropdownOpen3(!DropdownOpen3);
    };
    const toggleBrand = () => {
        setBrand(!brand);
    };
    const toggleColor = () => {
        setColor(!color)
    }
    const togglePrice = () => {
        setPrice(!price)
    }

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

    const handleSortChange = (event) => {
        setPriceRange(event.target.value);
    };


    const categorizeProducts = () => {
        if (priceRange === 'low') {
            return products.filter((product) => product.price <= 500);
        } else if (priceRange === 'high') {
            return products.filter((product) => product.price > 500);
        } else {
            return products;
        }
    };
    const categorizedProduct = categorizeProducts();




    return (
        <div className="md:px-20 pt-20 mb-40">
            <div className="flex">
                <h2 className="ml-2 font-bold mb-10 flex items-center gap-2"><p><FaHome className='bg-white' /></p>Home <p><IoIosArrowForward /></p> Product</h2>
            </div>
            <div className='flex justify-between items-center border border-gray-300 px-5 py-3'>
                <div className='lg:flex items-center justify-center'>
                    Showing {
                        priceRange === 'low'
                            ? products.filter(product => product.price <= 500).length
                            : priceRange === 'high'
                                ? products.filter(product => product.price > 500).length
                                : products.length
                    } of {products.length} results
                    <div className='flex  gap-3 lg:ml-96'>
                        <p><FiMenu className='mr-' /></p>
                        <p><PiDiamondsFourBold className='' /></p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <form>
                        <div className='custom-dropdown'>
                            <label>Sort by : </label>
                            <select className='py-2 px-2 ' name="priceRange" value={priceRange} onChange={handleSortChange}>
                                  <option className='' value="all">All</option>
                                 <option value="low">Price 500 low</option>
                                 <option value="high">Price 500 high</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container large lg:flex gap-10'>
                <div className='left-side-shop sideber'>
                    <div className="mt-28">
                        <div>
                            <div onClick={toggleDropdown} className={`content ${isDropdownOpen ? 'bg-red' : ''}`}>
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className=''> Planer & Virtual</div>
                                    <div className=''>{isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                                </div>
                            </div>
                            <div className={`myDropdown ${isDropdownOpen ? 'open' : ''}`}>
                                <ul>
                                    <div className='first  flex items-center gap-4 mt-4'>
                                        <p className='f bg-black'></p>
                                        <p>Spinning-Reel</p>

                                    </div>
                                    <div className='first  flex items-center gap-4 mt-2'>
                                        <p className='f bg-black'></p>
                                        <p>Ketlle</p>

                                    </div>
                                    <div className='first  flex items-center gap-4 mt-2'>
                                        <p className='f bg-black'></p>
                                        <p>Laptop</p>

                                    </div>                                
                                </ul>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div onClick={toggleDropdown2} className={`content ${DropdownOpen ? 'bg-red' : ''}`}>
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className=''> Spinning Reel & Kettle</div>
                                    <div className=''>{DropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                                </div>
                            </div>
                            <div className={`myDropdown ${DropdownOpen ? 'open' : ''}`}>
                                <ul>
                                    <div className='first  flex items-center gap-4 mt-4'>
                                        <p className='f bg-black'></p>
                                        <p>Planer</p>

                                    </div>
                                    <div className='first  flex items-center gap-4 mt-2'>
                                        <p className='f bg-black'></p>
                                        <p>Virtual</p>

                                    </div>
                                    
                                    {/* <div className='first  flex items-center gap-4 mt-4'>
                                    <p className='f bg-black'></p>
                                    <p>samsung</p>
                                </div>
                                <div className='first  flex items-center gap-4 mt-4'>
                                    <p className='f bg-black'></p>
                                    <p>keyboard</p>
                                </div> */}

                                </ul>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div onClick={toggleDropdown3} className={`content ${DropdownOpen3 ? 'bg-red' : ''}`}>
                                <div className="flex items-center justify-between cursor-pointer">
                                    <div className=''> Ipad Phone & Tablets</div>
                                    <div className=''>{DropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                                </div>
                            </div>
                            <div className={`myDropdown ${DropdownOpen3 ? 'open' : ''}`}>
                                <ul>
                                    <div className='first  flex items-center gap-4 mt-4'>
                                        <p className='f bg-black'></p>
                                        <p>Ipad</p>

                                    </div>
                                    <div className='first  flex items-center gap-4 mt-2'>
                                        <p className='f bg-black'></p>
                                        <p>iphone</p>

                                    </div>
                                    <div className='first  flex items-center gap-4 mt-2'>
                                        <p className='f bg-black'></p>
                                        <p>Laptop</p>

                                    </div>
                                    <div className='first  flex items-center gap-4 mt-2'>
                                        <p className='f bg-black'></p>
                                        <p>Laptop</p>

                                    </div>
                                    {/* <div className='first  flex items-center gap-4 mt-4'>
                                    <p className='f bg-black'></p>
                                    <p>samsung</p>
                                </div>
                                <div className='first  flex items-center gap-4 mt-4'>
                                    <p className='f bg-black'></p>
                                    <p>keyboard</p>
                                </div> */}

                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Brands */}
                    <div className='mt-14'>
                        {/* <h1 className='text-2xl text-gray-800'>Brands</h1> */}
                        <div onClick={toggleBrand} className={`content ${brand ? 'bg-red' : ''}`}>
                            <div className="flex items-center justify-between cursor-pointer">
                                <div className=''>Brands</div>
                                <div className=''>{brand ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                            </div>
                        </div>
                        <p className='border-b-2'></p>
                        <div className={`myDropdown ${brand ? 'open' : ''}`}>
                            <div className='mt-3'>
                                <input className='border border-black pl-5 mb-7 w-5/6' type="text" placeholder='Search Names..' id='Input' onChange={handleFilter} />
                                <tbody className=''>
                                    {data.map((item, index) =>
                                        (filter === '' || item.name.toUpperCase().includes(filter)) && (
                                            <tr key={index}>
                                                <div className='first flex items-center '>
                                                    <p className='f bg-black'></p>
                                                    <td>{item.name}</td>
                                                </div>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </div>
                        </div>
                    </div>
                    {/* color */}
                    <div className='color-header mt-5'>
                        <div onClick={toggleColor} className={`content ${color ? 'bg-red' : ''}`}>
                            <div className="flex items-center justify-between cursor-pointer">
                                <div className=''>Color</div>
                                <div className=''>{color ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                            </div>
                        </div>
                        <p className='border-b-2'></p>
                        <div className={`myDropdown ${color ? 'open' : ''}`}>
                            <div>
                                <div className='color  flex items-center gap-4 mt-4'>
                                    <p className='g bg-green-600'></p>
                                    <p>Green</p>
                                </div>
                            </div>
                            <div>
                                <div className='color flex items-center gap-4 '>
                                    <p className='g bg-red-600'></p>
                                    <p>Red</p>
                                </div>
                            </div>
                            <div>
                                <div className='color flex items-center gap-4 '>
                                    <p className='g bg-yellow-500'></p>
                                    <p>Yellow</p>
                                </div>
                            </div>
                            <div>
                                <div className='color flex items-center gap-4 '>
                                    <p className='g bg-black'></p>
                                    <p>Black</p>
                                </div>
                            </div>
                            <div>
                                <div className='color flex items-center gap-4 '>
                                    <p className='g bg-blue-500'></p>
                                    <p>Blue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* price  */}
                    <div className='mt-5'>
                        {/* <h1 className='text-2xl text-gray-900 mt-5'>Price</h1> */}
                        <div onClick={togglePrice} className={`content ${price ? 'bg-red' : ''}`}>
                            <div className="flex items-center justify-between cursor-pointer">
                                <div className=''>Price</div>
                                <div className=''>{price ? <IoIosArrowDown /> : <IoIosArrowForward />}</div>
                            </div>
                        </div>
                        <p className='border-b-2'></p>
                        <div className={`myDropdown ${price ? 'open' : ''}`}>
                            <div className='flex gap-3'>
                                <p> <input type="checkbox" name="" id="" /></p>
                                <p>$10.00 - $49.00</p>
                            </div>
                            <div className='flex gap-3'>
                                <p><input type="checkbox" name="" id="" /></p>
                                <p>$50.00 - $99.00</p>
                            </div>
                            <div className='flex gap-3'>
                                <p><input type="checkbox" name="" id="" /></p>
                                <p>$100.00 - $199.00</p>
                            </div>
                            <div className='flex gap-3'>
                                <p><input type="checkbox" name="" id="" /></p>
                                <p>$200.00+</p>
                            </div>
                        </div>
                    </div>
                    {/* reset button */}
                    <div className='reset mt-3 w-40 '>
                        <button className='text-center py-3 font-bold' style={{ display: 'block', margin: '0 auto' }}>
                            <span className='inline-block w-full text-center'>Reset Button</span>
                        </button>
                    </div>
                </div>
                <div className="right-side-shop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28">
                    {categorizedProduct.map((product) => (
                        <ShopProduct key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;






