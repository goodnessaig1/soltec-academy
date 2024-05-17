/* eslint-disable react/prop-types */
import LightGradient from '../../../assets/light-gradient.svg';
import { OverviewNewColumn } from '../../../Utils/Index';

const CourseOverview = ({ courseDetail }) => {
  const overviews = OverviewNewColumn(courseDetail?.overviews);

  return (
    <div className='w-full'>
      <div className='productdesign_container'>
        <div className='flex flex-col lg:flex-row min-h-[669px] lg:h-[417px]  mt-[140px] w-full'>
          <div className='flex-[0.23] flex flex-row items-center justify-center lg:justify-start '>
            <h1 className='font-[600] text-[26px] leading-[32px] text-lightGray2'>
              What you <br />
              will learn <br />
              in <span className='text-[#fff]'>months</span>
            </h1>
            <h1 className='text-[114px] leading-[136px] font-[700] text-[#fff]'>
              3
            </h1>
            <div className='absolute ml-[-134px] mt-[-60px]'>
              <img src={LightGradient} alt='' />
            </div>
          </div>
          <div className='flex-[0.77] mt-[54px] lg:mt-[0] flex flex-col lg:flex-row lg:justify-between items-center rounded-[24px] px-[48px] product_cards'>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-[12px] sm:gap-y-[18px] lg:gap-y-[20px] lg:gap-x-[45px]'>
              {overviews &&
                overviews.map((overview, index) => (
                  <div
                    key={index}
                    className='flex flex-row  gap-[18px] items-center'
                  >
                    <img src={overview?.icon} alt='' />
                    <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                      <h1 className='font-[700] max-w-[320px] break-words '>
                        {overview?.header}
                      </h1>
                      <span className='font-[400] max-w-[320px] break-words'>
                        {overview?.body}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
