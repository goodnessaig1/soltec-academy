/* eslint-disable react/prop-types */
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/engineering-logo.svg';
import LogoEng from '../../../assets/engin-logo.svg';
import Logo2 from '../../../assets/mobile-log.svg';
import Menu from '../../../assets/menu.svg';
import Menu2 from '../../../assets/menu-1.svg';
import { useState } from 'react';
import Sideber from '../Common/Sidebar';

// eslint-disable-next-line no-unused-vars
const Header = ({ headerCol, scrollTo, services, about, faqsRef }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const handleScroll = path => {
    if (location.pathname == '/') {
      scrollTo(path);
    } else {
      navigate('/');
    }
  };
  return (
    <div className='contaier px-[16px] lgl:px-[76px] xl:px-[120px] py-[16px] lg:py-[24px]'>
      <div className={`sidebar ${showSidebar ? 'open z-3' : ''}`}>
        <Sideber
          scrollTo={scrollTo}
          services={services}
          about={about}
          faqsRef={faqsRef}
          showSidebar={showSidebar}
          toggle={() => setShowSidebar(false)}
        />
      </div>
      <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className='z-5'>
            {headerCol ? (
              <Link to={'/'}>
                <img src={Logo} className='hidden w-[216px] lg:flex' alt='' />
              </Link>
            ) : (
              <Link to={'/'}>
                <img
                  src={LogoEng}
                  className='hidden w-[216px] lg:flex'
                  alt=''
                />
              </Link>
            )}
            <Link to={'/'}>
              <img src={Logo2} className='flex lg:hidden' alt='' />
            </Link>
          </div>
          <div className='hidden z-10 lg:flex text-nowrap flex-row lg:gap-[24px] lgl:gap-[36px] xxl:gap-[64px] '>
            <NavLink
              className={`font-[500] hover:cursor-pointer hover:font-[700] transition duration-300 ${
                headerCol ? 'text-[#fff]' : 'text-[#000]'
              }`}
              to={'/'}
            >
              <h1>HOME</h1>
            </NavLink>
            <div
              onClick={() => handleScroll(about)}
              id='about-us'
              className={`font-[500] hover:cursor-pointer hover:font-[700] transition duration-300 ${
                headerCol ? 'text-[#fff]' : 'text-[#000]'
              }`}
            >
              ABOUT US
            </div>
            <div
              onClick={() => handleScroll(services)}
              id='services'
              className={`font-[500] hover:cursor-pointer hover:font-[700] transition duration-300 ${
                headerCol ? 'text-[#fff] ' : 'text-[#000]'
              }`}
            >
              OUR SERVICES
            </div>
            <div
              onClick={() => handleScroll(faqsRef)}
              id='faqs'
              className={`font-[500] hover:cursor-pointer hover:font-[700] transition duration-300 ${
                headerCol ? 'text-[#fff] ' : 'text-[#000]'
              }`}
            >
              FAQS
            </div>
            <NavLink
              className={({ isActive }) =>
                isActive && headerCol
                  ? 'text-[#fff] nav-link'
                  : isActive
                  ? 'nav-link '
                  : !isActive && headerCol
                  ? ' transition text-[#fff] hover:cursor-pointer hover:font-[700] transition duration-300 duration-200 hover:text-[#fff]'
                  : ' hover:text-[#000] hover:cursor-pointer hover:font-[700] transition duration-300'
              }
              to={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </NavLink>
          </div>
          <Link
            to={'/get-quote'}
            className='payment_grad hidden w-[141px] h-[48px] flex items-center justify-center lg:flex zinde text-nowrap bg-[#fff] hover:bg-[#f0f0f0] rounded-[4px] hover:cursor-pointer border border-[1px] border-[#1c1c1c] p-[10px] '
          >
            <span>GET A QUOTE</span>
          </Link>
          <div onClick={toggleSidebar} className='flex lg:hidden z-1'>
            {headerCol ? <img src={Menu2} alt='' /> : <img src={Menu} alt='' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
