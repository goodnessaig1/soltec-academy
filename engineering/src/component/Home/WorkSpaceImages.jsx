import {
  First,
  Second,
  Fourth,
  Shorts1,
  Shorts2,
  Shorts3,
} from '../../Utils/assets';

const WorkSpaceImages = () => {
  return (
    <div className='lg:h-[461px]  flex flex-col mdl:flex-row gap-4 mdl:gap-8 items-center justify-center'>
      <div className='flex w-[312px] mdl:w-auto flex-col gap-6'>
        <div className='flex flex-row gap-5 lg:gap-8'>
          <img
            src={First}
            className='w-[46.5%] h-[130px] rounded-[30px] lg:rounded-[35px] lg:h-[146px] lgl:h-[177px] '
            alt=''
          />
          <img
            src={Second}
            className='w-[46.5%] h-[130px] rounded-[30px] lg:rounded-[35px] lg:h-[146px] lgl:h-[177px]'
            alt=''
          />
        </div>
        <div className='hidden lg:flex flex-row gap-5'>
          <img
            src={Shorts2}
            className='w-[48%] rounded-[35px] h-[146px] lgl:h-[177px]'
            alt=''
          />
          <img
            src={Fourth}
            className='w-[48%] rounded-[30px] lg:rounded-[35px] h-[146px] lgl:h-[177px] '
            alt=''
          />
        </div>
        <div className='block lg:hidden'>
          <img
            src={Shorts1}
            className='w-[312px] mdl:w-[366px] rounded-[24px] lg:rounded-[35px] h-[160px] xl:h-[350px] xl:w-[596px]'
            alt=''
          />
        </div>
      </div>
      <div className='lgl:h-[378px] '>
        <img
          src={Shorts3}
          className='w-[312px] lgl:w-[461px] rounded-[24px] mdl:rounded-[32px] h-[300px] lgl:h-[378px]'
          alt=''
        />
      </div>
    </div>
  );
};

export default WorkSpaceImages;
