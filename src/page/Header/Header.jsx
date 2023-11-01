
import { BiSearch } from 'react-icons/bi';
import { TbMan } from 'react-icons/tb';
import { GiSelfLove } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';
import useWishlist from '../../hooks/useWishlist';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addCartPost')
      .then(res => res.json())
      .then(data => {
        setAddProduct(data)
      })
  }, [addProduct])


  const [wish] = useWishlist();


  // shopping cart delete
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/addCartPost/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAddProduct(addProduct.filter((product) => product._id !== _id));
      });
  }


  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the shopping cart
  const openNavToggle = () => {
    setIsOpen(!isOpen);

    // if (isOpen) {
    //   document.body.classList.remove('body-overlay'); // Remove the class when it's closed
    // } else {
    //   document.body.classList.add('body-overlay'); // Add the class when it's open
    // }
  };

  // Calculate the length of items in the shopping cart
  const shoppingCartLength = addProduct.length;
  const wishListLength = wish.length;


  return (
    <div>
      <nav className='border-b-2 py-4 px-6 md:flex md:items-center md:justify-between cursor-pointer'>
        <div className='flex items-center justify-between'>
          <span>
            <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
          </span>
          <span className='text-3xl cursor-pointer md:hidden block mx-2'>
            {isMenuOpen ? (
              <AiOutlineCloseCircle onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </span>
        </div>

        <ul className={`header md:flex md:items-center z-[1] md:z-auto md:static absolute ${isMenuOpen ? 'block' : 'hidden'} text-black w-full md:w-auto md:py-0 py-4`}>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to='/about'>About</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to='/shop'>Shop</Link></li>
          <li class="dropdown text-black z-10">
            <button class="w3-button text-xl">Page</button>
            <div class="dropdown-content">
            <li><Link to='/privacy'>Privacy & Policy</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/mycart'>My Cart</Link></li>
            <li><Link to='/wishlist'>My Wishlist</Link></li>
            <li><Link to='/'>CheckOut</Link></li>
            <li><Link to='/error'>Error</Link></li>
             
            </div>
          </li>
          <li className='mx-4 my-6 md:my-0 '><Link to='/contact'>Contact</Link></li>



          <span className='md:flex items-center lg:ml-96'>
            <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
              <span className="closebtn" onClick={openNavToggle}>&times;</span>
              <h3 className='shawdaw absolute uppercase py-2 px-5 font-semibold -mt-10 h-14'>Shopping Cart</h3>
              <p className='border-t-2 mt-4'></p>
              <div>
                {addProduct.map((product) => (
                  <div className='border-b-2 py-4 mt-4 flex justify-between' key={product._id}>
                    <div className=''>
                      <Link to={`/productDetails/${product._id}`}>
                        <figure><img className='w-20' src={product.image} alt="product" /></figure>
                      </Link>
                    </div>
                    <div className=''>
                      <h1 className='text-xl font-semibold'>{product.title}</h1>
                      <p className='mt-4 text-red-500 font-semibold'>$:{product.price}</p>
                    </div>
                    <div>
                      <p className='mr-2' onClick={() => handleDelete(product._id)}>X</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className={`body-overlay ${isOpen ? 'visible' : ''}`}>
           
            </div> */}
            <BiSearch className='mx-4 my-5 md:my-0 text-3xl' />
            <TbMan className='mx-4 my-5 md:my-0 text-3xl' />
            <span>
              <Link to='/wishlist'><GiSelfLove style={{ fontSize: '30px' }} className='mx-4 my-5 md:my-0 relative ' /></Link>
              <span className='shopping-cart-length absolute -mt-10 ml-8'>{wishListLength}</span>
            </span>
            <span className='relative' style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNavToggle}>
              <AiOutlineShoppingCart />
              {/* Display the shopping cart length */}
              {shoppingCartLength > 0 && (
                <span className="shopping-cart-length text-sm absolute -mt-10 ml-5 p-2">{shoppingCartLength}</span>
              )}
            </span>
          </span>
        </ul>
      </nav >
    </div >
  );
};

export default Header;

