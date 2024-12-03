/* eslint-disable no-unused-vars */
import Sort from "../../../assets/sort.svg";
import Check from "../../../assets/check.svg";
import { Dropdown, PrintOutlined } from "../../../Utils/Assets";
import Layout from "../Common/Layout";
import { useEffect, useState } from "react";
import { LoadingFetching } from "../Courses/LoadingFetching";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import { adminApiRequest } from "../../../Utils/ApiRequest";
import { useNavigate } from "react-router-dom";

const AdminPayment = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [paymentData, setPaymentData] = useState(null);
  const [paymentStats, setPaymentStats] = useState(null);
  const [loadStats, setLoadStats] = useState(true);

  const getCoursesPurchases = async () => {
    setLoading(true);
    try {
      const response = await adminApiRequest(
        "GET",
        `/courses/course_purchases/?year=2024`,
      );
      setLoading(false);
      setPaymentData(response.results);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const getPaymentStats = async () => {
    setLoadStats(true);
    try {
      const response = await adminApiRequest(
        "GET",
        `/courses/payment_stats/?year=2024`,
      );
      setLoadStats(false);
      setPaymentStats(response);
    } catch (error) {
      setLoadStats(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCoursesPurchases();
    getPaymentStats();
  }, []);

  const [isReversed, setIsReversed] = useState(false);
  let initialValues = 6;

  // Handler to reverse the data
  const handleSort = () => {
    setIsReversed(!isReversed);
    setPaymentData(prevData => [...prevData].reverse());
  };

  return (
    <Layout text="Payments">
      <div className="w-full inter__ flex flex-col gap-9 px-9 pb-[140px]">
        <div className="w-[104px] h-8 rounded-[8px] course_input flex flex-row items-center justify-center gap-1.5">
          <h1 className="font-medium text-[14px] leading-[21px]">This year</h1>
          <img src={Dropdown} alt="" />
        </div>

        <div className="flex flex-row w-full gap-[14px]">
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-4">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                COURSE PURCHASES
              </h1>
              {!loadStats ? (
                <h1 className="font-semibold inter__ text-[24px] leading-[30px]">
                  {paymentStats?.course_purchases}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-4">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                MOST PURCHASED
              </h1>
              {!loadStats ? (
                <h1 className="font-semibold inter__ text-[24px] leading-[30px]">
                  {paymentStats && paymentStats.most_purchased && (
                    <>
                      {(paymentStats.most_purchased || "").length > 16
                        ? `${(paymentStats.most_purchased || "").substring(
                            0,
                            16,
                          )}...`
                        : `${paymentStats.most_purchased || ""}`}
                    </>
                  )}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-2">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                MOST USED PAYMENT METHOD
              </h1>
              {!loadStats ? (
                <h1 className="font-semibold inter__ text-[20px] leading-[30px]">
                  {paymentStats?.most_used_payment_method}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
          <div className="flex flex-col w-[24%] gap-4 p-6 rounded-[12px] bg-bg3 h-[110px] justify-center ">
            <div className="flex flex-col gap-2">
              <h1 className="inter__ font-medium text-[14px] leading-[17px]">
                TOTAL REVENUE
              </h1>
              {!loadStats ? (
                <h1 className="font-semibold inter__ text-[24px] leading-[30px]">
                  N{parseFloat(paymentStats?.total_revenue).toLocaleString()}
                </h1>
              ) : (
                <Skeleton height={50} width={160} />
              )}
            </div>
          </div>
        </div>

        {!loading ? (
          <div className="w-full py-3 flex flex-col gap-5 coursesP rounded-[12px]">
            <div className="flex flex-col gap-3.5">
              <div className="flex px-2 flex-row w-full items-center">
                <div className="w-[10%]">
                  <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                    <h1 className="text-[14px] font-semibold leading-[17px]">
                      TIME
                    </h1>
                    <div onClick={handleSort} className="hover:cursor-pointer">
                      <img src={Sort} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-[20%]">
                  <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                    <h1 className="text-[14px] font-semibold leading-[17px]">
                      EMAIL
                    </h1>
                  </div>
                </div>
                <div className="w-[12%]">
                  <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                    <h1 className="text-[14px] font-semibold leading-[17px]">
                      PHONE NUMBER
                    </h1>
                  </div>
                </div>
                <div className="w-[8%]">
                  <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                    <h1 className="text-[14px] font-semibold leading-[17px]">
                      COUPON
                    </h1>
                  </div>
                </div>
                <div className="w-[17%]">
                  <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                    <h1 className="text-[14px] font-semibold leading-[17px]">
                      COURSE
                    </h1>
                  </div>
                </div>
                <div className="w-[14%]">
                  <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                    <h1 className="text-[14px] font-semibold leading-[17px]">
                      PAYMENT METHOD
                    </h1>
                  </div>
                </div>
                <div className="w-[9%]">
                  <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                    <h1 className="text-[14px] font-semibold leading-[17px]">
                      AMOUNT
                    </h1>
                  </div>
                </div>
                <div className="w-[7%]"></div>
              </div>
              <hr />
            </div>
            <div className="px-2">
              {paymentData &&
                paymentData.map((item, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      navigate(`/courses/payment/verify/${item.transaction_id}`)
                    }
                    className="flex flex-row hover:cursor-pointer transition duration-300 hover:bg-gray-100 py-2 rounded-md w-full items-start w-full "
                  >
                    <div className="w-[10%]">
                      <h1 className="text-[14px] font-normal py-2.5 px-3 leading-[17px]">
                        {moment(item?.date_paid).format("DD MMM YYYY, hh:mmA")}
                      </h1>
                    </div>
                    <div className="w-[20%] whitespace-normal">
                      <h1 className="text-[14px] font-normal py-2.5 px-3 leading-[17px] break-all">
                        {item?.email}
                      </h1>
                    </div>
                    <div className="w-[12%]">
                      <h1 className="text-[14px] font-normal py-2.5 px-3 leading-[17px]">
                        {item?.phone_number}
                      </h1>
                    </div>
                    <div className="w-[8%]">
                      <div className="flex flex-row items-center gap-2.5 py-2.5 px-3">
                        {item?.coupon == true ? (
                          <img src={Check} alt="" />
                        ) : (
                          <div className="">null</div>
                        )}
                      </div>
                    </div>
                    <div className="w-[17%]">
                      <h1 className="text-[14px] font-normal py-2.5 px-3 leading-[17px]">
                        {item?.course}
                      </h1>
                    </div>
                    <div className="w-[14%]">
                      <h1 className="text-[14px]  max-w-[200px] break-words font-normal py-2.5 px-3 leading-[17px]">
                        {item?.payment_method}
                      </h1>
                    </div>
                    <div className="w-[9%]">
                      <h1 className="text-[14px] font-normal py-2.5 px-3 leading-[17px]">
                        N{parseFloat(item?.amount_paid).toLocaleString()}
                      </h1>
                    </div>
                    <div className="w-[7%] items-center flex justify-center">
                      <div className="course_input w-[53px] h-8 rounded-[50px] flex items-center justify-center ">
                        <img src={PrintOutlined} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <LoadingFetching />
        )}
      </div>
    </Layout>
  );
};

export default AdminPayment;
