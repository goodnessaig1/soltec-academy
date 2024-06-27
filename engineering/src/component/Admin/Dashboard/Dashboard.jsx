import Layout from '../Common/Layout';
import Graph from '../../../assets/Graph.svg';
import Sort from '../../../assets/sort.svg';
import Check from '../../../assets/check.svg';
import { newsLetter } from './coursesInvoice';
import { Link } from 'react-router-dom';
import { Unavailable } from '../../../Utils/Assets';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { LoadingFetching } from '../Courses/LoadingFetching';
import { apiRequest, getAdminDetail } from '../../../Utils/ApiRequest';
import { useAuth } from '../../Context/AuthContext';

const Dashboard = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState(null);
  const [workspaceBookings, setWorkspaceBookings] = useState(null);
  const [blogs, setBlogs] = useState(null);

  const getCoursesPurchases = async () => {
    try {
      const response = await apiRequest(
        'GET',
        `/courses/course_purchases/?year=2024`,
      );
      setLoading(false);
      setPaymentData(response?.results);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };
  const getWorkspaceBookings = async () => {
    try {
      const response = await apiRequest(
        'GET',
        `/workspaces/workspace_bookings/?year=2024`,
      );
      setWorkspaceBookings(response.results);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getAdminDetail(setUser);
    getCoursesPurchases();
    getWorkspaceBookings();
    getBlogs();
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/blogs/`);
      setBlogs(response?.results);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className='absolute w-[15%] flex flex-row gap-[8px] items-center mt-[70px] justify-end pr-[2px] '>
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
          {!loading ? (
            <div className='w-full flex flex-col coursesP rounded-[12px]'>
              {/* Head */}
              <div className='flex flex-row w-full mb-[10px] items-center'>
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
              {paymentData &&
                paymentData.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-row w-full items-start w-full min-h-[48px]'
                  >
                    <div className='w-[15%]'>
                      <h1 className='text-[12px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {moment(item?.date_paid).format('DD MMM YYYY, hh:mmA')}
                      </h1>
                    </div>
                    <div className='w-[21%] whitespace-normal'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                        {item?.email}
                      </h1>
                    </div>
                    <div className='w-[17%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {item?.phone_number}
                      </h1>
                    </div>
                    <div className='w-[8%]'>
                      <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                        {item?.coupon == true ? (
                          <img src={Check} alt='' />
                        ) : (
                          <div className=''>null</div>
                        )}
                      </div>
                    </div>
                    <div className='w-[18%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {item?.course}
                      </h1>
                    </div>
                    <div className='w-[17%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {item?.payment_method}
                      </h1>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <LoadingFetching />
          )}
        </div>
        {/* Workspace Bookings */}
        <div className='flex flex-col gap-[16px]'>
          {workspaceBookings && (
            <h1 className='text-[14px] font-[500] leading-[17px]'>
              WORKSPACE BOOKINGS
            </h1>
          )}
          {workspaceBookings && (
            <div className='w-full flex flex-col coursesP rounded-[12px]'>
              {/* Head */}
              <div className='flex flex-row w-full mb-[10px] items-center'>
                <div className='w-[15%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      TIME
                    </h1>
                    <img src={Sort} alt='' />
                  </div>
                </div>
                <div className='w-[15%]'>
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
                      FULL NAME
                    </h1>
                  </div>
                </div>
                <div className='w-[15%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      PHONE NUMBER
                    </h1>
                  </div>
                </div>
                <div className='w-[12%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      START DATE
                    </h1>
                  </div>
                </div>
                <div className='w-[8%]'>
                  <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                    <h1 className='text-[14px] font-[600] leading-[17px]'>
                      PLAN
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
              {workspaceBookings &&
                workspaceBookings.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-row w-full items-start w-full min-h-[48px]'
                  >
                    <div className='w-[15%]'>
                      <h1 className='text-[12px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {moment(item?.date_paid).format('DD MMM YYYY, hh:mmA')}
                      </h1>
                    </div>
                    <div className='w-[15%] whitespace-normal'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                        {item?.email.length > 12
                          ? `${item?.email.substring(
                              0,
                              4,
                            )}..${item?.email.substring(
                              item?.email.length - 8,
                            )}`
                          : `${item?.email}`}
                      </h1>
                    </div>
                    <div className='w-[17%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {item?.full_name.length > 14
                          ? `${item?.full_name.substring(0, 14)}...`
                          : `${item?.full_name}`}
                      </h1>
                    </div>
                    <div className='w-[15%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {item?.phone_number}
                      </h1>
                    </div>
                    <div className='w-[12%]'>
                      <div className='flex flex-row text-[12px] items-center gap-[10px] py-[10px] px-[12px]'>
                        {item?.start_date}
                      </div>
                    </div>
                    <div className='w-[8%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {item?.plan}
                      </h1>
                    </div>
                    <div className='w-[17%]'>
                      <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                        {item?.payment_method}
                      </h1>
                    </div>
                  </div>
                ))}
            </div>
          )}
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
            {blogs &&
              blogs.slice(0, 2).map((blog, index) => (
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
                      to={`/academy/blog/${blog?.id}/${
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
      </div>
    </Layout>
  );
};

export default Dashboard;
