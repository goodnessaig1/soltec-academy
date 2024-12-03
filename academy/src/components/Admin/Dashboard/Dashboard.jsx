import Layout from "../Common/Layout";
import { Link } from "react-router-dom";
import { Unavailable } from "../../../Utils/Assets";
import { useEffect, useState } from "react";
import { LoadingFetching } from "../Courses/LoadingFetching";
import { useAuth } from "../../Context/AuthContext";
import {
  adminApiRequest,
  apiRequest,
  getAdminDetail,
} from "../../../Utils/ApiRequest";
import WorkspaceBookings from "../Workspace/WorkspaceBookings";
import NewsletterSubscribers from "../Newsletter/NewsletterSubscribers";
import CoursePayment from "../Payment/CoursePayment";

const Dashboard = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState([]);
  const [workspaceBookings, setWorkspaceBookings] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  const getCoursesPurchases = async () => {
    try {
      const response = await adminApiRequest(
        "GET",
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
        "GET",
        `/workspaces/workspace_bookings/?year=2024`,
      );
      setWorkspaceBookings(response?.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getNewsLetterSubscribers = async () => {
    try {
      const response = await apiRequest("GET", `/newsletters/`);
      setSubscribers(response?.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAdminDetail(setUser);
    getCoursesPurchases();
    getWorkspaceBookings();
    getBlogs();
    getNewsLetterSubscribers();
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await apiRequest("GET", `/blogs/`);
      setBlogs(response?.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout text="Dashboard">
      <div className="w-full inter_ flex flex-col gap-12 px-9">
        <div className="flex flex-row w-full gap-3.5">
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-4">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                TODAY’S VISITS
              </h1>
              <h1 className="font-semibold inter__ text-[20px] leading-[30px]">
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
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-4">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                % UNIQUE VISISTS
              </h1>
              <h1 className="font-semibold inter__ text-[24px] leading-[30px]">
                56.44%
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-4">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                COURSE PURCHASES
              </h1>
              <h1 className="font-semibold inter__ text-[24px] leading-[30px]">
                {paymentData && paymentData.length}
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-4">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                SIGNED UP TO NEWSLETTER
              </h1>
              <h1 className="font-semibold inter__ text-[24px] leading-[30px]">
                {subscribers && subscribers.length}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {!loading ? (
            <>
              {/* Courses purchases */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[14px] font-medium leading-[17px]">
                  COURSE PURCHASES
                </h1>
                <CoursePayment
                  paymentData={paymentData}
                  setPaymentData={setPaymentData}
                />
              </div>

              {/* Workspace Bookings */}
              {workspaceBookings && workspaceBookings.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h1 className="text-[14px] font-medium leading-[17px]">
                    WORKSPACE BOOKINGS
                  </h1>
                  {workspaceBookings && (
                    <>
                      <WorkspaceBookings
                        workspaceBookings={workspaceBookings}
                      />
                    </>
                  )}
                </div>
              )}

              {/* News letter */}
              <div className="flex flex-col gap-6">
                <h1 className="text-[14px] font-medium leading-[17px]">
                  NEWSLETTER SIGNUPS
                </h1>
                <NewsletterSubscribers
                  subscribers={subscribers}
                  setSubscribers={setSubscribers}
                />
              </div>

              {/* Blog posts */}
              <div className="flex flex-col gap-4 mb-[130px] ">
                <h1 className="text-[14px] font-medium leading-[17px]">
                  LATEST BLOG POSTS
                </h1>
                <div className="flex flex-row w-ful gap-7">
                  {blogs &&
                    blogs.length >= 1 &&
                    blogs.slice(0, 2).map((blog, index) => (
                      <div
                        key={index}
                        className="blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-4 pb-5 rounded-[36px] "
                      >
                        <img
                          src={blog?.featured_image}
                          alt=""
                          className="rounded-t-[36px] w-[395px] h-[233px]"
                        />
                        <div className="px-3 lg:px-4 flex flex-col gap-[13px]">
                          <h1 className="font-semibold  text-nowrap text_wrap2 sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] ">
                            {blog?.title.length > 36
                              ? `${blog?.title?.substring(0, 36) + ".."}`
                              : `${blog?.title}`}
                          </h1>
                          <span className="font-normal text-[14px] leading-[21px] text-lightB">
                            {blog?.short_description.length > 120
                              ? `${
                                  blog?.short_description?.substring(0, 120) +
                                  ".."
                                }`
                              : `${blog?.short_description}`}
                          </span>
                        </div>
                        <div className="flex flex-row justify-between px-5 mt-4 items-center">
                          <div className="flex flex-row gap-4 ">
                            {blog?.author_image ? (
                              <img
                                src={blog?.author_image}
                                alt=""
                                className="rounded-[100%] w-8 h-8"
                              />
                            ) : (
                              <img
                                src={Unavailable}
                                alt=""
                                className="rounded-[100%] w-8 h-8"
                              />
                            )}
                            <div className="flex flex-col">
                              <h3 className="text-[14px] font-medium leading-[17px] text-lightB">
                                {blog?.author_name}
                              </h3>
                              <h3 className="text-[12px] font-normal leading-[14px] text-lightB">
                                5 min read
                              </h3>
                            </div>
                          </div>
                          <Link
                            to={`/academy/blog/${blog?.id}/${
                              blog.author_name
                            }/${blog?.title.substring(0, 20)}`}
                            className="flex items-center justify-center hover:bg-[#F5F7F9] transition ease-in-out duration-300  readMore rounded-[16px] w-[113px] h-12"
                          >
                            <span className="text-[14px] leading-[17px] font-normal">
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
