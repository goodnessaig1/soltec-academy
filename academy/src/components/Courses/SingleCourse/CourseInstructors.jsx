/* eslint-disable react/prop-types */
import Text from '../../../assets/Instructors-text.svg';

const CourseInstructors = ({ courseDetail }) => {
  const instructors = courseDetail?.instructors;

  return (
    <div className='w-full'>
      <div className='flex flex-col px-4 pt-20 pb-[260px] items-center gap-4 justify-center text-white'>
        <img src={Text} className='sm:w-[216px] lg:w-[323px]' alt='' />
        <div className='flex flex-row gap-3 lg:gap-9'>
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className='flex flex-col  w-[166px] lg:w-[368px] instructor  h-[225px] lg:h-[432px] rounded-[20px] items-center  '
            >
              <div className=''>
                <img
                  src={instructor?.image}
                  className='brrr w-[166px] lg:w-[368px]  h-[160px] object-cover lg:h-[342px]'
                  alt=''
                />
              </div>

              <div className='font-bold text-[14px] lg:text-[24px] leading-[28px] lg:mt-[10px] mb-[6px] text-white'>
                {instructor?.name}
              </div>
              <p className='font-normal sm:text-[12px] text-center lg:text-[16px] leading-[20px] mb-2.5 text-opacityWhite'>
                {instructor?.profession}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInstructors;
