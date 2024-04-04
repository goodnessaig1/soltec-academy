/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
// import Next from '../../../assets/next-vector-white.svg';
import { GrFormNextLink } from 'react-icons/gr';

const CourseEnroll = ({ courseDetail }) => {
  return (
    <div
      style={{ background: courseDetail?.color_code }}
      className='background-image3 h-[416px] w-full'
    >
      <div className='w-full gap-[32px] h-full items-center justify-center flex flex-col'>
        <h1 className='barlow-semi condensed-black text-white  sm:text-[24px] lg:text-[32px]  font-[700px] leading-[48px] text-center '>
          Ready to begin your
          <span className=' font-[700]'>
            {' '}
            <br className='lg:hidden' />
            {courseDetail?.title}
          </span>{' '}
          <br className='hidden lg:block' />
          journey?
        </h1>
        <Link
          style={{
            // background: courseDetail?.color_code,
            boxShadow: `box-shadow: 0px 10px 50px 0px #E79A2766;
`,
          }}
          to={`/courses/${courseDetail?.id}/${courseDetail?.title}/payment`}
          className='w-[221px] h-[56px] hover:bg-white hover:text-[#000] text-white  transition duration-300 border border-white border-[2px] rounded-[16px] flex flex-row items-center justify-center gap-[8px] '
        >
          <span className='text-[16px] font-[600] leading-[24px]'>
            Enroll now
          </span>
          <GrFormNextLink size={24} />
          {/* <img src={Next} className='mt-[4px]' alt='' /> */}
        </Link>
      </div>
    </div>
  );
};

export default CourseEnroll;
