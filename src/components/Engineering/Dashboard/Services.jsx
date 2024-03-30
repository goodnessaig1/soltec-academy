const Services = () => {
  return (
    <div className='w-full bg-bg3 flex flex-col items-center pt-[47px] justify-center '>
      <div className='flex flex-col gap-[16px] items-center justify-center'>
        <h1 className='font-[600] text-[24px] leading-[34px]'>OUR SERVICES</h1>
        <div className='yellowLine' />
      </div>

      <div className='flex flex-col w-full mt-[80px]'>
        <div className='flex flex-row w-full'>
          <div className='w-1/3 p-[56px] flex flex-col gap-[24px] first_bg h-[367px]'>
            <div className='w-full px-[20px] py-[12px] text-white bg-opacityC rounded-[4px]'>
              <h1 className='text-[24px] font-[600] leading-[36px]'>
                POWER AND ENERGY
              </h1>
            </div>
            <span className='inter__ font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
              Solar installation and all kinds of activities, works and services
              relating to the business of environmentally sustainable energy
              sources available across Nigeria
            </span>
          </div>
          <div className='w-1/3 p-[56px] flex flex-col gap-[24px] second_bg h-[367px]'>
            <div className='w-full px-[20px] py-[12px] text-white bg-opacityC rounded-[4px]'>
              <h1 className='text-[24px] font-[600] leading-[36px]'>
                BUILDING AND CONSTRUCTION
              </h1>
            </div>
            <span className='inter__ font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
              Includes lab or field testing, analysis and monitoring of
              structures, and building materials such as foundations, drainage
              systems, pavements, concrete, soils and reinforcing or structural
              steel.
            </span>
          </div>
          <div className='w-1/3 p-[56px] flex flex-col gap-[24px] third_bg h-[367px]'>
            <div className='w-full px-[20px] py-[12px] text-white bg-opacityC rounded-[4px]'>
              <h1 className='text-[24px] font-[600] leading-[36px]'>
                SMART SECURITY
              </h1>
            </div>
            <span className='inter__ font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
              We provide and install a comprehensive security network that gives
              you complete protection and control - from anywhere
            </span>
          </div>
        </div>
        <div className='flex flex-row w-full'>
          <div className='w-1/3 p-[56px] flex flex-col gap-[24px] fourth_bg h-[367px]'>
            <div className='w-full px-[20px] py-[12px] text-white bg-opacityC rounded-[4px]'>
              <h1 className='text-[24px] font-[600] leading-[36px]'>
                SOFTWARE DEVELOPMENT
              </h1>
            </div>
            <span className='inter__ font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
              Plan, design, develop, integrate, test, manage and evolve software
              solutions. offer end-to-end development that covers everything
              from business analysis to software delivery and support,
            </span>
          </div>
          <div className='w-1/3 p-[56px] flex flex-col gap-[24px] fifth_bg h-[367px]'>
            <div className='w-full px-[20px] py-[12px] text-white bg-opacityC rounded-[4px]'>
              <h1 className='text-[24px] font-[600] leading-[36px]'>
                TEACHING COURSES
              </h1>
            </div>
            <span className='inter__ font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
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
          <div className='w-1/3 p-[56px] flex flex-col gap-[24px] sixth_bg h-[367px]'>
            <div className='w-full px-[20px] py-[12px] text-white bg-opacityC rounded-[4px]'>
              <h1 className='text-[24px] font-[600] leading-[36px]'>
                ROBOTICS AND AUTOMATION
              </h1>
            </div>
            <span className='inter__ font-[500] text-[18px] leading-[27px] text-white opacity-[0.8]'>
              All kinds of activities, works and services relating to the
              business of environmentally sustainable energy sources available
              across Nigeria
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;