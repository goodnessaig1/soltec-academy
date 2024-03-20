import { NextArrow } from '../../Utils/Assets';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
const WorkSpaceHero = () => {
  return (
    <div className='workSpaceBg h-[810px]'>
      <Header headerCol={true} />
      <div className='w-full workSp flex items-center flex-col justify-center'>
        <div className='flex flex-col items-center mt-[150px] md:mt-[200px] '>
          <h1 className='font-[700] text-[32px] lg:text-[96px] text-[#fff] leading-[117px] '>
            Book a <span className='text-yello2'>workspace</span>
          </h1>
          <Link
            to={'/book-workspace/bookspace'}
            className='flex mt-[44px] font-[600] text-[16px] leading-[24px] items-center justify-center gap-[8px] rounded-[16px]  h-[56px] w-[221px] bookSp '
          >
            <span className=''>BOOK A SPACE NOW</span>
            <img src={NextArrow} alt='' />
          </Link>
          <div className=' mt-[60px] flex flex-row gap-[13px] col items-center justify-center text-[#fff]'>
            <h1 className='text-[96px] font-[800] leading-[115.2px]'>4</h1>
            <span className='text-[24px] leading-[28px] font-[600]'>
              SLOTS <br />
              REMAINING
            </span>
          </div>
          <div className='text-[14px] text-center lg:text-[16px] text-opacityWhite mt-[60px] text-[#fff] font-[700] eading-[20px]'>
            Available Monday through Saturday, 8:30AM till 6:00PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceHero;
