/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import BlogText from '../../assets/Blog.svg';
import FrontendImg from '../../assets/frontend.png';
import Uiux from '../../assets/uiux.jpg';
import Product from '../../assets/product-design.jpg';
import Profile from '../../assets/profile1.svg';
import Arrow from '../../assets/arrow.svg';
import Prev from '../../assets/prev.svg';
import Next from '../../assets/next.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

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
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className='flex flex-col sm:mt-[120px] lg:mt-[180px] sm:px-[16px] pb-[120px]'>
      <div className='flex items-center justify-center '>
        <img src={BlogText} alt='' className='' />
      </div>
      <div className='lg:pl-[120px] sm:hidden lg:block mt-[82px]'>
        <Slider {...settings} className='slider-container'>
          <div className='blog-card flex flex-col gap-[18px] pb-[20px] rounded-[36px] '>
            <img src={FrontendImg} alt='' className='borderR' />
            <div className='px-[20px] flex flex-col gap-[13px]'>
              <h1 className='font-[600] text-[20px] leading-[24px] '>
                The secret to mastering Frontend deve..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
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
          <div className='blog-card flex flex-col gap-[18px] pb-[20px] rounded-[36px]  '>
            <img src={Uiux} alt='' className='borderR' />
            <div className='px-[20px] flex flex-col gap-[13px]'>
              <h1 className='font-[600] text-[20px] leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
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
          <div className='blog-card flex flex-col gap-[18px] pb-[20px] rounded-[36px] '>
            <img src={Product} alt='' className='borderR' />
            <div className='px-[20px] flex flex-col gap-[13px]'>
              <h1 className='font-[600] text-[20px] leading-[24px] '>
                The secret to mastering product design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
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
          <div className='blog-card flex flex-col gap-[18px] pb-[20px] rounded-[36px]  '>
            <img src={Uiux} alt='' className='borderR' />
            <div className='px-[20px] flex flex-col gap-[13px]'>
              <h1 className='font-[600] text-[20px] leading-[24px] '>
                The secret to mastering UI/UX design
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
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
          <div className='blog-card flex flex-col gap-[18px] pb-[20px] rounded-[36px] '>
            <img src={FrontendImg} alt='' className='borderR' />
            <div className='px-[20px] flex flex-col gap-[13px]'>
              <h1 className='font-[600] text-[20px] leading-[24px] '>
                The secret to mastering Frontend deve..
              </h1>
              <span className='font-[400] text-[14px] leading-[21px] text-lightB'>
                Like the famous martial artist Bruce Lee once said, I fear not
                the man who has practiced 10,000 kicks once, but I fear the...
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
