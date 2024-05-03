// import axios from 'axios';
import Logo from '../../../assets/mobile-log.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../../Utils/ApiRequest';

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    full_name: '',
    email: '',
    password: '',
    phone_number: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    full_name: Yup.string('Required'),
    phone_number: Yup.string('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters.')
      .required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await apiRequest('POST', '/users/create-admin/', values);
      navigate('/admin/sign-in');
      setSubmitting(true);
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };

  return (
    <div className='w-full bg-[#F5F7F9] h-screen flex items-center justify-center'>
      <div className='w-[500px] bg-white rounded-[16px] sign_in px-[24px] py-[40px] flex flex-col gap-[24px]'>
        <div className='flex items-center justify-center'>
          <img src={Logo} alt='' className='w-[100px] h-[80px]' />
        </div>
        <div className='flex flex-col items-center ga-[8px]'>
          <h1 className='text-[44px] font-[700] leading-[44px] text-mainBlue text-center'>
            Create Admin
          </h1>
          <span className='text-[14px] font-[500] leading-[32px]'></span>
        </div>
        <div className=''>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, errors, touched, isSubmitting }) => (
              <Form className='flex flex-col gap-[12px] mdl:px-[8px] w-full'>
                <div className='flex flex-col w-full gap-[6px]'>
                  <label
                    className='text-[14px] font-[500] leading-[20px] text-[#344054]'
                    htmlFor='full_name'
                  >
                    Full Name*
                  </label>

                  <div className='input_ z-2 w-full rounded-[8px] px-[14px] py-[10px] flex items-center '>
                    <input
                      type='text'
                      required
                      placeholder='Enter your FullName'
                      className='outline-none focus:outline-none w-full px-[4px] focus:bg-transparent bg-transparent'
                      name='full_name'
                      onChange={handleChange('full_name')}
                      onBlur={handleBlur('full_name')}
                    />
                  </div>
                </div>
                <div className='flex flex-col w-full gap-[6px]'>
                  <label
                    className='text-[14px] font-[500] leading-[20px] text-[#344054]'
                    htmlFor='email'
                  >
                    Email*
                  </label>
                  <div className='input_ z-2 w-full rounded-[8px] px-[14px] py-[10px] flex items-center '>
                    <input
                      type='email'
                      id='email'
                      required
                      placeholder='Enter your email'
                      className='outline-none focus:outline-none w-full px-[4px] focus:bg-transparent bg-transparent'
                      name='email'
                      onChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                    />
                  </div>
                </div>
                <div className='flex flex-col w-full gap-[6px]'>
                  <label
                    className='text-[14px] font-[500] leading-[20px] text-[#344054]'
                    htmlFor='email'
                  >
                    PhoneNUmber*
                  </label>
                  <div className='input_ z-2 w-full rounded-[8px] px-[14px] py-[10px] flex items-center '>
                    <input
                      type='text'
                      required
                      placeholder='081**********'
                      className='outline-none focus:outline-none w-full px-[4px] focus:bg-transparent bg-transparent'
                      onChange={handleChange('phone_number')}
                      onBlur={handleBlur('phone_number')}
                      name='phone_number'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='text-[14px] font-[500] leading-[20px] text-[#344054]'
                    htmlFor='password'
                  >
                    Password*
                  </label>
                  <div className='input_ z-2 rounded-[8px] px-[14px] py-[10px] flex items-center '>
                    <input
                      type='password'
                      id='password'
                      name='password'
                      placeholder='********'
                      onChange={handleChange('password')}
                      onBlur={handleBlur('password')}
                      className='outline-none focus:outline-none w-full px-[4px] focus:bg-transparent bg-transparent'
                    />
                  </div>
                  {touched.password && errors.password && (
                    <div className='pl-[2px] text-[12px] text-red-600'>
                      {errors.password}
                    </div>
                  )}
                  {/* <ErrorMessage
                    name='password'
                    component='div'
                    className='text-[14px] absolute mt-[76px] text-[#667085]'
                  /> */}
                </div>

                <div className='flex flex-col gap-[24px] mt-[38px]'>
                  {!isSubmitting ? (
                    <button
                      type='submit'
                      className='h-[44px] font-[500] text-[16px] leading-[24px] button_ flex w-full items-center justify-center text-white bg-mainBlue rounded-[8px] hover:bg-mainPurple transition duration-300 '
                      disabled={isSubmitting}
                    >
                      Sign in
                    </button>
                  ) : (
                    <div className='flex h-[44px] w-full items-center justify-center'>
                      <RotatingLines
                        visible={true}
                        width='36'
                        strokeColor='#7A5AF8'
                        strokeWidth='3'
                        animationDuration='0.75'
                        ariaLabel='rotating-lines-loading'
                      />
                    </div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
