import { Link } from 'react-router-dom';
import AcademyLogoFull from '../../assets/academy-logo-full.png';
import { FIcon, IGIcon, IIcon, WIcon, XIcon } from '../../Utils/Assets';
import { useAuth } from '../Context/AuthContext';
import { AiFillTikTok } from 'react-icons/ai';

const footerLinks = [
  {
    link: 'https://api.whatsapp.com/send?phone=%2B2348039814257&context=ARDimt1Sw-TfMKhFSmw-xZC0AqVllbySZK4MbtxCqr8sKsvpwBylfSMOZIygla_CnypYXv3eTOKtLgnxVULO4awE7KP28fQUbVdF6TkpfrTUw8zw1eY24otC0Bk8mz-RmZq01jTnSVbxHzjgRgVtPIFnlw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR28sh3XiIt3vaieVWbtjh_wjpjc76CxbBwe3xav-aNpDfpqwW2Ts_pRL1g_aem_Ax91pdmAgn7HN-42l2PhbA',
    icon: WIcon,
  },
  { link: 'https://www.instagram.com/solteceng', icon: IGIcon },
  {
    link: 'https://www.facebook.com/profile.php?id=61551735897565&mibextid=kFxxJD',
    icon: FIcon,
  },
  {
    link: 'https://www.linkedin.com/company/soltec-engineering-limited/',
    icon: IIcon,
  },
  { link: 'https://x.com/solteceng', icon: XIcon },
];

const Footer = () => {
  const { courses } = useAuth();

  return (
    <div className='footer-bg sm:px-4 lg:px-[120px] py-[130px] sm:pt-[120px] lg:pt-[140px] '>
      <div className='flex sm:flex-col lg:flex-row sm:gap-[38px] lg:justify-between'>
        <div className='flex flex-col gap-4'>
          <img src={AcademyLogoFull} alt='' className='w-[170px] h-[53.5px] ' />
          <span className='sm:hidden lg:block font-normal text-footerCol text-[16px] leading-[24px]'>
            Academy of Soltec Engineering Company
          </span>
          <span className='sm:block lg:hidden font-normal text-footerCol text-[16px] leading-[24px]'>
            Soltec Academy
          </span>
          <div className='flex flex-col gap-4'>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Phone: +2348039814257
            </span>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Email: info@solteceng.com
            </span>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Address: #27 Billy Okoye Boulevard, <br />
              Agu-Awka
            </span>
            <div className='flex flex-row items-center gap-3.5'>
              {footerLinks.map((link, i) => (
                <a key={i} href={link.link} target='_blank'>
                  <img src={link.icon} alt='' />
                </a>
              ))}
              <a href='https://vm.tiktok.com/ZMr57L225/' target='_blank'>
                <AiFillTikTok fill='gray' size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-[16px] leading-[21px] text-white'>
            INFORMATION
          </h1>
          <div className='flex flex-col gap-3'>
            <Link
              to={'/contact-us'}
              className='font-normal text-footerCol text-[16px] leading-[32px]'
            >
              Contact Us
            </Link>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Terms & Conditions
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-[16px] leading-[21px] text-white'>
            COURSES
          </h1>
          {courses && courses.length > 5 ? (
            <div className='flex flex-col gap-3'>
              {courses &&
                courses.slice(0, 5).map((course, index) => (
                  <Link
                    to={`/courses/${course?.id}/${course?.title}`}
                    key={index}
                    className='font-normal text-footerCol text-[16px] leading-[32px]'
                  >
                    {course.title}
                  </Link>
                ))}
            </div>
          ) : (
            <FooterCourses />
          )}
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-[16px] leading-[21px] text-white'>
            NEWSLETTER
          </h1>
          <div className='flex flex-col gap-3'>
            <span className='font-normal text-footerCol text-[16px] leading-[24px]'>
              Get instant updates about our courses, <br />
              blog posts and special discounts
            </span>
          </div>
          <div className='flex flex-row gap-[6px]'>
            <div className='bg-colorOpacity rounded-[12px]  p-2.5 pl-4 '>
              <input
                type='text'
                placeholder='Enter your email'
                className='font-normal text-[16px] outtline-none bg-transparent text-footerCol w-full focus:outline-none placeholder-footerCol focus:border-none leading-[16px]'
              />
            </div>
            <div className='p-2 rounded-xl bg-white '>
              <span className='font-medium text-[14px] leading-[19px]'>
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

const FooterCourses = () => {
  return (
    <div className='flex flex-col gap-3'>
      <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
        Product design
      </span>
      <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
        Blockchain Developments
      </span>
      <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
        Data Analysis
      </span>
      <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
        Cybersecurity
      </span>
      <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
        Frontend Web Development
      </span>
    </div>
  );
};
