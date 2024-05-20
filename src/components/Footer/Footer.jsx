import { useEffect, useState } from 'react';
import Logo from '../../assets/logo2.svg';
import axios from 'axios';
import { BaseURL } from '../../Utils/BaseUrl';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [courses, setCourses] = useState(null);
  const getCourses = async () => {
    //  setLoading(true);
    try {
      const response = await axios.get(
        `${BaseURL}/courses/fetch_home_courses/`,
      );
      //  setLoading(false);
      setCourses(response.data);
    } catch (error) {
      console.log('error', error);
      if (error?.code == 'ERR_NETWORK') {
        //  setNetworkError(true);
      }
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className='footer-bg sm:px-[16px] lg:px-[120px] py-[130px] sm:pt-[120px] lg:pt-[140px] '>
      <div className='flex sm:flex-col lg:flex-row sm:gap-[38px] lg:justify-between'>
        <div className='flex flex-col gap-[16px]'>
          <img src={Logo} alt='' className='w-[170px] h-[53.5px] ' />
          <span className='sm:hidden lg:block font-[400] text-footerCol text-[16px] leading-[24px]'>
            Academy of Soltec Engineering Company
          </span>
          <span className='sm:block lg:hidden font-[400] text-footerCol text-[16px] leading-[24px]'>
            Soltec Academy
          </span>
          <div className='flex flex-col gap-[10px]'>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Phone: +2348039814257
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Email: info@solteceng.com
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Address: #27 Billy Okoye Boulevard, <br />
              Agu-Awka
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <h1 className='font-[600] text-[16px] leading-[21px] text-[#fff]'>
            INFORMATION
          </h1>
          <div className='flex flex-col gap-[12px]'>
            <Link
              to={'about-us'}
              className='font-[400] text-footerCol text-[16px] leading-[32px]'
            >
              About Us
            </Link>
            <Link
              to={'/contact-us'}
              className='font-[400] text-footerCol text-[16px] leading-[32px]'
            >
              Contact Us
            </Link>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Terms & Conditions
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <h1 className='font-[600] text-[16px] leading-[21px] text-[#fff]'>
            COURSES
          </h1>
          {courses ? (
            <div className='flex flex-col gap-[12px]'>
              {courses &&
                courses.slice(0, 6).map((course, index) => (
                  <Link
                    to={`/courses/${course?.id}/${course?.title}`}
                    key={index}
                    className='font-[400] text-footerCol text-[16px] leading-[32px]'
                  >
                    {course.title}
                  </Link>
                ))}
            </div>
          ) : (
            <div className='flex flex-col gap-[12px]'>
              <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
                Product design
              </span>
              <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
                Mobile App Development
              </span>
              <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
                Blockchain Developments
              </span>
              <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
                Data Analysis
              </span>
              <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
                Cybersecurity
              </span>
              <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
                Frontend Web Development
              </span>
            </div>
          )}
        </div>
        <div className='flex flex-col gap-[16px]'>
          <h1 className='font-[600] text-[16px] leading-[21px] text-[#fff]'>
            NEWSLETTER
          </h1>
          <div className='flex flex-col gap-[12px]'>
            <span className='font-[400] text-footerCol text-[16px] leading-[24px]'>
              Get instant updates about our courses, <br />
              blog posts and special discounts
            </span>
          </div>
          <div className='flex flex-row gap-[6px]'>
            <div className='bg-colorOpacity rounded-[12px]  p-[10px] pl-[16px] '>
              <input
                type='text'
                placeholder='Enter your email'
                className='font-[400] text-[16px] outtline-none bg-transparent text-footerCol w-full focus:outline-none placeholder-footerCol focus:border-none leading-[16px]'
              />
            </div>
            <div className='p-[8px] rounded-[12px] bg-[#fff] '>
              <span className='font-[500] text-[14px] leading-[19px]'>
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
