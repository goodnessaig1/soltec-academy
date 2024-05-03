import GoodIcon from '../../../assets/y-good.svg';
import Whatsapp from '../../../assets/whatsapp.svg';

const AboutUs = () => {
  return (
    <div className='w-full md:h-[974px] lg:h-[780px] xl:h-[707px] flex flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 px-[20px] lg:pl-[40px] lg:pr-[60] xl:px-[100px] xll:px-[120px] py-[52px] lg:py-[64px] xlx:py-[64px] flex flex-col gap-[48px] aboutBg h-full'>
        <div className='flex flex-col gap-[26px]'>
          <h1 className='font-[700] text-[18px] lg:text-[24px] leading-[30px] text-white'>
            ABOUT US
          </h1>
          <span className='font-[400] inter__ text-[14px] lg:text-[18px] leading-[36px] text-higherCol'>
            We’re an engineering firm looking to solve critical problems,
            especially the ones facing developing and under developed African
            countries through innovative technology and engineering. <br />
            We are constantly improving and are committed to out-thinking and
            out-executing our competitors. We take on what others dismiss as
            impossible and solve the hard problems that others walk away from.
          </span>
        </div>

        <div className='flex flex-col gap-[39px]'>
          <div className='flex flex-col gap-[18px] '>
            <div className='flex flex-row gap-[11px]'>
              <img src={GoodIcon} alt='' />
              <span className='font-[400] inter__ text-[14px] lg:text-[18px] leading-[22px] text-higherCol'>
                Registered Company
              </span>
            </div>
            <div className='flex flex-row gap-[11px]'>
              <img src={GoodIcon} alt='' />
              <span className='font-[400] inter__ text-[14px] lg:text-[18px] leading-[22px] text-higherCol'>
                NSE and COREN certified
              </span>
            </div>
            <div className='flex flex-row gap-[11px]'>
              <img src={GoodIcon} alt='' />
              <span className='font-[400] inter__ text-[14px] lg:text-[18px] leading-[22px] text-higherCol'>
                24/7 customer support
              </span>
            </div>
          </div>

          <h2 className='font-[700] inter__ text-[14px] lg:text-[18px] uppercase leading-[27px] text-higherCol'>
            Our firm is duly registered under the Corporate Affairs Commission
            with RC No. 1865563
          </h2>
        </div>
      </div>
      <div className='w-full lg:w-1/2 h-[352px] lg:h-full aboutR'>
        <div className=' h-[352px] lg:h-full flex flex-col justify-end '>
          <div className='w-[224px] lg:w-[270px] hover:cursor-pointer transition duration-300 bg-whiteW h-[70px] lg:h-[86px] ml-[23px] mb-[23px] gap-[16px] lg:gap-[24px] flex flex-row items-center justify-center rounded-[6px] bg-white'>
            <img src={Whatsapp} alt='' />
            <div className='flex flex-col'>
              <h1 className='font-[700] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]'>
                CONTACT US NOW
              </h1>
              <span className='font-[400] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]'>
                +234 803 981 4257
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
