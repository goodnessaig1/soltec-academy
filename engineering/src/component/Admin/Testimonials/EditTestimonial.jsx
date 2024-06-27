/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../Common/Layout';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ProgressBar, RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { apiRequest, uploadFile } from '../../../Utils/ApiRequest';

const EditTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [data, setData] = useState(null);
  const [author, setAuthor] = useState(data?.author || '');
  const [content, setContent] = useState(data?.content || '');
  const [profession, setProfession] = useState(data?.profession || '');
  const [authorImage, setAuthorImage] = useState(data?.author_image || '');

  useEffect(() => {
    setAuthor(data?.author);
    setContent(data?.content);
    setProfession(data?.profession);
    setAuthorImage(data?.author_image);
  }, [data]);

  const [errors, setErrors] = useState({
    author: '',
    content: '',
    profession: '',
  });
  const [touched, setTouched] = useState({
    author: false,
    content: false,
    profession: false,
  });

  useEffect(() => {
    getTestimonial();
  }, [id]);

  const getTestimonial = async () => {
    try {
      const response = await apiRequest('GET', `/testimonials/${id}/`);
      setData(response);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const uploadImg = async file => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadFile(formData, setLoading);
      setAuthorImage(response?.file);
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

  const handleSubmit = async () => {
    setAddLoading(true);
    const values = {
      author,
      author_image: authorImage,
      profession,
      content,
    };
    if (authorImage != '') {
      try {
        await apiRequest('PUT', `/testimonials/${id}/`, values);
        setAddLoading(false);
        toast.success('Success', {
          position: 'top-right',
        });
        setAuthor('');
        setContent('');
        setProfession('');
        setAuthorImage(null);
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
          className='w-[39px] hover:cursor-pointer hover:bg-extraGray transition duration-300 h-[39px] flex items-center justify-center bg-backBg rounded-[50%]'
        >
          <img src={BackArrow} alt='' />
        </div>
        {!pageLoading ? (
          <div className='flex flex-col gap-[24px] max-w-[505px]'>
            <h1 className='font-[500] text-[14px] leading-[17px]'>
              EDIT TESTIMONIAL
            </h1>
            <form
              className='flex flex-col gap-[22px] w-full'
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
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
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    onBlur={() => setTouched({ ...touched, author: true })}
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                {touched.author && errors.author && (
                  <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                    {errors.author}
                  </p>
                )}
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor='profession'
                >
                  Title / Position
                </label>
                <div className='w-full course_input rounded-[12px] h-[40px] text-[14px]'>
                  <input
                    type='text'
                    name='profession'
                    value={profession}
                    onChange={e => setProfession(e.target.value)}
                    onBlur={() => setTouched({ ...touched, profession: true })}
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                {touched.profession && errors.profession && (
                  <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                    {errors.profession}
                  </p>
                )}
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
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    onBlur={() => setTouched({ ...touched, content: true })}
                    className='outline-none pt-[8px] pl-[16px] p-[10px] bg-transparent w-full'
                  />
                </div>
                {touched.content && errors.content && (
                  <p className='text-[#2C2C2CB2] text-[#D50000] text-[10px] font-normal md:text-base'>
                    {errors.content}
                  </p>
                )}
              </div>

              {/* Author image section */}
              <div className='flex flex-col gap-[6px]'>
                <label
                  className='font-[600] text-[14px] leading-[21px]'
                  htmlFor='author_image'
                >
                  Author image
                </label>
                {!loading ? (
                  <>
                    {!authorImage ? (
                      <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className='dropZone w-full h-[192px] rounded-[12px] flex flex-col gap-[16px] py-[24px] items-center'
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
                            onClick={() => setAuthorImage(null)}
                            className='bg-extraGray w-[30px] h-[30px] hover:bg-[#fff] transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                          >
                            X
                          </div>
                        </div>
                        <img
                          src={authorImage}
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
            </form>
          </div>
        ) : (
          <div className='w-full h-[60vh] flex items-center justify-center'>
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
    </Layout>
  );
};

export default EditTestimonial;
