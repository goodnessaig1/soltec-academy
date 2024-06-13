import { Link } from 'react-router-dom';
import Arrow_Right from '../../../assets/keyboard-arrow-right.svg';
import Marquee from 'react-fast-marquee';

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
      <div className='flex flex-col gap-[36px]'>
        <div className='flex flex-col gap-[24px] lg:gap-[36px] px-[16px] lg:px-[80px] lgl:px-[120px]'>
          <div className='flex flex-col gap-[28px]'>
            <div className='flex flex-col gap-[8px] mt-[80px]'>
              <h1 className='engYellow font-[700] text-[12px] lg:text-[16px] leading-[23px]'>
                SOLTEC ENGINEERING
              </h1>
              <h1 className='text-[32px] lg:text-[64px] font-[700] leading-[38px] lg:leading-[77px] text-[#fff]'>
                Revolutionizing <br />
                Engineering in Africa
              </h1>
            </div>
            <span className='inter__ max-w-[630px] font-[400] text-[14px] lg:text-[20px] leading-[30px] text-white opacity-[0.8]'>
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
            className='w-[146px] h-[48px] getQuote gap-[8px] rounded-[8px]  flex flex-row items-center justify-center'
          >
            <span className=''>GET QUOTE</span>
            <img src={Arrow_Right} alt='' />
          </Link>
        </div>

        <Marquee speed={55}>
          <div className='flex flex-row mt-[30px] lg:mt-[40px]'>
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className='w-[164px] lg:w-[206px] ml-[25px] offerBg h-[74px] lg:h-[102px] rounded-[2px] py-[17px] px-[29px] flex items-center justify-center'
              >
                <span className='text-[#fff] text-[14px] lg:text-[18px] leading-[27px] font-[700] '>
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
