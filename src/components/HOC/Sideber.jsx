/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from 'react-router-dom';
import Close from '../../assets/ic_round-close.svg';
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
      name: 'ABOUT US',
      link: '/about-us',
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
          <div className='mt-[110px] flex flex-col gap-[48px] ml-[24px]'>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  isActive ? 'nav-link' : 'unselected'
                }
                to={link.link}
              >
                <h1>{link.name}</h1>
              </NavLink>
            ))}

            <Link
              to={'/blog/payment-guide'}
              className='w-[159px] h-[48px] hover:bg-[#f1f1f1] flex items-center justify-center sidebarPay  rounded-[12px] p-[10px] text-[14px] text-[#000]'
            >
              <h1 className='text-[14px]'>Payment Guide</h1>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sideber;
