/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom';
import { Close } from '../../Utils/Assets';
import { EngineeringURL } from '../../Utils/BaseUrl';

const Sideber = ({ toggle, showSidebar }) => {
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
      name: 'BLOG',
      link: '/blog',
    },
    {
      name: 'CONTACT US',
      link: '/contact-us',
    },
    {
      name: 'BOOK WORKSPACE',
      link: '/book-workspace',
    },
  ];
  return (
    <div className='overflow-hidden static'>
      {showSidebar && (
        <>
          <div className='flex justify-end' onClick={toggle}>
            <img src={Close} alt='' />
          </div>
          <div className='mt-[100px] flex flex-col gap-5 smm:gap-6 ml-1'>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive ? 'nav-link text-nowrap' : 'unselected text-nowrap'
                }
                to={link.link}
              >
                <h1>{link.name}</h1>
              </NavLink>
            ))}

            <div className='flex flex-col gap-6'>
              <Link
                to={'/blog/payment-guide'}
                className='w-[159px] h-12 hover:bg-[#f1f1f1] flex items-center justify-center sidebarPay rounded-xl p-2.5 text-sm text-[#000]'
              >
                <h1 className='text-sm'>Payment Guide</h1>
              </Link>
              <a
                href={`${EngineeringURL}`}
                target='_self'
                className='w-[159px] h-12 hover:bg-[#f1f1f1] flex items-center justify-center sidebarPay rounded-xl p-2.5 text-sm text-[#000]'
              >
                <h1 className='text-sm'>ENGINEERING</h1>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sideber;
