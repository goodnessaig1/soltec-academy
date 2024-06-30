import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../../assets/logo-side.svg';
import Dashboard1 from '../../../assets/dashboard-.svg';
import Dashboard2 from '../../../assets/dashboard.svg';
import Courses from '../../../assets/course.svg';
import Courses2 from '../../../assets/course2.svg';
import Blog from '../../../assets/news.svg';
import Blog2 from '../../../assets/news2.svg';
import Testimonials from '../../../assets/testimonials.svg';
import Testimonials2 from '../../../assets/testimonials1.svg';
import Sponsors from '../../../assets/sponsors.svg';
import Sponsors2 from '../../../assets/sponsors1.svg';
import Invoice from '../../../assets/invoice.svg';
import Invoice2 from '../../../assets/invoice1.svg';
import Settings from '../../../assets/settings.svg';
import Settings2 from '../../../assets/settings1.svg';
import { useAuth } from '../../Context/AuthContext';

const AdminSidebar = () => {
  const location = useLocation();
  const { user } = useAuth();
  const currentPath = location.pathname;

  const navLinks = [
    {
      name: 'Dashboard',
      activeIcon: Dashboard1,
      icon: Dashboard2,
      linkTo: '/admin/dashboard',
    },
    {
      name: 'Courses',
      activeIcon: Courses2,
      icon: Courses,
      linkTo: '/admin/courses',
    },
    {
      name: 'Blog',
      activeIcon: Blog2,
      icon: Blog,
      linkTo: '/admin/blogs',
    },
    {
      name: 'Testimonials',
      activeIcon: Testimonials2,
      icon: Testimonials,
      linkTo: '/admin/testimonials',
    },
    {
      name: 'Sponsors',
      activeIcon: Sponsors2,
      icon: Sponsors,
      linkTo: '/admin/sponsors',
    },
    {
      name: 'Payment',
      activeIcon: Invoice2,
      icon: Invoice,
      linkTo: '/admin/payments',
    },
    {
      name: 'Newsletter',
      activeIcon: Invoice2,
      icon: Invoice,
      linkTo: '/admin/newsletter',
    },
  ];

  if (user?.is_super_admin == true) {
    navLinks.push({
      name: 'Settings',
      activeIcon: Settings2,
      icon: Settings,
      linkTo: '/admin/settings',
    });
  }

  return (
    <div className='w-[262px] py-[15px] px-2.5 min-h-[100vh] bg-sideBarBg '>
      <img src={Logo} className='w-[115px] h-[42px] ' alt='' />
      <div className=' w-full mt-[54px] flex flex-col gap-[14px]'>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.linkTo}
            className={({ isActive }) =>
              isActive
                ? 'flex flex-row gap-[6px] items-center h-12 rounded-[50px] sideBarAdmin text-white font-medium'
                : 'flex flex-row gap-[6px] items-center h-12 rounded-[50px] pr-3 pl-3 transition text-lightB hover:bg-white duration-200 font-normal'
            }
          >
            {currentPath.includes(link.linkTo) ? (
              <img src={link.activeIcon} alt='' />
            ) : (
              <img src={link.icon} alt='' />
            )}
            <h1 className=' text-[14px] leading-[17px]'>{link.name}</h1>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
