/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { Facilities, Industry, People, Tutor } from '../../Utils/Assets';
import { courseDummyData } from '../DummyData/coursesData';

const Catalogue = ({ courses }) => {
  return (
    <>
      <div className='relative w-full backgroundImages2 sm:h-[1116px] md:h-[1100px] lg:h-[840px] xll:h-[916px]'>
        <div className='flex  items-center  justify-center'>
          <div className='flex w-full flex-col pt-[100px] lg:px-4 items-center'>
            <Marquee
              speed={36}
              direction='left'
              pauseOnHover
              className='max-w-[98%] clip-text '
            >
              {courses && courses.length > 5 ? (
                <>
                  {courses &&
                    courses.slice(0, 6).map((course, index) => (
                      <Link
                        to={`/academy/courses/${course?.id}/${course?.title}`}
                        key={index}
                        className='text-white pr-4 lg:pr-12  xl:pr-[120px] transition text-[24px] duration-200 leading-[24px] font-medium hover:text-mainyellow hover:cursor-pointer'
                      >
                        {course?.title.toUpperCase()}
                      </Link>
                    ))}
                </>
              ) : (
                <>
                  {courseDummyData.map((course, index) => (
                    <span
                      key={index}
                      className='text-white pr-4 lg:pr-12  xl:pr-[120px] transition text-[24px] duration-200 leading-[24px] font-medium hover:text-mainyellow hover:cursor-pointer'
                    >
                      {course?.title.toUpperCase()}
                    </span>
                  ))}
                </>
              )}
            </Marquee>
          </div>
        </div>
        <div className='wave-line'>
          <div className=' lg:mt-[94px] sm:px-4 lg:px-0 w-full flex items-center justify-center '>
            <div className=' flex  sm:flex-col sm:mt-[160px] lg:mt-0 lg:flex-row lg:w-[1200px] xll:mt-[120px] h-[487px] items-center justify-center '>
              <div className='sm:f-full sm:mt-[320px] lg:mt-0 lg:w-1/2 flex flex-row items-center mt-4'>
                <h1 className='text-white  sm:text-[48px] lg:text-[64px] sm:leading-[58px] lg:leading-[76px] font-bold'>
                  Learn in <br />
                  months
                </h1>
                <h1 className='sm:text-[200px] lg:text-[280px] sm:leading-[240px] lg:leading-[337px] text-colorOpacity font-bold'>
                  3
                </h1>
              </div>
              <div className='sm:w-full sm:mt-[60px] lg:mt-0 lg:w-1/2 flex flex-col gap-3.5'>
                <div className='bg-colorOpacity hover:bg-white group hover:cursor-pointer transition duration-[200] p-4 flex flex-row items-center gap-4 rounded-[24px] '>
                  <div className='bg-white sm:px-4 lg:px-5 h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={Tutor} alt='' />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg:leading-[28px] text-white group-hover:text-black'>
                      Experienced Tutors
                    </h1>
                    <span className='text-white font-normal sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-white group hover:cursor-pointer transition duration-[200] p-3 flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-white sm:px-4 lg:px-5 h-[87px] w-[116px] flex items-center justify-center rounded-[16px] '>
                    <img src={Industry} alt='' />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-white group-hover:text-black '>
                      Industry Standard Curriculum
                    </h1>
                    <span className='text-white font-normal sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Stay ahead in the field with a curriculum designed to
                      align with current industry trends and demands.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-white group hover:cursor-pointer transition duration-[200] p-3 flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-white sm:px-4 lg:px-5 h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={Facilities} alt='' />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-white group-hover:text-black '>
                      State-of-the-Art Facilities
                    </h1>
                    <span className='text-white font-normal sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-white group hover:cursor-pointer transition duration-[200] p-3 flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-white sm:px-4 lg:px-5 h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={People} alt='' />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-white group-hover:text-black '>
                      Networking Opportunities:
                    </h1>
                    <span className='text-white font-normal sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB '>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
