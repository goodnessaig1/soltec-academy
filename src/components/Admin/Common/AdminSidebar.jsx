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

const AdminSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(currentPath);
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
      name: 'Settings',
      activeIcon: Settings2,
      icon: Settings,
      linkTo: '/admin/settings',
    },
  ];
  return (
    <div className='w-[262px] py-[15px] px-[10px] min-h-[100vh] bg-sideBarBg '>
      <img src={Logo} className='w-[115px] h-[42px] ' alt='' />
      <div className=' w-full mt-[54px] flex flex-col gap-[14px]'>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.linkTo}
            className={({ isActive }) =>
              isActive
                ? 'flex flex-row gap-[6px] items-center h-[48px] rounded-[50px] sideBarAdmin text-[#fff] font-[500] '
                : 'flex flex-row gap-[6px] items-center h-[48px] rounded-[50px] pr-[12px] pl-[12px] transition text-lightB hover:bg-[#fff] duration-200 font-[400]'
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
