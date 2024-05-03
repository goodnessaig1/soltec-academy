import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import {
  BlogMobile,
  BlogTex,
  SearchIcon,
  Unavailable,
} from '.././../Utils/Assets';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { BaseURL } from '../../Utils/BaseUrl';
import NetworkError from '../../Utils/NetworkError';
import Skeleton from 'react-loading-skeleton';

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseURL}/blogs/`);
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

  return (
    <div className='w-full'>
      {!networkError ? (
        <>
          <Header headerCol={false} />
          <div className='container_ w-full'>
            <div className='flex px-[16px] w-full lg:px-[100px] xl:px-[60px] xll:px-[120px] pb-[160px] flex-col'>
              <div className='flex flex-col gap-[16px] mt-[60px] items-center justify-center'>
                <img src={BlogTex} className='lg:block hidden' alt='' />
                <img src={BlogMobile} className='block lg:hidden' alt='' />
                <span className='text-[20px] sm:hidden lg:block text-center font-[400] leading-[30px] text-lightB'>
                  Learn everything you need to launch you into the job market
                </span>
              </div>
              <div className='w-full mt-[40px] flex items-center justify-center'>
                <div className='w-[384px] bg-lightGray h-[60px] rounded-[20px] flex items-center py-[6px] pl-[20px] pr-[6px] justify-between '>
                  <input
                    type='text'
                    className='text-[16px] text-footerCol  bg-transparent focus:outline-none focus:shadow-outline '
                    placeholder='Search a blog post'
                  />
                  <div className='w-[48px] h-[48px] rounded-[16px] flex items-center justify-center bg-[#000]'>
                    <img src={SearchIcon} alt='' />
                  </div>
                </div>
              </div>
              {/*  */}
              {!loading ? (
                <div className='mt-[80px] items-center  flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-[32px] sm:gap-y-[27px] lg:gap-y-[32px]'>
                  {blogs &&
                    blogs.map((blog, index) => (
                      <div
                        key={index}
                        className='blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '
                      >
                        <img
                          src={blog?.featured_image}
                          alt=''
                          className='rounded-t-[36px] w-[395px] h-[233px]'
                        />
                        <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
                          <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                            {blog?.title.length > 36
                              ? `${blog?.title?.substring(0, 36) + '..'}`
                              : `${blog?.title}`}
                          </h1>
                          <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                            {blog?.short_description.length > 120
                              ? `${
                                  blog?.short_description?.substring(0, 120) +
                                  '..'
                                }`
                              : `${blog?.short_description}`}
                          </span>
                        </div>
                        <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
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
                          <Link
                            to={`/blog/${blog?.id}/${
                              blog.author_name
                            }/${blog?.title.substring(0, 20)}`}
                            className='flex items-center justify-center hover:bg-[#F5F7F9] transition ease-in-out duration-300  readMore rounded-[16px] w-[113px] h-[48px]'
                          >
                            <span className='text-[14px] leading-[17px] font-[400]'>
                              Read more
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className='flex w-full flex-col gap-[24px items-center justify-center'>
                  <div className='flex flex-col mt-[80px]  w-full lg:flex-row justify-center items-center gap-[24px]'>
                    <Skeleton
                      style={{ borderRadius: '20px' }}
                      className='w-[140px]'
                      width={343}
                      height={400}
                    />
                    <Skeleton
                      style={{ borderRadius: '20px' }}
                      className='w-[140px]'
                      width={343}
                      height={400}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div className=''>
          <NetworkError />
        </div>
      )}
    </div>
  );
};

export default Blog;
