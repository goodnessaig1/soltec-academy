/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Logo, Logo2, LogoDark, Menu, Menu2 } from '../../Utils/Assets';
import Sideber from './Sidebar';
import { EngineeringURL } from '../../Utils/BaseUrl';

const Header = ({ headerCol }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const navLinks = [
    {
      name: 'HOME',
      link: '/',
    },
    {
      name: 'COURSES',
      link: '/courses',
    },
    {
      name: 'BOOK WORKSPACE',
      link: '/book-workspace',
    },
    {
      name: 'BLOG',
      link: '/blog',
    },
  ];

  return (
    <div className='contaier px-4 lgl:px-[76px] xl:px-[120px] py-4 lg:py-6'>
      <div className={`sidebar ${showSidebar ? 'open z-50' : ''}`}>
        <Sideber showSidebar={showSidebar} toggle={toggleSidebar} />
      </div>
      <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className='z-10'>
            {headerCol ? (
              <Link to={'/'}>
                <img src={LogoDark} className='hidden lg:flex' alt='' />
              </Link>
            ) : (
              <Link to={'/'}>
                <img src={Logo} className='hidden lg:flex' alt='' />
              </Link>
            )}
            <Link to={'/'}>
              <img src={Logo2} className='flex lg:hidden' alt='' />
            </Link>
          </div>
          <div className='hidden z-10 lg:flex text-nowrap flex-row gap-6 lgl:gap-9 xxl:gap-12 '>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive && headerCol
                    ? 'text-[#fff] nav-link'
                    : isActive
                    ? 'nav-link text-[#000]'
                    : !isActive && headerCol
                    ? 'unselected transition duration-200 hover:text-white'
                    : 'unselected hover:text-[#000]'
                }
                to={link.link}
              >
                <h1>{link.name}</h1>
              </NavLink>
            ))}
            <a
              href={`${EngineeringURL}`}
              target='_self'
              className={`${
                headerCol
                  ? 'unselected hover:text-white navlink hover:cursor-pointer font-medium duration-300'
                  : 'unselected transition duration-300 hover:text-black hover:font-medium'
              }`}
            >
              <span className='px-2'>ENGINEERING</span>
            </a>
            <NavLink
              className={({ isActive }) =>
                isActive && headerCol
                  ? 'text-[#fff] nav-link'
                  : isActive
                  ? 'nav-link text-[#000]'
                  : !isActive && headerCol
                  ? 'unselected transition duration-200 hover:text-white'
                  : 'unselected hover:text-[#000]'
              }
              to={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </NavLink>
          </div>
          <Link
            to={'/blog/payment-guide'}
            className='payment_grad font-medium hover:font-semibold transition duration-300 ease-in-out hidden lg:flex zinde text-nowrap bg-white hover:bg-[#f0f0f0] rounded-2xl hover:cursor-pointer border border-[#1c1c1c] p-2.5 '
          >
            <span className='px-2'>Payment Guide</span>
          </Link>

          {/* Menu bar */}
          <div onClick={toggleSidebar} className='flex lg:hidden z-1'>
            {headerCol ? <img src={Menu2} alt='' /> : <img src={Menu} alt='' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
