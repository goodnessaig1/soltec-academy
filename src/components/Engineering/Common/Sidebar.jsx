/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Close from '../../../assets/ic_round-close.svg';
const Sideber = ({
  toggle,
  showSidebar,
  scrollTo,
  services,
  about,
  faqsRef,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleScroll = path => {
    if (location.pathname == '/') {
      scrollTo(path);
      toggle();
    } else {
      navigate('/');
    }
  };
  return (
    <div className='overflow-hidden static'>
      {showSidebar && (
        <>
          <div className='flex justify-end' onClick={toggle}>
            <img src={Close} alt='' />
          </div>
          <div className='mt-[110px] flex flex-col gap-[48px] ml-[24px]'>
            <NavLink className='nav-link text-nowrap' onClick={toggle} to={'/'}>
              <h1>HOME</h1>
            </NavLink>
            <div
              onClick={() => handleScroll(about)}
              id='about-us'
              className='nav-link text-nowrap'
            >
              ABOUT US
            </div>
            <div
              onClick={() => handleScroll(services)}
              id='services'
              className='nav-link text-nowrap'
            >
              OUR SERVICES
            </div>
            <div
              onClick={() => handleScroll(faqsRef)}
              id='faqs'
              className='nav-link text-nowrap'
            >
              FAQS
            </div>
            <NavLink
              className='nav-link text-nowrap'
              onClick={toggle}
              to={'/contact-us'}
            >
              <h1>CONTACT US</h1>
            </NavLink>
            <Link
              to={'/get-quote'}
              className='w-[159px] h-[48px] hover:bg-[#f1f1f1] flex items-center justify-center sidebarPay  rounded-[12px] p-[10px] text-[14px] text-[#000]'
            >
              <h1 className='nav-link'>GET A QUOTE</h1>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sideber;
