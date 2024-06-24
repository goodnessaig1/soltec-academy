import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { Arrow_Right } from '../../Utils/assets';

const whatWeDo = [
  {
    title: 'SOLAR PANEL INSTALLATION',
  },
  {
    title: 'CCTV INSTALLATION',
  },
  {
    title: 'LEARN TECH COURSES',
  },
  {
    title: 'SOFTWARE DEVELOPMENT',
  },
  {
    title: 'BUILDING AND CONSTRUCTION',
  },
  {
    title: 'SMART SECURITY',
  },
];

const HeroSection = () => {
  return (
    <div>
      <div className='flex flex-col gap-9'>
        <div className='flex flex-col gap-[24px] lg:gap-9 px-4 lg:px-20 lgl:px-[120px]'>
          <div className='flex flex-col gap-7'>
            <div className='flex flex-col gap-4 mt-20'>
              <h1 className='engYellow font-bold text-[12px] lg:text-[16px] leading-[23px]'>
                SOLTEC ENGINEERING
              </h1>
              <h1 className='text-[32px] lg:text-[64px] font-bold leading-[38px] lg:leading-[77px] text-white'>
                Revolutionizing <br />
                Engineering in Africa
              </h1>
            </div>
            <span className='inter__ max-w-[630px] font-normal text-[14px] lg:text-[20px] leading-[30px] text-white opacity-[0.8]'>
              Our mission is to revolutionize engineering in Africa through
              timely
              <br className='hidden lg:block' />
              innovation, and ultra-modern technology by delivering optimal
              <br className='hidden lg:block' />
              engineering solutions within and across the continent.{' '}
            </span>
          </div>

          <Link
            to={'/get-quote'}
            className='w-[146px] h-12 getQuote gap-4 rounded-[8px]  flex flex-row items-center justify-center text-black'
          >
            <span className=''>GET QUOTE</span>
            <img src={Arrow_Right} alt='' />
          </Link>
        </div>

        <Marquee speed={55}>
          <div className='flex flex-row mt-[30px] lg:mt-10'>
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className='w-[164px] lg:w-[206px] ml-6 offerBg h-[74px] lg:h-[102px] rounded-[2px] py-[17px] px-[29px] flex items-center justify-center'
              >
                <span className='text-white text-[14px] lg:text-[18px] leading-[27px] font-bold '>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
