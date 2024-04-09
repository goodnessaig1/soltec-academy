import { Codes, Meet } from '../../../Utils/Assets';
import Video from '../../../assets/video-svg.svg';
import Office from '../../../assets/office.png';
import { Link } from 'react-router-dom';

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
        <div className='lg:h-[461px]  flex flex-col mdl:flex-row gap-[24px] mdl:gap-[12px] items-center justify-center'>
          <div className='flex w-[320px] mdl:w-auto flex-col gap-[13px]'>
            <div className='flex flex-row gap-[13px]'>
              <img
                src={Codes}
                className='w-[48%] h-[130px] lg:h-[146px] lgl:h-[183px] '
                alt=''
              />
              <img
                src={Meet}
                className='w-[48%] h-[130px] lg:h-[146px] lgl:h-[183px]'
                alt=''
              />
            </div>
            <div className='hidden lg:flex flex-row gap-[13px]'>
              <img
                src={Meet}
                className='w-[48%] h-[146px] lgl:h-[183px]'
                alt=''
              />
              <img
                src={Codes}
                className='w-[48%] h-[146px] lgl:h-[183px] '
                alt=''
              />
            </div>
            <div className='block lg:hidden'>
              <img
                src={Office}
                className='w-[320px] mdl:w-[366px] rounded-[35px] h-[160px] xl:h-[350px] xl:w-[596px]'
                alt=''
              />
            </div>
          </div>
          <div className='lgl:h-[378px] '>
            <img
              src={Video}
              className='lgl:w-[461px] h-[300px] lgl:h-[378px]'
              alt=''
            />
          </div>
        </div>
        <Link to={'/book-workspace'}>
          <button className='bg-white hover:bg-[#E4E4E4] transition duration-300 ease-in-out seeMore h-[48px] w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-[700] leading-[17px] '>
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Workspace;
