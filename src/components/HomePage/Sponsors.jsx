/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import Google from '../../assets/Google_logo.svg';
import Codes from '../../assets/codes.png';
import Meet from '../../assets/meet.png';
import Office from '../../assets/office.png';
import Video from '../../assets/video-svg.svg';
import Prev from '../../assets/prev.svg';
import Next from '../../assets/next.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Marquee from 'react-fast-marquee';

const CustomPrevArrow = props => {
  return (
    <div className='custom-prev-arrow bg-transparent' onClick={props.onClick}>
      <div className='w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Prev} alt='' />
      </div>
    </div>
  );
};

const CustomNextArrow = props => {
  return (
    <div
      className='custom-next-arrow w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] '
      onClick={props.onClick}
    >
      <div className='w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Next} alt='' />
      </div>
    </div>
  );
};

const Sponsors = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='w-full w-full'>
      <Marquee speed={55}>
        <div className='flex flex-row mt-[140px] justify-center gap-[65px] sm:ml-[40px] lg:ml-[px] items-center '>
          <img
            src={Google}
            className='sm:w-[104px] lg:w-[148px] sm:h-[35px] lg:h-[50px] '
            alt=''
          />
          <img
            src={Google}
            className='sm:w-[104px] lg:w-[148px] sm:h-[35px] lg:h-[50px] '
            alt=''
          />
          <img
            src={Google}
            className='sm:w-[104px] lg:w-[148px] sm:h-[35px] lg:h-[50px] '
            alt=''
          />
          <img
            src={Google}
            className='sm:w-[104px] lg:w-[148px] sm:h-[35px] lg:h-[50px] '
            alt=''
          />
          <img
            src={Google}
            className='sm:w-[104px] lg:w-[148px] sm:h-[35px] lg:h-[50px] '
            alt=''
          />
          <img
            src={Google}
            className='sm:w-[104px] lg:w-[148px] sm:h-[35px] lg:h-[50px] '
            alt=''
          />
        </div>
      </Marquee>
      <div className='container_'>
        <div className=' sm:mt-[80px] lg:mt-[130px] sm:px-[16px] lg:px-0 sm:ml-[0] lg:ml-[130px]'>
          <div className=' sm:hidden lg:block'>
            <div className='slider-container '>
              <Slider
                {...settings}
                className='flex outline-none flex-row overflow-initial'
              >
                <div className='w-[500px] xl:w-[606px] h-[500px] xl:h-[599px] gap-[16px] flex flex-col'>
                  <div className='flex flex-row gap-[8px] xl:gap-[16px]'>
                    <img
                      src={Codes}
                      className='w-[200px] xl:w-[270px] h-[234px]'
                      alt=''
                    />
                    <img
                      src={Meet}
                      className='w-[220px] xl:w-[300px] h-[234px]'
                      alt=''
                    />
                  </div>
                  <div className='mt-[16px]'>
                    <img
                      src={Office}
                      className='w-[420px] xl:w-[596px]'
                      alt=''
                    />
                  </div>
                </div>
                <div className='w-[540px] h-[599px]'>
                  <img src={Video} className='' alt='' />
                </div>
                <div className='w-[606px] h-[599px]'>
                  <img src={Video} alt='' />
                </div>
              </Slider>
            </div>
          </div>
          <div className='sm:flex items-center justify-center w-full lg:hidden '>
            <div className=' gap-[8px] w-[343px] flex flex-col'>
              <div className='flex flex-row gap-[8px]'>
                <img
                  src={Codes}
                  className='sm:w-[140px] lg:w-[304px] sm:h-[169px] '
                  alt=''
                />
                <img
                  src={Meet}
                  className='sm:w-[180px] lg:w-[309px] sm:h-[169px] '
                  alt=''
                />
              </div>
              <div className='mt-[6px]'>
                <img
                  src={Office}
                  className='sm:w-[330px] lg:w-[661px]'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
