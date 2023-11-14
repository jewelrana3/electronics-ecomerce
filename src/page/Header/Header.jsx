
import { BiSearch } from 'react-icons/bi';
import { GiSelfLove } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './Header.css';
import useWishlist from '../../hooks/useWishlist';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import useUsers from '../../hooks/useUsers';



const Header = () => {
  // const [users] = useUsers();
  const { user, logOut } = useContext(AuthContext)
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

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Logout was successful
        // Perform any actions you need after successful logout
      })
      .catch((error) => {
        // An error occurred during logout
        console.error('Error during logout:', error);
      });
  };


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
      <nav className='border-b-2 z-10 mt-0 fixed w-full bg-white py-4 px-6 md:flex md:items-center md:justify-between cursor-pointer'>
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

        <ul className={`header md:none md:flex md:items-center z-[1] md:static absolute ${isMenuOpen ? 'block' : 'hidden'} text-black w-full md:w-auto md:py-0 py-4`}>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to='/about'>About</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to='/shop'>Shop</Link></li>
          <li class="dropdown text-black z-10">
            <button class="w3-button " style={{fontSize:'16px'}}>Page</button>
            <div class="dropdown-content">
              <li><Link to='/privacy'><span className='cardWith'><p>Pricavy & Policy</p></span></Link></li>
              <li><Link to='/signup'><span className='cardWith'><p>SignUP</p></span></Link></li>
              <li><Link to='/login'><span className='cardWith'><p>Login</p></span></Link></li>
              <li><Link to='/mycart'><span className='cardWith'><p>My Cart</p></span></Link></li>
              <li><Link to='/wishlist'><span className='cardWith'><p>My Wishlist</p></span></Link></li>
              <li><Link to='/checkout'><span className='cardWith'><p>CheckOut</p></span></Link></li>
              <li><Link to='/error'><span className='cardWith'><p>Error</p></span></Link></li>
              {/* <li><Link to='/payments'><span className='cardWith'><p>Payments</p></span></Link></li> */}

            </div>
          </li>
          <li className='mx-4 my-6 md:my-0 '><Link to='/contact'>Contact</Link></li>



          <span className='md:flex items-center lg:ml-72'>
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

            {user ? <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-0" ><span className="tooltip" data-tip={user?.displayName}></span><button onClick={handleLogOut} className="btn btn-white btn-sm mb-2 text-black text-2xl bg-white h-10 w-10 mr-4" style={{borderRadius:'50%'}}>{user?.displayName[0]}</button></div> : <Link to='/login'>
                <button className="btn btn-outline btn-sm text-black mb-2">login</button>
            </Link>}
            <BiSearch className='mx-4 my-5 md:my-0 text-3xl mr-2' />
           

            <span>
              <Link to='/wishlist'><GiSelfLove style={{ fontSize: '24px' }} className='mx-4 my-5 md:my-0 relative ' /></Link>
              <span className='shopping-cart-length absolute -mt-10 ml-8'>{wishListLength}</span>
            </span>
            <span className='relative' style={{ fontSize: '24px', cursor: 'pointer' }} onClick={openNavToggle}>
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

