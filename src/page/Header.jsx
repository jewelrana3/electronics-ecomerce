import { BiSearch } from 'react-icons/bi';
import { TbMan } from 'react-icons/tb';
import { GiSelfLove } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Shop</a></li>
                        <li>
                            <a>Pages</a>
                            <ul className="p-2">
                                <li><a>FAQ</a></li>
                                <li><a>error</a></li>
                            </ul>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Shop</a></li>
                        <li>
                            <a>Pages</a>
                            {/* <ul className="p-2">
                                <li><a>FAQ's</a></li>
                                <li><a>error</a></li>
                            </ul> */}
                        </li>
                        <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='md:flex gap-5 text-2xl'>
                    <BiSearch />
                    <TbMan />
                    <GiSelfLove />
                    <AiOutlineShoppingCart />
                </div>
            </div>
        </div>
    );
};

export default Header;