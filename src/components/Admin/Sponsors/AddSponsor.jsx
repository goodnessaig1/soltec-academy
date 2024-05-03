/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import Layout from '../Common/Layout';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { AnimatePresence, motion } from 'framer-motion';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner';
import { apiRequest, uploadFile } from '../../../Utils/ApiRequest';

const AddSponsor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);

  const uploadImg = async (setFieldValue, file) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadFile(formData, setLoading);
      setFieldValue('logo', response?.file);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type.startsWith('image/')) {
      uploadImg(droppedFile);
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

  const handleSubmit = async (values, resetForm, setFieldValue) => {
    setAddLoading(true);
    if (values?.logo != '') {
      try {
        await apiRequest('POST', `/sponsors/`, values);
        setAddLoading(false);
        toast.success('Success', {
          position: 'top-right',
        });
        resetForm();
        setFieldValue('name', '');
      } catch (error) {
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
    <Layout text='Sponsors'>
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
              name: '',
              logo: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(20, 'max 20 characters')
                .required('Required'),
            })}
            onSubmit={(values, { resetForm, setFieldValue }) => {
              handleSubmit(values, resetForm, setFieldValue);
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
                    Name (max 20 characters)
                  </label>
                  <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                    <input
                      type='text'
                      name='name'
                      required
                      onChange={handleChange('name')}
                      onBlur={handleBlur('name')}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                  <AnimatePresence>
                    {touched.name && errors.name && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {errors.name}
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
                    Sponsor Logo
                  </label>
                  {!loading ? (
                    <>
                      {!values.logo ? (
                        <div
                          className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
                          onDrop={handleDrop}
                          onDragOver={handleDragOver}
                        >
                          <input
                            type='file'
                            id='fileInput'
                            accept='image/*'
                            name='logo'
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
                              onClick={() => setFieldValue('logo', '')}
                              className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                            >
                              X
                            </div>
                          </div>
                          <img
                            src={values.logo}
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

export default AddSponsor;
