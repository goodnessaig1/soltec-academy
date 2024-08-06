import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Media from '../../assets/media-1.svg';
import { ArrowDown, CloudAdd } from '../../Utils/assets';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ProgressBar, RotatingLines } from 'react-loader-spinner';
import { AnimatePresence, motion } from 'framer-motion';
import { BaseURL, apiRequest } from '../../Utils/apiRequest';
import Header from '../common/Header';
import { testimonialDummyData } from '../DummyData/testimonialData';
import Checked from '../../assets/checked.png';

const categories = [
  { name: 'POWER_AND_ENERGY' },
  { name: 'SMART_SECURITY' },
  { name: 'SOFTWARE_DEVELOPMENT' },
  { name: 'TEACHING_COURSES' },
  { name: 'BUILDING_AND_CONSTRUCTION' },
  { name: 'ROBOTICS_AND_AUTOMATION' },
];

const GetQuote = () => {
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [openCategories, setOpenCategories] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedproject_category, setSelectedproject_category] = useState('');
  const [addLoading, setAddLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    getTestimonials();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const getTestimonials = async () => {
    setPageLoading(true);
    try {
      const response = await apiRequest(
        'GET',
        `/testimonials/?tag=ENGINEERING`,
      );
      setTestimonialsData(response.results);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);
      console.log('error', error);
    }
  };

  const handleDrop = (e, setFieldValue, setFieldError) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFileType(droppedFile, setFieldValue, setFieldError);
  };

  const handleFileChange = (event, setFieldValue, setFieldError) => {
    const file = event.target.files[0];
    handleFileType(file, setFieldValue, setFieldError);
  };

  const handleFileType = (file, setFieldValue, setFieldError) => {
    if (file) {
      const type = file.type;
      if (type.startsWith('image/')) {
        setFieldValue('project_document', file);
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setPreview(reader.result);
          };
        }
      } else if (type === 'application/pdf') {
        setFieldValue('project_document', file);
        setFileName(file.name);
      } else if (
        type === 'application/msword' ||
        type ===
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setFieldValue('project_document', file);
        setFileName(file.name);
      } else {
        setFieldError('project_document', 'Invalid file type');
      }
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleSubmit = async (values, resetForm) => {
    let formData = new FormData();
    formData.append(`project_document`, values?.project_document);
    formData.append(`project_description`, values?.project_description);
    formData.append(`project_category`, values?.project_category);
    formData.append(`phone_number`, values?.phone_number);
    formData.append(`email`, values?.email);
    setAddLoading(true);
    try {
      const response = await fetch(`${BaseURL}/get-quota/`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        resetForm();
        setFileName('');
        setPreview('');
        setAddLoading(false);
        setSuccess(true);
      } else {
        console.error('An error occured', response.statusText);
        setAddLoading(false);
      }
    } catch (error) {
      toast.error('An error occured, please try again!', {
        position: 'top-right',
      });
      setAddLoading(false);
    }
  };
  return (
    <div className='w-full min-h-screen bg-[#F7F7F7]'>
      {success && <SuccessModal setSuccess={setSuccess} />}
      <div className=''>
        <Header />
      </div>
      {!pageLoading ? (
        <div className='flex flex-col pt-10 pb-[100px] items-center justify-center '>
          <div className='flex flex-col gap-4 items-center justify-center'>
            <h1 className='font-semibold text-[24px] leading-[34px]'>
              GET A QUOTATION
            </h1>
            <div className='yellowLine' />
          </div>
          <div className='flex flex-col justify-center md:flex-row w-full mt-[56px] gap-[64px]'>
            <div className='w-[429px] hidden lg:flex flex-col gap-4 '>
              {testimonialsData && testimonialsData.length > 2 ? (
                <Testimonials testimonialsData={testimonialsData} />
              ) : (
                <Testimonials testimonialsData={testimonialDummyData} />
              )}
            </div>

            <div className='flex flex-col w-full px-[16px] mdl:px-0 md:w-[418px] gap-4'>
              <div className='flex items-center justify-center bg-[#DDEAFF] border border-[1px] border-[#0043CE] rounded-[16px] p-2.5'>
                <span className='text-center font-normal text-[14px] mdl:text-[16px] leading-[24px]'>
                  We aim to provide quotes within three business days
                </span>
              </div>

              <Formik
                initialValues={{
                  project_description: '',
                  project_category: '',
                  project_document: '',
                  phone_number: '',
                  email: '',
                }}
                validationSchema={Yup.object({
                  project_description: Yup.string().required('Required'),
                  project_category: Yup.string().required('Required'),
                  project_document: Yup.string().required(
                    'Select a valid file',
                  ),
                  phone_number: Yup.string().required('Required'),
                  email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                })}
                onSubmit={(values, { resetForm }) => {
                  handleSubmit(values, resetForm);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  errors,
                  touched,
                  setFieldValue,
                  setFieldError,
                }) => (
                  <Form className='flex flex-col gap-4 ' action=''>
                    <div className='flex flex-col gap-1.5'>
                      <label
                        className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='project_description'
                      >
                        Describe your project
                      </label>
                      <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                        <Field
                          as='textarea'
                          type='text'
                          style={{ height: '126px', resize: 'none' }}
                          name='project_description'
                          required
                          onChange={handleChange('project_description')}
                          onBlur={handleBlur('project_description')}
                          className='outline-none pt-2 pl-4 p-2.5 text-base bg-transparent w-full'
                        />
                      </div>
                      <AnimatePresence>
                        {touched.project_description &&
                          errors.project_description && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.7, ease: 'easeInOut' }}
                            >
                              <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                                {errors.project_description}
                              </p>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label
                        className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='project_description'
                      >
                        Project category
                      </label>
                      <div
                        onClick={() => setOpenCategories(!openCategories)}
                        className='w-full px-[16px] text-[#9DA1A7] hover:cursor-pointer py-[10px] flex flex-row justify-between items-center bg-white course_input rounded-[6px]  text-[14px]'
                      >
                        <span>
                          {selectedproject_category
                            ? selectedproject_category
                            : 'Select project category'}
                        </span>
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
                          {categories.map((project_category, index) => (
                            <div
                              key={index}
                              onClick={() => (
                                setFieldValue(
                                  'project_category',
                                  project_category.name,
                                ),
                                setSelectedproject_category(
                                  project_category.name,
                                ),
                                setOpenCategories(false)
                              )}
                              className='hover:bg-blue-600 hover:text-white hover:cursor-pointer transition duration-200 ease-in-out px-[12px] rounded-[8px] py-[6px]'
                            >
                              {project_category.name}
                            </div>
                          ))}
                        </div>
                      )}
                      <AnimatePresence>
                        {touched.project_category &&
                          errors.project_category && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.7, ease: 'easeInOut' }}
                            >
                              <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                                {errors.project_category}
                              </p>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label
                        className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='project_description'
                      >
                        Upload relevant documents
                      </label>
                      <>
                        {!preview && !fileName && (
                          <div
                            className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-4 py-6 items-center'
                            onDrop={e =>
                              handleDrop(e, setFieldValue, setFieldError)
                            }
                            onDragOver={handleDragOver}
                          >
                            <input
                              type='file'
                              id='fileInput'
                              name='project_document'
                              style={{ display: 'none' }}
                              onChange={event =>
                                handleFileChange(
                                  event,
                                  setFieldValue,
                                  setFieldError,
                                )
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
                            <div className='flex flex-col gap-2 items-center justify-center'>
                              <h1 className='inter__ font-medium text-[14px]'>
                                Choose a file or drag & drop it here
                              </h1>
                              <span className='font-medium inter__ text-[12px] leading-[15px] text-fileCol'>
                                JPEG, PNG, and PDG,PDF formats, up to 50MB
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
                        )}
                        {preview && (
                          <div className='w-full max-h-[192px] rounded-[12px]'>
                            <div className='absolute justify-end mt-1 ml-[300px] smm:ml-[346px] mdl:ml-[380px] flex items-end'>
                              <div
                                onClick={() => (
                                  setFieldValue('project_document', ''),
                                  setPreview('')
                                )}
                                className='bg-extraGray w-[30px] h-[30px] hover:bg-white transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                              >
                                X
                              </div>
                            </div>
                            <img
                              src={preview}
                              className='object-cover w-full h-[192px] rounded-[12px]'
                              alt=''
                            />
                          </div>
                        )}
                        {fileName && (
                          <div className='dropZone px-4 w-full h-[192px] rounded-[12px] py-2'>
                            <div className='absolute justify-end  ml-[356px] mdl:ml-[362px] flex items-end'>
                              <div
                                onClick={() => (
                                  setFieldValue('project_document', ''),
                                  setFileName('')
                                )}
                                className='bg-extraGray w-[30px] h-[30px] hover:bg-white transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                              >
                                X
                              </div>
                            </div>
                            <span className='w-full truncate overflow-hidden whitespace-nowrap text-ellipsis text-center flex items-center justify-center h-full'>
                              {fileName}
                            </span>
                          </div>
                        )}
                      </>
                      <AnimatePresence>
                        {touched.project_document &&
                          errors.project_document && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.7, ease: 'easeInOut' }}
                            >
                              <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                                {errors.project_document}
                              </p>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label
                        className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
                        htmlFor='phone_number'
                      >
                        Phone number
                      </label>
                      <div className='w-full bg-white course_input rounded-[6px]  text-[14px]'>
                        <input
                          type='text'
                          name='phone_number'
                          required
                          onChange={handleChange('phone_number')}
                          onBlur={handleBlur('phone_number')}
                          className='outline-none text-base pt-2 pl-4 p-2.5 bg-transparent w-full'
                        />
                      </div>
                      <AnimatePresence>
                        {touched.phone_number && errors.phone_number && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                          >
                            <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                              {errors.phone_number}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className='flex flex-col gap-1.5'>
                      <label
                        className='font-semibold text-[14px] leading-[21px] text-[#1C1C1C]'
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
                          className='outline-none text-base pt-2 pl-4 p-2.5 bg-transparent w-full'
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
                        className='text-[16px] hover:opacity-[0.9] text-black bg-[#FEC910] rounded-[8px] font-semibold w-full h-[48px] flex items-center justify-center '
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
            strokeColor='gray'
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

const Testimonials = ({ testimonialsData }) => {
  return (
    <>
      {testimonialsData &&
        testimonialsData.slice(0, 3).map((testimony, index) => (
          <div
            key={index}
            className='flex flex-col mx-[20px] rounded-[16px] gap-[20px] w-[429px] border backg p-[20px] bg-white items-center'
          >
            <div className='flex flex-col gap-[11px]'>
              <h1 className='text-[18px] font-normal z-1 leading-[27px] '>
                {testimony?.content.length > 170
                  ? `${testimony?.content.substring(0, 170)}...`
                  : testimony?.content}
              </h1>
              <div className='flex flex-row gap-[12px] items-center'>
                <div>
                  <img
                    src={testimony?.author_image}
                    className='w-[49px] h-[49px] rounded-[50%]'
                    alt=''
                  />
                </div>
                <span className='flex flex-col gap-2 font-normal text-[14px] profile_col leading-[16px]'>
                  {testimony?.author},<p>{testimony?.profession}</p>
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
    </>
  );
};
const SuccessModal = ({ setSuccess }) => {
  return (
    <div className='fixed z-10 h-screen px-3 top-0 left-0 right-0 bottom-0 md:px-0 flex  items-center justify-center bg-transparent'>
      <div
        onClick={() => setSuccess(false)}
        className='w-full z-[4] fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 bg-[#000000B2]'
      ></div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='z-[20] flex flex-col gap-1 px-2 lg:px-10 w-[300px] lg:w-[360px] h-[310px] bg-white rounded-2xl lg:p-6 items-center justify-center'
        >
          <img src={Checked} alt='' />
          <span className='font-semibold text-2xl'>Success!</span>
          <span className='max-w-[397px] text-center  text-sm: lgtext-lg'>
            You have successfully submitted the details! You will get your
            quotes within three business days
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
