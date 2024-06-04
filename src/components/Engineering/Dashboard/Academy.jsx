/* eslint-disable react/prop-types */
import { Next, Prev } from '../../../Utils/Assets';
import Logo from '../../../assets/academy-logo.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import WorkSpaceImages from './WorkSpaceImages';
const courses = [
  {
    name: 'PRODUCT DESIGN',
  },
  {
    name: 'FULLSTACK',
  },
  {
    name: 'MOBILE APP DEV',
  },
  {
    name: 'FRONTEND DEV',
  },
  {
    name: 'BACKEND',
  },
  {
    name: 'BLOCKCHAIN DEV',
  },
  {
    name: 'CYBERSECURITY',
  },
  {
    name: 'FULLSTACK',
  },
];

const CustomPrevArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={`${className} previou`} onClick={onClick}>
      <img src={Prev} alt='' />
    </div>
  );
};

const CustomNextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={`${className} nextbtn`} onClick={onClick}>
      <img src={Next} alt='' />
    </div>
  );
};

const Academy = () => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const mdSettings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow className='hidden' />,
    nextArrow: <CustomNextArrow className='hidden' />,
  };
  const smSettings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow className='hidden' />,
    nextArrow: <CustomNextArrow className='hidden' />,
  };

  return (
    <div className='w-full flex flex-col pt-[100px] pb-[130px] w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-[31px]'>
        <div className='flex flex-col gap-[12px] items-center justify-center'>
          <h1 className='text-[#fff] font-[600] text-[24px] leading-[34px]'>
            OUR ACADEMY
          </h1>
          <div className='whiteLine' />
        </div>
        <div className='flex items-center justify-center bg-white h-[57px] rounded-[50%] academy_sha w-[57px]'>
          <img src={Logo} alt='' />
        </div>
        <span className='text-[18px] px-[16px] font-[500] leading-[26px] text-center text-lightOpac'>
          Soltec Academy offers the best tutorial services for those looking to
          learn a digital skill. With super <br className='hidden lg:block' />
          experienced tutors and a conducive learning environment, our hybrid
          bootcamp brings you from beginner to
          <br className='hidden lg:block' />
          marketable in no time.
        </span>
        <div className='flex flex-col gap-[22px]'>
          <div className=' slck-contai flex flex-row h-[57x] rounded-[50px] w-full hidden lg:flex items-center justify-center slider-container'>
            <Slider
              {...settings}
              className='w-[940px] text-nowrap rounded-[50px] px-[20px] slider-containerr bg-opacityC h-[57px] items-center justify-center  flex'
            >
              {courses.map((course, i) => (
                <div
                  key={i}
                  className='text-white slick-item pr-[8px] font-[600] text-[20px] leading-[24px]'
                >
                  {course?.name.length > 12
                    ? `${course.name.substring(0, 12)}..`
                    : `${course.name}`}
                </div>
              ))}
            </Slider>
          </div>
          <div className=' slck-contai fle pl-[16px] flex-row h-[57x] rounded-[50px] w-full hidden md:flex lg:hidden items-center justify-center slider-container'>
            <Slider
              {...mdSettings}
              className='md:w-[600px] rounded-[50px] px-[20px] slider-containerr bg-opacityC h-[57px] items-center justify-center  flex'
            >
              {courses.map((course, i) => (
                <div
                  key={i}
                  className='text-white slick-item  font-[600] text-[16px] leading-[24px]'
                >
                  {course.name}
                </div>
              ))}
            </Slider>
          </div>
          <div className=' slck-contai flex-row  h-[50x] rounded-[50px] w-full flex md:hidden items-center justify-center slider-container'>
            <Slider
              {...smSettings}
              className='w-[320px] smm:w-[344px] rounded-[50px] px-[20px] slider-containerr bg-opacityC h-[50px] items-center justify-between  flex'
            >
              {courses.map((course, i) => (
                <div
                  key={i}
                  className='text-white ml-[6px] slick-item  font-[600] text-[16px] leading-[20px]'
                >
                  {course.name}
                </div>
              ))}
            </Slider>
          </div>

          <WorkSpaceImages />
        </div>

        <Link to={'/'}>
          <button className='bg-white hover:bg-[#E4E4E4] transition duration-300 ease-in-out seeMore h-[48px] w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-[700] leading-[17px] '>
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Academy;
