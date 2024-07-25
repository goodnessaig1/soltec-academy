import { Cursor, Gradient } from '../../Utils/Assets';
import { Link } from 'react-router-dom';
import Group11 from '../../../public/group11.png';
import Group2 from '../../../public/group2.png';
import Group3 from '../../../public/group3.png';
// import Group3 from '../../../public/group3.png';
import Group4 from '../../../public/group4.png';
// import Group4 from '../../../public/group4.png';
import Header from '../common/Header';
import Slider from 'react-slick';
import LazyImage from '../../Utils/SuspenseImage';

const HeroSection = () => {
  return (
    <div>
      <div className='z-10'>
        <Header />
      </div>
      <div className='mt-[-80px] lg:mt-[-120px] mb-24'>
        <div className='absolute top-0 ml-[127px]'>
          <img src={Gradient} alt='' />
        </div>
        <div className='flex flex-col lg:flex-row justify-between w-full'>
          <div className='block lg:hidden w-full  flex justify-end'>
            <div className='w-full md:w-[550px]'>
              <Images />
            </div>
          </div>

          <div className='w-full lg:w-1/2 flex flex-col md:items-center justify-center lg:justify-start lg:items-start'>
            <div className=' px-4 lg:pl-[76px] xl:pl-[120px] flex flex-col gap-7 z-5 lg:mt-[200px] lgl:mt-[236px]'>
              <h1 className='text-nowrap z-10 barlow-semi condensed-bold  font-bold smm:text-[37px] xs:text-[32px] lg:text-[48px] xl:text-[64px] text-[#1c1c1c] sm:leading-[48px] lg:leading-[76px] '>
                Best place to learn a <br />
                new <span className='text-[#0043ce]'>digital skill</span>
              </h1>
              <div className='absolute ml-[220px] z-10 sms:ml-[300px] lg:ml-[500px] mt-[60px] lg:mt-[130px]'>
                <img src={Cursor} alt='' />
              </div>
              <span className='font-normal z-10 max-w-[400px] lg:max-w-[480px] sm:text-[15px] lg:text-[20px] sm:leading-[24px] lg:leading-[30px] text-[#545454] '>
                Opening new frontiers for learning, one course at a time. Soltec
                aims to equip every kind of individual with their desired skill.
                All that is needed from you is drive and passion. We handle the
                rest.
              </span>
              <Link
                to={'/courses'}
                className='sm:w-[132px] z-10 lg:w-[182px] h-12 custom-gradient  rounded-[16px] flex items-center justify-center '
              >
                <span className='text-white font-bold text-base '>
                  Enroll now
                </span>
              </Link>
            </div>
          </div>

          <div className='sm:hidden min-h-[370px] justify-end lg:flex lg:w-[50%]'>
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const Images = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings} className='w-[100%] slider-contaier overflow-hidden '>
      <div className='min-h-[420px]'>
        <LazyImage className='min-h-[420px]' src={Group11} alt='hero' />
      </div>
      <div className='min-h-[420px]'>
        <LazyImage className='min-h-[420px]' src={Group2} alt='hero' />
      </div>
      <div className='min-h-[420px]'>
        <LazyImage className='min-h-[420px]' src={Group3} alt='hero' />
      </div>
      <div className='min-h-[420px]'>
        <LazyImage className='min-h-[420px]' src={Group4} alt='hero' />
      </div>
      {/* <div className=''>
        <img src={Group11} className='min-h-[420px]' loading='lazy' alt='' />
      </div>
      <div className=''>
        <img src={Group2} className='min-h-[420px]' loading='lazy' alt='' />
      </div>
      <div className=''>
        <img src={Group3} className='min-h-[420px]' loading='lazy' alt='' />
      </div>
      <div className=''>
        <img src={Group4} className='min-h-[420px]' loading='lazy' alt='' />
      </div> */}
    </Slider>
  );
};
