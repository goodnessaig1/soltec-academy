/* eslint-disable react/prop-types */
import Next from '../../../assets/next-vector-white.svg';
import { Link } from 'react-router-dom';
import CustomSvg, { hexToRGBA } from '../../../Utils/Index';
import Header from '../../common/Header';

const CourseHero = ({ courseDetail }) => {
  const CourseTitle = ({ title }) => {
    const hasSpace = title.includes(' ');
    const [firstIndex, secondIndex] = hasSpace ? title.split(' ') : [title, ''];
    return (
      <>
        {hasSpace ? (
          <>
            {title.length > 18 ? (
              <h1 className='text-[40px]  text-center text-nowrap lg:text-[92px] text-white font-bold leading-[48px] lg:leading-[116px]'>
                {firstIndex} <br className=' mdl:hidden' />
                <span style={{ color: courseDetail?.color_code }} className=''>
                  {secondIndex}
                </span>
              </h1>
            ) : (
              <h1 className='text-[40px] text-nowrap lg:text-[92px] text-white font-bold leading-[48px] lg:leading-[116px]'>
                {firstIndex}{' '}
                <span style={{ color: courseDetail?.color_code }} className=''>
                  {secondIndex}
                </span>
              </h1>
            )}
          </>
        ) : (
          <h1 className='text-[40px] lg:text-[92px] text-white font-bold leading-[48px] lg:leading-[116px]'>
            {title}
          </h1>
        )}
      </>
    );
  };
  const boxShadowStyle = `0px 10px 50px 0px ${courseDetail?.color_code}0.5`;

  return (
    <div
      style={{
        background: 'rgba(2, 2, 15, 0.7)',
        backgroundBlendMode: 'darken',
        backgroundImage: `url(${courseDetail?.background_image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className='courseBg h-[565px] lg:h-[810px] w-full'
    >
      <Header headerCol={true} />
      <div className='absolute ml-[-160px] top-0 left-0 w-full flex lg:items-center lg:justify-center'>
        <CustomSvg fillColor={courseDetail?.color_code} />
      </div>
      <div className='sm:px-4 lg:px-[120px] flex flex-col'>
        <div className='flex flex-col mt-[120px] lg:mt-[140px] gap-10 items-center justify-center'>
          <CourseTitle title={courseDetail?.title} />
          <Link
            style={{
              background: courseDetail?.color_code,
              // boxShadow: `0px 10px 50px 0px ${hexToRGBA(
              //   courseDetail?.color_code,
              //   0.5,
              // )}`,
              // boxShadow: boxShadowStyle,
            }}
            to={`/courses/${courseDetail?.id}/${courseDetail?.title}/payment`}
            className='flex flex-row startLear hover:opacity-[0.9] transition duration-300 rounded-2xl w-[183px] lg:w-[221px] h-14 px-4 py-2 gap-4 items-center justify-center'
          >
            <span className='text-[16px] text-white font-semibold leading-[24px]'>
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
