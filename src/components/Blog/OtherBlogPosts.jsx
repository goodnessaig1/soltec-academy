/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import BlogText from '../../assets/otherposts.svg';
import Prev from '../../assets/prev.svg';
import Next from '../../assets/next.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Unavailable } from '../../Utils/Assets';

const CustomPrevArrow = props => {
  return (
    <div
      className='custom-prev-arrow-blog courses_arrow_prev  courses_arrow-blog bg-transparent'
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
      className='custom-next-arrow-blog courses_arrow_next courses_arrow-blog w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] '
      onClick={props.onClick}
    >
      <div className='w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Next} alt='' />
      </div>
    </div>
  );
};
const OtherBlogPost = ({ otherBlogs }) => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  var mdSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  var settingsIpad = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className='flex flex-col sm:mt-[90px] lg:mt-[120px] sm:px-[16px] pb-[120px]'>
      <div className='flex items-center sm:justify-center lg:justify-start lg:ml-[60px] xl:ml-[100px] '>
        <img src={BlogText} alt='' className='' />
      </div>
      <div className=' lg:px-[60px] lg:pl-[100px] sm:hidden xl:block xll:hidden mt-[32px]'>
        <Slider {...settings} className='slider-container'>
          {otherBlogs &&
            otherBlogs.map((blog, index) => (
              <div
                key={index}
                className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '
              >
                <img src={blog?.featured_image} alt='' className='borderR' />
                <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
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
      <div className=' lg:px-[60px] lg:pl-[100px] sm:hidden xll:block mt-[32px]'>
        <Slider {...mdSettings} className='slider-container'>
          {otherBlogs &&
            otherBlogs.map((blog, index) => (
              <div
                key={index}
                className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '
              >
                <img src={blog?.featured_image} alt='' className='borderR' />
                <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
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
      <div className='px-[60px] lg:pl-[100px] sm:hidden lg:block xl:hidden mt-[32px]'>
        <Slider {...settingsIpad} className='slider-container'>
          {otherBlogs &&
            otherBlogs.map((blog, index) => (
              <div
                key={index}
                className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '
              >
                <img src={blog?.featured_image} alt='' className='borderR' />
                <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
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
        {otherBlogs &&
          otherBlogs.map((blog, index) => (
            <div
              key={index}
              className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '
            >
              <img src={blog?.featured_image} alt='' className='borderR' />
              <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
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
      </div>
    </div>
  );
};

export default OtherBlogPost;
