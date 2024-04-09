import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { BaseURL } from '../../../Utils/BaseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import Media from '../../../assets/media-1.svg';
import { ArrowDown, CloudAdd } from '../../../Utils/Assets';
import { Form, Formik } from 'formik';
import Skeleton from 'react-loading-skeleton';
import * as Yup from 'yup';
import { ProgressBar, RotatingLines } from 'react-loader-spinner';
import { AnimatePresence, motion } from 'framer-motion';

const categories = [
  { name: 'POWER AND ENERGY' },
  { name: 'SMART SECURITY' },
  { name: 'SOFTWARE DEVELOPMENT' },
  { name: 'TEACHING COURSES' },
  { name: 'BUILDING AND CONSTRUCTION' },
  { name: 'ROBOTICS AND AUTOMATION' },
];

const GetQuote = () => {
  useEffect(() => {
    GetTestimonials();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [openCategories, setOpenCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('POWER AND ENERGY');
  const [addLoading, setAddLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const GetTestimonials = async () => {
    setPageLoading(true);
    try {
      const response = await axios.get(`${BaseURL}/testimonials/`);
      setTestimonialsData(response.data?.results);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const uploadImg = async (setFieldValue, file) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(
        `${BaseURL}/courses/upload_file/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setFieldValue('image', response.data.file);
      setLoading(false);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  const handleDrop = (e, setFieldValue) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type.startsWith('image/')) {
      uploadImg(setFieldValue, droppedFile);
    } else {
      alert('Please drop an image file!');
    }
  };

  const handleFileInputChange = (e, setFieldValue) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      uploadImg(setFieldValue, selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleSubmit = async (values, resetForm) => {
    setAddLoading(true);
    if (values?.image != '') {
      try {
        const response = await axios.post(`${BaseURL}/testimonials/`, values);
        setAddLoading(false);
        toast.success('Success', {
          position: 'top-right',
        });
        console.log(response);
        resetForm();
      } catch (error) {
        console.error('Error uploading file: ', error);
        toast.error('An error occured, please try again!', {
          position: 'top-right',
        });
        setAddLoading(false);
      }
    } else {
      setAddLoading(false);
      alert('Please select an image');
    }
  };
  return (
    <div className=' w-full bg-[#F7F7F7]'>
      <Header />
      {!pageLoading ? (
        <div className='flex md:min-h-[100vh] lg:min-h-[160vh] flex-col pt-[80px] pb-[100px] items-center justify-center '>
          <div className='flex flex-col gap-[16px] items-center justify-center'>
            <h1 className='font-[600] text-[24px] leading-[34px]'>
              GET A QUOTATION
            </h1>
            <div className='yellowLine' />
          </div>
          <div className='flex flex-col justify-center md:flex-row w-full mt-[56px] gap-[64px]'>
            <div className='w-[429px] hidden lg:flex flex-col gap-[16px] '>
              {testimonialsData &&
                testimonialsData.map((testimony, index) => (
                  <div
                    key={index}
                    className='flex flex-col mx-[20px] rounded-[16px] gap-[20px] w-[429px] border backg p-[20px] bg-[#fff] items-center'
                  >
                    <div className='flex flex-col gap-[11px]'>
                      <h1 className='text-[18px] font-[400] z-1 leading-[27px] '>
                        {testimony?.content}
                      </h1>
                      <div className='flex flex-row gap-[12px] items-center'>
                        <div>
                          <img
                            src={testimony?.author_image}
                            className='w-[49px] h-[49px] rounded-[50%]'
                            alt=''
                          />
                        </div>
                        <span className='flex flex-col gap-[8px] font-[400] text-[14px] profile_col leading-[16px]'>
                          {testimony?.author},<p>{testimony?.proffession}</p>
                        </span>
                      </div>
                    </div>
                    <div className='absolute items-right mt-[-1px] ml-[300px] '>
                      <img
                        src={Media}
                        className='sm:w-[52px] lg:h-[36px] lg:w-[74px] lg:h-[51px]   '
                        alt=''
                      />
                    </div>
                  </div>
                ))}
            </div>

            <div className='flex flex-col w-full px-[16px] mdl:px-0 md:w-[418px] gap-[16px]'>
              <div className='flex items-center justify-center bg-[#DDEAFF] border border-[1px] border-[#0043CE] rounded-[16px] p-[10px]'>
                <span className='text-center font-[400] text-[14px] mdl:text-[16px] leading-[24px]'>
                  We aim to provide quotes within three business days
                </span>
              </div>

              <Formik
                initialValues={{
                  description: '',
                  category: '',
                  image: '',
                  phoneNumber: '',
                  email: '',
                }}
                validationSchema={Yup.object({
                  description: Yup.string().required('Required'),
                  category: Yup.string().required('Required'),
                  phoneNumber: Yup.string().required('Required'),
                  email: Yup.string().required('Required'),
                })}
                onSubmit={(values, { resetForm }) => {
                  handleSubmit(values, resetForm);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  setFieldValue,
                }) => (
                  <Form className='flex flex-col gap-[16px] ' action=''>
                    <div className='flex flex-col gap-[6px]'>
                      <label
                        className='font-[600] text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='description'
                      >
                        Describe your project
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
                        {touched.description && errors.description && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                          >
                            <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                              {errors.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <label
                        className='font-[600] text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='description'
                      >
                        Project category
                      </label>
                      <div
                        onClick={() => setOpenCategories(!openCategories)}
                        className='w-full px-[16px] text-[#9DA1A7] hover:cursor-pointer py-[10px] flex flex-row justify-between items-center bg-white course_input rounded-[6px]  text-[14px]'
                      >
                        <span>{selectedCategory}</span>
                        <img src={ArrowDown} alt='' />
                      </div>
                      {openCategories && (
                        <div
                          onClick={() => setOpenCategories(!openCategories)}
                          className='absolute top-0 left-0 right 0 bg-[transparent] w-full h-full z-2 '
                        ></div>
                      )}
                      {openCategories && (
                        <div className='absolute bg-white  mdl:w-[418px] z-3 mt-[80px] rounded-[8px] flex flex-col border '>
                          {categories.map((category, index) => (
                            <div
                              key={index}
                              onClick={() => (
                                setFieldValue('category', category.name),
                                setSelectedCategory(category.name),
                                setOpenCategories(false)
                              )}
                              className='hover:bg-blue-600 hover:text-[#fff] hover:cursor-pointer transition duration-200 ease-in-out px-[12px] rounded-[8px] py-[6px]'
                            >
                              {category.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <label
                        className='font-[600] text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='description'
                      >
                        Upload relevant documents
                      </label>
                      {!loading ? (
                        <>
                          {!values.image ? (
                            <div
                              className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
                              onDrop={e => handleDrop(e, setFieldValue)}
                              onDragOver={handleDragOver}
                            >
                              <input
                                type='file'
                                id='fileInput'
                                accept='image/*'
                                name='image'
                                style={{ display: 'none' }}
                                onChange={e =>
                                  handleFileInputChange(e, setFieldValue)
                                }
                              />
                              <img
                                className='hover:cursor-pointer'
                                onClick={() =>
                                  document.getElementById('fileInput').click()
                                }
                                src={CloudAdd}
                                alt=''
                              />
                              <div className='flex flex-col gap-[8px] items-center justify-center'>
                                <h1 className='inter__ font-[500] text-[14px]'>
                                  Choose a file or drag & drop it here
                                </h1>
                                <span className='font-[500] inter__ text-[12px] leading-[15px] text-fileCol'>
                                  JPEG, PNG, and PDG formats, up to 50MB
                                </span>
                              </div>
                              <div
                                className='course_input w-[104px] h-[40px] flex items-center justify-center font-[500] text-mainBlue rounded-[12px] text-[14px] hover:cursor-pointer hover:opacity-[0.9] transition duration-300 '
                                onClick={() =>
                                  document.getElementById('fileInput').click()
                                }
                              >
                                Browse Image
                              </div>
                            </div>
                          ) : (
                            <div className='w-full  rounded-[12px]'>
                              <div className='absolute justify-end mt-[4px] ml-[376px] mdl:ml-[466px] flex items-end'>
                                <div
                                  onClick={() => setFieldValue('file', '')}
                                  className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                                >
                                  X
                                </div>
                              </div>
                              <img
                                src={values.image}
                                className=' w-full rounded-[12px]'
                                alt=''
                              />
                            </div>
                          )}
                        </>
                      ) : (
                        <div className='w-full flex items-center rounded-[14px]'>
                          <Skeleton width={400} height={192} />
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                      <label
                        className='font-[600] text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='phoneNumber'
                      >
                        Phone number
                      </label>
                      <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                        <input
                          type='text'
                          name='phoneNumber'
                          required
                          onChange={handleChange('phoneNumber')}
                          onBlur={handleBlur('phoneNumber')}
                          className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                        />
                      </div>
                      <AnimatePresence>
                        {touched.phoneNumber && errors.phoneNumber && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                          >
                            <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                              {errors.phoneNumber}
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

                    {!addLoading ? (
                      <button
                        type='submit'
                        className='text-[16px] hover:opacity-[0.9] text-black bg-[#FEC910] rounded-[8px] font-[600] w-full h-[48px] flex items-center justify-center '
                      >
                        GET QUOTE
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
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full h-[80vh] flex items-center justify-center'>
          <RotatingLines
            visible={true}
            height='40'
            width='40'
            strokeColor='green'
            strokeWidth='3'
            animationDuration='0.75'
            ariaLabel='rotating-lines-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </div>
      )}
    </div>
  );
};

export default GetQuote;
