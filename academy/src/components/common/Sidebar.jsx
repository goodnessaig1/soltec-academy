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
    {
      name: 'CONTACT US',
      link: '/contact-us',
    },
  ];
  return (
    <div className='overflow-hidden static'>
      {showSidebar && (
        <>
          <div className='flex justify-end' onClick={toggle}>
            <img src={Close} alt='' />
          </div>
          <div className='mt-[100px] flex flex-col gap-9 smm:gap-12 ml-6'>
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
              className='w-[159px] h-12 border border-gray-600 hover:bg-[#f1f1f1] flex items-center justify-center rounded-3xl p-2.5 text-sm text-black'
            >
              <h1 className='text-sm'>ENGINEERING</h1>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Sideber;
