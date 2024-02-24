import Logo from '../../assets/logo.svg';
import Logo2 from '../../assets/mobile-logo.svg';
import Menu from '../../assets/menu.svg';
import Frame from '../../assets/frame.svg';
import Frame3 from '../../assets/frame3.png';
import Gradient from '../../assets/gradient.svg';
import Profile from '../../assets/profile.jpg';
import Media from '../../assets/media.svg';
import Media1 from '../../assets/media1.svg';
import Media2 from '../../assets/media2.svg';
import Cursor from '../../assets/cursor.svg';
import Marquee from 'react-fast-marquee';
import Sideber from '../HOC/Sideber';
import { useState } from 'react';

const HeroSection = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className='w-full'>
      <div className='flex mx-[0] my-auto sm:px-[16px] lg:px-[120px] sm:py-[16px] lg:py-[24px] flex-col'>
        {/* Hero session gradient */}
        <div className='absolute top-[0] ml-[127px]'>
          <img src={Gradient} alt='' />
        </div>
        {/* Header */}
        <div className='contaier'>
          <div className=''>
            <div className='flex flex-row items-center justify-between'>
              <div className=''>
                <img src={Logo} className='sm:hidden lg:flex' alt='' />
                <img src={Logo2} className='sm:flex lg:hidden' alt='' />
              </div>
              <div className='sm:hidden lg:flex flex-row lg:gap-[36px] xxl:gap-[64px] '>
                <span className='z-10 hover:cursor-pointer'>HOME</span>
                <span className='z-10 hover:cursor-pointer'>COURSES</span>
                <span className='z-10 hover:cursor-pointer'>BLOG</span>
                <span className='z-10 hover:cursor-pointer'>ABOUT US</span>
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
        {/* Sidebar */}
        <div className={`sidebar ${showSidebar ? 'open z-3' : ''}`}>
          <Sideber showSidebar={showSidebar} toggle={toggleSidebar} />
        </div>
        <div className='absolute top-0 right-0 left-0 '>
          <div className='w-full'>
            <div className='hero_se'>
              <div className='flex sm:flex-col lg:flex-row w-full justify-between'>
                <div className='sm:flex lg:hidden w-full flex justify-end'>
                  <img src={Frame3} alt='' />
                </div>
                <div className='sm:pl-[16px] lg:pl-[120px] flex sm:w-full lg:w-1/2 lg:items-start xxl:items-end flex-col gap-[27px] sm:mt-[0px] lg:mt-[235px]'>
                  <div className=' flex flex-col gap-[27px]'>
                    <h1 className='text-nowrap barlow-semi condensed-bold  font-[700] sm:text-[37px] xs:text-[32px]  lg:text-[64px] text-[#1c1c1c] sm:leading-[48px] lg:leading-[76px] '>
                      Best place to learn a <br />
                      new <span className='text-[#0043ce]'>digital skill</span>
                    </h1>
                    <div className='absolute sm:ml-[300px] lg:ml-[500px] sm:mt-[60px] lg:mt-[130px]'>
                      <img src={Cursor} alt='' />
                    </div>
                    <span className='font-[400] sm:text-[15px] lg:text-[20px] sm:leading-[24px] lg:leading-[30px] text-[#545454] '>
                      Opening new frontiers for learning, one course at a{' '}
                      <br className='sm:flex lg:hidden' />
                      time.
                      <br className='sm:hidden lg:flex' />
                      Soltec aims to equip every kind of individual
                      <br className='sm:flex lg:hidden' />
                      with their <br className='sm:hidden lg:flex' />
                      desired skill. All that is needed from you is
                      <br className='sm:flex lg:hidden' />
                      drive and
                      <br className='sm:hidden lg:flex' />
                      passion. We handle the rest.
                    </span>
                    <div className='sm:w-[132px] lg:w-[182px] h-[48px] custom-gradient  rounded-[16px] flex items-center justify-center '>
                      <span className='text-[#fff] text-[700] text-[16px] '>
                        Enroll now
                      </span>
                    </div>
                  </div>
                </div>
                <div className='sm:hidden  justify-end lg:flex lg:w-1/2'>
                  <img src={Frame} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative sm:mt-[800px] sm:mb-[110px] lg:mb-[120px] lg:mt-[720px]'>
        <Marquee
          speed={55}
          className='flex flex-row gap-[24px] '
          direction='left'
        >
          <div className='flex flex-row mx-[20px] rounded-[16px] gap-[20px] sm:w-[315px] lg:w-[506px] border backg p-[20px] bg-[fff] items-center'>
            <img
              src={Profile}
              className='sm:w-[77px] lg:w-[91px] lg:h-auto sm:h-[76px] '
              alt=''
            />
            <div className='flex flex-col gap-[11px]'>
              <h1 className='text-[16px] font-[500] z-10 leading-[19px] '>
                X was a fantastic place for me to learn and put to action
                quickly
              </h1>
              <div>
                <span className='font-[400] text-[14px] profile_col leading-[16px]'>
                  James Doe,
                  <p>UI/UX Designer,X Alumni</p>
                </span>
              </div>
            </div>
            <div className='absolute items-right top-[0] mt-[16px] sm:ml-[230px] lg:ml-[398px] '>
              <img
                src={Media}
                className='sm:w-[52px] lg:h-[36px] lg:w-[74px] lg:h-[51px]  '
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-row mx-[20px] rounded-[16px] gap-[20px] sm:w-[315px] lg:w-[506px] border backg p-[20px] bg-[fff] items-center'>
            <img
              src={Profile}
              className='sm:w-[77px] lg:w-[91px] sm:h-[76px] lg:h-auto'
              alt=''
            />
            <div className='flex flex-col gap-[11px]'>
              <h1 className='text-[16px] font-[500] z-10 leading-[19px] '>
                X was a fantastic place for me to learn and put to action
                quickly
              </h1>
              <div>
                <span className='font-[400] text-[14px] profile_col leading-[16px]'>
                  James Doe,
                  <p>UI/UX Designer,X Alumni</p>
                </span>
              </div>
            </div>
            <div className='absolute items-right top-[0] mt-[16px] sm:ml-[230px] lg:ml-[398px] '>
              <img
                src={Media1}
                className='sm:w-[52px] lg:h-[36px] lg:w-[74px] lg:h-[51px]   '
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-row mx-[20px] rounded-[16px] gap-[20px] sm:w-[315px] lg:w-[506px] border backg p-[20px] bg-[fff] items-center'>
            <img
              src={Profile}
              className='sm:w-[77px] lg:w-[91px] sm:h-[76px] lg:h-auto'
              alt=''
            />
            <div className='flex flex-col gap-[11px]'>
              <h1 className='text-[16px] font-[500] z-10 leading-[19px] '>
                X was a fantastic place for me to learn and put to action
                quickly
              </h1>
              <div>
                <span className='font-[400] text-[14px] profile_col leading-[16px]'>
                  James Doe,
                  <p>UI/UX Designer,X Alumni</p>
                </span>
              </div>
            </div>
            <div className='absolute items-right top-[0] mt-[16px] sm:ml-[230px] lg:ml-[398px] '>
              <img
                src={Media2}
                className='sm:w-[52px] lg:h-[36px] lg:w-[74px] lg:h-[51px]  '
                alt=''
              />
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
