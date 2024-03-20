/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Logo2 from '../../assets/mobile-logo.svg';
import LogoDark from '../../assets/logo-dark.svg';
import Menu from '../../assets/menu.svg';
import Menu2 from '../../assets/menu-1.svg';
import Sideber from '../HOC/Sideber';
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const Header2 = ({ headerCol }) => {
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
    {
      name: 'ABOUT US',
      link: '/about-us',
    },
  ];
  return (
    <div className='contaier px-[16px] lg:px-[120px] py-[16px] lg:py-[24px]'>
      <div className={`sidebar ${showSidebar ? 'open z-3' : ''}`}>
        <Sideber showSidebar={showSidebar} toggle={toggleSidebar} />
      </div>
      <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className='z-10'>
            {headerCol ? (
              <Link to={'/'}>
                <img src={LogoDark} className='sm:hidden lg:flex' alt='' />
                {/* <img src={Logo} className='hidden  lg:flex' alt='' /> */}
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
          <div className='hidden z-10 lg:flex flex-row lg:gap-[36px] xxl:gap-[64px] '>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive && headerCol
                    ? 'text-[#fff] nav-link'
                    : isActive
                    ? 'nav-link text-[#000]'
                    : !isActive && headerCol
                    ? 'unselected transition duration-200 hover:text-[#fff]'
                    : 'unselected hover:text-[#000]'
                }
                to={link.link}
              >
                <h1>{link.name}</h1>
              </NavLink>
            ))}
          </div>
          <Link
            to={'/blog/payment-guide'}
            className='payment_grad hidden lg:flex z-10 bg-[#fff] hover:bg-[#f0f0f0] rounded-[16px] hover:cursor-pointer border border-[1px] border-[#1c1c1c] p-[10px] '
          >
            <span>Payment Guide</span>
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

export default Header2;
