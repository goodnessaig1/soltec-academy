import { Link } from 'react-router-dom';
import {
  DeleteRed,
  EditIcon,
  PlusW,
  SearchGray,
  Unavailable,
} from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import NetworkError from '../../../Utils/NetworkError';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { apiRequest } from '../../../Utils/ApiRequest';
const BlogManagement = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  const [markedItems, setMarkedItems] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/blogs/`);
      setLoading(false);
      setBlogs(response?.data?.results);
    } catch (error) {
      setLoading(false);
      if (error?.code == 'ERR_NETWORK') {
        setNetworkError(true);
      } else {
        toast.error('An error occured, please try again', {
          position: 'top-left',
        });
        console.log(error);
      }
    }
  };

  const handleDelete = async id => {
    const updatedData = blogs.filter(item => item.id !== id);
    setBlogs(updatedData);
    try {
      await apiRequest('DELETE', `/blogs/${id}`);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const toggleMarked = index => {
    if (markedItems.includes(index)) {
      setMarkedItems(markedItems.filter(item => item !== index));
    } else {
      setMarkedItems([...markedItems, index]);
    }
  };

  const deleteMarkedItems = () => {
    const newData = blogs.filter((_, index) => !markedItems.includes(index));
    setBlogs(newData);
    setMarkedItems([]);
  };

  return (
    <div>
      {!networkError ? (
        <Layout text='Blog'>
          <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
            <div className='flex flex-row items-center justify-between'>
              <h1 className='text-[14px] font-[500] leading-[17px]'>
                LATEST BLOG POSTS
              </h1>
              <div className='flex flex-row gap-[11px]'>
                <div className='flex flex-row rounded-[12px] px-[16px] justify-between items-center h-[40px] course_input w-[276px]'>
                  <input
                    type='text'
                    placeholder='Search'
                    className='outline-none border-none bg-transparent'
                  />
                  <img src={SearchGray} alt='' />
                </div>
                <Link
                  to={'/admin/blogs/add-blog'}
                  className='w-[115px] hover:opacity-[94%] h-[40px] rounded-[12px] bg-lBlue flex gap-[6px] items-center justify-center'
                >
                  <img src={PlusW} alt='' />
                  <h2 className='text-[#fff] font-[500] text-[14px] leading-[17px]'>
                    Add Post
                  </h2>
                </Link>
              </div>
            </div>

            {!loading ? (
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[16px]'>
                {blogs &&
                  blogs.map((blog, index) => (
                    <div
                      key={index}
                      className='w-[350px] h-[412px] blog_p rounded-[36px] gap-[18px]'
                    >
                      <div className='mt-[-2px] group cursor-pointer transition duration-300'>
                        <div
                          className={`absolute ${
                            markedItems.includes(index)
                              ? ''
                              : 'hidden group-hover:block'
                          } transition duration-300 group-hover:block ml-[206px] mt-[14px]`}
                        >
                          <div className='w-[126px] h-[40px] rounded-[50px] flex gap-[13px] bg-white items-center justify-center'>
                            <div className=''>
                              <img src={EditIcon} alt='' />
                            </div>
                            <div
                              onClick={() => handleDelete(blog?.id)}
                              className='hover:text-mainRed transition duration-300 cursor-pointer'
                            >
                              <RiDeleteBin5Line size={22} />
                            </div>
                            <div className=''>
                              <input
                                type='checkbox'
                                className='form-checkbox h-4 w-4 text-indigo-600'
                                checked={markedItems.includes(index)}
                                onChange={() => toggleMarked(index)}
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          src={blog?.featured_image}
                          className='h-[223px] w-full  rounded-t-[38px]'
                          alt=''
                        />
                      </div>
                      <Link
                        to={`/blog/${blog?.id}/${
                          blog.author_name
                        }/${blog?.title.substring(0, 20)}`}
                      >
                        <div className='w-full px-[16px] mt-[8px] gap-[8px]'>
                          <div className='flex flex-col gap-[14px]'>
                            <h1 className='font-[600] text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                              {blog?.title.length > 28
                                ? `${blog?.title?.substring(0, 28) + '..'}`
                                : `${blog?.title}`}
                            </h1>
                            <span className='text-[14px] font-[400] leading-[21px] text-lightB'>
                              {blog?.short_description.length > 120
                                ? `${
                                    blog?.short_description?.substring(0, 120) +
                                    '..'
                                  }`
                                : `${blog?.short_description}`}
                            </span>
                            <div className='flex flex-row justify-between  mt-[16px] items-center'>
                              <div className='flex flex-row gap-[8px] '>
                                {blog?.author_image ? (
                                  <img
                                    src={blog?.author_image}
                                    alt=''
                                    className='rounded-[100%] w-[32px] h-[32px]'
                                  />
                                ) : (
                                  <img
                                    src={Unavailable}
                                    alt=''
                                    className='rounded-[100%] w-[32px] h-[32px]'
                                  />
                                )}
                                <div className='flex flex-col'>
                                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                                    {blog?.author_name}
                                  </h3>
                                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                                    5 min read
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            ) : (
              <div className='flex w-full h-[400px] items-center justify-center'>
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
            {markedItems.length > 0 && (
              <div className='absolute right-0 bottom-0 mr-[40px] mb-[40px]'>
                <div
                  onClick={deleteMarkedItems}
                  className='w-[114px] hover:bg-whiteW z-100 hover:cursor-pointer transition duration-300 h-[40px] flex items-center justify-center gap-[6px] rounded-[12px] border border-[1px] border-mainRed'
                >
                  <img src={DeleteRed} alt='' />
                  <span className='font-[500] text-[14px] leading-[17px] text-mainRed inter__'>
                    Delete
                  </span>
                </div>
              </div>
            )}
          </div>
        </Layout>
      ) : (
        <div>
          <NetworkError />
        </div>
      )}
    </div>
  );
};

export default BlogManagement;
