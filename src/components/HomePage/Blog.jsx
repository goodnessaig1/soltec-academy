/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import BlogText from '../../assets/Blog.svg';
import Arrow from '../../assets/arrow.svg';
import Prev from '../../assets/prev.svg';
import Next from '../../assets/next.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseURL } from '../../Utils/BaseUrl';

const CustomPrevArrow = props => {
  return (
    <div
      className='custom-prev-arrow courses_arrow_prev  courses_arrow bg-transparent'
      onClick={props.onClick}
    >
      <div className='w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Prev} alt='' />
      </div>
    </div>
  );
};

const CustomNextArrow = props => {
  return (
    <div
      className='custom-next-arrow courses_arrow_next courses_arrow w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] '
      onClick={props.onClick}
    >
      <div className='w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Next} alt='' />
      </div>
    </div>
  );
};
const Blog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await axios.get(`${BaseURL}/blogs/`);
      setBlogs(response?.data?.results);
    } catch (error) {
      toast.error('An error occured, please try again', {
        position: 'top-left',
      });
    }
  };

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  var mdSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className='flex flex-col mt-[120px] sm:px-[16px] pb-[80px]'>
      <div className='flex items-center justify-center '>
        <img src={BlogText} alt='' className='' />
      </div>
      <div className='lg:pl-[120px] sm:hidden lg:hidden xl:block mt-[82px]'>
        <Slider {...settings} className='slider-container'>
          {blogs &&
            blogs.map((blog, index) => (
              <div
                key={index}
                className='blog-card flex flex-col gap-[18px] pb-[20px] rounded-[36px] '
              >
                <img
                  src={blog?.featured_image}
                  alt=''
                  className='borderR rounded-t-[36px] w-[425px] h-[233px]'
                />
                <div className='px-[20px] flex flex-col gap-[13px]'>
                  <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                    {blog?.title.length > 36
                      ? `${blog?.title?.substring(0, 36) + '..'}`
                      : `${blog?.title}`}
                  </h1>
                  <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                    {blog?.short_description.length > 120
                      ? `${blog?.short_description?.substring(0, 120) + '..'}`
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
        </Slider>
      </div>
      <div className='lg:pl-[70px] lgl:pl-[100px] sm:hidden lg:block xl:hidden mt-[82px]'>
        <Slider {...mdSettings} className='slider-container'>
          {blogs &&
            blogs.map((blog, index) => (
              <div
                key={index}
                className='blog-card flex flex-col gap-[18px] pb-[20px] rounded-[36px] '
              >
                <img
                  src={blog?.featured_image}
                  alt=''
                  className='borderR rounded-t-[36px] w-[425px] h-[233px]'
                />
                <div className='px-[20px] flex flex-col gap-[13px]'>
                  <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                    {blog?.title.length > 36
                      ? `${blog?.title?.substring(0, 36) + '..'}`
                      : `${blog?.title}`}
                  </h1>
                  <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                    {blog?.short_description.length > 120
                      ? `${blog?.short_description?.substring(0, 120) + '..'}`
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
        </Slider>
      </div>
      <div className='mt-[54px] flex lg:hidden flex-col gap-[38px] items-center '>
        {blogs &&
          blogs.map((blog, index) => (
            <div
              key={index}
              className='blog-cardsm flex flex-col gap-[18px] pb-[20px] rounded-[36px] '
            >
              <img
                src={blog?.featured_image}
                alt=''
                className='borderR rounded-t-[32px] w-[425px] h-[233px]'
              />
              <div className='px-[20px] flex flex-col gap-[13px]'>
                <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                  {blog?.title.length > 28
                    ? `${blog?.title?.substring(0, 28) + '..'}`
                    : `${blog?.title}`}
                </h1>
                <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                  {blog?.short_description.length > 100
                    ? `${blog?.short_description?.substring(0, 100) + '..'}`
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
      <div className='w-full flex items-center sm:mt-[64px] lg:mt-[80px] justify-center'>
        <Link
          to={'/blog'}
          className='w-[228px] h-[48px] flex items-center justify-center rounded-[16px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-200 borderCol bg-[#fff]  '
        >
          <div className='flex flex-row gap-[8px]'>
            <span className='font-[600] text-[16px] leading-[24px] '>
              All Blog Posts
            </span>
            <img src={Arrow} alt='' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
