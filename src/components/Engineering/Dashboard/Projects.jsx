/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import { Next, Prev } from '../../../Utils/Assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={`${className} z-4 previou`} onClick={onClick}>
      <img src={Prev} alt='' />
    </div>
  );
};

const CustomNextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={`${className} nextbtn`} onClick={onClick}>
      <img src={Next} alt='' />
    </div>
  );
};

const Projects = () => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    // centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className=' w-full flex flex-col pt-[100px] pb-[130px] w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-[62px]'>
        <div className='flex flex-col gap-[12px] items-center justify-center'>
          <h1 className='text-[#000] font-[600] text-[24px] leading-[34px]'>
            OUR PROJECTS
          </h1>
          <div className='whiteLine bg-[#000]' />
        </div>
        <span className='text-[18px] font-[500] leading-[26px] text-center text-[#000]'>
          Some awesome projects we’ve worked on with delighted and satisfied
          customers. Reel showing what we’re capable of. Work <br />
          with us today and join our ever growing list of satisfied customers
          who have tasted the quality of our work. Click each project <br />
          to open them in detail in a new page.
        </span>
        <div className='w-full projects  flex items-center justify-center'>
          <div className='slick-container opacity-[1]'>
            <Slider {...settings} className=' opacity-[1]'>
              <div className='w-1/3 p-[56px] hover:cursor-pointer transition curation-300 group flex flex-col gap-[24px] first_bg1 h-[367px]'>
                <div className='w-full py-[12px] mb-[24px] text-white  rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-[600]  leading-[36px]'>
                    POWER AND ENERGY
                  </h1>
                </div>
                <span className='inter__  opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-[500] text-[18px] leading-[27px] text-white '>
                  Solar installation and all kinds of activities, works and
                  services relating to the business of environmentally
                  sustainable energy sources available across Nigeria
                </span>
              </div>
              <div className='w-1/3 p-[56px] hover:cursor-pointer transition curation-300 group flex flex-col gap-[24px] second_bg1 h-[367px]'>
                <div className='w-full py-[12px] mb-[24px] text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-[600] leading-[36px]'>
                    BUILDING AND CONSTRUCTION
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
                  Includes lab or field testing, analysis and monitoring of
                  structures, and building materials such as foundations,
                  drainage systems, pavements, concrete, soils and reinforcing
                  or structural steel.
                </span>
              </div>
              <div className='w-1/3 p-[56px] hover:cursor-pointer transition curation-300 group flex flex-col gap-[24px] third_bg1 h-[367px]'>
                <div className='w-full py-[12px] mb-[24px] text-white  rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-[600] leading-[36px]'>
                    SMART SECURITY
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
                  We provide and install a comprehensive security network that
                  gives you complete protection and control - from anywhere
                </span>
              </div>
              <div className='w-1/3 p-[56px] hover:cursor-pointer transition curation-300 group flex flex-col gap-[24px] fourth_bg1 h-[367px]'>
                <div className='w-full py-[12px] mb-[24px] text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-[600] leading-[36px]'>
                    SOFTWARE DEVELOPMENT
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
                  Plan, design, develop, integrate, test, manage and evolve
                  software solutions. offer end-to-end development that covers
                  everything from business analysis to software delivery and
                  support,
                </span>
              </div>
              <div className='w-1/3 p-[56px] hover:cursor-pointer transition curation-300 group flex flex-col gap-[24px] fifth_bg1 h-[367px]'>
                <div className='w-full py-[12px] mb-[24px]  text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-[600] leading-[36px]'>
                    TEACHING COURSES
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
                  <ul className='list-disc ml-[20px] '>
                    <li>Front, Back and Fullstack Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Product Design</li>
                    <li>Blockchain Development</li>
                    <li>Cybersecurity</li>
                    <li>Game Development</li>
                  </ul>
                </span>
              </div>
              <div className='w-1/3 p-[56px] hover:cursor-pointer transition curation-300 group flex flex-col gap-[24px] sixth_bg1 h-[367px]'>
                <div className='w-full py-[12px] mb-[24px]  text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-[600] leading-[36px]'>
                    ROBOTICS AND AUTOMATION
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
                  All kinds of activities, works and services relating to the
                  business of environmentally sustainable energy sources
                  available across Nigeria
                </span>
              </div>
            </Slider>
          </div>
        </div>

        <button className='bg-white seeMore h-[48px] w-[141px] rounded-[4px] flex items-center justify-center text-[14px] font-[700] leading-[17px] mt-[14px]'>
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default Projects;
