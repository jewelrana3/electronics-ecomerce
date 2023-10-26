// {/* <div>
//       <nav className=' border-b-2 py-4  md:flex md:items-center md:justify-between cursor-pointer'>
//         <div className='flex items-center justify-between'>
//           <span>
//             <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
//           </span>
//           <span className='text-3xl cursor-pointer md:hidden block mx-2'>
//             {isMenuOpen ? (<AiOutlineCloseCircle onClick={toggleMenu} />

//             ) : (
//               <FaBars onClick={toggleMenu} />
//             )}
//           </span>
//         </div>

//         <ul className={`header md:flex md:items-center z-[1] md:z-auto md:static absolute
//            ${isMenuOpen ? 'openH' : 'hidden'} text-black w-full md:w-auto md:py-0 py-4`}>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>About</Link></li>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>Page</Link></li>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>Contact</Link></li>

//           <span className='md:flex items-center'>
//             <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
//               <span className="closebtn" onClick={openNavToggle}>&times;</span>
//               <a href="#">About</a>
//               <a href="#">Services</a>
//               <a href="#">Clients</a>
//               <a href="#">Contact</a>
//             </div>

//             <BiSearch className='mx-4 my-5 md:my-0' />
//             <TbMan className='mx-4 my-5 md:my-0' />
//             <GiSelfLove className='mx-4 my-5 md:my-0' />
//             <span style={{ fontSize: '30px', cursor: 'pointer', }} onClick={openNavToggle}><AiOutlineShoppingCart/></span></span>
//         </ul>

//       </nav>
//     </div> */}

// import { BiSearch } from 'react-icons/bi';
// import { TbMan } from 'react-icons/tb';
// import { GiSelfLove } from 'react-icons/gi';

// import { FaBars } from 'react-icons/fa';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { useState } from 'react'; // Import useState
// import './Header.css'
// import useAddProduct from '../../hooks/useAddProduct';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state for menu visibility
//   const [isOpen, setIsOpen] = useState(false);
//   const [addProduct] = useAddProduct();
//   const cartLength = addProduct.length;
//   const {image,title,price,classId,_id} = addProduct;

//   // Function to toggle the menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };


//   const openNavToggle = () => {
//     setIsOpen(!isOpen)
//   }


//   return (
//     <div>
//       <nav className=' border-b-2 py-4 px-6 md:flex md:items-center md:justify-between cursor-pointer'>
//         <div className='flex items-center justify-between'>
//           <span>
//             <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
//           </span>
//           <span className='text-3xl cursor-pointer md:hidden block mx-2'>
//             {isMenuOpen ? (<AiOutlineCloseCircle onClick={toggleMenu} />

//             ) : (
//               <FaBars onClick={toggleMenu} />
//             )}
//           </span>
//         </div>

//         <ul className={`header md:flex md:items-center z-[1] md:z-auto md:static absolute
//            ${isMenuOpen ? 'block' : 'hidden'} text-black w-full md:w-auto md:py-0 py-4`}>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>About</Link></li>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>Page</Link></li>
//           <li className='mx-4 my-6 md:my-0'><Link to=''>Contact</Link></li>

//           <span className='md:flex items-center'>
//             <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
//               <span className="closebtn" onClick={openNavToggle}>&times;</span>
//               <h3 className='shawdaw absolute uppercase py-2 px-5 font-semibold -mt-10 h-14'>Shopping Cart</h3>
//               <p className='border-t-2 mt-4'></p>
//               <div>
//                 {
//                   addProduct.map(product => <div className=' border-b-2  py-4 mt-4' key={product._id}>

//                       <div className='flex gap-28'>
//                         <Link to={`/productDetails/${product._id}`}><figure><img className='ml-5' src={product.image1} alt="product" /></figure></Link>
//                         <h1 className='text-xl font-semibold'>{product.title}</h1>
//                       </div>

//                     <div className='flex justify-center'>
//                       <p className='mt-4 text-red-500 font-semibold'>$:{product.price}</p>
//                     </div>
//                   </div>)
//                 }
//               </div>
//             </div>

//             <BiSearch className='mx-4 my-5 md:my-0' />
//             <TbMan className='mx-4 my-5 md:my-0' />
//             <GiSelfLove className='mx-4 my-5 md:my-0' />
//             <span style={{ fontSize: '30px', cursor: 'pointer', }} onClick={openNavToggle}><AiOutlineShoppingCart />+{cartLength?.length || 0}</span></span>
//         </ul>

//       </nav>
//     </div>
//   );
// };

// export default Header;
import { BiSearch } from 'react-icons/bi';
import { TbMan } from 'react-icons/tb';
import { GiSelfLove } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import useAddProduct from '../../hooks/useAddProduct';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [addProduct] = useAddProduct();

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
          <li className='mx-4 my-6 md:my-0'><Link to=''>About</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Page</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Contact</Link></li>

          <span className='md:flex items-center'>
            <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
              <span className="closebtn" onClick={openNavToggle}>&times;</span>
              <h3 className='shawdaw absolute uppercase py-2 px-5 font-semibold -mt-10 h-14'>Shopping Cart</h3>
              <p className='border-t-2 mt-4'></p>
              <div>
                {addProduct.map((product) => (
                  <div className='border-b-2 py-4 mt-4' key={product._id}>
                    <div className='flex gap-28'>
                      <Link to={`/productDetails/${product._id}`}>
                        <figure><img className='ml-5' src={product.image1} alt="product" /></figure>
                      </Link>
                      <h1 className='text-xl font-semibold'>{product.title}</h1>
                    </div>
                    <div className='flex justify-center'>
                      <p className='mt-4 text-red-500 font-semibold'>$:{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <BiSearch className='mx-4 my-5 md:my-0 text-3xl' />
            <TbMan className='mx-4 my-5 md:my-0 text-3xl' />
            <span>
              <GiSelfLove style={{ fontSize: '30px'}} className='mx-4 my-5 md:my-0 relative ' />
              <span className='shopping-cart-length absolute -mt-10 ml-8'>{shoppingCartLength?.length || 0}</span>
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
      </nav>
    </div>
  );
};

export default Header;

