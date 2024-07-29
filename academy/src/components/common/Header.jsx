/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  Menu,
  Menu2,
  AcademyLogo,
  AcademyLogoFull,
  AcademyLogoLandscape,
  AcademyLogoLandscapeL,
} from '../../Utils/Assets';

import Sideber from './Sidebar';
import { EngineeringURL } from '../../Utils/BaseUrl';
import LazyImage from '../../Utils/SuspenseImage';

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
    {
      name: 'CONTACT US',
      link: '/contact-us',
    },
  ];

  return (
    <div className='contaier px-4 lgl:px-[76px] xl:px-[120px] py-4 lg:py-6'>
      <div
        className={`sidebar block lg:hidden ${showSidebar ? 'open z-50' : ''}`}
      >
        <Sideber showSidebar={showSidebar} toggle={toggleSidebar} />
      </div>
      <div className=''>
        <div className='flex flex-row gap-14 items-center justify-between'>
          <div className='z-10'>
            {headerCol ? (
              <Link to={'/'}>
                <img
                  src={AcademyLogoFull}
                  className='max-w-[188px] max-h-[72px] mt-[-8px] hidden lg:flex'
                  alt=''
                />
              </Link>
            ) : (
              <Link to={'/'}>
                <img
                  src={AcademyLogo}
                  className='max-w-[188px] max-h-[72px] mt-[-8px] hidden lg:flex'
                  alt=''
                />
              </Link>
            )}
            {headerCol ? (
              <Link to={'/'}>
                <img
                  src={AcademyLogoLandscapeL}
                  className='flex lg:hidden max-w-[120px] max-h-[60px] mt-[-2px]'
                  alt=''
                />
              </Link>
            ) : (
              <Link to={'/'}>
                <img
                  src={AcademyLogoLandscape}
                  className='flex lg:hidden max-w-[120px] max-h-[60px] mt-[-2px]'
                  alt=''
                />
              </Link>
            )}
          </div>
          <div className='hidden z-10 lg:flex text-nowrap flex-row gap-4 lg:gap-8 lgx:gap-9 xxl:gap-10 '>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive && headerCol
                    ? 'text-white lg:text-[14px] lgx:text-base nav-link'
                    : isActive
                    ? 'nav-link lg:text-[14px] lgx:text-base text-black'
                    : !isActive && headerCol
                    ? 'unselected lg:text-[14px] lgx:text-base transition duration-200 hover:text-white'
                    : 'unselected lg:text-[14px] lgx:text-base hover:text-black'
                }
                to={link.link}
              >
                <h1>{link.name}</h1>
              </NavLink>
            ))}
          </div>
          <a
            href={`${EngineeringURL}`}
            target='_self'
            className='payment_grad font-medium hover:font-semibold transition duration-300 ease-in-out hidden lg:flex zinde text-nowrap bg-white hover:bg-[#f0f0f0] rounded-2xl hover:cursor-pointer border border-[#1c1c1c] p-2.5 '
          >
            <span className='px-2'>ENGINEERING</span>
          </a>

          {/* Menu bar */}
          <div onClick={toggleSidebar} className='flex lg:hidden z-1'>
            {headerCol ? (
              <LazyImage src={Menu2} alt='' />
            ) : (
              <img src={Menu} alt='' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
