/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import BlogTextEditor from './BlogTextEditor';
import { useState } from 'react';

const AddBlog = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleDrop = e => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type.startsWith('image/')) {
      previewFile(droppedFile);
      setPhoto(droppedFile);
    } else {
      alert('Please drop an image file!');
    }
  };

  const handleFileInputChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setPhoto(selectedFile);
      previewFile(selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };

  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  return (
    <Layout text='Blog'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        <div
          onClick={() => navigate(-1)}
          className='w-[39px] h-[39px] hover:cursor-pointer hover:bg-extraGray transition duration-300 flex items-center justify-center bg-backBg rounded-[50%]'
        >
          <img src={BackArrow} alt='' />
        </div>
        <form action=''>
          <div className='flex flex-col gap-[24px]'>
            <h1 className='text-[14px] font-[500] leading-[17px]'>ADD BLOG</h1>
            <div className='flex flex-col gap-[22px]'>
              <div className='flex flex-col gap-[6px]'>
                <label
                  htmlFor='title'
                  className='font-[600] text-[14px] leading-[21px]'
                >
                  Title
                </label>
                <div className='course_input rounded-[12px] px-[16px] h-[40px]'>
                  <input
                    type='text'
                    name='title'
                    className='w-full outline-none mt-[6px]'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label
                  htmlFor='content'
                  className='font-[600] text-[14px] leading-[21px]'
                >
                  Content
                </label>
                <BlogTextEditor />
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label
                  htmlFor='author'
                  className='font-[600] text-[14px] leading-[21px]'
                >
                  Author
                </label>
                <div className='course_input rounded-[12px] px-[16px] h-[40px]'>
                  <input
                    type='text'
                    name='author'
                    className='w-full outline-none mt-[6px]'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor='file'
                >
                  Featured image
                </label>
                {!preview ? (
                  <div
                    className='dropZone w-[505px] h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <input
                      type='file'
                      id='fileInput'
                      accept='image/*'
                      name='file'
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
                      <h1 className='inter__  text-higherCol font-[500] text-[14px]'>
                        Choose a file or drag & drop here
                      </h1>
                      <span className='font-[500] text-higherCol inter__ text-[12px] leading-[15px] text-fileCol'>
                        docx, PDF, xlsx up to 50MB
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
                  <div className='w-full h-[192px] w-[505px]  rounded-[12px]'>
                    <div className='absolute justify-end mt-[4px] ml-[466px] flex items-end'>
                      <div
                        onClick={() => (setPhoto(null), setPreview(null))}
                        className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                      >
                        X
                      </div>
                    </div>
                    <img
                      src={preview}
                      className='h-[190px] w-[505px]  rounded-[12px]'
                      alt=''
                    />
                  </div>
                )}
              </div>

              <button
                type='submit'
                className='text-[16px] hover:opacity-[0.9] text-white bg-mainBlue rounded-[16px] font-[600] w-[505px] h-[48px] flex items-center justify-center '
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddBlog;
