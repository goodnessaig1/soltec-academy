import Logo from '../../../assets/logo2.svg';

const Footer = () => {
  return (
    <div className='footer-bg sm:px-[16px] lg:px-[120px] py-[130px] sm:pt-[120px] lg:pt-[140px] '>
      <div className='flex sm:flex-col lg:flex-row sm:gap-[38px] lg:justify-between'>
        <div className='flex flex-col gap-[16px]'>
          <img src={Logo} alt='' className='w-[170px] h-[53.5px] ' />
          <span className='sm:hidden lg:block font-[400] text-footerCol text-[16px] leading-[24px]'>
            Soltec Engineering Company
          </span>
          <span className='sm:block lg:hidden font-[400] text-footerCol text-[16px] leading-[24px]'>
            Soltec Engineering
          </span>
          <div className='flex flex-col gap-[10px]'>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Phone: +2348039814257
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Email: info@solteceng.com
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Address: #27 Billy Okoye Boulevard, <br />
              Agu-Awka
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <h1 className='font-[600] text-[16px] leading-[21px] text-[#fff]'>
            INFORMATION
          </h1>
          <div className='flex flex-col gap-[12px]'>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              About Us
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Contact Us
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Terms & Conditions
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <h1 className='font-[600] text-[16px] leading-[21px] text-[#fff]'>
            SERVICES
          </h1>
          <div className='flex flex-col gap-[12px]'>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Power and Energy
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Smart Security
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Software Development
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Building and Construction
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Teaching Courses
            </span>
            <span className='font-[400] text-footerCol text-[16px] leading-[32px]'>
              Robotics and Automation
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <h1 className='font-[600] text-[16px] leading-[21px] text-[#fff]'>
            NEWSLETTER
          </h1>
          <div className='flex flex-col gap-[12px]'>
            <span className='font-[400] text-footerCol text-[16px] leading-[24px]'>
              Get instant updates about our courses, <br />
              blog posts and special discounts
            </span>
          </div>
          <div className='flex flex-row gap-[6px]'>
            <div className='bg-colorOpacity rounded-[12px]  p-[10px] pl-[16px] '>
              <input
                type='text'
                placeholder='Enter your email'
                className='font-[400] text-[16px] outtline-none bg-transparent text-footerCol w-full focus:outline-none placeholder-footerCol focus:border-none leading-[16px]'
              />
            </div>
            <div className='p-[8px] rounded-[12px] bg-[#fff] '>
              <span className='font-[500] text-[14px] leading-[19px]'>
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
