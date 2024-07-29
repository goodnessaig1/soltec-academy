/* eslint-disable react/no-unescaped-entities */
import OtherBlogPost from './OtherBlogPosts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { format } from 'date-fns';
import { apiRequest } from '../../Utils/ApiRequest';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useAuth } from '../Context/AuthContext';
import NetworkError from '../../Utils/NetworkError';
import { Emogi } from '../../Utils/Assets';

const SingleBlogPost = () => {
  const { id } = useParams();
  const { blogs } = useAuth();
  const [blogDetail, setBlogDetail] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    getBlogPost();
  }, [id || blogDetail !== null]);

  const getBlogPost = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/blogs/${id}/`);
      setLoading(false);
      setBlogDetail(response);
    } catch (error) {
      setNetworkError(true);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (blogs && blogDetail) {
      const filteredBlogs = blogs.filter(blog => blog.id != id);
      setOtherBlogs(filteredBlogs);
    }
  }, [blogs, blogDetail, id]);

  return (
    <div className='w-full'>
      {!networkError ? (
        <>
          <>
            <Header headerCol={false} />
            {!loading ? (
              <>
                {blogDetail && blogDetail ? (
                  <div className='flex fontTyp flex-col mt-[44px] lg:mt-[60px] px-[16px] mb-10 lg:mb-20 lg:px-[120px] items-center'>
                    <div className='lg:w-[708px]'>
                      <div className='flex flex-col gap-[8px]'>
                        <h1 className='font-[900] w-[90%] text-[24px] lg:text-[32px] leading-[30px] lg:leading-[38px] '>
                          {blogDetail?.title}
                        </h1>
                        <div className='flex flex-col lg:flex-row gap-[8px] lg:gap-[16px] text-[14px] lg:text-[16px] leading-[19px] lg:items-center'>
                          <div className=''>
                            <span className=' font-[400]  text-byCol'>by</span>{' '}
                            <span className='font-[600] text-mainBlue'>
                              {blogDetail?.author_name},{' '}
                              {blogDetail?.author_profession}
                            </span>
                          </div>
                          <span className='font-[700] hidden lg:block mt-[-8px] text-dotCol text-[24px]'>
                            .
                          </span>
                          <span className='font-[400] text-byCol'>
                            {blogDetail?.date_published &&
                              `${format(
                                new Date(blogDetail?.date_published),
                                'MMMM dd, yyyy',
                              )}`}
                          </span>
                        </div>
                      </div>
                      <div className='flex mt-[24px] lg:mt-[40px] items-center'>
                        <img
                          src={blogDetail?.featured_image}
                          className='w-[704px] h-[344px] rounded-[16px] cover'
                          alt=''
                        />
                      </div>
                      <div className='text-[14px] lg:text-[16px] mt-[16px] lg:mt-[24px] mb-[20px] fontTyp leading-[21px] lg:leading-[24px] font-[400] '>
                        <div
                          className='rendered-content text-[#1C1C1C] lg:leading-[32px]'
                          dangerouslySetInnerHTML={{
                            __html: blogDetail?.content,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='w-full mt-[200px] h-[57vh] flex flex-col items-center'>
                    <h1>Not found</h1>
                    <img src={Emogi} className='h-[75px]' alt='' />
                  </div>
                )}
              </>
            ) : (
              <div className='w-full h-[80vh] lg:mt-[-24px] flex items-center justify-center'>
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
          </>
          {!loading && otherBlogs && otherBlogs.length > 0 && (
            <div className=''>
              <OtherBlogPost otherBlogs={otherBlogs} />
            </div>
          )}
          <Footer />
        </>
      ) : (
        <div>
          <NetworkError />
        </div>
      )}
    </div>
  );
};

export default SingleBlogPost;
