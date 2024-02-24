import Product from '../../assets/product.png';
import Tutor from '../../assets/tutor-icon.svg';
import Industry from '../../assets/industry-icon.svg';
import Facilities from '../../assets/stroke.svg';
import People from '../../assets/people.svg';

const Catalogue = () => {
  return (
    <>
      <div className=' w-full backgroundImages2 sm:h-[2116px] lg:h-[1563px]'>
        <div className='flex  items-center  justify-center'>
          <div className=' '>
            <div className=' '>
              <div className='flex flex-col pt-[166px] sm:px-[16px] items-center'>
                <div className='sm:p-[16px] lg:p-[32px]  productBg  flex sm:flex-col lg:flex-row gap-[48px] rounded-[48px] '>
                  <div className='flex w-full'>
                    <span className='absolute ml-[30px] mt-[20px] text-[20px] text-[#fff] leading-[24px] '>
                      PRODUCT DESIGN
                    </span>
                    <div className='sm:flex lg:block sm:w-full justify-center items-center '>
                      <img
                        src={Product}
                        className='rounded-[48px] sm:w-full lg:w-[470px]  '
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex flex-col gap-[14px]  lg:justify-between'>
                    <span className='font-[400] text-[15px] leading-[24px] text-lightcol text-nowrap '>
                      Dive into the exciting world of Product Design{' '}
                      <br className='sm:flex lg:hidden' />
                      with our
                      <br className='sm:hidden lg:flex' />
                      comprehensive course! From
                      <br className='sm:flex lg:hidden' />
                      ideation to prototyping,
                      <br className='sm:hidden lg:flex' />
                      discover the principles
                      <br className='sm:flex lg:hidden' />
                      and tools used by industry experts.
                      <br className='sm:hidden lg:flex' />
                      Perfect for <br className='sm:flex lg:hidden' />
                      beginners and aspiring designers, this course
                      <br />
                      blends theory with hands-on project...
                    </span>
                    <h2 className='font-[700] text-[16px] leading-[20px] text-lightcol'>
                      You will learn:
                    </h2>

                    <ul className=' ml-[16px] list-disc text-[#fff] text-[16px] leading-[24px] font-[400]'>
                      <li>The theories of design</li>
                      <li>Wireframing</li>
                      <li>Basic UX process</li>
                      <li>Prototyping</li>
                      <li>Design thinking</li>
                    </ul>
                    <div className=' sm:mt-[14px] lg:mt-[0px] lg:w-[186px] h-[48px] rounded-[50px] flex items-center justify-center bg-[#fff] text-[#000] '>
                      <span>See more</span>
                    </div>
                  </div>
                </div>
                <div className='mt-[48px] sm:px-[6px] lg:px-[0px] sm:grid sm:grid-cols-2   gap-y-[24px] gap-x-[16px]  lg:flex lg:flex-row lg:gap-[61px]  '>
                  <span className='text-[#fff] transition duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'>
                    PRODUCT DESIGN
                  </span>
                  <span className='text-[#fff] transition duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'>
                    FRONTEND WEB DEV
                  </span>
                  <span className='text-[#fff] transition duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'>
                    BACKEND WEB DEV
                  </span>
                  <span className='text-[#fff] transition duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'>
                    DATA ANALYSIS
                  </span>
                  <span className='text-[#fff] transition duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'>
                    MOBILE APP DESIGN
                  </span>
                  <span className='text-[#fff] transition duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'>
                    DEVOPS
                  </span>
                  <span className='text-[#fff] sm:flex lg:hidden text-nowrap transition duration-200 leading-[24px] font-[700px] hover:text-mainyellow hover:cursor-pointer'>
                    BLOCKCHAIN DEVELOPMENT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='wave-line'>
          <div className=' lg:mt-[150px] sm:px-[16px] lg:px-[0px] w-full flex items-center justify-center '>
            <div className=' flex  sm:flex-col sm:mt-[250px] lg:mt-[0px] lg:flex-row lg:w-[1200px] xll:mt-[120px] h-[487px] items-center justify-center '>
              <div className='sm:f-full sm:mt-[320px] lg:mt-[0px] lg:w-1/2 flex flex-row items-center  mt-[16px] '>
                <h1 className='text-[#fff]  sm:text-[48px] lg:text-[64px] sm:leading-[58px] lg:leading-[76px] font-[700] '>
                  Learn in <br />
                  months
                </h1>
                <h1 className='sm:text-[200px] lg:text-[280px] sm:leading-[240px] lg:leading-[337px] text-colorOpacity font-[700]'>
                  3
                </h1>
              </div>
              <div className='sm:w-full sm:mt-[60px] lg:mt-[0px] lg:w-1/2 flex flex-col gap-[14px]  '>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={Tutor} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg:leading-[28px] text-[#fff] group-hover:text-[#000]'>
                      Experienced Tutors
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[116px] flex items-center justify-center rounded-[16px] '>
                    <img src={Industry} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-[#fff] group-hover:text-[#000] '>
                      Industry Standard Curriculum
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Stay ahead in the field with a curriculum designed to
                      align with current industry trends and demands.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={Facilities} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-[#fff] group-hover:text-[#000] '>
                      State-of-the-Art Facilities
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB'>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
                <div className='bg-colorOpacity hover:bg-[#fff] group hover:cursor-pointer transition duration-[200] p-[12px] flex flex-row items-center gap-[24px] rounded-[24px] '>
                  <div className='bg-[#fff] sm:px-[16px] lg:px-[20px] h-[87px] w-[106px] flex items-center justify-center rounded-[16px] '>
                    <img src={People} alt='' />
                  </div>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='font-[700] sm:text-[18px] lg:text-[24px] sm:leading-[21px] lg: text-[#fff] group-hover:text-[#000] '>
                      Networking Opportunities:
                    </h1>
                    <span className='text-[#fff] font-[400] sm:text-[14px] lg:text-[16px] sm:leading-[21px] lg:leading-[24px] group-hover:text-lightB '>
                      Benefit from the guidance of seasoned professionals with a
                      wealth of industry experience.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogue;
