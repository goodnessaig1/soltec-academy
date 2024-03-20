import Codes from '../../assets/codes.png';
import Meet from '../../assets/meet.png';
import Office from '../../assets/office.png';
import Video from '../../assets/video-svg.svg';
const Shots = () => {
  return (
    <div className='bg-extraGray py-[100px] md:py-[130px] px-[16px] md:px-[70px] w-full'>
      <div className='w-full flex flex-col gap-[80px] items-center justify-center'>
        <div className='flex flex-col gap-[16px] items-center justify-center'>
          <h1 className='font-[700] text-[32px] leading-[38px]'>SHOTS</h1>
          <div className='redLine' />
        </div>
        <div className='w-full flex flex-row gap-[16px] '>
          <div className='w-1/2 flex gap-[8px] md:gap-[16px] flex-col'>
            <div className='flex w-full flex-row gap-[8px] md:gap-[16px]'>
              <img src={Codes} className='w-[49%]' alt='' />
              <img src={Meet} className='w-[48%]' alt='' />
            </div>
            <div className=''>
              <img src={Office} alt='' />
            </div>
          </div>
          <div className='w-1/2'>
            <img src={Video} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shots;
