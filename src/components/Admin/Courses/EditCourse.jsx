/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import {
  AddRound,
  BackArrow,
  CircleGradient,
  CloudAdd,
  UploadIcon,
} from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import axios from 'axios';
import { BaseURL } from '../../../Utils/BaseUrl';
import { useEffect, useRef, useState } from 'react';
import { Oval, ProgressBar, RotatingLines } from 'react-loader-spinner';
import {
  FAQInputContainer,
  InstructorInfo,
  OverViewContainer,
} from './AddCourseInputs';
import { AnimatePresence, motion } from 'framer-motion';
import { SketchPicker } from 'react-color';
import Skeleton from 'react-loading-skeleton';
import Good from '../../../assets/good.png';
import { apiRequest, uploadFile } from '../../../Utils/ApiRequest';
import { toast } from 'react-toastify';

const EditCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseDetail();
  }, [id]);

  const fileInputRef = useRef();
  const [overallLoading, setOverallLoading] = useState(false);
  const [background, setBackground] = useState();
  const [openColor, setOpenColor] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseNameError, setCourseNameError] = useState(false);
  const [courseDescription, setCourseDescription] = useState('');
  const [price, setPrice] = useState('');
  const [openOverview, setOpenOverview] = useState(false);

  const [addSecondInstructor, setAddSecondInstructor] = useState(false);
  const [openInstructorInfo, setOpenInstructorInfo] = useState(false);
  const [instructorInfoIndex, setInstructorInfoIndex] = useState(1);
  const [instructors, setInstructors] = useState([]);
  const [instructorInfo1, setInstructorInfo1] = useState({
    name: '',
    profession: '',
    image: '',
  });
  const [instructorInfo2, setInstructorInfo2] = useState({
    name: '',
    profession: '',
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
  const [overviews, setOverviews] = useState([]);
  const [overviewDone, setOverviewDone] = useState(false);
  const [instructorDone, setInstructorDone] = useState(false);
  const [faqDone, setFaqDone] = useState(false);

  const [openFaqs, setOpenFaqs] = useState(false);
  const [faqs, setFAQs] = useState([{ id: 1, question: '', answer: '' }]);
  const [activeId, setActiveId] = useState(1);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const [videoSuccess, setVideoSuccess] = useState(false);
  const [vidLoading, setVidLoading] = useState(false);

  const [backgroundImg, setBackgroundImg] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const fetchCourseDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BaseURL}/courses/${id}/fetch_course_details`,
      );
      setLoading(false);
      setCourse(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    const faqsData = course?.faqs.slice().sort((a, b) => a.id - b.id);
    setCourseName(course?.title);
    setBackgroundImg(course?.background_image);
    setFAQs(faqsData);
    setBackground(course?.color_code);
    setCourseDescription(course?.description);
    setPrice(course?.price);
    setFileUrl(course?.video);
    setFile(null);
    const lastIndex = course?.faqs.length - 1;
    const faqsId = course?.faqs[lastIndex]?.id;
    setActiveId(faqsId);
    setOverview1({
      header: course?.overviews[0]?.header,
      body: course?.overviews[0]?.body,
    });
    setOverview2({
      header: course?.overviews[1]?.header,
      body: course?.overviews[1]?.body,
    });
    setOverview3({
      header: course?.overviews[2]?.header,
      body: course?.overviews[2]?.body,
    });
    setOverview4({
      header: course?.overviews[3]?.header,
      body: course?.overviews[3]?.body,
    });
    setOverview5({
      header: course?.overviews[4]?.header,
      body: course?.overviews[4]?.body,
    });
    setOverview6({
      header: course?.overviews[5]?.header,
      body: course?.overviews[5]?.body,
    });
    setInstructors([]);
    setInstructorInfo1({
      name: course?.instructors[0]?.name,
      profession: course?.instructors[0]?.profession,
      image: course?.instructors[0]?.image,
    });
    if (course?.instructors?.length > 1) {
      setInstructorInfo2({
        name: course?.instructors[1]?.name,
        profession: course?.instructors[1]?.profession,
        image: course?.instructors[1]?.image,
      });
    }
  }, [course, id]);

  const handleChangeComplete = color => {
    setBackground(color.hex);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    setFile(event.target.files[0]);
    uploadVideo(event.target.files[0]);
  };

  const uploadVideo = async file => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      setVidLoading(true);
      setVideoError(null);
      const response = await uploadFile(formData, setVidLoading);
      setFileUrl(response?.file);
      setVideoSuccess(true);
      setTimeout(() => {
        setVideoSuccess(false);
      }, 6000);
    } catch (error) {
      setVideoSuccess(false);
      console.error('Upload failed:', error);
    }
  };

  const uploadBackgroundImg = async file => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadFile(formData, setLoading);
      setBackgroundImg(response?.file);
    } catch (error) {
      console.error('Upload failed:', error);
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
    setOverviewDone(false);
    setInstructorDone(false);
    setFaqDone(false);
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
    setInstructors([]);
    setInstructorInfo1({
      name: '',
      profession: '',
      image: '',
    });
    setInstructorInfo2({
      name: '',
      profession: '',
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
      instructors: instructors,
      faqs: faqs,
      overviews: overviews,
    };
    const overviewHasEmptyHeaderOrBody =
      values.overviews.some(isHeaderOrBodyEmpty);
    if (!overviewHasEmptyHeaderOrBody) {
      setOverviewError(null);
    } else {
      setOverviewError('Some fields for overview are empty');
    }
    if (fileUrl === null) {
      setVideoError('Please select and upload a video');
    }
    if (!overviewHasEmptyHeaderOrBody && fileUrl != null) {
      setOverallLoading(true);
      try {
        await apiRequest('POST', `/courses/create_course/`, values);
        setOverallLoading(false);
        clearForm();
        toast.success('Success', {
          position: 'top-right',
        });
      } catch (error) {
        toast.error('An error occured, please try again', {
          position: 'top-left',
        });
        console.log(error);
        setOverallLoading(false);
      }
    }
  };

  return (
    <Layout text='Courses'>
      {!loading ? (
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
              setOverviewDone={setOverviewDone}
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
              setInstructorDone={setInstructorDone}
              setAddSecondInstructor={setAddSecondInstructor}
              addSecondInstructor={addSecondInstructor}
              instructors={instructors}
              setInstructors={setInstructors}
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
              setFaqDone={setFaqDone}
            />
          )}
          <div
            onClick={() => navigate(-1)}
            className='w-[39px] hover:cursor-pointer hover:bg-extraGray transition duration-300 h-[39px] flex items-center justify-center bg-backBg rounded-[50%]'
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
                  {/* Preview course */}
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
                          if (courseName.length > 26) {
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
                      <div className=''>{background?.slice(1)}</div>
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
                        <>
                          {!fileUrl ? (
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
                              <img
                                src={Good}
                                className='w-[24px] h-[24px] rounded-[50%]'
                                alt=''
                              />
                            </div>
                          )}
                        </>
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

                  <div className='flex flex-row items-center gap-[12px]'>
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
                    {overviewDone && (
                      <div className=''>
                        <img
                          src={Good}
                          className='w-[24px] h-[24px] rounded-[50%]'
                          alt=''
                        />
                      </div>
                    )}
                  </div>

                  <div className='flex flex-row items-center gap-[12px]'>
                    <div
                      onClick={() => setOpenInstructorInfo(true)}
                      className='w-[246px] px-[8px] gap-[8px] flex items-center hover:bg-[#f1f1f1] hover:cursor-pointer transitiion duration-300 course_input rounded-[12px] h-[48px] text-[14px]'
                    >
                      <img src={AddRound} alt='' />
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Add instructor information
                      </span>
                    </div>
                    {instructorDone && (
                      <div className=''>
                        <img
                          src={Good}
                          className='w-[24px] h-[24px] rounded-[50%]'
                          alt=''
                        />
                      </div>
                    )}
                  </div>

                  <div className='flex flex-row items-center gap-[12px]'>
                    <div
                      onClick={() => setOpenFaqs(true)}
                      className='w-[122px] px-[8px] gap-[8px] flex items-center hover:bg-[#f1f1f1] hover:cursor-pointer transitiion duration-300 course_input rounded-[12px] h-[48px] text-[14px]'
                    >
                      <img src={AddRound} alt='' />
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Add FAQ
                      </span>
                    </div>
                    {faqDone && (
                      <div className=''>
                        <img
                          src={Good}
                          className='w-[24px] h-[24px] rounded-[50%]'
                          alt=''
                        />
                      </div>
                    )}
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
                  <div className='text-[#fff] text-nowrap text-[32px] leading-[48px] font-[700] text-center text-[#fff]'>
                    {courseName.length > 18
                      ? `${courseName.substring(0, 18) + '..'}`
                      : `${courseName}`}
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
                      <span className='text-[500] max-w-[310px] break-words text-[16px] items-center text-center leading-[24px] text-extraGray'>
                        {`${courseDescription.substring(0, 120) + '...'}`}
                      </span>
                    ) : (
                      <span className='text-[500] max-w-[310px] break-words text-[16px] items-center text-center leading-[24px] text-extraGray'>
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
    </Layout>
  );
};

export default EditCourse;
