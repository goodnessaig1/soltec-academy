import Logo from '../../assets/contac-log.svg';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Whatsapp,
} from '../../Utils/Assets';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BaseURL } from '../../Utils/BaseUrl';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../Header/Header';

const ContactUsAcademy = () => {
  const handleSubmit = async (values, resetForm) => {
    try {
      await axios.post(`${BaseURL}/testimonials/`, values);
      toast.success('Success', {
        position: 'top-right',
      });
      resetForm();
    } catch (error) {
      console.error('Error uploading file: ', error);
      toast.error('An error occured, please try again!', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className='md:min-h-[100vh] lg:min-h-[160vh] w-full bg-[#F7F7F7]'>
      <Header />
      <div className='flex flex-col pt-[60px] md:pt-[80px] px-[16px] pb-[100px] items-center justify-center '>
        <div className='flex flex-col gap-[16px] items-center justify-center'>
          <h1 className='font-[600] text-[24px] leading-[34px]'>CONTACT US</h1>
          <div className='yellowLine' />
        </div>

        <div className='contact_uss px-[24px] py-[32px] md:p-[32px] mt-[60px] md:mt-[90px] w-full md:w-[600px] lg:w-[786px] rounded-[6px] flex flex-col lg:flex-row gap-[64px]'>
          <div className='w-[240px] flex flex-col gap-[32px]'>
            <img src={Logo} alt='' className='w-[156px] h-[48px]' />
            <div className='flex flex-col gap-[15px]'>
              <div className='flex flex-row w-full gap-[10px] text-[16px] font-[400] leading-[20px]  '>
                <div className='w-1/2'>Phone:</div>
                <div className='w-1/2'>+2348039814257</div>
              </div>
              <div className='flex flex-row w-full gap-[10px] text-[16px] font-[400] leading-[20px]  '>
                <div className='w-1/2'>Address:</div>
                <div className='w-1/2'>
                  #27 Billy Okoye Boulevard, <br />
                  Agu-Awka
                </div>
              </div>
              <div className='flex flex-row w-full gap-[10px] text-[16px] font-[400] leading-[20px]  '>
                <div className='w-1/2'>Email:</div>
                <div className='w-1/2'>info@solteceng.com</div>
              </div>
            </div>

            <div className='flex flex-row h-[35px] rounded-[50px] gap-[20px] px-[20px] bg-[#EEEEEE]'>
              <img src={Whatsapp} alt='' />
              <img src={Instagram} alt='' />
              <img src={Facebook} alt='' />
              <img src={Linkedin} alt='' />
              <img src={Twitter} alt='' />
            </div>
          </div>

          <div className='flex flex-col w-full lg:px-[16px] mdl:px-0 lg:w-[418px] gap-[16px]'>
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                message: '',
              }}
              validationSchema={Yup.object({
                fullName: Yup.string().required('Required'),
                message: Yup.string().required('Required'),
                email: Yup.string().required('Required'),
              })}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({
                handleChange,
                handleBlur,
                //   values,
                errors,
                touched,
                //   setFieldValue,
              }) => (
                <Form className='flex flex-col gap-[16px] ' action=''>
                  <div className='flex flex-col gap-[6px]'>
                    <label
                      className='font-[600] text-[14px] leading-[21px] text-[#1C1C1C]'
                      htmlFor='fullName'
                    >
                      Full Name
                    </label>
                    <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                      <input
                        type='text'
                        name='fullName'
                        required
                        onChange={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                      />
                    </div>
                    <AnimatePresence>
                      {touched.fullName && errors.fullName && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.7, ease: 'easeInOut' }}
                        >
                          <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                            {errors.fullName}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='flex flex-col gap-[6px]'>
                    <label
                      className='font-[600] text-[14px] leading-[21px] text-[#1C1C1C]'
                      htmlFor='email'
                    >
                      Email address
                    </label>
                    <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                      <input
                        type='email'
                        name='email'
                        required
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
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
                          <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                            {errors.email}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className='flex flex-col gap-[6px]'>
                    <label
                      className='font-[600] text-[14px] leading-[21px] text-[#1C1C1C]'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                      <textarea
                        type='text'
                        style={{ height: '126px', resize: 'none' }}
                        name='description'
                        required
                        onChange={handleChange('description')}
                        onBlur={handleBlur('description')}
                        className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
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
                  {/* {!addLoading ? ( */}
                  <button
                    type='submit'
                    className='text-[16px] hover:opacity-[0.9] text-black bg-[#FEC910] rounded-[8px] font-[600] w-full h-[48px] flex items-center justify-center '
                  >
                    SEND MESSAGE
                  </button>
                  {/* ) : ( */}
                  {/* <div className='w-full flex items-center justify-center h-[48px]'>
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
                      </div> */}
                  {/* )} */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAcademy;
