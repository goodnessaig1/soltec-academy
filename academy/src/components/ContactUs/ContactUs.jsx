import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Whatsapp,
} from '../../Utils/Assets';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../common/Header';
import AcademyLogo from '../../assets/academy-logo-bla.png';
import { ProgressBar } from 'react-loader-spinner';
import Checked from '../../assets/checked.png';
import { AiFillTikTok } from 'react-icons/ai';
import Footer from '../common/Footer';
import { useState, useEffect } from 'react';
import { apiRequest } from '../../Utils/ApiRequest';

const socialLinks = [
  {
    link: 'https://api.whatsapp.com/send?phone=%2B2348039814257&context=ARDimt1Sw-TfMKhFSmw-xZC0AqVllbySZK4MbtxCqr8sKsvpwBylfSMOZIygla_CnypYXv3eTOKtLgnxVULO4awE7KP28fQUbVdF6TkpfrTUw8zw1eY24otC0Bk8mz-RmZq01jTnSVbxHzjgRgVtPIFnlw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR28sh3XiIt3vaieVWbtjh_wjpjc76CxbBwe3xav-aNpDfpqwW2Ts_pRL1g_aem_Ax91pdmAgn7HN-42l2PhbA',
    icon: Whatsapp,
  },
  { link: 'https://www.instagram.com/solteceng', icon: Instagram },
  {
    link: 'https://www.facebook.com/profile.php?id=61551735897565&mibextid=kFxxJD',
    icon: Facebook,
  },
  {
    link: 'https://www.linkedin.com/company/soltec-engineering-limited/',
    icon: Linkedin,
  },
  { link: 'https://x.com/solteceng', icon: Twitter },
];

const ContactUsAcademy = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    try {
      await apiRequest('POST', `/contactus/`, values);
      toast.success('Success', {
        position: 'top-right',
      });
      resetForm();
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('An error occured: ', error);
      toast.error('An error occured, please try again!', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className='min-h-screen w-full bg-[#F7F7F7]'>
      <Header />
      <div className='flex flex-col pt-5 md:pt-3 px-4 pb-14 items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className='font-semibold text-[24px] leading-[34px]'>
            CONTACT US
          </h1>
          <div className='yellowLine' />
        </div>

        <div className='contact_uss px-6 py-8 md:p-8 mt-9 md:mt-10 w-full md:w-[600px] lg:w-[786px] rounded-[6px] flex flex-col lg:flex-row gap-16'>
          <div className='w-[240px] flex flex-col gap-8'>
            <img src={AcademyLogo} alt='' className='w-[156px] h-12' />
            <div className='flex flex-col gap-[15px]'>
              <div className='flex flex-row w-full gap-4 text-[16px] font-normal leading-[20px]'>
                <div className='w-1/2'>Phone:</div>
                <div className='w-1/2'>+2348039814257</div>
              </div>
              <div className='flex flex-row w-full gap-4 text-[16px] font-normal leading-[20px]  '>
                <div className='w-1/2'>Address:</div>
                <div className='w-1/2'>
                  #27 Billy Okoye Boulevard, <br />
                  Agu-Awka
                </div>
              </div>
              <div className='flex flex-row w-full gap-4 text-[16px] font-normal leading-[20px]  '>
                <div className='w-1/2'>Email:</div>
                <div className='w-1/2'>info@solteceng.com</div>
              </div>
            </div>

            <div className='flex flex-row items-center h-9 rounded-[50px] gap-2.5 px-3 bg-[#EEEEEE]'>
              {socialLinks.map((link, i) => (
                <a key={i} href={link.link} className='' target='_blank'>
                  <img src={link.icon} className='w-7' alt='' />
                </a>
              ))}
              <a href='https://vm.tiktok.com/ZMr57L225/' target='_blank'>
                <AiFillTikTok fill='black' size={28} />
              </a>
            </div>
          </div>

          <div className='flex flex-col w-full lg:px-4 mdl:px-0 lg:w-[418px] gap-4'>
            <Formik
              initialValues={{
                full_name: '',
                email: '',
                message: '',
                tag: 'ACADEMY',
              }}
              validationSchema={Yup.object({
                full_name: Yup.string().required('Required'),
                message: Yup.string().required('Required'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Required'),
              })}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({ handleChange, handleBlur, errors, touched }) => (
                <Form className='flex flex-col gap-4 ' action=''>
                  <div className='flex flex-col gap-[6px]'>
                    <label
                      className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
                      htmlFor='full_name'
                    >
                      Full Name
                    </label>
                    <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                      <Field
                        type='text'
                        name='full_name'
                        required
                        onChange={handleChange('full_name')}
                        onBlur={handleBlur('full_name')}
                        className='outline-none pt-2 text-base pl-4 p-2.5 bg-transparent w-full'
                      />
                    </div>
                    <AnimatePresence>
                      {touched.full_name && errors.full_name && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.7, ease: 'easeInOut' }}
                        >
                          <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                            {errors.full_name}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='flex flex-col gap-[6px]'>
                    <label
                      className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
                      htmlFor='email'
                    >
                      Email address
                    </label>
                    <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                      <Field
                        type='email'
                        name='email'
                        required
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        className='outline-none pt-2 text-base pl-4 p-2.5 bg-transparent w-full'
                      />
                    </div>
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.7, ease: 'easeInOut' }}
                        >
                          <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                            {errors.email}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='flex flex-col gap-[6px]'>
                    <label
                      className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                      <Field
                        as='textarea'
                        type='text'
                        style={{ height: '126px', resize: 'none' }}
                        name='message'
                        required
                        onChange={handleChange('message')}
                        onBlur={handleBlur('message')}
                        className='outline-none pt-2 pl-4 p-2.5 text-base bg-transparent w-full'
                      />
                    </div>
                    <AnimatePresence>
                      {touched.message && errors.message && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.7, ease: 'easeInOut' }}
                        >
                          <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                            {errors.message}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {!success ? (
                    <>
                      {!loading ? (
                        <button
                          type='submit'
                          className='text-[16px] hover:opacity-[0.9] text-black bg-[#FEC910] rounded-lg font-semibold w-full h-12 flex items-center justify-center '
                        >
                          SEND MESSAGE
                        </button>
                      ) : (
                        <div className='w-full flex items-center justify-center h-[48px]'>
                          <ProgressBar
                            visible={true}
                            height='80'
                            width='80'
                            color='#f1f1f1'
                            barColor='gray'
                            borderColor='black'
                            ariaLabel='progress-bar-loading'
                            wrapperStyle={{}}
                            wrapperClass=''
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className='h-12 w-full items-center flex justify-center'>
                      <img src={Checked} className='w-9' alt='' />
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className='lg:hidden mt-10 block'>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsAcademy;
