/* eslint-disable react/prop-types */
import Next from '../../../assets/next-vector-white.svg';
import { Link } from 'react-router-dom';
import { EllipseSvg, hexToRGBA } from '../../../Utils/Index';
import Header from '../../Header/Header';

const CourseHero = ({ courseDetail }) => {
  const CourseTitle = ({ title }) => {
    const hasSpace = title.includes(' ');
    const [firstIndex, secondIndex] = hasSpace ? title.split(' ') : [title, ''];
    return (
      <>
        {hasSpace ? (
          <h1 className='text-[40px] text-nowrap lg:text-[92px] text-[#fff] font-[700] leading-[48px] lg:leading-[116px]'>
            {firstIndex}{' '}
            <span style={{ color: courseDetail?.color_code }} className=''>
              {secondIndex}
            </span>
          </h1>
        ) : (
          <h1 className='text-[40px] lg:text-[92px] text-[#fff] font-[700] leading-[48px] lg:leading-[116px]'>
            {title}
          </h1>
        )}
      </>
    );
  };

  return (
    <div
      style={{
        background: 'rgba(2, 2, 15, 0.7)',
        backgroundBlendMode: 'darken',
        backgroundImage: `url(${courseDetail?.background_image})`,
      }}
      className='courseBg h-[565px] lg:h-[810px] w-full'
    >
      <Header headerCol={true} />
      <div className='absolute ml-[-20px] top-0 left-0 w-full flex lg:items-center lg:justify-center '>
        <EllipseSvg color={courseDetail?.color_code} />
      </div>
      <div className='sm:px-[16px] lg:px-[120px] flex flex-col'>
        <div className='flex flex-col mt-[120px] lg:mt-[140px] gap-[39px] items-center justify-center'>
          <CourseTitle title={courseDetail?.title} />
          <Link
            style={{
              background: courseDetail?.color_code,
              boxShadow: `0px 10px 50px 0px ${hexToRGBA(
                courseDetail?.color_code,
                0.5,
              )}`,
            }}
            to={`/courses/${courseDetail?.id}/${courseDetail?.title}/payment`}
            className='flex flex-row startLear hover:opacity-[0.9] transition duration-[300] rounded-[16px] w-[183px] lg:w-[221px] h-[56px] px-[16px] py-[8px] gap-[8px] items-center justify-center'
          >
            <span className='text-[16px] text-white font-[600] leading-[24px]'>
              Start learning
            </span>
            <img src={Next} className='mt-[6px]' alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
