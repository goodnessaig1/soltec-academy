/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { UploadFile } from '../../../Utils/Assets';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BaseURL } from '../../../Utils/BaseUrl';
import { IoMdClose } from 'react-icons/io';

export const OverViewContainer = ({
  setOpenOverview,
  setOverviewIndex,
  overviewIndex,
  overview1,
  overview2,
  overview3,
  overview4,
  overview5,
  overview6,
  setOverview1,
  setOverview2,
  setOverview3,
  setOverview4,
  setOverview5,
  setOverview6,
  setOverviews,
  setOverviewDone,
}) => {
  const isHeaderOrBodyEmpty = data => {
    return data.header.trim() === '' || data.body.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOverviews([
      overview1,
      overview2,
      overview3,
      overview4,
      overview5,
      overview6,
    ]);
    let overview = [
      overview1,
      overview2,
      overview3,
      overview4,
      overview5,
      overview6,
    ];
    const overviewHasEmptyHeaderOrBody = overview.some(isHeaderOrBodyEmpty);
    console.log(overviewHasEmptyHeaderOrBody);
    if (!overviewHasEmptyHeaderOrBody) {
      setOverviewDone(true);
      setOpenOverview(false);
    } else {
      setOverviewDone(false);
      console.log('overview has');
    }
  };

  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div className='w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-dOverlay '></div>
      <AnimatePresence className='z_ind'>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='bg-white z_ind flex p-[24px] inter__ gap-[22px] flex-col w-[413px] h-[503px] rounded-[24px]'
        >
          <div className='flex flex-row justify-between items-center'>
            <span></span>
            <h1 className='font-[500] text-[16px] text-center'>
              COURSE OVERVIEW
            </h1>
            <div
              onClick={() => setOpenOverview(false)}
              className='w-[34px] hover:opacity-[0.7] hover:cursor-pointer transition duration-300 text-mainBlue h-[34px] flex items-center justify-center rounded-[50%] bg-tintBlue'
            >
              <IoMdClose size={24} />
            </div>
          </div>
          <div className='flex flex-row items-center justify-center gap-[12px]'>
            <div
              onClick={() => setOverviewIndex('1')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                overviewIndex == '1' ? 'bg-extraGray' : 'hover:bg-extraGray'
              }`}
            >
              1
            </div>
            <div
              onClick={() => setOverviewIndex('2')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                overviewIndex == '2' ? 'bg-extraGray' : 'hover:bg-extraGray'
              }`}
            >
              2
            </div>
            <div
              onClick={() => setOverviewIndex('3')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                overviewIndex == '3' ? 'bg-extraGray' : 'hover:bg-extraGray'
              }`}
            >
              3
            </div>
            <div
              onClick={() => setOverviewIndex('4')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                overviewIndex == '4' ? 'bg-extraGray' : 'hover:bg-extraGray'
              }`}
            >
              4
            </div>
            <div
              onClick={() => setOverviewIndex('5')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                overviewIndex == '5' ? 'bg-extraGray' : 'hover:bg-extraGray'
              }`}
            >
              5
            </div>
            <div
              onClick={() => setOverviewIndex('6')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                overviewIndex == '6' ? 'bg-extraGray' : 'hover:bg-extraGray'
              }`}
            >
              6
            </div>
          </div>

          {overviewIndex == '1' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => e.preventDefault()}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Header
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='courseOverview1'
                    required
                    value={overview1.header}
                    onChange={e =>
                      setOverview1({ ...overview1, header: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Body
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <textarea
                    type='text'
                    style={{ height: '126px', resize: 'none' }}
                    name='courseOverview1'
                    required
                    value={overview1.body}
                    onChange={e =>
                      setOverview1({ ...overview1, body: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/30 characters
                </span>
              </div>
              <button
                type='submit'
                onClick={() => setOverviewIndex('2')}
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
          {overviewIndex == '2' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => e.preventDefault()}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Header
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='courseOverview2'
                    required
                    value={overview2.header}
                    onChange={e =>
                      setOverview2({ ...overview2, header: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Body
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <textarea
                    type='text'
                    style={{ height: '126px', resize: 'none' }}
                    name='courseOverview2'
                    required
                    value={overview2.body}
                    onChange={e =>
                      setOverview2({ ...overview2, body: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/30 characters
                </span>
              </div>
              <button
                type='submit'
                onClick={() => setOverviewIndex('3')}
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
          {overviewIndex == '3' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => e.preventDefault()}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Header
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='courseOverview3'
                    required
                    value={overview3.header}
                    onChange={e =>
                      setOverview3({ ...overview3, header: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Body
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <textarea
                    type='text'
                    style={{ height: '126px', resize: 'none' }}
                    name='courseOverview3'
                    required
                    value={overview3.body}
                    onChange={e =>
                      setOverview3({ ...overview3, body: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/30 characters
                </span>
              </div>
              <button
                type='submit'
                onClick={() => setOverviewIndex('4')}
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
          {overviewIndex == '4' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => e.preventDefault()}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Header
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='courseOverview4'
                    required
                    value={overview4.header}
                    onChange={e =>
                      setOverview4({ ...overview4, header: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Body
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <textarea
                    type='text'
                    style={{ height: '126px', resize: 'none' }}
                    name='courseOverview4'
                    required
                    value={overview4.body}
                    onChange={e =>
                      setOverview4({ ...overview4, body: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/30 characters
                </span>
              </div>
              <button
                type='submit'
                onClick={() => setOverviewIndex('5')}
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
          {overviewIndex == '5' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => e.preventDefault()}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Header
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='courseOverview5'
                    required
                    value={overview5.header}
                    onChange={e =>
                      setOverview5({ ...overview5, header: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Body
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <textarea
                    type='text'
                    style={{ height: '126px', resize: 'none' }}
                    name='courseOverview5'
                    required
                    value={overview5.body}
                    onChange={e =>
                      setOverview5({ ...overview5, body: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/30 characters
                </span>
              </div>
              <button
                type='submit'
                onClick={() => setOverviewIndex('6')}
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
          {overviewIndex == '6' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => handleSubmit(e)}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Header
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='courseOverview6'
                    required
                    value={overview6.header}
                    onChange={e =>
                      setOverview6({ ...overview6, header: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Body
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <textarea
                    type='text'
                    style={{ height: '126px', resize: 'none' }}
                    name='courseOverview6'
                    required
                    value={overview6.body}
                    onChange={e =>
                      setOverview6({ ...overview6, body: e.target.value })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/30 characters
                </span>
              </div>
              <button
                type='submit'
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const InstructorInfo = ({
  setOpenInstructorInfo,
  instructorInfoIndex,
  setInstructorInfoIndex,
  instructorInfo1,
  setInstructorInfo1,
  instructorInfo2,
  setInstructorInfo2,
  setInstructorDone,
}) => {
  const IsFieldEmpty = data => {
    return (
      data.name.trim() === '' ||
      data.image.trim() === '' ||
      data.proffession.trim() === ''
    );
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = [instructorInfo1, instructorInfo2];
    const check = data.some(IsFieldEmpty);
    console.log(check);
    if (!check) {
      setInstructorDone(true);
      setOpenInstructorInfo(false);
    } else {
      setInstructorDone(false);
      alert('complet all fields');
      console.log('overview has');
    }
  };
  const [loading, setLoading] = useState(false);

  const uploadImg = async file => {
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
      setInstructorInfo1({
        ...instructorInfo1,
        image: response.data.file,
      });
      setLoading(false);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };
  const uploadImg2 = async file => {
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
      setInstructorInfo2({
        ...instructorInfo2,
        image: response.data.file,
      });
      setLoading(false);
    } catch (error) {
      console.error('Error uploading file: ', error);
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

  const handleFileInputChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      uploadImg(selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop2 = e => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type.startsWith('image/')) {
      uploadImg2(droppedFile);
    } else {
      alert('Please drop an image file!');
    }
  };

  const handleFileInputChange2 = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      uploadImg2(selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };

  const handleDragOver2 = e => {
    e.preventDefault();
  };

  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div className='w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-dOverlay '></div>
      <AnimatePresence className='z_ind'>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            // delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='bg-white z_ind flex p-[24px] inter__ gap-[22px] flex-col w-[413px] h-[660px] rounded-[24px]'
        >
          <div className='flex flex-row justify-between items-center'>
            <span></span>
            <h1 className='font-[500] text-[16px] text-center'>
              INSTRUCTOR INFORMATION
            </h1>
            <div
              onClick={() => setOpenInstructorInfo(false)}
              className='w-[34px] hover:opacity-[0.7] hover:cursor-pointer transition duration-300 text-mainBlue h-[34px] flex items-center justify-center rounded-[50%] bg-tintBlue'
            >
              <IoMdClose size={24} />
            </div>
          </div>
          <div className='flex flex-row items-center justify-center gap-[12px]'>
            <div
              onClick={() => setInstructorInfoIndex('1')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                instructorInfoIndex == '1'
                  ? 'bg-extraGray'
                  : 'hover:bg-extraGray'
              }`}
            >
              1
            </div>
            <div
              onClick={() => setInstructorInfoIndex('2')}
              className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                instructorInfoIndex == '2'
                  ? 'bg-extraGray'
                  : 'hover:bg-extraGray'
              }`}
            >
              2
            </div>
          </div>

          {instructorInfoIndex == '1' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => e.preventDefault()}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Name
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='instructorName'
                    required
                    value={instructorInfo1.name}
                    onChange={e =>
                      setInstructorInfo1({
                        ...instructorInfo1,
                        name: e.target.value,
                      })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Profession
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <input
                    type='text'
                    name='description'
                    required
                    value={instructorInfo1.proffession}
                    onChange={e =>
                      setInstructorInfo1({
                        ...instructorInfo1,
                        proffession: e.target.value,
                      })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Image of Instructor
                </label>
                {!loading ? (
                  <>
                    {!instructorInfo1.image ? (
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
                          src={UploadFile}
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
                        <div className='absolute justify-end mt-[4px] ml-[326px] flex items-end'>
                          <div
                            onClick={() =>
                              setInstructorInfo1({
                                ...instructorInfo1,
                                image: '',
                              })
                            }
                            className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                          >
                            X
                          </div>
                        </div>
                        <img
                          src={instructorInfo1.image}
                          className='h-[190px] w-full rounded-[12px]'
                          alt=''
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className='w-full flex items-center rounded-[14px]'>
                    <Skeleton width={365} height={192} />
                  </div>
                )}
              </div>
              <button
                type='submit'
                onClick={() => setInstructorInfoIndex('2')}
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
          {instructorInfoIndex == '2' && (
            <form
              className='flex flex-col gap-[12px]'
              onSubmit={e => handleSubmit(e)}
              action=''
            >
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor='name'
                >
                  Name
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='instructorName'
                    required
                    value={instructorInfo2.name}
                    onChange={e =>
                      setInstructorInfo2({
                        ...instructorInfo2,
                        name: e.target.value,
                      })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>

              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor='profession'
                >
                  Profession
                </label>
                <div className='w-full course_input rounded-[12px]  text-[14px]'>
                  <input
                    type='text'
                    name='profession'
                    required
                    value={instructorInfo2.proffession}
                    onChange={e =>
                      setInstructorInfo2({
                        ...instructorInfo2,
                        proffession: e.target.value,
                      })
                    }
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                <span className='font-[400] text-[12px] leading-[14px]'>
                  1/20 characters
                </span>
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor=''
                >
                  Image of Instructor
                </label>
                {!loading ? (
                  <>
                    {!instructorInfo2.image ? (
                      <div
                        className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
                        onDrop={handleDrop2}
                        onDragOver={handleDragOver2}
                      >
                        <input
                          type='file'
                          id='fileInput'
                          accept='image/*'
                          style={{ display: 'none' }}
                          onChange={handleFileInputChange2}
                        />
                        <img
                          className='hover:cursor-pointer'
                          onClick={() =>
                            document.getElementById('fileInput').click()
                          }
                          src={UploadFile}
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
                        <div className='absolute justify-end mt-[4px] ml-[326px] flex items-end'>
                          <div
                            onClick={() =>
                              setInstructorInfo2({
                                ...instructorInfo2,
                                image: '',
                              })
                            }
                            className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                          >
                            X
                          </div>
                        </div>
                        <img
                          src={instructorInfo2.image}
                          className='h-[190px] w-full rounded-[12px]'
                          alt=''
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <div className='w-full flex items-center rounded-[14px]'>
                    <Skeleton width={365} height={192} />
                  </div>
                )}
              </div>
              <button
                type='submit'
                className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
              >
                Save
              </button>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const FAQInputContainer = ({
  setOpenFaqs,
  activeId,
  setActiveId,
  faqs,
  setFAQs,
  setFaqDone,
}) => {
  const IsFieldEmpty = data => {
    return data.question.trim() === '' || data.answer.trim() === '';
  };

  const handleSubmit = e => {
    e.preventDefault();

    const check = faqs.some(IsFieldEmpty);
    if (!check) {
      if (faqs.length <= 1) {
        alert('Add more faq questions');
      } else {
        setFaqDone(true);
        setOpenFaqs(false);
      }
    } else {
      setFaqDone(false);
      alert('No field should be empty');
    }
  };
  const addFAQ = () => {
    const newFAQs = [
      ...faqs,
      { id: faqs.length + 1, question: '', answer: '' },
    ];
    setFAQs(newFAQs);
  };

  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    setFaqDone(false);
    const updatedFAQs = faqs.map(faq => {
      if (faq.id === id) {
        return { ...faq, [name]: value };
      }
      return faq;
    });
    setFAQs(updatedFAQs);
  };

  return (
    <div className='fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-transparent'>
      <div className='w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center bg-dOverlay '></div>
      <AnimatePresence className='z_ind'>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className='bg-white z_ind flex p-[24px] inter__ gap-[22px] flex-col w-[413px] h-[463px] rounded-[24px]'
        >
          <div className='flex flex-row justify-between items-center'>
            <span></span>
            <h1 className='font-[500] text-[16px] text-center'>
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <div
              onClick={() => setOpenFaqs(false)}
              className='w-[34px] text-mainBlue hover:opacity-[0.7] hover:cursor-pointer transition duration-300 h-[34px] flex items-center justify-center rounded-[50%] bg-tintBlue'
            >
              <IoMdClose size={24} />
            </div>
          </div>
          <div className='flex items-center justify-center flex-row gap-[12px]'>
            {faqs.map((faq, index) => (
              <div
                onClick={() => setActiveId(faq.id)}
                key={index}
                className={`w-[32px] h-[32px] rounded-[20px] cursor-pointer flex items-center justify-center ${
                  faq.id == activeId ? 'bg-extraGray' : 'hover:bg-extraGray'
                }`}
              >
                {faq.id}
              </div>
            ))}
            <div
              className='course_input rounded-[50px] w-[32px] h-[32px] cursor-pointer flex text-mainBlue items-center justify-center hover:bg-extraGray text-[30px]'
              onClick={() => (addFAQ(), setActiveId(activeId + 1))}
            >
              <span className='mt-[-6px]'>+</span>
            </div>
          </div>
          {faqs
            .filter(faq => faq.id === activeId)
            .map(faq => (
              <form
                key={faq.id}
                onSubmit={e => handleSubmit(e)}
                action=''
                className='flex flex-col gap-[22px]'
              >
                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor=''
                  >
                    Question
                  </label>
                  <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                    <input
                      type='text'
                      name='question'
                      required
                      value={faq.question}
                      onChange={e => handleInputChange(faq.id, e)}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-[6px]'>
                  <label
                    className='font-[600] text-[14px] leading-[21px]'
                    htmlFor='body'
                  >
                    Answer
                  </label>
                  <div className='w-full course_input rounded-[12px]  text-[14px]'>
                    <textarea
                      type='text'
                      style={{ height: '106px', resize: 'none' }}
                      name='answer'
                      required
                      value={faq.answer}
                      onChange={e => handleInputChange(faq.id, e)}
                      className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  className='rounded-[16px] w-full h-[56px] flex items-center justify-center bg-tintBlue text-mainBlue font-[600] hover:opacity-[0.8] hover:cursor-pointer transition duration-300'
                >
                  Save
                </button>
              </form>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
