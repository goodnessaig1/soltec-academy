import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Logo2 from '../../assets/mobile-logo.svg';
import Menu from '../../assets/menu.svg';
import Sideber from '../HOC/Sideber';
import { useState } from 'react';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className='contaier'>
      <div className={`sidebar ${showSidebar ? 'open z-3' : ''}`}>
        <Sideber showSidebar={showSidebar} toggle={toggleSidebar} />
      </div>
      <div className=''>
        <div className='flex flex-row items-center justify-between'>
          <div className=''>
            <img src={Logo} className='sm:hidden lg:flex' alt='' />
            <img src={Logo2} className='sm:flex lg:hidden' alt='' />
          </div>
          <div className='sm:hidden z-10 lg:flex flex-row lg:gap-[36px] xxl:gap-[64px] '>
            <NavLink
              exact
              className={({ isActive }) =>
                isActive
                  ? 'nav-link'
                  : 'unselected hover:text-[#000] transition duration-200'
              }
              to='/'
            >
              <h1>HOME</h1>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'nav-link'
                  : 'unselected hover:text-[#000] transition duration-200'
              }
              to='/courses'
            >
              <h1>COURSES</h1>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'nav-link'
                  : 'unselected hover:text-[#000] transition duration-200'
              }
              to='/blog'
            >
              <h1>BLOG</h1>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'nav-link'
                  : 'unselected hover:text-[#000] transition duration-200'
              }
              to='/about-us'
            >
              <h1>ABOUT US</h1>
            </NavLink>
          </div>
          <div className='sm:hidden lg:flex z-10 bg-[#fff] hover:bg-[#f0f0f0] rounded-[16px] hover:cursor-pointer border border-[1px] border-[#1c1c1c] p-[10px] '>
            <span>Payment Guide</span>
          </div>

          {/* Menu bar */}
          <div onClick={toggleSidebar} className='sm:flex lg:hidden z-1'>
            <img src={Menu} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
