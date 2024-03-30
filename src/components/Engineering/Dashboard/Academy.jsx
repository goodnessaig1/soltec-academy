/* eslint-disable react/prop-types */
import { Codes, Meet, Next, Prev } from '../../../Utils/Assets';
import Video from '../../../assets/video-svg.svg';
import Logo from '../../../assets/academy-logo.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
      {/* Custom Previous Arrow SVG or Icon */}
      {/* <button>&#60;</button> */}
      <img src={Prev} alt='' />
    </div>
  );
};

const CustomNextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={`${className} nextbtn`} onClick={onClick}>
      {/* Custom Next Arrow SVG or Icon */}
      {/* <button>&#62;</button> */}
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
    // variableWidth: true,
    // centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
        <span className='text-[18px] font-[500] leading-[26px] text-center text-lightOpac'>
          Soltec Academy offers the best tutorial services for those looking to
          learn a digital skill. With super <br />
          experienced tutors and a conducive learning environment, our hybrid
          bootcamp brings you from beginner to
          <br />
          marketable in no time.
        </span>
        <div className='flex flex-col gap-[22px]'>
          <div className=' slck-contai fle pl-[16px] flex-row w-[10 h-[57x] rounded-[50px] w-full flex items-center justify-center slider-container'>
            <Slider
              {...settings}
              className='w-[1015px] rounded-[50px] px-[20px] slider-containerr bg-opacityC h-[57px] items-center justify-center  flex'
            >
              {courses.map((course, i) => (
                <div
                  key={i}
                  className='text-white slick-item  font-[600] text-[20px] leading-[24px]'
                >
                  {course.name}
                </div>
              ))}
            </Slider>
          </div>
          <div className='h-[461px] flex flex-row gap-[12px] items-center justify-center'>
            <div className='flex flex-col gap-[13px]'>
              <div className='flex flex-row gap-[13px]'>
                <img src={Codes} className='w-[48%] h-[183px] ' alt='' />
                <img src={Meet} className='w-[48%] h-[183px]' alt='' />
              </div>
              <div className='flex flex-row gap-[13px]'>
                <img src={Meet} className='w-[48%] h-[183px]' alt='' />
                <img src={Codes} className='w-[48%] h-[183px] ' alt='' />
              </div>
            </div>
            <div className='h-[378px] '>
              <img src={Video} className='w-[461px] h-[378px]' alt='' />
            </div>
          </div>
        </div>

        <button className='bg-white seeMore h-[48px] w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-[700] leading-[17px] '>
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default Academy;
