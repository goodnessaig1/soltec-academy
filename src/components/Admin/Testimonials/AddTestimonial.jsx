/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Layout from '../Common/Layout';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import { useState } from 'react';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { BaseURL } from '../../../Utils/BaseUrl';
import { ProgressBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const AddTestimonial = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);

  const uploadImg = async (setFieldValue, file) => {
    setLoading(true);
    /testimonials/;
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
      setFieldValue('author_image', response.data.file);
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
    if (values?.author_image != '') {
      try {
        const response = await axios.post(`${BaseURL}/testimonials/`, values);
        setAddLoading(false);
        toast.success('Success', {
          position: 'top-right',
        });
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
    <Layout text='Testimonials'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        <div
          onClick={() => navigate(-1)}
          className='w-[39px] h-[39px] flex items-center justify-center bg-backBg rounded-[50%]'
        >
          <img src={BackArrow} alt='' />
        </div>
        <div className='flex flex-col gap-[24px] max-w-[505px]'>
          <h1 className='font-[500] text-[14px] leading-[17px]'>ADD SPONSOR</h1>
          <Formik
            initialValues={{
              author: '',
              content: '',
              proffession: '',
              author_image: '',
            }}
            validationSchema={Yup.object({
              author: Yup.string()
                .max(20, 'max 20 characters')
                .required('Required'),
              proffession: Yup.string()
                .max(20, 'max 20 characters')
                .required('Required'),
              content: Yup.string()
                .max(260, 'max 260 characters')
                .required('Required'),
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
              <Form className='flex flex-col gap-[22px] w-full'>
                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor='author'
                  >
                    Author (max 20 characters)
                  </label>
                  <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                    <input
                      type='text'
                      name='author'
                      required
                      onChange={handleChange('author')}
                      onBlur={handleBlur('author')}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                  <AnimatePresence>
                    {touched.author && errors.author && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {errors.author}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor='title'
                  >
                    Title / Position
                  </label>
                  <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                    <input
                      type='text'
                      name='proffession'
                      required
                      onChange={handleChange('proffession')}
                      onBlur={handleBlur('proffession')}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                  <AnimatePresence>
                    {touched.proffession && errors.proffession && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {errors.proffession}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor='content'
                  >
                    Content
                  </label>
                  <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                    <input
                      type='text'
                      name='content'
                      required
                      onChange={handleChange('content')}
                      onBlur={handleBlur('content')}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                  <AnimatePresence>
                    {touched.content && errors.content && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {errors.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor=''
                  >
                    Author image
                  </label>
                  {!loading ? (
                    <>
                      {!values.author_image ? (
                        <div
                          className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
                          onDrop={e => handleDrop(e, setFieldValue)}
                          onDragOver={handleDragOver}
                        >
                          <input
                            type='file'
                            id='fileInput'
                            accept='image/*'
                            name='file'
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
                          <div className='absolute justify-end mt-[4px] ml-[466px] flex items-end'>
                            <div
                              onClick={() => setFieldValue('file', '')}
                              className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                            >
                              X
                            </div>
                          </div>
                          <img
                            src={values.author_image}
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
                {!addLoading ? (
                  <button
                    type='submit'
                    className='text-[16px] hover:opacity-[0.9] text-white bg-mainBlue rounded-[16px] font-[600] w-[505px] h-[48px] flex items-center justify-center mt-[8px]'
                  >
                    Add
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
    </Layout>
  );
};

export default AddTestimonial;
