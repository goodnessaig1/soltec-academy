import { Codes, Meet } from '../../../Utils/Assets';
import Video from '../../../assets/video-svg.svg';

const Workspace = () => {
  return (
    <div className=' w-full flex flex-col pt-[100px] pb-[130px] w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-[31px]'>
        <div className='flex flex-col gap-[12px] items-center justify-center'>
          <h1 className='text-[#fff] font-[600] text-[24px] leading-[34px]'>
            OUR WORKSPACE
          </h1>
          <div className='whiteLine' />
        </div>
        <span className='text-[18px] font-[500] leading-[26px] text-center text-lightOpac'>
          Have access to our conducive workspace with unlimited internet using
          Elon Musk’s starlink and uninterrupted power <br />
          supply courtesy of solar at an affordable fee. It’s free for those who
          have registered to take courses.
        </span>
        <div className='h-[461px] flex flex-row gap-[12px] items-center justify-center'>
          <div className='flex flex-col gap-[13px]'>
            <div className='flex flex-row gap-[13px]'>
              <img src={Codes} className='w-[48%] h-[183px] ' alt='' />
              <img src={Meet} className='w-[48%] h-[183px]' alt='' />
            </div>
            <div className='flex flex-row gap-[13px]'>
              <img src={Meet} className='w-[48%] h-[183px]' alt='' />
              <img src={Codes} className='w-[48%] h-[183px] ' alt='' />
            </div>
          </div>
          <div className='h-[378px] '>
            <img src={Video} className='w-[461px] h-[378px]' alt='' />
          </div>
        </div>
        <button className='bg-white seeMore h-[48px] w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-[700] leading-[17px] '>
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default Workspace;
