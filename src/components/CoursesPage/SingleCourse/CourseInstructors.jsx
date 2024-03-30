/* eslint-disable react/prop-types */
import Text from '../../../assets/Instructors-text.svg';
import Instructor from '../../../assets/instructor.png';

const CourseInstructors = ({ courseDetail }) => {
  console.log(courseDetail);
  const instructors = courseDetail?.instructors;
  return (
    <div className='w-full'>
      <div className='flex flex-col px-[16px] pt-[80px] pb-[260px] items-center gap-[48px] justify-center text-[#fff]'>
        <img src={Text} className='sm:w-[216px] lg:w-[323px]' alt='' />
        <div className='flex flex-row gap-[12px] lg:gap-[37px]'>
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className='flex flex-col  w-[166px] lg:w-[368px] instructor  h-[225px] lg:h-[432px] rounded-[20px] items-center  '
            >
              <img
                src={Instructor}
                className='brrr w-[166px] lg:w-[368px]  h-[160px] lg:h-[432px]'
                alt=''
              />

              <div className='font-[700] text-[14px] lg:text-[24px] leading-[28px] mt-[2px] lg:mt-[2px] mb-[6px] text-[#fff]'>
                {instructor?.name}
              </div>
              <p className='font-[400] sm:text-[12px] text-center lg:text-[16px] leading-[20px] mb-[10px] text-opacityWhite'>
                {instructor?.proffession}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInstructors;
