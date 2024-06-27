/* eslint-disable no-unused-vars */
import Sort from '../../../assets/sort.svg';
import Check from '../../../assets/check.svg';
import { Dropdown, PrintOutlined } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useEffect, useState } from 'react';
import { LoadingFetching } from '../Courses/LoadingFetching';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import { apiRequest } from '../../../Utils/ApiRequest';
const AdminPayment = () => {
  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState(null);
  const [paymentStats, setPaymentStats] = useState(null);
  const [loadStats, setLoadStats] = useState(true);

  const getCoursesPurchases = async () => {
    setLoading(true);
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

  const getPaymentStats = async () => {
    setLoadStats(true);
    try {
      const response = await apiRequest(
        'GET',
        `/courses/payment_stats/?year=2024`,
      );
      setLoadStats(false);
      setPaymentStats(response);
    } catch (error) {
      setLoadStats(false);
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCoursesPurchases();
    getPaymentStats();
  }, []);

  return (
    <Layout text='Testimonials'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        {/* <div className='flex flex-row items-center justify-between'>
          <span></span>
          <div className='flex flex-row gap-[11px]'>
            <div className='flex flex-row rounded-[12px] px-[16px] justify-between items-center h-[40px] course_input w-[276px]'>
              <input
                type='text'
                placeholder='Search'
                className='outline-none border-none bg-transparent'
              />
              <img src={SearchGray} alt='' />
            </div>
            <Link
              to={'/admin/testimonials/add-testimonial'}
              className='w-[145px] hover:opacity-[94%] h-[40px] rounded-[12px] bg-lBlue flex gap-[6px] items-center justify-center'
            >
              <img src={PlusW} alt='' />
              <h2 className='text-[#fff] font-[500] text-[14px] leading-[17px]'>
                Add Testimonial
              </h2>
            </Link>
          </div>
        </div> */}

        <div className='w-[104px] h-[32px] rounded-[8px] course_input flex flex-row items-center justify-center gap-[6px]'>
          <h1 className='font-[500] text-[14px] leading-[21px]'>This year</h1>
          <img src={Dropdown} alt='' />
        </div>

        <div className='flex flex-row w-full gap-[14px]'>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[16px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                COURSE PURCHASES
              </h1>
              {!loadStats ? (
                <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                  {paymentStats?.course_purchases}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[16px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                MOST PURCHASED
              </h1>
              {!loadStats ? (
                <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                  {paymentStats?.most_purchased}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                MOST USED PAYMENT METHOD
              </h1>
              {!loadStats ? (
                <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                  {paymentStats?.most_used_payment_method}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                TOTAL REVENUE
              </h1>
              {!loadStats ? (
                <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                  N{parseFloat(paymentStats?.total_revenue).toLocaleString()}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
        </div>

        {!loading ? (
          <div className='w-full flex flex-col coursesP rounded-[12px]'>
            {/* Head */}
            <div className='flex flex-row w-full mb-[10px] items-center'>
              <div className='w-[10%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    TIME
                  </h1>
                  <img src={Sort} alt='' />
                </div>
              </div>
              <div className='w-[20%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    EMAIL
                  </h1>
                  <img src={Sort} alt='' />
                </div>
              </div>
              <div className='w-[11%]'>
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
              <div className='w-[17%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    COURSE
                  </h1>
                </div>
              </div>
              <div className='w-[11%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    PAYMENT METHOD
                  </h1>
                </div>
              </div>
              <div className='w-[11%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  <h1 className='text-[14px] font-[600] leading-[17px]'>
                    AMOUNT
                  </h1>
                </div>
              </div>
              <div className='w-[7%]'></div>
            </div>
            {/* Data */}
            {paymentData &&
              paymentData.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-row w-full items-start w-full min-h-[48px]'
                >
                  <div className='w-[10%]'>
                    <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                      {moment(item?.date_paid).format('DD MMM YYYY, hh:mmA')}
                    </h1>
                  </div>
                  <div className='w-[20%] whitespace-normal'>
                    <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                      {item?.email}
                    </h1>
                  </div>
                  <div className='w-[11%]'>
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
                  <div className='w-[17%]'>
                    <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                      {item?.course}
                    </h1>
                  </div>
                  <div className='w-[11%]'>
                    <h1 className='text-[14px]  max-w-[200px] break-words font-[400] py-[10px] px-[12px] leading-[17px]'>
                      {item?.payment_method}
                    </h1>
                  </div>
                  <div className='w-[11%]'>
                    <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                      N{parseFloat(item?.amount_paid).toLocaleString()}
                    </h1>
                  </div>
                  <div className='w-[7%] items-center flex justify-center'>
                    <div className='course_input w-[53px] h-[32px] rounded-[50px] flex items-center justify-center '>
                      <img src={PrintOutlined} alt='' />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <LoadingFetching />
        )}
      </div>
    </Layout>
  );
};

export default AdminPayment;
