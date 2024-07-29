import { Link } from 'react-router-dom';
import { FIcon, IGIcon, IIcon, Logo, WIcon, XIcon } from '../../Utils/assets';
import { AiFillTikTok } from 'react-icons/ai';
import { Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';
import { Oval } from 'react-loader-spinner';
import { useState } from 'react';
import { GrStatusGood } from 'react-icons/gr';
import { apiRequest } from '../../Utils/apiRequest';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values, resetForm, setFieldError) => {
    setLoading(true);
    try {
      await apiRequest('POST', `/newsletters/`, values);
      setLoading(false);
      resetForm();
      setSuccess(true);
    } catch (error) {
      setLoading(false);
      setFieldError(
        'email',
        'Failed please check your internet connection try again',
      );
    }
  };

  return (
    <div className='footer-bg sm:px-4 lg:px-[120px] py-[130px] sm:pt-[120px] lg:pt-[140px] '>
      <div className='flex sm:flex-col lg:flex-row sm:gap-[38px] lg:justify-between'>
        <div className='flex flex-col gap-4'>
          <img src={Logo} alt='' className='w-[170px] h-[53.5px] ' />
          <span className='sm:hidden lg:block font-normal text-footerCol text-[16px] leading-[24px]'>
            Soltec Engineering Company
          </span>
          <span className='sm:block lg:hidden font-normal text-footerCol text-[16px] leading-[24px]'>
            Soltec Engineering
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
              to='/#about-us'
              className='font-normal text-footerCol text-[16px] leading-[32px]'
            >
              About Us
            </Link>
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
            SERVICES
          </h1>
          <div className='flex flex-col gap-3'>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Power and Energy
            </span>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Smart Security
            </span>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Software Development
            </span>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Building and Construction
            </span>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Teaching Courses
            </span>
            <span className='font-normal text-footerCol text-[16px] leading-[32px]'>
              Robotics and Automation
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-[16px] leading-[21px] text-white'>
            NEWSLETTER
          </h1>
          <div className='flex flex-col gap-3'>
            <span className='font-normal text-footerCol text-[16px] leading-[24px]'>
              Get instant updates about our courses, <br />
              services and special discounts
            </span>
          </div>
          <Formik
            initialValues={{
              email: '',
            }}
            // validationSchema={Yup.object({
            //   email: Yup.string().required('Required'),
            // })}
            onSubmit={(values, { resetForm, setFieldError }) => {
              handleSubmit(values, resetForm, setFieldError);
            }}
          >
            {({ handleChange, handleBlur, errors, touched }) => (
              <Form action=''>
                <div className='flex flex-row gap-[6px]'>
                  <div className='bg-colorOpacity rounded-[12px]  p-2.5 pl-4 '>
                    <Field
                      type='email'
                      name='email'
                      required
                      onChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder='Enter your email'
                      className='font-normal text-[16px] outtline-none bg-transparent text-footerCol w-full focus:outline-none placeholder-footerCol focus:border-none leading-[16px]'
                    />
                  </div>
                  {!success ? (
                    <>
                      {!loading ? (
                        <button
                          type='submit'
                          className='p-2 rounded-xl bg-white'
                        >
                          <span className='font-medium text-[14px] leading-[19px]'>
                            Subscribe
                          </span>
                        </button>
                      ) : (
                        <div className='mr-4 flex items-center justify-center h-12'>
                          <Oval
                            visible={true}
                            height='35'
                            width='35'
                            color='white'
                            secondaryColor='#f3f3f3'
                            ariaLabel='oval-loading'
                            wrapperStyle={{}}
                            wrapperClass=''
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='mr-2 h-12 flex items-center justify-center'>
                      <GrStatusGood color='white' size={32} />
                    </div>
                  )}
                </div>
                <AnimatePresence>
                  {touched.email && errors.email && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                    >
                      <p className='text-[#2C2C2CB2] max-w-[300px] absolute text-[#D50000] text-[10px] font-normal md:text-base'>
                        {errors.email}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Footer;
