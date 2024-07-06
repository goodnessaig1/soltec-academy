import { Cursor, Frame, Frame3, Gradient } from '../../Utils/Assets';
import { Link } from 'react-router-dom';
import Group1 from '../../assets/grpup1.png';
import Group2 from '../../assets/group2.png';
import Group3 from '../../assets/group3.png';
import Group4 from '../../assets/group4.png';
import Header from '../common/Header';
import Slider from 'react-slick';

const images = [
  { img: Frame },
  {
    img: Group1,
    // img: 'https://ik.imagekit.io/nz8zngrxv/amazon-image/Group%2021%20(6)_VrilbkK0p.png?updatedAt=1720179797313',
  },
  {
    img: Group2,
    // img: 'https://ik.imagekit.io/nz8zngrxv/amazon-image/Group%2021%20(2)_zX1L_UqB3.png?updatedAt=1720170378819',
  },
  {
    img: Group3,
    // img: 'https://ik.imagekit.io/nz8zngrxv/amazon-image/Group%2021%20(4)_D5x0Nw45_.png?updatedAt=1720170378713',
  },
  {
    img: Group4,
    // img: 'https://ik.imagekit.io/nz8zngrxv/amazon-image/Group%2021%20(3)_SOqmIEenw.png?updatedAt=1720170377531',
  },
];

const HeroSection = () => {
  return (
    <div className='w-full min-h-[118vh] sms:min-h-[94vh] smm:min-h-[102vh]  sml:min-h-[118vh] lg:min-h-[100vh]'>
      <Header />
      <div className='absolute w-full lg:static top-0 right-0'>
        {/* Hero session gradient */}
        <div className='absolute top-0 ml-[127px]'>
          <img src={Gradient} alt='' />
        </div>

        <div className='hero_se'>
          <div className='flex flex-col lg:flex-row w-full justify-between'>
            <div className='flex lg:hidden w-full  flex justify-end'>
              <div className='w-full md:w-[550px]'>
                <Images />
              </div>
            </div>

            <div className='px-4 lg:pl-[76px] xl:pl-[120px] flex sm:w-full lg:w-1/2 mdl:items-center lg:items-start xxl:items-end flex-col gap-7 sm:mt-0 lg:mt-28'>
              <div className=' flex flex-col gap-7 z-10'>
                <h1 className='text-nowrap barlow-semi condensed-bold  font-bold smm:text-[37px] xs:text-[32px] lg:text-[48px] xl:text-[64px] text-[#1c1c1c] sm:leading-[48px] lg:leading-[76px] '>
                  Best place to learn a <br />
                  new <span className='text-[#0043ce]'>digital skill</span>
                </h1>
                <div className='absolute ml-[220px] sms:ml-[300px] lg:ml-[500px] mt-[60px] lg:mt-[130px]'>
                  <img src={Cursor} alt='' />
                </div>
                <span className='font-[400] max-w-[400px] lg:max-w-[480px] sm:text-[15px] lg:text-[20px] sm:leading-[24px] lg:leading-[30px] text-[#545454] '>
                  Opening new frontiers for learning, one course at a time.
                  Soltec aims to equip every kind of individual with their
                  desired skill. All that is needed from you is drive and
                  passion. We handle the rest.
                </span>
                <Link
                  to={'/courses'}
                  className='sm:w-[132px] lg:w-[182px] h-12 custom-gradient  rounded-[16px] flex items-center justify-center '
                >
                  <span className='text-white font-bold text-base '>
                    Enroll now
                  </span>
                </Link>
              </div>
            </div>
            <div className='sm:hidden absolute top-0 right-0 min-h-[370px] justify-end lg:flex lg:w-[50%]'>
              <Images />
            </div>
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
      <div className=''>
        <img src={Frame} className='min-h-[420px]' loading='lazy' alt='' />
      </div>
      <div className=''>
        <img src={Group2} className='min-h-[420px]' loading='lazy' alt='' />
      </div>
      <div className=''>
        <img src={Group3} className='min-h-[420px]' loading='lazy' alt='' />
      </div>
      <div className=''>
        <img src={Group4} className='min-h-[420px]' loading='lazy' alt='' />
      </div>
    </Slider>
  );
};
