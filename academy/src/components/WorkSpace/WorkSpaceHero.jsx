import { NextArrow } from '../../Utils/Assets';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import { useAuth } from '../Context/AuthContext';
import { Oval } from 'react-loader-spinner';

const WorkSpaceHero = () => {
  const { slotsLoading, availableSeats } = useAuth();
  return (
    <div className='workSpaceBg h-[810px]'>
      <Header headerCol={true} />
      <div className='w-full workSp flex items-center flex-col justify-center'>
        <div className='flex flex-col items-center mt-[150px] md:mt-[200px] '>
          <h1 className='font-bold text-[32px] lg:text-[96px] text-white leading-[117px] '>
            Book a <span className='text-yello2'>workspace</span>
          </h1>
          <Link
            to={'/book-workspace/bookspace'}
            className='flex mt-11 font-semibold text-[16px] leading-[24px] items-center justify-center gap-4 rounded-[16px]  h-14 w-[221px] bookSp '
          >
            <span className=''>BOOK A SPACE NOW</span>
            <img src={NextArrow} alt='' />
          </Link>
          <div className=' px-6 mt-[60px] flex flex-row gap-[13px] col items-center justify-center text-white'>
            {!slotsLoading ? (
              <h1 className='text-[96px] font-[800] leading-[115.2px]'>
                {availableSeats ? availableSeats : 4}
              </h1>
            ) : (
              <div className='w-10 h-32 flex items-center justify-center'>
                <Oval
                  visible={true}
                  height='50'
                  width='50'
                  color='white'
                  secondaryColor='#f3f3f3'
                  ariaLabel='oval-loading'
                  wrapperStyle={{}}
                  wrapperClass=''
                />
              </div>
            )}
            <span className='text-[24px] leading-[28px] font-semibold'>
              SLOTS <br />
              REMAINING
            </span>
          </div>
          <div className='text-[14px] text-center lg:text-[16px] text-opacityWhite mt-[60px] text-white font-bold eading-[20px]'>
            Available Monday through Saturday, 8:30AM till 6:00PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceHero;
