import { Link } from 'react-router-dom';
import WorkSpaceImages from './WorkSpaceImages';

const Workspace = () => {
  return (
    <div className=' w-full flex flex-col pt-[100px] pb-[130px] w-full'>
      <div className='flex flex-col items-center justify-center w-full px-[16px] gap-[31px]'>
        <div className='flex flex-col gap-[12px] items-center justify-center'>
          <h1 className='text-[#fff] font-[600] text-[24px] leading-[34px]'>
            OUR WORKSPACE
          </h1>
          <div className='whiteLine' />
        </div>
        <span className='text-[18px] font-[500] leading-[26px] text-center px-[16px] text-lightOpac'>
          Have access to our conducive workspace with unlimited internet using
          Elon Musk’s starlink and uninterrupted power{' '}
          <br className='hidden lg:block' />
          supply courtesy of solar at an affordable fee. It’s free for those who
          have registered to take courses.
        </span>
        <WorkSpaceImages />
        <Link to={'/academy/book-workspace'}>
          <button className='bg-white hover:bg-[#E4E4E4] transition duration-300 ease-in-out seeMore h-[48px] w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-[700] leading-[17px] '>
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Workspace;
