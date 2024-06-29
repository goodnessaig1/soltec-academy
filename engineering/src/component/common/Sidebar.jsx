/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { Close } from '../../Utils/assets';
import { AcademyUrl } from '../../Utils/apiRequest';

const Sidebar = ({ toggle, showSidebar }) => {
  return (
    <div className='overflow-hidden static'>
      {showSidebar && (
        <>
          <div className='flex justify-end' onClick={toggle}>
            <img src={Close} alt='' />
          </div>
          <div className='mt-[110px] text-black flex flex-col gap-[48px] ml-[24px]'>
            <NavLink className='nav-link text-nowrap' onClick={toggle} to={'/'}>
              <h1>HOME</h1>
            </NavLink>
            <RouterLink to='/#about-us' className='nav-link text-nowrap'>
              ABOUT US
            </RouterLink>
            <RouterLink to='/#services' className='nav-link text-nowrap'>
              OUR SERVICES
            </RouterLink>
            <RouterLink to='/#faqs' className='nav-link text-nowrap'>
              FAQS
            </RouterLink>
            <NavLink
              className='nav-link text-nowrap'
              onClick={toggle}
              to={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </NavLink>
            <a
              href={`${AcademyUrl}`}
              target='_self'
              className='w-[159px] h-[48px] hover:bg-[#f1f1f1] flex items-center justify-center sidebarPay  rounded-[12px] p-[10px] text-[14px] text-[#000]'
            >
              <h1 className='nav-link'>ACADEMY</h1>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;