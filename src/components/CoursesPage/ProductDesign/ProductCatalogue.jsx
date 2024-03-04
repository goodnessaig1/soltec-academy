import LightGradient from '../../../assets/light-gradient.svg';
import RedCheck from '../../../assets/red-check.svg';
import BlueCheck from '../../../assets/blue-check.svg';
import YellowCheck from '../../../assets/yellow-check.svg';

const ProductCatalogue = () => {
  return (
    <div className='w-full'>
      <div className='productdesign_container'>
        <div className='flex flex-col lg:flex-row h-[669px] lg:h-[417px]  mt-[140px] w-full'>
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
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={RedCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>User Experience Fundamentals </h1>
                  <span className='font-[400]'>
                    Design Thinking, Sketching, Prototyping
                  </span>
                </div>
              </div>
              <div className='flex flex-row  gap-[18px] items-center'>
                <img src={RedCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>Responsive Web Design</h1>
                  <span className='font-[400]'>
                    Grids and Breakpoints, Multiplatform Design
                  </span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={BlueCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>
                    Information Architecture and Wireframing
                  </h1>
                  <span className='font-[400]'>Sketch, IA, Task Flows</span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={BlueCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>User Experience Fundamentals</h1>
                  <span className='font-[400]'>
                    Design Thinking, Sketching, Prototyping
                  </span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={YellowCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>User Interface Design</h1>
                  <span className='font-[400]'>
                    Design Patterns, Typography, Colour
                  </span>
                </div>
              </div>
              <div className='flex flex-row gap-[18px] items-center'>
                <img src={YellowCheck} alt='' />
                <div className='flex flex-col text-[14px] text-[#fff] leading-[21px]'>
                  <h1 className='font-[700] '>Develop Functional Prototypes</h1>
                  <span className='font-[400]'>
                    Assemble and share clickable wireframes.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
