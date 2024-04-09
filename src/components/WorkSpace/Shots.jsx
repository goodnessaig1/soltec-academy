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
        <div className='w-full justify-center items-center  flex-col flex lg:flex-row gap-[16px] '>
          <div className='w-[80%]  lg:w-1/2 max-w-[661px] flex gap-[8px] md:gap-[16px] flex-col'>
            <div className='flex w-full flex-row gap-[8px] md:gap-[16px]'>
              <img
                src={Codes}
                className='w-[49%] lg:h-[170px] xl:h-[234px] '
                alt=''
              />
              <img
                src={Meet}
                className='w-[48%] lg:h-[170px] xl:h-[234px] '
                alt=''
              />
            </div>
            <div className=''>
              <img
                src={Office}
                className='lg:h-[240px] w-full xl:h-[350px]'
                alt=''
              />
            </div>
          </div>
          <div className='w-[80%] max-w-[661px] lg:w-1/2'>
            <img src={Video} className='lg:h-[430px] xl:h-[599px]' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shots;
