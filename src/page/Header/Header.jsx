import { useContext, useEffect, useState } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook, BiSearch } from "react-icons/bi";
import { FaBars, FaLinkedinIn } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addProduct, setAddProduct] = useState([]);
  const [wishs, setWishs] = useState([]);

  useEffect(() => {
    fetch("https://electronics-server-nine.vercel.app/wishlist")
      .then((res) => res.json())
      .then((data) => {
        setWishs(data);
      });
  }, [wishs]);

  useEffect(() => {
    fetch("https://electronics-server-nine.vercel.app/addCartPost")
      .then((res) => res.json())
      .then((data) => {
        setAddProduct(data);
      });
  }, [addProduct]);

  // shopping cart delete
  const handleDelete = (_id) => {
    fetch(`https://electronics-server-nine.vercel.app/addCartPost/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        data;
        if (data.deletedCount > 0) {
          const remaing = addProduct.filter((user) => user._id !== _id);
          setAddProduct(remaing);
        }
      });
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the shopping cart
  const openNavToggle = () => {
    setIsOpen(!isOpen);
  };

  // Calculate the length of items in the shopping cart
  const shoppingCartLength = addProduct.length;
  const wishlistListLength = wishs.length;

  return (
    <div>
      <nav className="border-b-2 z-20  fixed w-full bg-white py-4 md:px-5 md:flex md:items-center md:justify-between cursor-pointer">
        <div className="flex items-center justify-between">
          <span>
            <img
              src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg"
              alt=""
            />
          </span>
          <span className="text-3xl cursor-pointer md:hidden block mx-2">
            {isMenuOpen ? (
              <AiOutlineCloseCircle onClick={toggleMenu} />
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </span>
        </div>

        <ul
          className={`header md:none md:flex md:items-center z-[1] md:static absolute bg-white ${
            isMenuOpen ? "block" : "hidden"
          } text-black w-full md:w-auto md:py-0 py-4`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link to="">Home</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="dropdown text-black">
            {/* <button className="flex justify-between" style={{ fontSize: '16px' }}>Page </button> */}
            <div className="flex justify-between page">
              <p style={{ fontSize: "16px" }}>
                <button>Page</button>
              </p>
              <p>
                <IoIosArrowDown />
              </p>
            </div>
            <div class="dropdown-content">
              <li>
                <Link to="/privacy">
                  <span className="cardWith">
                    <p>Pricavy & Policy</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <span className="cardWith">
                    <p>SignUP</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span className="cardWith">
                    <p>Login</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/mycart">
                  <span className="cardWith">
                    <p>My Cart</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">
                  <span className="cardWith">
                    <p>My Wishlist</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/checkout">
                  <span className="cardWith">
                    <p>CheckOut</p>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/error">
                  <span className="cardWith">
                    <p>Error</p>
                  </span>
                </Link>
              </li>
              {/* <li><Link to='/payments'><span className='cardWith'><p>Payments</p></span></Link></li> */}
            </div>
          </li>
          <li className="mx-4 my-6 md:my-0 ">
            <Link to="/contact">Contact</Link>
          </li>

          {/* <span className='md:flex items-center lg:ml-72'> */}
          <div
            id="mySidenav"
            className={`sidenav pt-14 ${isOpen ? "open" : ""}`}
          >
            <span className="closebtn" onClick={openNavToggle}>
              &times;
            </span>
            <h3 className="shawdaw absolute uppercase py-2 px-5 font-semibold -mt-10 h-14">
              Shopping Cart
            </h3>
            <p className="border-t-2 mt-6"></p>
            <div className="z-10">
              {addProduct.map((product) => (
                <div
                  className="border-b-2 py-4 mt-4 flex justify-between items-center mr-2"
                  key={product._id}
                >
                  <div className="flex">
                    <div className="">
                      <Link to={`/productDetails/${product._id}`}>
                        <figure>
                          <img
                            className="w-20"
                            src={product.image}
                            alt="product"
                          />
                        </figure>
                      </Link>
                    </div>
                    <div className="text-left ml-4">
                      <h1 className="font-semibold">{product.title}</h1>
                      <p className="mt-4 text-red-500 font-semibold">
                        $:{product.price}
                      </p>
                    </div>
                  </div>
                  <div onClick={() => handleDelete(product._id)}>
                    <p className="mr-2 text-2xl">X</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {user ? (
            <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-0 user-details">
              <span className="tooltip" data-tip={user?.displayName}></span>
              <button
                className="btn btn-white btn-sm mb-2 text-black text-2xl bg-white h-10 w-10 mr-1"
                style={{ borderRadius: "50%" }}
              >
                {user?.displayName[0].toUpperCase()}
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline btn-sm text-black mb-2">
                login
              </button>
            </Link>
          )}
          <BiSearch className="mx-4 my-5 md:my-0 text-3xl mr user-details" />

          <span
            className="relative mr-4 user-details"
            style={{ fontSize: "24px", cursor: "pointer" }}
          >
            <Link to="/wishlist">
              <GiSelfLove />
            </Link>
            {/* Display the shopping cart length */}
            {(wishlistListLength > 0 && (
              <span className="shopping-cart-length text-sm absolute -mt-10 ml-4 p-2">
                {wishlistListLength || 0}
              </span>
            )) || (
              <span className="shopping-cart-length text-sm absolute -mt-10 ml-5 p-2">
                0
              </span>
            )}
          </span>
          <span
            className="relative mr-2 user-details"
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={openNavToggle}
          >
            <AiOutlineShoppingCart />
            {/* Display the shopping cart length */}
            {(shoppingCartLength > 0 && (
              <span className="shopping-cart-length text-sm absolute -mt-10 ml-5 p-2">
                {shoppingCartLength}
              </span>
            )) || (
              <span className="shopping-cart-length text-sm absolute -mt-10 ml-5 p-2">
                0
              </span>
            )}
          </span>
          <p className="md:hidden text-black mt-10 ml-3 get-start">
            Get Started <IoIosArrowForward className="text-xl" />
          </p>
          <div className="icon-header mt-24 mb-10 ml-4 md:hidden">
            <p className="font-bold">FOLLOW :</p>
            <div className="flex items-center justify-between mr-3">
              <div className="flex gap-5">
                <p className="small-header">
                  <Link
                    to="https://www.linkedin.com/in/juyel-haqu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </Link>
                </p>
                <p className="small-header">
                  <Link
                    to="https://www.instagram.com/juyel1273/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineTwitter />
                  </Link>
                </p>
                <p className="small-header">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100073733827614"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoFacebook />
                  </Link>
                </p>
              </div>
              <div className="md:hidden text-black">
                <p className="text-cyan-800">juyelhaque29@gmail.com</p>
                <p>WhatsApp : 01947-603852</p>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
