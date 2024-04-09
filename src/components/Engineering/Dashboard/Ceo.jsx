import In from '../../../assets/linke.svg';
import X from '../../../assets/twitter.svg';
const Ceo = () => {
  return (
    <div className='w-full lg:h-[534px] flex flex-col lg:flex-row'>
      <div className='w-full lg:w-1/2 h-[380px] lg:h-full ceo'>
        <div className='h-full flex  flex-col justify-end '>
          <div className='flex flex-row justify-end mr-[23px]'>
            <div className='w-[323px] lg:w-[391px] hover:cursor-pointer transition duration-300 bg-whiteW h-[86px] ml-[23px] mb-[23px] gap-[32px] lg:gap-[53px] flex flex-row items-center  justify-center rounded-[6px] bg-white'>
              <div className='flex flex-col'>
                <h1 className='font-[700] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]'>
                  ENGR. OPURUM EMMANUEL
                </h1>
                <span className='font-[400] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]'>
                  MD/CEO
                </span>
              </div>
              <div className='flex flex-row gap-[20px]'>
                <img src={In} alt='' />
                <img src={X} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-1/2 ceoBg xl:px-[120px] px-[16px] py-[32px] lg:px-[68px] lg:py-[54px] xl:py-[84px] h-full flex flex-col gap-[26px]'>
        <h1 className='font-[700] text-[18px] md:text-[24px] leading-[29px] text-white'>
          ABOUT OUR CEO
        </h1>
        <span className='text-[14px] md:text-[18px] font-[400] inter__ leading-[28px] md:leading-[36px] text-[#9DA1A7]'>
          Engr. Opurum Emmanuel is a Computer and Electronics Engineer, Server
          administrator, software developer, digital marketer and ethical
          hacker. He is also a certified Cisco Network Administrator, robotics
          engineer, blockchain developer and cyber security expert. As a
          creative thinker and innovator, he has been creating solutions to the
          challenges of Nigeria and other developing regions across Africa
          through various innovative technologies.
        </span>
      </div>
    </div>
  );
};

export default Ceo;
