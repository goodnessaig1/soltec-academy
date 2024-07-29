/* eslint-disable react/prop-types */
import Countdown from './Countdown';
import { Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';
import { Oval } from 'react-loader-spinner';
import { useState } from 'react';
import { GrStatusGood } from 'react-icons/gr';
import { apiRequest } from '../../Utils/ApiRequest';
import { AnimatePresence, motion } from 'framer-motion';

const Cohort = ({ startDate }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (values, resetForm, setFieldError) => {
    setLoading(true);
    try {
      await apiRequest('POST', `/newsletters/`, values);
      setLoading(false);
      setSuccess(true);
      resetForm();
    } catch (error) {
      setFieldError(
        'email',
        'Failed please check your internet connection try again',
      );
      setLoading(false);
    }
  };
  return (
    <div className='pt-32 lg:pt-36'>
      <div className='background-image2'>
        <div className='flex px-4 flex-col items-center justify-center py-[140px]'>
          {startDate ? (
            <h1 className='font-[900] text-[20px] text-white '>
              THE NEXT COHORT STARTS IN...
            </h1>
          ) : (
            <h1 className='font-[900] text-[20px] text-white'>
              THE NEXT BOOTCAMP IS YET TO BEGIN
            </h1>
          )}
          {<Countdown startDate={startDate} />}

          <div className='mt-12 flex text-center'>
            <span className='font-normal sm:text-[16px] lg:text-[20px] text-nowrap leading-[30px] text-center text-white'>
              We’re still putting together plans for our next{' '}
              <br className='sm:block lg:hidden' />
              bootcamp. You can sign up <br className='sm:hidden lg:block' />
              to our newsletter to <br className='sm:block lg:hidden' />
              get first information when we’re ready to receive <br />
              new students!
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
                <div className='bg-colorOpacity flex items-center rounded-[20px] mt-8 justify-between sm:w-[343px] lg:w-[383px] py-[6px] pr-[6px] pl-5'>
                  <Field
                    placeholder='Enter email address'
                    type='email'
                    name='email'
                    required
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    className='font-normal outtline-none py-2 bg-transparent text-white text-[16px] w-full focus:outline-none placeholder-white focus:border-none leading-[16px]'
                  />
                  {!success ? (
                    <>
                      {!loading ? (
                        <button
                          type='submit'
                          className='bg-white hover:cursor-pointer w-[93px] h-12 rounded-[16px] flex items-center justify-center '
                        >
                          <div className='span'>Sign up</div>
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
                      <p className='text-white max-w-[300px] lg:max-w-[500px] absolute text-[#D50000] text-[10px] font-normal md:text-base'>
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

export default Cohort;
