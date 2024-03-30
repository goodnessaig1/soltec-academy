/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Layout from '../Common/Layout';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import { AddRound, CircleGradient, UploadIcon } from '../../../Utils/Assets';
import Good from '../../../assets/good.png';
import { useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import {
  OverViewContainer,
  InstructorInfo,
  FAQInputContainer,
} from './AddCourseInputs';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { faqsData } from '../../HomePage/FaqsData';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Oval, ProgressBar } from 'react-loader-spinner';
import { BaseURL } from '../../../Utils/BaseUrl';

const AddCourses = () => {
  const navigate = useNavigate();

  const fileInputRef = useRef();
  const [overallLoading, setOverallLoading] = useState(false);
  const [background, setBackground] = useState('#5a1994');
  const [openColor, setOpenColor] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseNameError, setCourseNameError] = useState(false);
  const [courseDescription, setCourseDescription] = useState('');
  const [price, setPrice] = useState('');
  const [openOverview, setOpenOverview] = useState(false);

  const [openInstructorInfo, setOpenInstructorInfo] = useState(false);
  const [instructorInfoIndex, setInstructorInfoIndex] = useState(1);
  const [instructorInfo1, setInstructorInfo1] = useState({
    name: '',
    proffession: '',
    image: '',
  });
  const [instructorInfo2, setInstructorInfo2] = useState({
    name: '',
    proffession: '',
    image: '',
  });

  const [overview1, setOverview1] = useState({ header: '', body: '' });
  const [overview2, setOverview2] = useState({ header: '', body: '' });
  const [overview3, setOverview3] = useState({ header: '', body: '' });
  const [overview4, setOverview4] = useState({ header: '', body: '' });
  const [overview5, setOverview5] = useState({ header: '', body: '' });
  const [overview6, setOverview6] = useState({ header: '', body: '' });
  const [overviewIndex, setOverviewIndex] = useState('1');
  const [overviewError, setOverviewError] = useState(false);
  const [overviews, setOverviews] = useState([
    overview1,
    overview2,
    overview3,
    overview4,
    overview5,
    overview6,
  ]);

  const [openFaqs, setOpenFaqs] = useState(false);
  const [faqs, setFAQs] = useState([{ id: 1, question: '', answer: '' }]);
  const [activeId, setActiveId] = useState(1);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const [loading, setLoading] = useState(false);
  const [videoSuccess, setVideoSuccess] = useState(false);
  const [vidLoading, setVidLoading] = useState(false);

  const [backgroundImg, setBackgroundImg] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleChangeComplete = color => {
    setBackground(color.hex);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };
  const uploadVideo = async () => {
    if (file != null) {
      try {
        setVidLoading(true);
        setVideoError(null);
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
        setFileUrl(response.data.file);
        setVideoSuccess(true);
        setVidLoading(false);
        setTimeout(() => {
          setVideoSuccess(false);
        }, 6000);
      } catch (error) {
        console.error('Error uploading file: ', error);
      }
    } else {
      setVideoError('Please select a video');
    }
  };

  const uploadBackgroundImg = async file => {
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
      setBackgroundImg(response.data.file);
      setLoading(false);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  const handleFileInputChange = async e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      uploadBackgroundImg(selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type.startsWith('image/')) {
      uploadBackgroundImg(droppedFile);
    } else {
      alert('Please drop an image file!');
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const isHeaderOrBodyEmpty = data => {
    return data.header.trim() === '' || data.body.trim() === '';
  };

  const clearForm = () => {
    setCourseName('');
    setBackgroundImg(null);
    setFAQs([{ id: 1, question: '', answer: '' }]);
    setCourseDescription('');
    setPrice('');
    setFileUrl(null);
    setFile(null);
    setBackgroundImg(null);
    setOverviews([]);
    setOverview1({ header: '', body: '' });
    setOverview2({ header: '', body: '' });
    setOverview3({ header: '', body: '' });
    setOverview4({ header: '', body: '' });
    setOverview5({ header: '', body: '' });
    setOverview6({ header: '', body: '' });
    setInstructorInfo1({
      name: '',
      proffession: '',
      image: '',
    });
    setInstructorInfo2({
      name: '',
      proffession: '',
      image: '',
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const values = {
      title: courseName,
      color_code: background,
      description: courseDescription,
      price: price,
      video: fileUrl,
      background_image: backgroundImg,
      instructors: [instructorInfo1, instructorInfo2],
      faqs: faqs,
      overviews: overviews,
    };
    const overviewHasEmptyHeaderOrBody =
      values.overviews.some(isHeaderOrBodyEmpty);
    if (!overviewHasEmptyHeaderOrBody) {
      setOverviewError(null);
      console.log('overview do not have');
    } else {
      setOverviewError('Some fields for overview are empty');
      return console.log('overview has');
    }
    if (fileUrl === null) {
      setVideoError('Please select and upload a video');
    }
    if (!overviewHasEmptyHeaderOrBody && fileUrl != null) {
      setOverallLoading(true);
      try {
        const response = await axios.post(
          'https://academy-wo2r.onrender.com/api/v1/courses/create_course/',
          values,
        );
        setOverallLoading(false);
        clearForm();
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Layout text='Courses'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        {openOverview && (
          <OverViewContainer
            setOpenOverview={setOpenOverview}
            overviewIndex={overviewIndex}
            setOverviewIndex={setOverviewIndex}
            overview1={overview1}
            setOverview1={setOverview1}
            overview2={overview2}
            setOverview2={setOverview2}
            overview3={overview3}
            setOverview3={setOverview3}
            overview4={overview4}
            setOverview4={setOverview4}
            overview5={overview5}
            setOverview5={setOverview5}
            overview6={overview6}
            setOverview6={setOverview6}
            overviews={overviews}
            setOverviews={setOverviews}
          />
        )}
        {openInstructorInfo && (
          <InstructorInfo
            openInstructorInfo={openInstructorInfo}
            setOpenInstructorInfo={setOpenInstructorInfo}
            instructorInfoIndex={instructorInfoIndex}
            setInstructorInfoIndex={setInstructorInfoIndex}
            instructorInfo1={instructorInfo1}
            setInstructorInfo1={setInstructorInfo1}
            instructorInfo2={instructorInfo2}
            setInstructorInfo2={setInstructorInfo2}
          />
        )}
        {openFaqs && (
          <FAQInputContainer
            openFaqs={openFaqs}
            setOpenFaqs={setOpenFaqs}
            faqs={faqs}
            setFAQs={setFAQs}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        )}
        <div
          onClick={() => navigate(-1)}
          className='w-[39px] h-[39px] flex items-center justify-center bg-backBg rounded-[50%]'
        >
          <img src={BackArrow} alt='' />
        </div>
        <div className='flex flex-row justify-between'>
          <div className='w-[505px] flex flex-col gap-[22px]'>
            <div className='flex flex-row justify-between'>
              <h1 className='font-[500] text-[14px] leading-[17px]'>
                ADD COURSE
              </h1>
              <span className='text-[14px] font-[600] text-mainBlue underline leading-[21px]'>
                Preview course
              </span>
            </div>
            <form onSubmit={e => handleSubmit(e)} action=''>
              <div className='flex flex-col gap-[22px]'>
                <div className='flex flex-col gap-[6px] '>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor=''
                  >
                    Name
                  </label>
                  <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                    <input
                      type='text'
                      name='courseName'
                      required
                      value={courseName}
                      onChange={e => {
                        setCourseName(e.target.value);
                        if (courseName.length > 20) {
                          setCourseNameError('Name too long');
                        } else {
                          setCourseNameError(false);
                        }
                      }}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                  <AnimatePresence>
                    {courseNameError && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {courseNameError}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex flex-col gap-[6px] '>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor='description'
                  >
                    Description
                  </label>
                  <div className='w-full course_input rounded-[12px] text-[14px]'>
                    <textarea
                      style={{ height: '126px', resize: 'none' }}
                      type='text'
                      name='courseDescription'
                      required
                      value={courseDescription}
                      onChange={e => setCourseDescription(e.target.value)}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-[6px] '>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor='price'
                  >
                    Price
                  </label>
                  <div className='w-[265px] flex flex-row justify-between course_input rounded-[12px] h-[40px] text-[14px]'>
                    <input
                      name='price'
                      type='text'
                      value={price}
                      required
                      onChange={e => setPrice(e.target.value)}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                    <div className='w-[51px] flex items-center justify-center bg-extraGray rounded-r-[12px]'>
                      NGN
                    </div>
                  </div>
                </div>
                <div className='flex z-3 flex-col gap-[6px] w-[242px] '>
                  <label
                    className='font-[600]  text-[14px] leading-[21px]'
                    htmlFor='color'
                  >
                    Color
                  </label>

                  <div
                    onClick={() => setOpenColor(true)}
                    className='flex flex-row z-3 course_input w-[121px] cursor-pointer items-center gap-[10px] px-[6px] rounded-[50px] h-[50px] '
                  >
                    <div
                      style={{
                        backgroundColor: background,
                      }}
                      className='rounded-[50%] z_ind h-[37px] hover:cursor-pointer w-[37px] '
                    />
                    <div className=''>{background.slice(1)}</div>
                  </div>
                  {openColor && (
                    <SketchPicker
                      color={background}
                      onChangeComplete={handleChangeComplete}
                    />
                  )}
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor=''
                  >
                    Background image
                  </label>
                  {!loading ? (
                    <>
                      {!backgroundImg ? (
                        <div
                          className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
                          onDrop={handleDrop}
                          onDragOver={handleDragOver}
                        >
                          <input
                            type='file'
                            id='fileInput'
                            accept='image/*'
                            style={{ display: 'none' }}
                            onChange={handleFileInputChange}
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
                        <div className='w-full h-[192px] rounded-[12px]'>
                          <div className='absolute justify-end mt-[4px] ml-[466px] flex items-end'>
                            <div
                              onClick={() => setBackgroundImg(null)}
                              className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                            >
                              X
                            </div>
                          </div>
                          <img
                            src={backgroundImg}
                            className='h-[190px] w-full rounded-[12px]'
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

                <div className='flex flex-col gap-[6px] '>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor=''
                  >
                    Upload video
                  </label>
                  <div className='flex flex-row gap-[6px] items-center w-full'>
                    <div
                      onClick={handleFileClick}
                      className='flex w-full flex-row gap-[12px] items-center course_input rounded-[12px] h-[40px] text-[14px]'
                    >
                      <div className='flex items-center justify-center'>
                        <img src={AddRound} className='w-[32px] ' alt='' />
                      </div>

                      <input
                        name='video'
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className='w-full hidden outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                      />
                      <span> {file ? file.name : ''}</span>
                    </div>
                    {!vidLoading ? (
                      <div className='bg-tintBlue w-[106px] h-[40px] rounded-[12px] flex flex-row items-center justify-center gap-[8px] hover:cursor-pointer hover:opacity-[0.8] '>
                        <img src={UploadIcon} alt='' />
                        <span
                          onClick={() => uploadVideo()}
                          className='text-[14px] font-[500] leading-[21px] text-mainBlue'
                        >
                          Upload
                        </span>
                      </div>
                    ) : (
                      <div className=''>
                        <Oval
                          visible={true}
                          height='30'
                          width='30'
                          color='gray'
                          ariaLabel='oval-loading'
                          wrapperStyle={{}}
                          wrapperClass=''
                        />
                      </div>
                    )}
                  </div>
                  <AnimatePresence>
                    {videoError && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {videoError}
                        </p>
                      </motion.div>
                    )}

                    {videoSuccess && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                        className='flex mt-[4px] flex-row gap-[12px] items-center'
                      >
                        <img
                          src={Good}
                          className='w-[24px] h-[24px] rounded-[50%]'
                          alt=''
                        />
                        <span className=''>Video successfully uploaded</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className='flex flex-col  gap-[6px]'>
                  <div
                    onClick={() => setOpenOverview(true)}
                    className='w-[208px] px-[8px] gap-[8px] flex items-center hover:bg-[#f1f1f1] hover:cursor-pointer transitiion duration-300 course_input rounded-[12px] h-[48px] text-[14px]'
                  >
                    <img src={AddRound} alt='' />
                    <span className='font-[600] text-[16px] leading-[24px]'>
                      Add course overview
                    </span>
                  </div>
                  <AnimatePresence>
                    {overviewError && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                      >
                        <p className='text-[#2C2C2CB2] text-[#D50000]   text-[10px] font-normal md:text-base'>
                          {overviewError}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div
                  onClick={() => setOpenInstructorInfo(true)}
                  className='w-[246px] px-[8px] gap-[8px] flex items-center hover:bg-[#f1f1f1] hover:cursor-pointer transitiion duration-300 course_input rounded-[12px] h-[48px] text-[14px]'
                >
                  <img src={AddRound} alt='' />
                  <span className='font-[600] text-[16px] leading-[24px]'>
                    Add instructor information
                  </span>
                </div>
                <div
                  onClick={() => setOpenFaqs(true)}
                  className='w-[122px] px-[8px] gap-[8px] flex items-center hover:bg-[#f1f1f1] hover:cursor-pointer transitiion duration-300 course_input rounded-[12px] h-[48px] text-[14px]'
                >
                  <img src={AddRound} alt='' />
                  <span className='font-[600] text-[16px] leading-[24px]'>
                    Add FAQ
                  </span>
                </div>
                <div className='flex flex-col gap-[6px] w-[242px] '>
                  <label
                    className='font-[600]  text-[14px] leading-[21px]'
                    htmlFor='color'
                  >
                    Gradient background for final CTA
                  </label>

                  <div className='flex flex-row course_input w-[172px] cursor-pointer items-center gap-[10px] px-[6px] rounded-[50px] h-[50px] '>
                    <img src={CircleGradient} alt='' />
                    <div className='text-[14px]'>Linear Gradient</div>
                  </div>
                </div>
                {!overallLoading ? (
                  <button
                    className='bg-mainBlue hover:opacity-[0.9] transition duration-300 rounded-[16px] h-[48px] flex items-center justify-center w-full text-[#fff] text-[16px] leading-[24px] font-[600]'
                    type='submit'
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
              </div>
            </form>
            {openColor && (
              <div
                onClick={() => setOpenColor(false)}
                className='w-full  absolute hover:cursor-pointer h-[1300px] top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent '
              ></div>
            )}
          </div>

          <div className='flex flex-col gap-[24px] w-[365px] items-center '>
            <h1 className='font-[500] text-[16px] leading-[20px]'>
              CARD PREVIEW
            </h1>
            <div
              style={{ backgroundColor: background }}
              className='w-full h-[320px] p-[32px] items-center flex flex-col gap-[15px] rounded-[24px]'
            >
              {!courseName ? (
                <div className='text-[#fff] text-[32px] leading-[48px] font-[700] text-center text-[#fff]'>
                  Course Name
                </div>
              ) : (
                <div className='text-[#fff] text-[32px] leading-[48px] font-[700] text-center text-[#fff]'>
                  {courseName}
                </div>
              )}
              {!courseDescription ? (
                <span className='text-[500] text-[16px] items-center text-center leading-[24px] text-extraGray'>
                  Course description and duration and all relevant details
                  concerning the particular course
                </span>
              ) : (
                <>
                  {courseDescription.length > 120 ? (
                    <span className='text-[500] text-[16px] items-center text-center leading-[24px] text-extraGray'>
                      {`${courseDescription.substring(0, 120) + '...'}`}
                    </span>
                  ) : (
                    <span className='text-[500] text-[16px] items-center text-center leading-[24px] text-extraGray'>
                      {courseDescription}
                    </span>
                  )}
                </>
              )}
              <div className='flex w-full flex-col items-center gap-[12px]'>
                {!price ? (
                  <h1 className='text-[20px] font-[700] leading-[30px] text-[#fff] text-center'>
                    Price
                  </h1>
                ) : (
                  <h1 className='text-[20px] font-[700] leading-[30px] text-[#fff] text-center'>
                    N{parseFloat(price).toLocaleString()}
                  </h1>
                )}
                <div className='w-full h-[48px] border border-[1px] bg-[#fff] rounded-[16px] border-borderLight text-center items-center justify-center flex'>
                  Enroll now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddCourses;
