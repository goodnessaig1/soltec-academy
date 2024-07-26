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
import { useAuth } from '../../Context/AuthContext';
import {
  adminApiRequest,
  apiRequest,
  getAdminDetail,
} from '../../../Utils/ApiRequest';
import WorkspaceBookings from '../Workspace/WorkspaceBookings';

const Dashboard = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState(null);
  const [workspaceBookings, setWorkspaceBookings] = useState(null);
  const [blogs, setBlogs] = useState(null);

  const getCoursesPurchases = async () => {
    try {
      const response = await adminApiRequest(
        'GET',
        `/courses/course_purchases/?year=2024`,
      );
      setLoading(false);
      setPaymentData(response?.results);
    } catch (error) {
      setLoading(false);
    }
  };
  const getWorkspaceBookings = async () => {
    try {
      const response = await adminApiRequest(
        'GET',
        `/workspaces/workspace_bookings/?year=2024`,
      );
      setWorkspaceBookings(response?.results);
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
      <div className='w-full inter_ flex flex-col gap-12 px-9'>
        <div className='flex flex-row w-full gap-3.5'>
          <div className='flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-4'>
              <h1 className='inter__ font-medium text-[14px] leading-[17px]'>
                TODAY’S VISITS
              </h1>
              <h1 className='font-semibold inter__ text-[20px] leading-[30px]'>
                129
              </h1>
            </div>
            {/* <div className='absolute w-[15%] flex flex-row gap-4 items-center mt-[70px] justify-end pr-[2px] '>
              <img src={Graph} alt='' />
              <span className='font-normal text-higherCol text-[12px] leading-[15px] inter_'>
                24% higher than yesterday
              </span>
            </div> */}
          </div>
          <div className='flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-4'>
              <h1 className='inter__ font-medium text-[14px] leading-[17px]'>
                % UNIQUE VISISTS
              </h1>
              <h1 className='font-semibold inter__ text-[24px] leading-[30px]'>
                56.44%
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-4'>
              <h1 className='inter__ font-medium text-[14px] leading-[17px]'>
                COURSE PURCHASES
              </h1>
              <h1 className='font-semibold inter__ text-[24px] leading-[30px]'>
                5
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-4'>
              <h1 className='inter__ font-medium text-[14px] leading-[17px]'>
                SIGNED UP TO NEWSLETTER
              </h1>
              <h1 className='font-semibold inter__ text-[24px] leading-[30px]'>
                4
              </h1>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          {/* Courses purchases */}
          <h1 className='text-[14px] font-medium leading-[17px]'>
            COURSE PURCHASES
          </h1>
          {!loading ? (
            <>
              <div className='w-full flex flex-col coursesP rounded-[12px]'>
                {/* Head */}
                <div className='flex flex-row w-full mb-[10px] items-center'>
                  <div className='w-[15%]'>
                    <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                      <h1 className='text-[14px] font-semibold leading-[17px]'>
                        TIME
                      </h1>
                      <img src={Sort} alt='' />
                    </div>
                  </div>
                  <div className='w-[21%]'>
                    <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                      <h1 className='text-[14px] font-semibold leading-[17px]'>
                        EMAIL
                      </h1>
                      <img src={Sort} alt='' />
                    </div>
                  </div>
                  <div className='w-[17%]'>
                    <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                      <h1 className='text-[14px] font-semibold leading-[17px]'>
                        PHONE NUMBER
                      </h1>
                    </div>
                  </div>
                  <div className='w-[8%]'>
                    <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                      <h1 className='text-[14px] font-semibold leading-[17px]'>
                        COUPON
                      </h1>
                    </div>
                  </div>
                  <div className='w-[18%]'>
                    <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                      <h1 className='text-[14px] font-semibold leading-[17px]'>
                        COURSE
                      </h1>
                    </div>
                  </div>
                  <div className='w-[17%]'>
                    <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                      <h1 className='text-[14px] font-semibold leading-[17px]'>
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
                      className='flex flex-row w-full items-start w-full '
                    >
                      <div className='w-[15%]'>
                        <h1 className='text-[12px] font-normal gap-4 px-3 leading-[17px]'>
                          {moment(item?.date_paid).format(
                            'DD MMM YYYY, hh:mmA',
                          )}
                        </h1>
                      </div>
                      <div className='w-[21%] whitespace-normal'>
                        <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px] break-all'>
                          {item?.email}
                        </h1>
                      </div>
                      <div className='w-[17%]'>
                        <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                          {item?.phone_number}
                        </h1>
                      </div>
                      <div className='w-[8%]'>
                        <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                          {item?.coupon == true ? (
                            <img src={Check} alt='' />
                          ) : (
                            <div className=''>null</div>
                          )}
                        </div>
                      </div>
                      <div className='w-[18%]'>
                        <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                          {item?.course}
                        </h1>
                      </div>
                      <div className='w-[17%]'>
                        <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                          {item?.payment_method}
                        </h1>
                      </div>
                    </div>
                  ))}
              </div>
              {/* Workspace Bookings */}
              <div className='flex flex-col gap-4'>
                {workspaceBookings && (
                  <h1 className='text-[14px] font-medium leading-[17px]'>
                    WORKSPACE BOOKINGS
                  </h1>
                )}
                {workspaceBookings && (
                  <>
                    <WorkspaceBookings workspaceBookings={workspaceBookings} />
                  </>
                )}
              </div>

              {/* News letter */}
              <div className='flex flex-col gap-6'>
                <h1 className='text-[14px] font-medium leading-[17px]'>
                  NEWSLETTER SIGNUPS
                </h1>
                <div className='w-full flex flex-col gap-3 coursesP rounded-[12px]'>
                  {/* Head */}
                  <div className='flex flex-row w-full items-center'>
                    <div className='w-[26%]'>
                      <div className='flex flex-row items-center gap-4 px-3'>
                        <h1 className='text-[14px] font-semibold leading-[17px]'>
                          TIME
                        </h1>
                        <img src={Sort} alt='' />
                      </div>
                    </div>
                    <div className='w-[72%]'>
                      <div className='flex flex-row items-center gap-4 px-3'>
                        <h1 className='text-[14px] font-semibold leading-[17px]'>
                          EMAIL
                        </h1>
                        <img src={Sort} alt='' />
                      </div>
                    </div>
                  </div>
                  {/* Data */}
                  {newsLetter.map((item, index) => (
                    <div
                      key={index}
                      className='flex flex-row items-start w-full'
                    >
                      <div className='w-[26%]'>
                        <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                          {item.date}
                        </h1>
                      </div>
                      <div className='w-[72%] whitespace-normal'>
                        <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px] break-all'>
                          {item.email}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog posts */}
              <div className='flex flex-col gap-4 mb-[130px] '>
                <h1 className='text-[14px] font-medium leading-[17px]'>
                  LATEST BLOG POSTS
                </h1>
                <div className='flex flex-row w-ful gap-7'>
                  {blogs &&
                    blogs.length >= 1 &&
                    blogs.slice(0, 2).map((blog, index) => (
                      <div
                        key={index}
                        className='blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-4 pb-5 rounded-[36px] '
                      >
                        <img
                          src={blog?.featured_image}
                          alt=''
                          className='rounded-t-[36px] w-[395px] h-[233px]'
                        />
                        <div className='px-3 lg:px-4 flex flex-col gap-[13px]'>
                          <h1 className='font-semibold  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] '>
                            {blog?.title.length > 36
                              ? `${blog?.title?.substring(0, 36) + '..'}`
                              : `${blog?.title}`}
                          </h1>
                          <span className='font-normal text-[14px] leading-[21px] text-lightB'>
                            {blog?.short_description.length > 120
                              ? `${
                                  blog?.short_description?.substring(0, 120) +
                                  '..'
                                }`
                              : `${blog?.short_description}`}
                          </span>
                        </div>
                        <div className='flex flex-row justify-between px-5 mt-4 items-center'>
                          <div className='flex flex-row gap-4 '>
                            {blog?.author_image ? (
                              <img
                                src={blog?.author_image}
                                alt=''
                                className='rounded-[100%] w-8 h-8'
                              />
                            ) : (
                              <img
                                src={Unavailable}
                                alt=''
                                className='rounded-[100%] w-8 h-8'
                              />
                            )}
                            <div className='flex flex-col'>
                              <h3 className='text-[14px] font-medium leading-[17px] text-lightB'>
                                {blog?.author_name}
                              </h3>
                              <h3 className='text-[12px] font-normal leading-[14px] text-lightB'>
                                5 min read
                              </h3>
                            </div>
                          </div>
                          <Link
                            to={`/academy/blog/${blog?.id}/${
                              blog.author_name
                            }/${blog?.title.substring(0, 20)}`}
                            className='flex items-center justify-center hover:bg-[#F5F7F9] transition ease-in-out duration-300  readMore rounded-[16px] w-[113px] h-12'
                          >
                            <span className='text-[14px] leading-[17px] font-normal'>
                              Read more
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          ) : (
            <LoadingFetching />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
