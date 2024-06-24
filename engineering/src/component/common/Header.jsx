/* eslint-disable react/prop-types */
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Logo2, LogoE, LogoEng, Menu, Menu2 } from '../../Utils/assets';
import Sidebar from './Sidebar';
import { AcademyUrl } from '../../Utils/apiRequest';

const Header = ({ headerCol }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='contaier px-4 lgl:px-[76px] xl:px-[120px] py-4 lg:py-6'>
      <div className={`sidebar ${showSidebar ? 'open z-3' : ''}`}>
        <Sidebar
          showSidebar={showSidebar}
          toggle={() => setShowSidebar(false)}
        />
      </div>
      <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className='z-5'>
            {headerCol ? (
              <RouterLink to={'/'}>
                <img src={LogoE} className='hidden w-[216px] lg:flex' alt='' />
              </RouterLink>
            ) : (
              <RouterLink to={'/'}>
                <img
                  src={LogoEng}
                  className='hidden w-[216px] lg:flex'
                  alt=''
                />
              </RouterLink>
            )}
            <RouterLink to={'/'}>
              <img src={Logo2} className='flex lg:hidden' alt='' />
            </RouterLink>
          </div>
          <div className='hidden z-10 lg:flex text-nowrap flex-row lg:gap-4 lgl:gap-9 xxl:gap-46 '>
            <NavLink
              className={`font-medium hover:cursor-pointer hover:font-bold transition duration-300 ${
                headerCol ? 'text-white' : 'text-black'
              }`}
              to={'/'}
            >
              <h1>HOME</h1>
            </NavLink>
            <RouterLink
              to='/#about-us'
              className={`font-medium hover:cursor-pointer hover:font-bold transition duration-300 ${
                headerCol ? 'text-white' : 'text-black'
              }`}
            >
              ABOUT US
            </RouterLink>
            <RouterLink
              to='/#services'
              className={`font-medium hover:cursor-pointer hover:font-bold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
            >
              OUR SERVICES
            </RouterLink>
            <RouterLink
              to='/#faqs'
              className={`font-medium hover:cursor-pointer hover:font-bold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
            >
              FAQS
            </RouterLink>
            <NavLink
              className={`font-medium hover:cursor-pointer hover:font-bold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
              to={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </NavLink>
          </div>
          <a
            href={`${AcademyUrl}`}
            target='_self'
            className='font-semibold text-black transition duration-300 ease-in-out hidden w-[141px] h-12 items-center justify-center lg:flex zinde text-nowrap bg-white hover:bg-[#f0f0f0] rounded-[4px] hover:cursor-pointer border border-[#1c1c1c] p-2.5'
          >
            <span>ACADEMY</span>
          </a>
          <div onClick={toggleSidebar} className='flex lg:hidden z-1'>
            {headerCol ? <img src={Menu2} alt='' /> : <img src={Menu} alt='' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
