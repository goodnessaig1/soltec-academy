/* eslint-disable no-unused-vars */
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { BaseURL } from '../../../Utils/BaseUrl';
import { RotatingLines } from 'react-loader-spinner';
import { AnimatePresence, motion } from 'framer-motion';
import { validateEmail, validatePhoneNumber } from '../../../Utils/Index';

const CoursePayment = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [courseData, setCourseData] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState(false);
  const [isValidNumber, setisValidNumber] = useState(true);

  const fetchCourseDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BaseURL}/courses/${id}/fetch_course_details`,
      );
      setLoading(false);
      setCourseData(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    fetchCourseDetail();
  }, []);

  const handlePayment = async () => {
    const data = {
      email: email,
      phone_number: phoneNumber,
    };
    if (email == '' && phoneNumber == '') {
      setEmailError('Email is Required');
      setNumberError('Phone Number is Required');
    } else if (email == '') {
      setEmailError('Email is Required');
    } else if (phoneNumber == '') {
      setNumberError('Phone Number is Required');
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else
      try {
        setPaymentRequest(true);
        const response = await axios.post(
          `${BaseURL}/courses/${courseData?.id}/enroll_students_to_course/`,
          data,
        );
        window.location.href = response.data.url;
      } catch (error) {
        console.log(error);
        setPaymentRequest(false);
        alert('An error occured, Please try again');
      }
  };

  const handleInputChange = e => {
    const number = e.target.value;
    setPhoneNumber(number);
    setNumberError('');
    validatePhoneNumber(number, setisValidNumber);
  };

  return (
    <div className='w-full'>
      <Header />
      {!loading ? (
        <div className='w-full sm:px-[16px] lg:px-[120px] paym flex justify-center sm:mt-[50px] lg:mt-[80px] mb-[120px] items-center'>
          <div className=' lg:w-[964px] flex justify-center items-start lg:justify-start items-start sm:flex-col lg:flex-row gap-[89px]'>
            <div className=' lg:w-[375px] flex flex-col sm:gap-[50px] lg:gap-[104px]'>
              <div
                style={{ background: courseData?.color_code }}
                className='p-[32px] sm:w-[343px] lg:w-[375px] hover:cursor-pointer h-[320px] rounded-[24px] flex flex-col items-center justify-center  gap-[15px]'
              >
                <h1 className='font-[700] text-[32px] leading-[48px] text-center text-[#fff]'>
                  {courseData?.title}
                </h1>
                <span className='font-[500] text-[16px] leading-24px] text-center text-extraGray'>
                  {courseData?.description.length > 180 ? (
                    <span>
                      {`${courseData?.description.substring(0, 180) + '...'}`}
                    </span>
                  ) : (
                    <span>{courseData?.description}</span>
                  )}
                </span>
              </div>
              <form className='flex flex-col gap-[17px]'>
                <div className='flex flex-col gap-[4px]'>
                  <div className='input_ rounded-[12px] py-[10px] px-[16px]'>
                    <input
                      className='bg-transparent text-[14px] outline-none  w-full'
                      placeholder='Email address'
                      type='email'
                      name='email'
                      value={email}
                      required
                      onChange={e => (
                        setEmail(e.target.value), setEmailError('')
                      )}
                    />
                  </div>
                  {emailError && (
                    <div className='text-[12px] text-red-500'>{emailError}</div>
                  )}
                </div>
                <div className='flex flex-col gap-[4px]'>
                  <div className='input_ rounded-[12px] py-[10px] px-[16px]'>
                    <input
                      className='bg-transparent text-[14px] outline-none w-full'
                      placeholder='Phone number'
                      type='text'
                      name='phoneNumber'
                      required
                      value={phoneNumber}
                      onChange={e => handleInputChange(e)}
                    />
                  </div>
                  {numberError && (
                    <div className='text-[12px] text-red-500'>
                      {numberError}
                    </div>
                  )}
                  <AnimatePresence>
                    {!isValidNumber && (
                      <motion.h1
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '18px' }}
                        transition={{ duration: 0.3 }}
                        className='text-red-500 text-[12px]'
                      >
                        Invalid Phone Number
                      </motion.h1>
                    )}
                  </AnimatePresence>
                </div>
                <div className='input_ flex justify-between gap-[8px] rounded-[12px]  pl-[16px]'>
                  <input
                    className='bg-transparent text-[14px] outline-none w-full'
                    placeholder='Type Coupon'
                    type='text'
                    disabled
                  />
                  <div className='bg-[#fff] w-[72px] borderRr py-[10px] px-[12px] font-[500] leading-[20px] h-full text-center '>
                    Apply
                  </div>
                </div>
              </form>
            </div>
            <div className='payment__ sm:w-[343px] mdl:w-[600px] lg:w-[500px] p-[12px] lg:p-[24px] w-full flex flex-col gap-[24px]'>
              <div className='flex flex-col gap-[10px] '>
                <div className='flex flex-col'>
                  <div className='flex h-[42px]  items-center text-[14px] leading-[18px] justify-between'>
                    <h1 className=''>Total price:</h1>
                    <span className=''>
                      N{parseFloat(courseData?.price).toLocaleString()}
                    </span>
                  </div>
                  <div className='flex h-[42px] items-center text-[14px] leading-[18px] justify-between'>
                    <h1 className=''>Coupon:</h1>
                    <span className='text-mainRed'>null</span>
                  </div>
                  <div className='flex h-[56px] total_ font-[700] items-center text-[14px] leading-[18px] justify-between'>
                    <h1 className=''>Total:</h1>
                    <span className=''>
                      N{parseFloat(courseData?.price).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className='flex flex-col gap-[14px]'>
                  <div className='flex gap-[4px] text-[14px] leading-[19px] '>
                    <h1 className='font-[600]'>Email address:</h1>
                    <span className=''>
                      {email ? email : 'example.gmail.com'}
                    </span>
                  </div>
                  <div className='flex gap-[4px] text-[14px] leading-[19px] '>
                    <h1 className='font-[600]'>Phone number:</h1>
                    <span className=''>
                      {phoneNumber ? phoneNumber : '090********'}
                    </span>
                  </div>
                </div>
              </div>

              {!paymentRequest ? (
                <div
                  onClick={() => handlePayment()}
                  className='text-[#fff] flex items-center text-center justify-center h-[56px] rounded-[12px] bg-mainRed hover:bg-red-600 h-[56px] hover:cursor-pointer transition duration-400  font-[600]'
                >
                  Make payment
                </div>
              ) : (
                <div className='flex w-full h-[56px] items-center justify-center'>
                  <RotatingLines
                    visible={true}
                    height='56'
                    width='56'
                    strokeColor='grey'
                    strokeWidth='3'
                    animationDuration='0.75'
                    ariaLabel='rotating-lines-loading'
                    wrapperStyle={{}}
                    wrapperClass=''
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full flex flex-row items-cente justify-center py-[120px] sm:px-[16px] lg:px-[120px] gap-[80px]'>
          <div className='flex flex-col gap-[12px]'>
            <Skeleton
              style={{ borderRadius: '20px' }}
              className='w-[140px]'
              width={343}
              height={440}
            />
            <Skeleton
              style={{ borderRadius: '20px' }}
              className='w-[140px]'
              width={343}
              height={60}
            />
            <Skeleton
              style={{ borderRadius: '20px' }}
              className='w-[140px]'
              width={343}
              height={60}
            />
            <Skeleton
              style={{ borderRadius: '20px' }}
              className='w-[140px]'
              width={343}
              height={60}
            />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <Skeleton
              style={{ borderRadius: '20px' }}
              className='w-[140px]'
              width={443}
              height={540}
            />
            <Skeleton
              style={{ borderRadius: '20px' }}
              className='w-[140px]'
              width={443}
              height={60}
            />
            <Skeleton
              style={{ borderRadius: '20px' }}
              className='w-[140px]'
              width={443}
              height={60}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CoursePayment;
