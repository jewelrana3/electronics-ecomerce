// import { BiSearch } from 'react-icons/bi';
// import { TbMan } from 'react-icons/tb';
// import { GiSelfLove } from 'react-icons/gi';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { FaBars } from 'react-icons/fa';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
// import { Link } from 'react-router-dom';


// const Header = () => {

  
//     return (
//         //  <div className="navbar bg-base-100">
//         // //     <div className="navbar-start">
//         // //         <div className="dropdown">
//         // //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
//         // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//         // //             </label>
//         // //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         // //                 <li><a>Home</a></li>
//         // //                 <li><a>About Us</a></li>
//         // //                 <li><a>Shop</a></li>
//         // //                 <li>
//         // //                     <a>Pages</a>
//         // //                     <ul className="p-2">
//         // //                         <li><a>FAQ</a></li>
//         // //                         <li><a>error</a></li>
//         // //                     </ul>
//         // //                 </li>
//         // //                 <li><a>Contact</a></li>
//         // //             </ul>
//         // //         </div>
//         // //         <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
//         // //     </div>
//         // //     <div className="navbar-center hidden lg:flex">
//         // //         <ul className="menu menu-horizontal px-1">
//         // //         <li><a>Home</a></li>
//         // //                 <li><a>About Us</a></li>
//         // //                 <li><a>Shop</a></li>
//         // //                 <li>
//         // //                     <a>Pages</a>
//         // //                     {/* <ul className="p-2">
//         // //                         <li><a>FAQ's</a></li>
//         // //                         <li><a>error</a></li>
//         // //                     </ul> */}
//         // //                 </li>
//         // //                 <li><a>Contact</a></li>
//         // //         </ul>
//         // //     </div>
//         // //     <div className="navbar-end">
//         // //         <div className='md:flex gap-5 text-2xl'>
//         // //             <BiSearch />
//         // //             <TbMan />
//         // //             <GiSelfLove />
//         // //             <AiOutlineShoppingCart />
//         // //         </div>
//         // //     </div>
//         // </div>
//         <div>
//             <nav className=' bg-slate-700 text-white md:flex md:items-center md:justify-between cursor-pointer'>
//                 <div className='flex items-center justify-between'>
//                     <span>
//                         <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
//                     </span>
//                     <span className='text-3xl text-white cursor-pointer md:hidden block mx-2'>
//                         <FaBars onClick={(this)}  className='faBars'/>
//                     </span>
//                 </div>


//                 <ul className='md:flex md:items-center z-[1] md:z-auto md:static absolute 
//                 bg-white text-black w-full md:w-auto md:py-0 py-4'>
//                     <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
//                     <li className='mx-4 my-6 md:my-0'><Link to=''>About</Link></li>
//                     <li className='mx-4 my-6 md:my-0'><Link to=''>Page</Link></li>
//                     <li className='mx-4 my-6 md:my-0'><Link to=''>Contact</Link></li>

//                     <span className='md:flex items-center'>
//                         <BiSearch className='mx-4 my-5 md:my-0' />
//                         <TbMan className='mx-4 my-5 md:my-0' />
//                         <GiSelfLove className='mx-4 my-5 md:my-0' />
//                         <AiOutlineShoppingCart className='mx-4 my-5 md:my-0' />
//                     </span>
//                 </ul>
//                 {/* <div className='flex space-x-4 text-xl'>

//                     <div className='flex'>
//                         <label htmlFor="check" className='text-white lg:hidden'>
//                             <FaBars />
//                         </label>
//                     </div>
//                 </div> */}
//             </nav>
//         </div>
//     );
// };

// export default Header;

import { BiSearch } from 'react-icons/bi';
import { TbMan } from 'react-icons/tb';
import { GiSelfLove } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state for menu visibility
  
  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='bg-slate-700 text-white md:flex md:items-center md:justify-between cursor-pointer'>
        <div className='flex items-center justify-between'>
          <span>
            <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
          </span>
          <span className='text-3xl text-white cursor-pointer md:hidden block mx-2'>
            {isMenuOpen ? ( <AiOutlineCloseCircle onClick={toggleMenu} />
         
            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </span>
        </div>

        <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute
           ${isMenuOpen ? 'block' : 'hidden'} bg-white text-black w-full md:w-auto md:py-0 py-4`}>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>About</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Page</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Contact</Link></li>

          <span className='md:flex items-center'>
            <BiSearch className='mx-4 my-5 md:my-0' />
            <TbMan className='mx-4 my-5 md:my-0' />
            <GiSelfLove className='mx-4 my-5 md:my-0' />
            <AiOutlineShoppingCart className='mx-4 my-5 md:my-0' />
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
