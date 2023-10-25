{/* <div>
      <nav className=' border-b-2 py-4  md:flex md:items-center md:justify-between cursor-pointer'>
        <div className='flex items-center justify-between'>
          <span>
            <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
          </span>
          <span className='text-3xl cursor-pointer md:hidden block mx-2'>
            {isMenuOpen ? (<AiOutlineCloseCircle onClick={toggleMenu} />

            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </span>
        </div>

        <ul className={`header md:flex md:items-center z-[1] md:z-auto md:static absolute
           ${isMenuOpen ? 'openH' : 'hidden'} text-black w-full md:w-auto md:py-0 py-4`}>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>About</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Page</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Contact</Link></li>

          <span className='md:flex items-center'>
            <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
              <span className="closebtn" onClick={openNavToggle}>&times;</span>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>

            <BiSearch className='mx-4 my-5 md:my-0' />
            <TbMan className='mx-4 my-5 md:my-0' />
            <GiSelfLove className='mx-4 my-5 md:my-0' />
            <span style={{ fontSize: '30px', cursor: 'pointer', }} onClick={openNavToggle}><AiOutlineShoppingCart/></span></span>
        </ul>

      </nav>
    </div> */}

import { BiSearch } from 'react-icons/bi';
import { TbMan } from 'react-icons/tb';
import { GiSelfLove } from 'react-icons/gi';

import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state for menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const openNavToggle = () => {
    setIsOpen(!isOpen)
  }

  
  return (
    <div>
      <nav className=' border-b-2 py-4  md:flex md:items-center md:justify-between cursor-pointer'>
        <div className='flex items-center justify-between'>
          <span>
            <img src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" />
          </span>
          <span className='text-3xl cursor-pointer md:hidden block mx-2'>
            {isMenuOpen ? (<AiOutlineCloseCircle onClick={toggleMenu} />

            ) : (
              <FaBars onClick={toggleMenu} />
            )}
          </span>
        </div>

        <ul className={`header md:flex md:items-center z-[1] md:z-auto md:static absolute
           ${isMenuOpen ? 'openH' : 'hidden'} text-black w-full md:w-auto md:py-0 py-4`}>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Home</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>About</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Page</Link></li>
          <li className='mx-4 my-6 md:my-0'><Link to=''>Contact</Link></li>

          <span className='md:flex items-center'>
            <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
              <span className="closebtn" onClick={openNavToggle}>&times;</span>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Clients</a>
              <a href="#">Contact</a>
            </div>

            <BiSearch className='mx-4 my-5 md:my-0' />
            <TbMan className='mx-4 my-5 md:my-0' />
            <GiSelfLove className='mx-4 my-5 md:my-0' />
            <span style={{ fontSize: '30px', cursor: 'pointer', }} onClick={openNavToggle}><AiOutlineShoppingCart/></span></span>
        </ul>

      </nav>
    </div>
  );
};

export default Header;
