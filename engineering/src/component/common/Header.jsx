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
        <div className='flex flex-row gap-14 items-center justify-between'>
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
          <div className='hidden z-10 lg:flex text-nowrap flex-row lg:gap-4 lgl:gap-7 xxl:gap-10 '>
            <NavLink
              className={({ isActive }) =>
                isActive && headerCol
                  ? 'text-white text-[15px] nav-lnk font-bold'
                  : isActive
                  ? 'nav-lik text-[15px] text-black font-bold'
                  : !isActive && headerCol
                  ? 'unselected text-[15px] transition font-medium duration-300 hover:font-bold hover:text-white'
                  : 'unselected  text-[15px] hover:text-black transition duration-300 hover:font-semibold font-medium'
              }
              to={'/'}
            >
              <h1>HOME</h1>
            </NavLink>
            <RouterLink
              to='/#about-us'
              className={`font-medium hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white' : 'text-black'
              }`}
            >
              ABOUT US
            </RouterLink>
            <RouterLink
              to='/#services'
              className={`font-medium hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
            >
              OUR SERVICES
            </RouterLink>
            <RouterLink
              to='/#faqs'
              className={`font-medium hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
            >
              FAQS
            </RouterLink>

            <a
              href={`${AcademyUrl}`}
              target='_self'
              className={`font-medium hover:cursor-pointer hover:font-semibold transition duration-300 ${
                headerCol ? 'text-white ' : 'text-black'
              }`}
            >
              <span>ACADEMY</span>
            </a>

            <NavLink
              className={({ isActive }) =>
                isActive && headerCol
                  ? 'text-white nav-lnk font-bold'
                  : isActive
                  ? 'nav-lik text-black font-bold'
                  : !isActive && headerCol
                  ? 'unselected transition font-medium duration-300 hover:font-bold hover:text-white'
                  : 'unselected hover:text-black transition duration-300 hover:font-semibold font-medium'
              }
              to={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </NavLink>
          </div>

          <RouterLink
            to={'/get-quote'}
            className='font-semibold text-black transition duration-300 ease-in-out hidden w-[141px] h-12 items-center justify-center lg:flex zinde text-nowrap bg-white hover:bg-[#f0f0f0] rounded-[4px] hover:cursor-pointer border border-[#1c1c1c] p-2.5'
          >
            <span>GET A QUOTE</span>
          </RouterLink>
          <div onClick={toggleSidebar} className='flex lg:hidden z-1'>
            {headerCol ? <img src={Menu2} alt='' /> : <img src={Menu} alt='' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
