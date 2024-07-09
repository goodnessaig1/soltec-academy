import WorkSpaceImages from './WorkSpaceImages';
import { AcademyUrl } from '../../Utils/apiRequest';

const Workspace = () => {
  return (
    <div className=' w-full flex flex-col pt-[100px] pb-[130px] w-full'>
      <div className='flex flex-col items-center justify-center w-full px-4 gap-8'>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='text-white text-nowrap font-semibold text-[24px] leading-[34px]'>
            OUR WORKSPACE
          </h1>
          <div className='whiteLine' />
        </div>
        <span className='text-[18px] font-medium leading-[26px] text-center px-4 text-lightOpac'>
          Have access to our conducive workspace with unlimited internet using
          Elon Musk’s starlink and uninterrupted power{' '}
          <br className='hidden lg:block' />
          supply courtesy of solar at an affordable fee. It’s free for those who
          have registered to take courses.
        </span>
        <WorkSpaceImages />

        <a href={`${AcademyUrl}/book-workspace`} target='_self'>
          <div className='bg-white hover:bg-[#E4E4E4] transition duration-300 ease-in-out seeMore h-12 w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-bold leading-[17px] '>
            SEE MORE
          </div>
        </a>
      </div>
    </div>
  );
};

export default Workspace;
