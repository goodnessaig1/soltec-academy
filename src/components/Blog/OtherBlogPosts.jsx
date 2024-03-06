/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import BlogText from '../../assets/otherposts.svg';
import FrontendImg from '../../assets/frontend.png';
import Uiux from '../../assets/uiux.jpg';
import Product from '../../assets/product-design.jpg';
import Profile from '../../assets/profile1.svg';
import Prev from '../../assets/prev.svg';
import Next from '../../assets/next.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Icons from '../../assets/index';

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
const OtherBlogPost = () => {
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
      <div className=' lg:px-[60px] sm:hidden xl:block xll:hidden mt-[32px]'>
        <Slider {...settings} className='slider-container'>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.FrontendImg} alt='' className='borderR' />
            <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
            <img src={Icons?.Uiux} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.Product} alt='' className='borderR' />
            <div className='sm:px-[10px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px]'>
                The secret to mastering product design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.FrontendImg} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img
              src={Icons?.BlogP}
              alt=''
              className='borderR h-[181px] lg:h-[210px]'
            />
            <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
            <img src={Icons?.Uiux} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      <div className=' lg:px-[60px] sm:hidden xll:block mt-[32px]'>
        <Slider {...mdSettings} className='slider-container'>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.FrontendImg} alt='' className='borderR' />
            <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
            <img src={Icons?.Uiux} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.Product} alt='' className='borderR' />
            <div className='sm:px-[10px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px]'>
                The secret to mastering product design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.FrontendImg} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img
              src={Icons?.BlogP}
              alt=''
              className='borderR h-[181px] lg:h-[210px]'
            />
            <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
            <img src={Icons?.Uiux} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      <div className='px-[60px] sm:hidden lg:block xl:hidden mt-[32px]'>
        <Slider {...settingsIpad} className='slider-container'>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.FrontendImg} alt='' className='borderR' />
            <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
            <img src={Icons?.Uiux} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.Product} alt='' className='borderR' />
            <div className='sm:px-[10px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px]'>
                The secret to mastering product design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img src={Icons?.FrontendImg} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
            <img
              src={Icons?.BlogP}
              alt=''
              className='borderR h-[181px] lg:h-[210px]'
            />
            <div className='px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering Frontend dev..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
          <div className='blog-card3 w-[340px] lg:w-[395px] h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
            <img src={Icons?.Uiux} alt='' className='borderR' />
            <div className='sm:px-[12px] lg:px-[16px] flex flex-col gap-[13px]'>
              <h1 className='font-[600]  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
              </span>
            </div>
            <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
              <div className='flex flex-row gap-[8px] '>
                <img
                  src={Icons?.Profile}
                  alt=''
                  className='rounded-[100%] w-[32px]'
                />
                <div className='flex flex-col'>
                  <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                    Quicksand
                  </h3>
                  <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                    5 min read
                  </h3>
                </div>
              </div>
              <Link
                to={'/blog/post'}
                className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
              >
                <span className='text-[14px] leading-[17px] font-[400]'>
                  Read more
                </span>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
      <div className='mt-[54px] flex lg:hidden flex-col gap-[38px] items-center '>
        <div className='blog-cardsm flex flex-col gap-[12px] pb-[12px] rounded-[36px] '>
          <img src={FrontendImg} alt='' className='borderR' />
          <div className='px-[10px] flex flex-col gap-[13px]'>
            <h1 className='font-[600] text-[17px] leading-[24px] '>
              The secret to mastering frontend deve...
            </h1>
            <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
              Like the famous martial artist Bruce Lee once said, I fear not the
              man who has practiced 10,000 kicks once, but I fear the...
            </span>
          </div>
          <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
            <div className='flex flex-row gap-[8px] '>
              <img src={Profile} alt='' className='rounded-[100%] w-[32px]' />
              <div className='flex flex-col'>
                <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                  Quicksand
                </h3>
                <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                  5 min read
                </h3>
              </div>
            </div>
            <div className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'>
              <span className='text-[14px] leading-[17px] font-[400]'>
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className='blog-cardsm  flex flex-col gap-[12px] pb-[12px] rounded-[36px]  '>
          <img src={Uiux} alt='' className='borderR' />
          <div className='px-[10px] flex flex-col gap-[13px]'>
            <h1 className='font-[600] text-[17px] leading-[24px] '>
              The secret to mastering UI/UX design
            </h1>
            <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
              Like the famous martial artist Bruce Lee once said, I fear not the
              man who has practiced 10,000 kicks once, but I fear the...
            </span>
          </div>
          <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
            <div className='flex flex-row gap-[8px] '>
              <img src={Profile} alt='' className='rounded-[100%] w-[32px]' />
              <div className='flex flex-col'>
                <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                  Quicksand
                </h3>
                <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                  5 min read
                </h3>
              </div>
            </div>
            <div className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'>
              <span className='text-[14px] leading-[17px] font-[400]'>
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className='blog-cardsm flex flex-col gap-[12px] pb-[12px] rounded-[36px] '>
          <img src={Product} alt='' className='borderR' />
          <div className='px-[10px] flex flex-col gap-[13px]'>
            <h1 className='font-[600] text-[17px] leading-[24px] '>
              The secret to mastering product design
            </h1>
            <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
              Like the famous martial artist Bruce Lee once said, I fear not the
              man who has practiced 10,000 kicks once, but I fear the...
            </span>
          </div>
          <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
            <div className='flex flex-row gap-[8px] '>
              <img src={Profile} alt='' className='rounded-[100%] w-[32px]' />
              <div className='flex flex-col'>
                <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                  Quicksand
                </h3>
                <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                  5 min read
                </h3>
              </div>
            </div>
            <div className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'>
              <span className='text-[14px] leading-[17px] font-[400]'>
                Read more
              </span>
            </div>
          </div>
        </div>
        <div className='blog-cardsm flex flex-col gap-[12px] pb-[12px] rounded-[36px]  '>
          <img src={Uiux} alt='' className='borderR' />
          <div className='px-[10px] flex flex-col gap-[13px]'>
            <h1 className='font-[600] text-[17px] leading-[24px] '>
              The secret to mastering UI/UX design
            </h1>
            <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
              Like the famous martial artist Bruce Lee once said, I fear not the
              man who has practiced 10,000 kicks once, but I fear the...
            </span>
          </div>
          <div className='flex flex-row justify-between px-[20px] mt-[16px] items-center'>
            <div className='flex flex-row gap-[8px] '>
              <img src={Profile} alt='' className='rounded-[100%] w-[32px]' />
              <div className='flex flex-col'>
                <h3 className='text-[14px] font-[500] leading-[17px] text-lightB'>
                  Quicksand
                </h3>
                <h3 className='text-[12px] font-[400] leading-[14px] text-lightB'>
                  5 min read
                </h3>
              </div>
            </div>
            <div className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'>
              <span className='text-[14px] leading-[17px] font-[400]'>
                Read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogPost;
