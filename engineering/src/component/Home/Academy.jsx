/* eslint-disable react/prop-types */
import WorkSpaceImages from './WorkSpaceImages';
import { AcademyLogo } from '../../Utils/assets';
import { AcademyUrl } from '../../Utils/apiRequest';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { courseDummyData } from '../DummyData/coursesDummyData';

const Academy = () => {
  return (
    <div className='w-full flex flex-col pt-[100px] pb-[130px] w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-[31px]'>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='text-black font-semibold text-[24px] leading-[34px]'>
            OUR ACADEMY
          </h1>
          <div className='whiteLine bg-black' />
        </div>
        <div className='flex items-center justify-center bg-white h-14 rounded-[50%] academy_sha w-14'>
          <img src={AcademyLogo} alt='' />
        </div>
        <span className='text-[18px] px-4 font-medium leading-[26px] text-center text-black'>
          Soltec Academy offers the best tutorial services for those looking to
          learn a digital skill. With super <br className='hidden lg:block' />
          experienced tutors and a conducive learning environment, our hybrid
          bootcamp brings you from beginner to
          <br className='hidden lg:block' />
          marketable in no time.
        </span>
        <div className='flex flex-col px-2  w-full items-center gap-[22px]'>
          <div className='flex w-full lgl:w-[980px] flex-c px-2 mx-2 items-center bg-opacityC rounded-[50px] h-12 items-center'>
            <Marquee
              speed={36}
              direction='left'
              pauseOnHover
              className='max-w-[98%] clip-text '
            >
              {courseDummyData && courseDummyData.length > 5 ? (
                <>
                  {courseDummyData &&
                    courseDummyData.slice(0, 6).map((course, index) => (
                      <Link
                        to={`/academy/courses/${course?.id}/${course?.title}`}
                        key={index}
                        className='text-black uppercase pr-4 lg:pr-12  xl:pr-[120px] transition text-[20px] duration-200 leading-[24px] font-semibold hover:text-white hover:cursor-pointer'
                      >
                        {course?.title}
                      </Link>
                    ))}
                </>
              ) : (
                <>
                  {courseDummyData.map((course, index) => (
                    <span
                      key={index}
                      className='text-black uppercase pr-4 lg:pr-12  xl:pr-[120px] transition text-[20px] duration-200 leading-[24px] font-semibold hover:text-white hover:cursor-pointer'
                    >
                      {course?.title}
                    </span>
                  ))}
                </>
              )}
            </Marquee>
          </div>

          <WorkSpaceImages />
        </div>

        <a href={`${AcademyUrl}`} target='_self'>
          <div className='bg-white hover:bg-[#E4E4E4] transition duration-300 ease-in-out seeMore h-12 w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-bold leading-[17px]'>
            SEE MORE
          </div>
        </a>
      </div>
    </div>
  );
};

export default Academy;
