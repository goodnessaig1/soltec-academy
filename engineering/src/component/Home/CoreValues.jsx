import Safety from '../../assets/safety.svg';
import Quality from '../../assets/quality.svg';
import Integrity from '../../assets/integrity.svg';

const CoreValues = () => {
  return (
    <div className='w-full bg-bg3 flex flex-col items-center px-[120px] pt-[97px] pb-20 lg:pb-[150px] justify-center'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <h1 className='font-semibold text-nowrap text-[24px] leading-[34px]'>
          CORE VALUES
        </h1>
        <div className='yellowLine' />
      </div>

      <div className='flex flex-col lgl:flex-row  items-center justify-center gap-[22px] mt-[60px] lg:mt-[120px]'>
        <div className='valueItem w-[319px] h-[256px] lg:h-[370px] py-[70px] px-[39px] bg-white rounded-[16px] flex flex-col items-center justify-center gap-4'>
          <img src={Safety} alt='' />
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='font-bold text-[24px] leading-[34px]'>Safety</h1>
            <span className='font-normal text-[18px] leading-[25px] text-center text-lightB'>
              Prioritizing the security and well-being of clients and <br />
              staff.
            </span>
          </div>
        </div>
        <div className='valueItem w-[319px] h-[300px] lg:h-[370px] py-[70px] px-[39px] bg-white rounded-[16px] flex flex-col items-center justify-center gap-4'>
          <img src={Quality} alt='' />
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='font-bold text-[24px] leading-[34px]'>Quality</h1>
            <span className='font-normal text-[18px] leading-[25px] text-center text-lightB'>
              Providing excellence in engineering services and <br />
              products.
            </span>
          </div>
        </div>
        <div className='valueItem w-[319px] h-[300px] lg:h-[370px] py-[70px] px-[39px] bg-white rounded-[16px] flex flex-col items-center justify-center gap-4'>
          <img src={Integrity} alt='' />
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='font-bold text-[24px] leading-[34px]'>Integrity</h1>
            <span className='font-normal text-[18px] leading-[25px] text-center text-lightB'>
              Upholding transparency, honesty, and ethical <br />
              practices.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
