import {
  First,
  Fourth,
  Second,
  Shorts1,
  Shorts2,
  Shorts3,
} from '../../../Utils/Assets';

const WorkSpaceImages = () => {
  return (
    <div className='lg:h-[461px]  flex flex-col mdl:flex-row gap-[24px] mdl:gap-[12px] items-center justify-center'>
      <div className='flex w-[320px] mdl:w-auto flex-col gap-[13px]'>
        <div className='flex flex-row gap-[13px]'>
          <img
            src={First}
            className='w-[48%] h-[130px] rounded-[35px] lg:h-[146px] lgl:h-[183px] '
            alt=''
          />
          <img
            src={Second}
            className='w-[48%] h-[130px] rounded-[35px] lg:h-[146px] lgl:h-[183px]'
            alt=''
          />
        </div>
        <div className='hidden lg:flex flex-row gap-[13px]'>
          <img
            src={Shorts2}
            className='w-[48%] rounded-[35px] h-[146px] lgl:h-[183px]'
            alt=''
          />
          <img
            src={Fourth}
            className='w-[48%] rounded-[35px] h-[146px] lgl:h-[183px] '
            alt=''
          />
        </div>
        <div className='block lg:hidden'>
          <img
            src={Shorts1}
            className='w-[320px] mdl:w-[366px] rounded-[42px] h-[160px] xl:h-[350px] xl:w-[596px]'
            alt=''
          />
        </div>
      </div>
      <div className='lgl:h-[378px] '>
        <img
          src={Shorts3}
          className='w-[343px] lgl:w-[461px] rounded-[42px] h-[300px] lgl:h-[378px]'
          alt=''
        />
      </div>
    </div>
  );
};

export default WorkSpaceImages;
