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
    <div className='lg:h-[461px]  flex flex-col mdl:flex-row gap-4 mdl:gap-8 lg:gap-6 items-center justify-center'>
      <div className='flex w-[312px] mdl:w-auto lg:w-[450px] lgl:w-[500px] flex-col gap-4 lgl:gap-6'>
        <div className='flex flex-row gap-5 lgl:gap-6'>
          <img
            src={First}
            className='w-[46.5%] object-cover h-[130px] rounded-3xl lg:h-[146px] lgl:h-[172px] '
            alt=''
          />
          <img
            src={Second}
            className='w-[46.5%] object-cover h-[130px] rounded-3xl lg:h-[146px] lgl:h-[172px]'
            alt=''
          />
        </div>
        <div className='hidden lg:flex flex-row gap-5 lgl:gap-6'>
          <img
            src={Shorts2}
            className='w-[46.5%] object-cover rounded-3xl h-[146px] lgl:h-[172px]'
            alt=''
          />
          <img
            src={Shorts3}
            className='w-[46.5%] object-cover rounded-3xl h-[146px] lgl:h-[172px] '
            alt=''
          />
        </div>
        <div className='block lg:hidden'>
          <img
            src={Shorts1}
            className='w-[312px] object-cover  mdl:w-[366px] rounded-[24px] h-[160px] xl:h-[350px] xl:w-[596px]'
            alt=''
          />
        </div>
      </div>
      <div className='lgl:h-[378px] '>
        <img
          src={Fourth}
          className='w-[312px] object-cover lgl:w-[461px] rounded-[24px] h-[300px] lgl:h-[378px]'
          alt=''
        />
      </div>
    </div>
  );
};

export default WorkSpaceImages;
