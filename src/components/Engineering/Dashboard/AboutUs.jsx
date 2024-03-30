import GoodIcon from '../../../assets/y-good.svg';
import Whatsapp from '../../../assets/whatsapp.svg';

const AboutUs = () => {
  return (
    <div className='w-full h-[707px] flex flex-row'>
      <div className='w-1/2 px-[120px] py-[84px] flex flex-col gap-[48px] aboutBg h-full'>
        <div className='flex flex-col gap-[26px]'>
          <h1 className='font-[700] text-[24px] leading-[30px] text-white'>
            ABOUT US
          </h1>
          <span className='font-[400] inter__ text-[18px] leading-[36px] text-higherCol'>
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
              <span className='font-[400] inter__ text-[18px] leading-[22px] text-higherCol'>
                Registered Company
              </span>
            </div>
            <div className='flex flex-row gap-[11px]'>
              <img src={GoodIcon} alt='' />
              <span className='font-[400] inter__ text-[18px] leading-[22px] text-higherCol'>
                NSE and COREN certified
              </span>
            </div>
            <div className='flex flex-row gap-[11px]'>
              <img src={GoodIcon} alt='' />
              <span className='font-[400] inter__ text-[18px] leading-[22px] text-higherCol'>
                24/7 customer support
              </span>
            </div>
          </div>

          <h2 className='font-[700] inter__ font-[18px] uppercase leading-[27px] text-higherCol'>
            Our firm is duly registered under the Corporate Affairs Commission
            with RC No. 1865563
          </h2>
        </div>
      </div>
      <div className='w-1/2 aboutR h-full'>
        <div className='h-full flex flex-col justify-end '>
          <div className='w-[270px] hover:cursor-pointer transition duration-300 bg-whiteW h-[86px] ml-[23px] mb-[23px] gap-[24px] flex flex-row items-center justify-center rounded-[6px] bg-white'>
            <img src={Whatsapp} alt='' />
            <div className='flex flex-col'>
              <h1 className='font-[700] text-[20px] leading-[30px]'>
                CONTACT US NOW
              </h1>
              <span className='font-[400] text-[20px] leading-[30px]'>
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
