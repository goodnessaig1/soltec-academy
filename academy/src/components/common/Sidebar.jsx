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
      name: 'BOOK WORKSPACE',
      link: '/book-workspace',
    },
    {
      name: 'BLOG',
      link: '/blog',
    },
  ];
  return (
    <div className='overflow-hidden static'>
      {showSidebar && (
        <>
          <div className='flex justify-end' onClick={toggle}>
            <img src={Close} alt='' />
          </div>
          <div className='mt-[100px] flex flex-col gap-8 smm:gap-11 ml-6'>
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
            <a
              href={`${EngineeringURL}`}
              target='_self'
              className='nav-link unselected'
            >
              <h1>ENGINEERING</h1>
            </a>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link text-nowrap' : 'unselected text-nowrap'
              }
              to={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </NavLink>

            <Link
              to={'/blog/payment-guide'}
              className='w-[159px] h-12 hover:bg-[#f1f1f1] flex items-center justify-center sidebarPay rounded-2xl p-2.5 text-sm text-[#000]'
            >
              <h1 className='text-sm'>Payment Guide</h1>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sideber;
