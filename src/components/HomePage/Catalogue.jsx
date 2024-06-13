/* eslint-disable react/prop-types */
import Tutor from '../../assets/tutor-icon.svg';
import Industry from '../../assets/industry-icon.svg';
import Facilities from '../../assets/stroke.svg';
import People from '../../assets/people.svg';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Catalogue = ({ courses }) => {
  return (
    <>
      <div className=' w-full backgroundImages2 sm:h-[1116px] md:h-[1200px] lg:h-[990px]'>
        <div className='flex  items-center  justify-center'>
          <div className='flex w-full flex-col pt-[100px] lg:px-[16px] items-center'>
            <Marquee
              speed={36}
              direction='left'
              pauseOnHover
              className='max-w-[98%] clip-text '
            >
              {courses &&
                courses.map((course, index) => (
                  <Link
                    to={`/academy/courses/${course?.id}/${course?.title}`}
                    key={index}
                    className='text-[#fff] pr-[16px] lg:pr-[48px]  xl:pr-[120px] transition text-[24px] duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'
                  >
                    {course?.title.toUpperCase()}
                  </Link>
                ))}
              {/* </div> */}
            </Marquee>
          </div>
        </div>
        <div className='wave-line'>
          <div className=' lg:mt-[94px] sm:px-[16px] lg:px-[0px] w-full flex items-center justify-center '>
            <div className=' flex  sm:flex-col sm:mt-[160px] lg:mt-[0px] lg:flex-row lg:w-[1200px] xll:mt-[120px] h-[487px] items-center justify-center '>
              <div className='sm:f-full sm:mt-[320px] lg:mt-[0px] lg:w-1/2 flex flex-row items-center  mt-[16px] '>
                <h1 className='text-[#fff]  sm:text-[48px] lg:text-[64px] sm:leading-[58px] lg:leading-[76px] font-[700] '>
                  Learn in <br />
                  months
                </h1>
                <h1 className='sm:text-[200px] lg:text-[280px] sm:leading-[240px] lg:leading-[337px] text-colorOpacity font-[700]'>
                  3
                </h1>
              </div>
              <div className='sm:w-full sm:mt-[60px] lg:mt-[0px] lg:w-1/2 flex flex-col gap-[14px]  '>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={Tutor} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg:leading-[28px] text-[#fff] group-hover:text-[#000]'>
                      Experienced Tutors
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[116px] flex items-center justify-center rounded-[16px] '>
                    <img src={Industry} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-[#fff] group-hover:text-[#000] '>
                      Industry Standard Curriculum
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Stay ahead in the field with a curriculum designed to
                      align with current industry trends and demands.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={Facilities} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-[#fff] group-hover:text-[#000] '>
                      State-of-the-Art Facilities
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={People} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-[#fff] group-hover:text-[#000] '>
                      Networking Opportunities:
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB '>
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
