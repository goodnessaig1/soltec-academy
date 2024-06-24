/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import { BackArrow, CloudAdd } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import BlogTextEditor from './BlogTextEditor';
import { useEffect, useState } from 'react';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { Oval, ProgressBar } from 'react-loader-spinner';
import draftToHtml from 'draftjs-to-html';
import { FaPlus } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { apiRequest, uploadFile } from '../../../Utils/ApiRequest';

import { convertFromHTML } from 'draft-js';

const EditBlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText(
        'Old text\n\nNew Heading\nNew text after heading',
      ),
    ),
  );
  const [loading, setLoading] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [imgLoading, setImgLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [position, setPosition] = useState('');
  const [blog, setBlog] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setImage(blog?.featured_image);
    setTitle(blog?.title);
    setAuthor(blog?.author_name);
    setAuthorImage(blog?.author_image);
    setPosition(blog?.author_profession);
    setDescription(blog?.short_description);
  }, [blog]);

  useEffect(() => {
    if (blog) {
      const blocksFromHTML = convertFromHTML(blog?.content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );
      const newState = EditorState.createWithContent(state);
      setEditorState(newState);
    }
  }, [blog]);

  useEffect(() => {
    getBlogPost();
  }, []);

  const getBlogPost = async () => {
    setPageLoading(true);
    try {
      const response = await apiRequest('GET', `/blogs/${id}/`);
      setPageLoading(false);
      setBlog(response);
    } catch (error) {
      setPageLoading(false);
      toast.error('An error occured, please try again', {
        position: 'top-left',
      });
    }
  };

  const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadFile(formData, setLoading);
      setImage(response?.file);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handleFileInputChange = async e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      uploadImage(selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };
  const uploadAuthorImg = async file => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await uploadFile(formData, setImgLoading);
      setAuthorImage(response?.file);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  const handleAuthorImgChange = async e => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      uploadAuthorImg(selectedFile);
    } else {
      alert('Please select an image file!');
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile.type.startsWith('image/')) {
      uploadImage(droppedFile);
    } else {
      alert('Please drop an image file!');
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const isEditorEmpty = () => {
    const contentState = editorState.getCurrentContent();
    return (
      !contentState.hasText() &&
      contentState.getBlockMap().size === 1 &&
      contentState.getFirstBlock().getType() === 'unstyled'
    );
  };

  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  // Convert raw JSON to HTML
  const html = draftToHtml(rawContentState);

  const handleSubmit = async e => {
    e.preventDefault();
    const values = {
      title,
      short_description: description,
      author_name: author,
      author_profession: position,
      featured_image: image,
      content: html,
      author_image: authorImage,
    };

    if (image != null || authorImage != null) {
      if (!isEditorEmpty()) {
        try {
          setAddLoading(true);
          await apiRequest('PUT', `/blogs/${id}/`, values);
          setAddLoading(false);
          toast.success('Success', {
            position: 'top-right',
          });
          setImage('');
          setTitle('');
          setAuthor('');
          setAuthorImage('');
          setPosition('');
          setDescription('');
          setEditorState(EditorState.createEmpty());
        } catch (error) {
          setAddLoading(false);
          toast.error('An error occured, please try again', {
            position: 'top-left',
          });
          console.log(error);
        }
      } else {
        alert('Fill the blog content, it cannot be empty');
      }
    } else {
      alert('Select image for the image fields');
    }
  };

  return (
    <Layout text='Blog'>
      <div className='w-full inter__ flex flex-col gap-9 px-9 pb-[140px]'>
        <div
          onClick={() => navigate(-1)}
          className='w-10 h-10 hover:cursor-pointer hover:bg-extraGray transition duration-300 flex items-center justify-center bg-backBg rounded-[50%]'
        >
          <img src={BackArrow} alt='' />
        </div>
        {!pageLoading ? (
          <form onSubmit={e => handleSubmit(e)} action=''>
            <div className='flex flex-col w-[705px] gap-[24px]'>
              <h1 className='text-[14px] font-medium leading-[17px]'>
                EDIT BLOG
              </h1>
              <div className='flex flex-col gap-[22px]'>
                <div className='flex flex-col gap-4.5'>
                  <label
                    htmlFor='title'
                    className='font-semibold text-[14px] leading-[21px]'
                  >
                    Title
                  </label>
                  <div className='course_input rounded-[12px] px-4 h-10'>
                    <input
                      type='text'
                      name='title'
                      required
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                      className='w-full outline-none mt-1.5'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-4.5'>
                  <label
                    htmlFor='title'
                    className='font-semibold text-[14px] leading-[21px]'
                  >
                    Short Description
                  </label>
                  <div className='course_input rounded-[12px] px-4 h-10'>
                    <input
                      type='text'
                      name='description'
                      required
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      className='w-full outline-none mt-1.5'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-4.5'>
                  <label
                    htmlFor='content'
                    className='font-semibold text-[14px] leading-[21px]'
                  >
                    Content
                  </label>
                  <BlogTextEditor
                    editorState={editorState}
                    setEditorState={setEditorState}
                  />
                </div>
                <div className='flex flex-col gap-4.5'>
                  <label
                    htmlFor='author'
                    className='font-semibold text-[14px] leading-[21px]'
                  >
                    Author Image
                  </label>
                  <div className='flex flex-row'>
                    <div
                      onClick={() =>
                        document.getElementById('authorImage').click()
                      }
                      className=' h-20 w-20 flex items-center justify-center hover:cursor-pointer text-[#CBD0DC] border border-dotted border-[2px] border-[#CBD0DC] rounded-[50%]'
                    >
                      {!authorImage ? (
                        <>
                          <input
                            type='file'
                            id='authorImage'
                            accept='image/*'
                            name='file'
                            style={{ display: 'none' }}
                            onChange={handleAuthorImgChange}
                          />
                          {!imgLoading ? (
                            <FaPlus className='text-[24px]' />
                          ) : (
                            <div className='text-gray-400'>
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
                        </>
                      ) : (
                        <div className='w-full h-full'>
                          <img
                            src={authorImage}
                            className='w-20 object-cover h-20 rounded-[50%]'
                            alt=''
                          />
                        </div>
                      )}
                    </div>
                    {authorImage && (
                      <div
                        onClick={() => setAuthorImage(null)}
                        className='flex items-center ml-[-20px] justify-center w-[26px] h-[26px] rounded-[50%] hover:cursor-pointer hover:bg-[#F5F7F9] transition ease-in-out duration-300 cover bg-white boxSha '
                      >
                        <IoMdClose />
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-4.5'>
                  <label
                    htmlFor='author'
                    className='font-semibold text-[14px] leading-[21px]'
                  >
                    Author
                  </label>
                  <div className='course_input rounded-[12px] px-4 h-10'>
                    <input
                      type='text'
                      name='author'
                      required
                      value={author}
                      onChange={e => setAuthor(e.target.value)}
                      className='w-full outline-none mt-1.5'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-4.5'>
                  <label
                    htmlFor='position'
                    className='font-semibold text-[14px] leading-[21px]'
                  >
                    Job Title / Position
                  </label>
                  <div className='course_input rounded-[12px] px-4 h-10'>
                    <input
                      type='text'
                      name='position'
                      required
                      value={position}
                      onChange={e => setPosition(e.target.value)}
                      className='w-full outline-none mt-1.5'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-4.5'>
                  <label
                    className='font-semibold text-[14px] leading-[21px]'
                    htmlFor='file'
                  >
                    Featured image
                  </label>
                  {!loading ? (
                    <>
                      {!image ? (
                        <div
                          className='dropZone w-[505px] h-[192px] rounded-[12px] flex flex-col gap-4 py-6 items-center'
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
                            <h1 className='inter__  text-higherCol font-medium text-[14px]'>
                              Choose a file or drag & drop here
                            </h1>
                            <span className='font-medium text-higherCol inter__ text-[12px] leading-[15px] text-fileCol'>
                              docx, PDF, xlsx up to 50MB
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
                        <div className='w-full min-h-[192px] w-[505px]  rounded-[12px]'>
                          <div className='absolute justify-end mt-[4px] ml-[466px] flex items-end'>
                            <div
                              onClick={() => setImage(null)}
                              className='bg-extraGray w-[30px] h-[30px] hover:bg-white transition duration-300 hover:cursor-pointer flex items-center justify-center rounded-[50px]'
                            >
                              X
                            </div>
                          </div>
                          <img
                            src={image}
                            className='max-h-[300px] w-[505px]  rounded-[12px]'
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
                    className='text-[16px] hover:opacity-[0.9] text-white bg-mainBlue rounded-[16px] font-semibold w-[505px] h-12 flex items-center justify-center '
                  >
                    Add
                  </button>
                ) : (
                  <div className='w-[505px] flex items-center justify-center h-12'>
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
            </div>
          </form>
        ) : (
          <div className='flex w-full h-[60vh] items-center justify-center'>
            <Oval
              visible={true}
              height='40'
              width='40'
              color='gray'
              ariaLabel='oval-loading'
              wrapperStyle={{}}
              wrapperClass=''
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EditBlogPost;
