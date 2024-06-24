/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import { Next, Prev } from '../../Utils/assets';

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
const CustomPrevArrow2 = props => {
  const { className, onClick } = props;
  return (
    <div
      style={{ display: 'none' }}
      className={`${className} hidden z-4 previou`}
      onClick={onClick}
    >
      <img src={Prev} alt='' />
    </div>
  );
};

const CustomNextArrow2 = props => {
  const { className, onClick } = props;
  return (
    <div
      style={{ display: 'none' }}
      className={`${className} hidden nextbtn`}
      onClick={onClick}
    >
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
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const mdSettings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const smSettings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow2 />,
    nextArrow: <CustomNextArrow2 />,
  };
  const sSettings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow2 />,
    nextArrow: <CustomNextArrow2 />,
  };

  return (
    <div className=' w-full flex flex-col pt-[100px] pb-[130px] w-full'>
      <div className='flex flex-col items-center justify-center w-full gap-[62px]'>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='text-black font-semibold text-[24px] leading-[34px]'>
            OUR PROJECTS
          </h1>
          <div className='whiteLine bg-black' />
        </div>
        <span className='text-[18px] font-medium leading-[26px] text-center text-black'>
          Some awesome projects we’ve worked on with delighted and satisfied
          customers. Reel showing what we’re capable of. Work <br />
          with us today and join our ever growing list of satisfied customers
          who have tasted the quality of our work. Click each project <br />
          to open them in detail in a new page.
        </span>
        <div className='w-full projects hidden lgl:flex items-center justify-center'>
          <div className='slick-container opacity-[1]'>
            <Slider {...settings} className=' opacity-[1]'>
              <div className='w-1/3 p-14 hover:cursor-pointer hover:bg-[#06041FCC] transition duration-300 group flex flex-col gap-4 first_bg12 lgl:h-[367px]'>
                <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-semibold  leading-[36px]'>
                    POWER AND ENERGY
                  </h1>
                </div>
                <span className='inter__  opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-medium text-[18px] leading-[27px] text-white '>
                  Solar installation and all kinds of activities, works and
                  services relating to the business of environmentally
                  sustainable energy sources available across Nigeria
                </span>
              </div>
              <div className='w-1/3 p-14 hover:cursor-pointer hover:bg-[#06041FCC]  transition duration-300 group flex flex-col gap-5 second_bg12 lgl:h-[367px]'>
                <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-semibold leading-[36px]'>
                    BUILDING AND CONSTRUCTION
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-medium text-[18px] leading-[27px] text-white'>
                  Includes lab or field testing, analysis and monitoring of
                  structures, and building materials such as foundations,
                  drainage systems, pavements, concrete, soils and reinforcing
                  or structural steel.
                </span>
              </div>
              <div className='w-1/3 p-14 hover:cursor-pointer hover:bg-[#06041FCC]  transition duration-300 group flex flex-col gap-4 third_bg12 lgl:h-[367px]'>
                <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-semibold leading-[36px]'>
                    SMART SECURITY
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-medium text-[18px] leading-[27px] text-white'>
                  We provide and install a comprehensive security network that
                  gives you complete protection and control - from anywhere
                </span>
              </div>
              <div className='w-1/3 p-14 hover:cursor-pointer hover:bg-[#06041FCC]  transition duration-300 group flex flex-col gap-4 fourth_bg12 lgl:h-[367px]'>
                <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-semibold leading-[36px]'>
                    SOFTWARE DEVELOPMENT
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-medium text-[18px] leading-[27px] text-white '>
                  Plan, design, develop, integrate, test, manage and evolve
                  software solutions. offer end-to-end development that covers
                  everything from business analysis to software delivery and
                  support,
                </span>
              </div>
              <div className='w-1/3 p-14 hover:cursor-pointer hover:bg-[#06041FCC]  transition duration-300 group flex flex-col gap-4 fifth_bg12 lgl:h-[367px]'>
                <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-semibold leading-[36px]'>
                    TEACHING COURSES
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-medium text-[18px] leading-[27px] text-white '>
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
              <div className='w-1/3 p-14 hover:cursor-pointer hover:bg-[#06041FCC]  transition duration-300 group flex flex-col gap-4 sixth_bg12 lgl:h-[367px]'>
                <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                  <h1 className='text-[24px] opacity-0 group-hover:opacity-[1] group-hover:transition-opacity duration-300 ease-in-out font-semibold leading-[36px]'>
                    ROBOTICS AND AUTOMATION
                  </h1>
                </div>
                <span className='inter__ opacity-0 group-hover:opacity-[0.8] group-hover:transition-opacity duration-300 ease-in-out font-medium text-[18px] leading-[27px] text-white'>
                  All kinds of activities, works and services relating to the
                  business of environmentally sustainable energy sources
                  available across Nigeria
                </span>
              </div>
            </Slider>
          </div>
        </div>
        <div className='w-full projects hidden  md:flex lgl:hidden items-center justify-center'>
          <div className='slick-container opacity-[1]'>
            <Slider {...mdSettings} className=' opacity-[1]'>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 first_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                  <h1 className='text-[24px] ] text-nowrap   leading-[36px]'>
                    POWER AND ENERGY
                  </h1>
                </div>
                <span className='inter__  opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
                  Solar installation and all kinds of activities, works and
                  services relating to the business of environmentally
                  sustainable energy sources available across Nigeria
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-5  second_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap font-semibold leading-[26px] lgl:leading-[36px]'>
                    BUILDING AND <br className='lgl:hidden' />
                    CONSTRUCTION
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                  Includes lab or field testing, analysis and monitoring of
                  structures, and building materials such as foundations,
                  drainage systems, pavements, concrete, soils and reinforcing
                  or structural steel.
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 third_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap font-semibold leading-[36px]'>
                    SMART SECURITY
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                  We provide and install a comprehensive security network that
                  gives you complete protection and control - from anywhere
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 fourth_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap  font-semibold leading-[36px]'>
                    SOFTWARE DEVELOPMENT
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
                  Plan, design, develop, integrate, test, manage and evolve
                  software solutions. offer end-to-end development that covers
                  everything from business analysis to software delivery and
                  support,
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 fifth_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap   font-semibold leading-[36px]'>
                    TEACHING COURSES
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
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
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 sixth_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap  ease-in-out font-semibold leading-[36px]'>
                    ROBOTICS AND AUTOMATION
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                  All kinds of activities, works and services relating to the
                  business of environmentally sustainable energy sources
                  available across Nigeria
                </span>
              </div>
            </Slider>
          </div>
        </div>
        <div className='w-full projects hidden sml:flex md:hidden items-center justify-center'>
          <div className='slick-container opacity-[1]'>
            <Slider {...smSettings} className=' opacity-[1]'>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 first_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                  <h1 className='text-[24px] ] text-nowrap   leading-[36px]'>
                    POWER AND ENERGY
                  </h1>
                </div>
                <span className='inter__  opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
                  Solar installation and all kinds of activities, works and
                  services relating to the business of environmentally
                  sustainable energy sources available across Nigeria
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-5 lgl:gap-4 second_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap font-semibold leading-[26px] lgl:leading-[36px]'>
                    BUILDING AND <br className='lgl:hidden' />
                    CONSTRUCTION
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                  Includes lab or field testing, analysis and monitoring of
                  structures, and building materials such as foundations,
                  drainage systems, pavements, concrete, soils and reinforcing
                  or structural steel.
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 third_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap font-semibold leading-[36px]'>
                    SMART SECURITY
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                  We provide and install a comprehensive security network that
                  gives you complete protection and control - from anywhere
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 fourth_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap  font-semibold leading-[36px]'>
                    SOFTWARE DEVELOPMENT
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
                  Plan, design, develop, integrate, test, manage and evolve
                  software solutions. offer end-to-end development that covers
                  everything from business analysis to software delivery and
                  support,
                </span>
              </div>
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 fifth_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap   font-semibold leading-[36px]'>
                    TEACHING COURSES
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
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
              <div className='w-1/3 p-[40px] hover:cursor-pointer transition curation-300 group flex flex-col gap-4 sixth_bg1 h-[367px]'>
                <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                  <h1 className='text-[24px] text-nowrap  ease-in-out font-semibold leading-[36px]'>
                    ROBOTICS AND AUTOMATION
                  </h1>
                </div>
                <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                  All kinds of activities, works and services relating to the
                  business of environmentally sustainable energy sources
                  available across Nigeria
                </span>
              </div>
            </Slider>
          </div>
        </div>
        <div className='w-full projects  flex sml:hidden items-center justify-center'>
          <div className='slick-container opacity-[1]'>
            <Slider {...sSettings} className=' opacity-[1]'>
              <div className='w-1/3  hover:cursor-pointer transition curation-300 group first_bg1 h-[367px]'>
                <div className='p-[40px] flex flex-col gap-4 bg-[#06041FCC] h-full w-full'>
                  <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                    <h1 className='text-[24px] ] text-nowrap   leading-[36px]'>
                      POWER AND ENERGY
                    </h1>
                  </div>
                  <span className='inter__  opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
                    Solar installation and all kinds of activities, works and
                    services relating to the business of environmentally
                    sustainable energy sources available across Nigeria
                  </span>
                </div>
              </div>
              <div className='w-1/3  hover:cursor-pointer transition curation-300 group second_bg1 h-[367px]'>
                <div className='p-[40px] flex flex-col gap-5 bg-[#06041FCC] h-full w-full'>
                  <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                    <h1 className='text-[24px] text-nowrap font-semibold leading-[26px] lgl:leading-[36px]'>
                      BUILDING AND <br className='lgl:hidden' />
                      CONSTRUCTION
                    </h1>
                  </div>
                  <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                    Includes lab or field testing, analysis and monitoring of
                    structures, and building materials such as foundations,
                    drainage systems, pavements, concrete, soils and reinforcing
                    or structural steel.
                  </span>
                </div>
              </div>
              <div className='w-1/3  hover:cursor-pointer transition curation-300 group third_bg1 h-[367px]'>
                <div className='p-[40px] flex flex-col gap-4 bg-[#06041FCC] h-full w-full'>
                  <div className='w-full py-3 mb-6 text-white  rounded-[4px]'>
                    <h1 className='text-[24px] text-nowrap font-semibold leading-[36px]'>
                      SMART SECURITY
                    </h1>
                  </div>
                  <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                    We provide and install a comprehensive security network that
                    gives you complete protection and control - from anywhere
                  </span>
                </div>
              </div>
              <div className='w-1/3  hover:cursor-pointer transition curation-300 group fourth_bg1 h-[367px]'>
                <div className='p-[40px] flex flex-col gap-4 bg-[#06041FCC] h-full w-full'>
                  <div className='w-full py-3 mb-6 text-white rounded-[4px]'>
                    <h1 className='text-[24px] text-nowrap  font-semibold leading-[36px]'>
                      SOFTWARE DEVELOPMENT
                    </h1>
                  </div>
                  <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
                    Plan, design, develop, integrate, test, manage and evolve
                    software solutions. offer end-to-end development that covers
                    everything from business analysis to software delivery and
                    support,
                  </span>
                </div>
              </div>
              <div className='w-1/3  hover:cursor-pointer transition curation-300 group fifth_bg1 h-[367px]'>
                <div className='p-[40px] flex flex-col gap-4 bg-[#06041FCC] h-full w-full'>
                  <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                    <h1 className='text-[24px] text-nowrap   font-semibold leading-[36px]'>
                      TEACHING COURSES
                    </h1>
                  </div>
                  <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white '>
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
              </div>
              <div className='w-1/3  hover:cursor-pointer transition curation-300 group sixth_bg1 h-[367px]'>
                <div className='p-[40px] flex flex-col gap-4 bg-[#06041FCC] h-full w-full'>
                  <div className='w-full py-3 mb-6  text-white rounded-[4px]'>
                    <h1 className='text-[24px] text-nowrap  ease-in-out font-semibold leading-[36px]'>
                      ROBOTICS AND AUTOMATION
                    </h1>
                  </div>
                  <span className='inter__ opacity-[0.8] font-medium text-[18px] leading-[27px] text-white'>
                    All kinds of activities, works and services relating to the
                    business of environmentally sustainable energy sources
                    available across Nigeria
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
