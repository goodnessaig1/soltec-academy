import Layout from '../Common/Layout';
import Graph from '../../../assets/Graph.svg';
import Sort from '../../../assets/sort.svg';
import Check from '../../../assets/check.svg';
import { coursePurchase, newsLetter } from './coursesInvoice';
import { Link } from 'react-router-dom';
import { BlogP, FrontendImg, Profile } from '../../../Utils/Assets'

const Dashboard = () => {
  return (
    <Layout text='Dashboard'>
      <div className='w-full inter_ flex flex-col gap-[48px] px-[36px]'>
        <div className='flex flex-row w-full gap-[14px]'>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                TODAY’S VISITS
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                129
              </h1>
            </div>
            <div className='absolute flex flex-row gap-[8px] items-center mt-[70px] pl-[60px] '>
              <img src={Graph} alt='' />
              <span className='font-[400] text-higherCol text-[12px] leading-[15px] inter_'>
                24% higher than yesterday
              </span>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                % UNIQUE VISISTS
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                56.44%
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                COURSE PURCHASES
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                5
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                SIGNED UP TO NEWSLETTER
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                4
              </h1>
            </div>
          </div>
        </div>

        {/* Courses purchases */}
        <div className='flex flex-col gap-[16px]'>
          <h1 className='text-[14px] font-[500] leading-[17px]'>
            COURSE PURCHASES
          </h1>
          <div className='w-full flex flex-col coursesP rounded-[12px]'>
            {/* Head */}
            <div className='flex flex-row w-full items-center'>
              <div className='w-[15%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    TIME
                  </h1>
                  <img src={Sort} alt='' />
                </div>
              </div>
              <div className='w-[21%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    EMAIL
                  </h1>
                  <img src={Sort} alt='' />
                </div>
              </div>
              <div className='w-[17%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    PHONE NUMBER
                  </h1>
                </div>
              </div>
              <div className='w-[8%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    COUPON
                  </h1>
                </div>
              </div>
              <div className='w-[18%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    COURSE
                  </h1>
                </div>
              </div>
              <div className='w-[17%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    PAYMENT METHOD
                  </h1>
                </div>
              </div>
            </div>
            {/* Data */}
            {coursePurchase.map((item, index) => (
              <div key={index} className='flex flex-row items-start w-full'>
                <div className='w-[15%]'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.date}
                  </h1>
                </div>
                <div className='w-[21%] whitespace-normal'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                    {item.email}
                  </h1>
                </div>
                <div className='w-[17%]'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.phoneNumber}
                  </h1>
                </div>
                <div className='w-[8%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    {item.cupon == true ? <img src={Check} alt='' /> : null}
                  </div>
                </div>
                <div className='w-[18%]'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.course}
                  </h1>
                </div>
                <div className='w-[17%]'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.paymentMethod}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News letter */}
        <div className='flex flex-col gap-[16px]'>
          <h1 className='text-[14px] font-[500] leading-[17px]'>
            NEWSLETTER SIGNUPS
          </h1>
          <div className='w-full flex flex-col coursesP rounded-[12px]'>
            {/* Head */}
            <div className='flex flex-row w-full items-center'>
              <div className='w-[26%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    TIME
                  </h1>
                  <img src={Sort} alt='' />
                </div>
              </div>
              <div className='w-[72%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    EMAIL
                  </h1>
                  <img src={Sort} alt='' />
                </div>
              </div>
            </div>
            {/* Data */}
            {newsLetter.map((item, index) => (
              <div key={index} className='flex flex-row items-start w-full'>
                <div className='w-[26%]'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                    {item.date}
                  </h1>
                </div>
                <div className='w-[72%] whitespace-normal'>
                  <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                    {item.email}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog posts */}
        <div className='flex flex-col gap-[16px] mb-[130px] '>
          <h1 className='text-[14px] font-[500] leading-[17px]'>
            LATEST BLOG POSTS
          </h1>
          <div className='flex flex-row w-ful gap-[28px]'>
            <div className='blog-card2 w-[340px] lg:w-[536px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px] '>
              <img
                src={FrontendImg}
                alt=''
                className='borderR h-[223px]'
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
                    src={Profile}
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
            <div className='blog-card2 w-[340px] lg:w-[536px] sm:h-[386px] lg:h-[423px] flex flex-col gap-[16px] pb-[20px] rounded-[36px]  '>
              <img src={BlogP} alt='' className='borderR h-[223px]' />
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
                    src={Profile}
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
    </Layout>
  );
};

export default Dashboard;
