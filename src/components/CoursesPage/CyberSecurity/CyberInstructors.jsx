import Text from '../../../assets/Instructors-text.svg';
import Instructor from '../../../assets/instructor.png';
// import Instructor1 from '../../../assets/instructor1.jpg';

const CyberInstructors = () => {
  return (
    <div className='w-full sm:mt-[230px] md:mt-[100px] lg:mt-0'>
      <div className='flex flex-col px-[16px] pb-[200px] items-center gap-[48px] justify-center text-[#fff]'>
        <img src={Text} className='sm:w-[216px] lg:w-[323px] ' alt='' />
        <div className='flex flex-row gap-[12px] lg:gap-[37px]'>
          <div className='flex flex-col w-[166px] lg:w-[368px] instructor  h-[225px] lg:h-[432px] rounded-[20px] items-center  '>
            <img
              src={Instructor}
              className='brrr w-[166px] lg:w-[368px]  h-[160px] lg:h-[432px]'
              alt=''
            />

            <div className='font-[700] text-[14px] lg:text-[24px] leading-[28px] mt-[2px] lg:mt-[10px] mb-[4px] text-[#fff]'>
              James Bond
            </div>
            <p className='font-[400] sm:text-[12px] text-center lg:text-[16px] leading-[20px] mb-[12px] text-opacityWhite'>
              UI/UX Designer and Framer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberInstructors;
