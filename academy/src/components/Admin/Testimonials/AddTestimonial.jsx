/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Layout from '../Common/Layout';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ProgressBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { adminApiRequest, uploadFile } from '../../../Utils/ApiRequest';

const AddTestimonial = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);

  const uploadImg = async (setFieldValue, file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadFile(formData, setLoading);
      setFieldValue('author_image', response?.file);
    } catch (error) {
      console.error('Upload failed:', error);
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
        await adminApiRequest('POST', `/testimonials/`, values);
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
      <div className='w-full inter__ flex flex-col gap-9 px-9 pb-[140px]'>
        <div
          onClick={() => navigate(-1)}
          className='w-10 hover:cursor-pointer hover:bg-extraGray transition duration-300 h-10 flex items-center justify-center bg-backBg rounded-[50%]'
        >
          <img src={BackArrow} alt='' />
        </div>
        <div className='flex flex-col gap-4 max-w-[505px]'>
          <h1 className='font-medium text-[14px] leading-[17px]'>
            ADD TESTIMONIAL
          </h1>
          <Formik
            initialValues={{
              author: '',
              content: '',
              profession: '',
              author_image: '',
            }}
            validationSchema={Yup.object({
              author: Yup.string()
                .max(20, 'max 20 characters')
                .required('Required'),
              profession: Yup.string()
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
                <div className='flex flex-col gap-4'>
                  <label
                    className='font-semibold text-[14px] leading-[21px]'
                    htmlFor='author'
                  >
                    Author (max 20 characters)
                  </label>
                  <div className='w-full course_input rounded-[12px] h-10 text-[14px]'>
                    <input
                      type='text'
                      name='author'
                      required
                      onChange={handleChange('author')}
                      onBlur={handleBlur('author')}
                      className='outline-none pt-2 pl-4 p-2.5 bg-transparent w-full'
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
                        <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                          {errors.author}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex flex-col gap-4'>
                  <label
                    className='font-semibold text-[14px] leading-[21px]'
                    htmlFor='title'
                  >
                    Title / Position
                  </label>
                  <div className='w-full course_input rounded-[12px] h-10 text-[14px]'>
                    <input
                      type='text'
                      name='profession'
                      required
                      onChange={handleChange('profession')}
                      onBlur={handleBlur('profession')}
                      className='outline-none pt-2 pl-4 p-2.5 bg-transparent w-full'
                    />
                  </div>
                  <AnimatePresence>
                    {touched.profession && errors.profession && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {errors.profession}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex flex-col gap-4'>
                  <label
                    className='font-semibold text-[14px] leading-[21px]'
                    htmlFor='content'
                  >
                    Content
                  </label>
                  <div className='w-full course_input rounded-[12px] h-10 text-[14px]'>
                    <input
                      type='text'
                      name='content'
                      required
                      onChange={handleChange('content')}
                      onBlur={handleBlur('content')}
                      className='outline-none pt-2 pl-4 p-2.5 bg-transparent w-full'
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

                <div className='flex flex-col gap-4'>
                  <label
                    className='font-semibold text-[14px] leading-[21px]'
                    htmlFor=''
                  >
                    Author image
                  </label>
                  {!loading ? (
                    <>
                      {!values.author_image ? (
                        <div
                          className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-4 py-6 items-center'
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
                          <div className='flex flex-col gap-4 items-center justify-center'>
                            <h1 className='inter__ font-medium text-[14px]'>
                              Choose a file or drag & drop it here
                            </h1>
                            <span className='font-medium inter__ text-[12px] leading-[15px] text-fileCol'>
                              JPEG, PNG, and PDG formats, up to 50MB
                            </span>
                          </div>
                          <div
                            className='course_input w-[104px] h-10 flex items-center justify-center font-medium text-mainBlue rounded-[12px] text-[14px] hover:cursor-pointer hover:opacity-[0.9] transition duration-300 '
                            onClick={() =>
                              document.getElementById('fileInput').click()
                            }
                          >
                            Browse Image
                          </div>
                        </div>
                      ) : (
                        <div className='w-full  rounded-[12px]'>
                          <div className='absolute justify-end mt-1 ml-[466px] flex items-end'>
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
                    className='text-[16px] hover:opacity-[0.9] text-white bg-mainBlue rounded-[16px] font-semibold w-[505px] h-12 flex items-center justify-center mt-2'
                  >
                    Add
                  </button>
                ) : (
                  <div className='w-full flex items-center justify-center h-12'>
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
