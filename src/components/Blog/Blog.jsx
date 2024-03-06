import { Link } from 'react-router-dom';
import Icons from '../../assets/index';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
const Blog = () => {
  return (
    <div className='w-full'>
      <Header headerCol={false} />

      <div className='container_'>
        <div className='flex px-[16px] lg:px-[100px] xl:px-[60px] xll:px-[120px] pb-[160px] flex-col'>
          <div className='flex flex-col gap-[16px] mt-[60px] items-center justify-center'>
            <img src={Icons?.Blog} className='lg:block hidden' alt='' />
            <img src={Icons?.BlogMobile} className='block lg:hidden' alt='' />
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
                <img src={Icons?.SearchIcon} alt='' />
              </div>
            </div>
          </div>
          {/*  */}
          <div className='mt-[80px] items-center  flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-[32px] sm:gap-y-[27px] lg:gap-y-[32px]'>
            <div className='blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
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
                  to={'/blog/payment-guide'}
                  className='flex items-center justify-center readMore rounded-[16px] w-[113px] h-[48px]'
                >
                  <span className='text-[14px] leading-[17px] font-[400]'>
                    Read more
                  </span>
                </Link>
              </div>
            </div>
            <div className='blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
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
            <div className='blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
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
            <div className='blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
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
            <div className='blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
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
            <div className='blog-card2 w-[340px] lg:w-[395px] h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
