import { Shorts1, Shorts2, Shorts3, Shorts4 } from '../../Utils/Assets';

const Shots = () => {
  return (
    <div className='bg-extraGray py-[100px] md:py-[130px] px-4 md:px-[70px] w-full'>
      <div className='w-full flex flex-col gap-40 items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className='font-bold text-[32px] leading-[38px]'>SHOTS</h1>
          <div className='redLine' />
        </div>
        <div className='w-full justify-center items-center  flex-col flex lg:flex-row gap-4 '>
          <div className='w-[80%]  lg:w-1/2 max-w-[661px] flex gap-4 md:gap-4 flex-col'>
            <div className='flex w-full flex-row gap-4 md:gap-4'>
              <img
                src={Shorts1}
                className='w-[49%] rounded-[42px] lg:h-[170px] xl:h-[234px] '
                alt=''
              />
              <img
                src={Shorts2}
                className='w-[48%] rounded-[42px] lg:h-[170px] xl:h-[234px] '
                alt=''
              />
            </div>
            <div className=''>
              <img
                src={Shorts3}
                className='lg:h-[240px] rounded-[42px] w-full xl:h-[350px]'
                alt=''
              />
            </div>
          </div>
          <div className='w-[80%] max-w-[661px] lg:w-1/2'>
            <img
              src={Shorts4}
              className='lg:h-[430px] rounded-[42px] xl:h-[599px]'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shots;
