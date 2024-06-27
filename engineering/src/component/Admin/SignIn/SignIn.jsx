import Logo from '../../../assets/mobile-log.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { apiRequest } from '../../../Utils/ApiRequest';

const SignIn = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await apiRequest('POST', `/users/login/`, values);
      const { token } = response;
      Cookies.set('access_token', token.access);
      Cookies.set('refresh_token', token.refresh);
      navigate('/admin/dashboard');
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };

  return (
    <div className='w-full bg-[#F5F7F9] h-screen flex items-center justify-center'>
      <div className='w-[500px] bg-white rounded-[16px] sign_in px-[24px] py-[50px] flex flex-col gap-[24px]'>
        <div className='flex items-center justify-center'>
          <img src={Logo} alt='' className='w-[100px] h-[80px]' />
        </div>
        <div className='flex flex-col items-center ga-[8px]'>
          <h1 className='text-[44px] font-[700] leading-[44px] text-mainBlue text-center'>
            Welcome Admin
          </h1>
          <span className='text-[14px] font-[500] leading-[32px]'>
            Sign In to proceed to admin dashboard
          </span>
        </div>
        <div className=''>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {formik => (
              <Form className='flex flex-col gap-[26px] mdl:px-[8px] w-full'>
                <div className='flex flex-col w-full gap-[6px]'>
                  <label
                    className='text-[14px] font-[500] leading-[20px] text-[#344054]'
                    htmlFor='email'
                  >
                    Email*
                  </label>
                  <div className='input_ z-2 w-full rounded-[8px] px-[14px] py-[10px] flex items-center '>
                    <Field
                      type='email'
                      id='email'
                      required
                      placeholder='Enter your email'
                      className='outline-none focus:outline-none w-full px-[4px] focus:bg-transparent bg-transparent'
                      name='email'
                    />
                  </div>
                  <ErrorMessage
                    className='text-[12px] text-[#667085] absolute mt-[74px]'
                    name='email'
                    component='div'
                  />
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='text-[14px] font-[500] leading-[20px] text-[#344054]'
                    htmlFor='password'
                  >
                    Password*
                  </label>
                  <div className='input_ z-2 rounded-[8px] px-[14px] py-[10px] flex items-center '>
                    <Field
                      type='password'
                      id='password'
                      name='password'
                      placeholder='********'
                      className='outline-none focus:outline-none w-full px-[4px] focus:bg-transparent bg-transparent'
                    />
                  </div>
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='text-[14px] absolute mt-[76px] text-[#667085]'
                  />
                </div>

                <div className='flex flex-col gap-[24px] mt-[38px]'>
                  {!formik.isSubmitting ? (
                    <button
                      type='submit'
                      className='h-[44px] font-[500] text-[16px] leading-[24px] button_ flex w-full items-center justify-center text-white bg-mainBlue rounded-[8px] hover:bg-mainPurple transition duration-300 '
                      disabled={formik.isSubmitting}
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

export default SignIn;
