// /* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { Confett, Print } from "../../Utils/Assets";
import moment from "moment";
import { apiRequest } from "../../Utils/ApiRequest";
import Header from "../common/Header";
import Footer from "../common/Footer";

const WorkspaceVerifyPayment = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  const { reference } = useParams();

  const verifyWorkspacePayment = async () => {
    try {
      const response = await apiRequest(
        "GET",
        `/workspaces/verify-workspace-booking-payment/?reference=${reference}`
      );
      setLoading(false);
      if (response.status == "SUCCESS") {
        setPaymentData(response);
        setSuccess(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    verifyWorkspacePayment();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {!loading ? (
        <>
          {success ? (
            <>
              {paymentData && (
                <div>
                  <div>
                    <div>
                      <Header />
                    </div>
                    <div className="w-full px-[16px] pb-[120px] paym flex flex-col mt-[81px] items-center justify-center ">
                      <div className="sml:w-[500px] lg:w-[739px] flex flex-col items-center justify-center gap-[40px]">
                        <div className="gap-[19px] flex flex-col">
                          <div className="flex items-center justify-center">
                            <img src={Confett} alt="" />
                          </div>
                          <h1 className="font-[700] text-[32px] leading-[41px] text-center items-center">
                            Thank You For Booking a Seat
                          </h1>
                          <span className="font-[400] text-[20px] leading-[26px] text-center">
                            You have access from{" "}
                            {moment(paymentData?.start_date).format(
                              "DD MMM YYYY"
                            )}{" "}
                            —{" "}
                            {moment(paymentData?.end_date).format(
                              "DD MMM YYYY"
                            )}
                          </span>
                          <p className="font-[400] text-[14px] leading-[21px] text-center">
                            We sent an email to{" "}
                            <span className="text-blue-800 cursor-pointer">
                              {paymentData?.email}
                            </span>{" "}
                            with your order confirmation and receipt. If the
                            email hasn’t arrived within two minutes, please
                            check your spam folder to see if the email was
                            routed there.
                          </p>
                        </div>
                        <div className="flex flex-col w-[343px] lg:w-[454px] gap-[28px] ">
                          <div className="flex flex-col bg-extraGray gap-[8px] rounded-[12px]">
                            <div className="w-full flex flex-col ">
                              <div className="w-full flex bg-borderLight brrd p-[16px]">
                                <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                  Order Confirmation #
                                </div>
                                <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                  {paymentData?.transaction_id}
                                </div>
                              </div>
                              <div className="w-full flex bg-extraGray  p-[16px]">
                                <div className="w-1/2 font-[400] text-[14px] leading-[18.2px]">
                                  Purchased Item
                                </div>
                                <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                  X{paymentData?.seats} Seat
                                </div>
                              </div>
                              <div className="w-full flex bg-extraGray  p-[16px]">
                                <div className="w-1/2 font-[400] text-[14px] leading-[18.2px]">
                                  Time
                                </div>
                                <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                  {paymentData?.plan.charAt(0).toUpperCase() +
                                    paymentData?.plan.slice(1).toLowerCase()}
                                </div>
                              </div>
                            </div>
                            <div className="w-full flex bg-extraGray borrd p-[16px]">
                              <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                TOTAL
                              </div>
                              <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                N
                                {parseFloat(
                                  paymentData?.amount_paid
                                ).toLocaleString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center gap-[14px]">
                            <div className="flex text-[14px] leading-[18.2px] ">
                              <h1 className="font-semibold">Email address:</h1>
                              <span className="font-[400]">
                                {paymentData?.email}
                              </span>
                            </div>
                            <div className="flex text-[14px] leading-[18.2px] ">
                              <h1 className="font-semibold">Phone number:</h1>
                              <span className="font-[400]">
                                {paymentData?.phone_number}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div
                              onClick={handlePrint}
                              className="flex hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-200 gap-[6px] printB items-center rounded-[50px] py-2 px-3"
                            >
                              <img src={Print} alt="" />
                              <h1 className="font-[500] text-[14px] leading-[21px]">
                                Print Receipt
                              </h1>
                            </div>
                          </div>
                          <Link
                            to={"/book-workspace"}
                            className="bg-mainRed flex justify-center items-center cursor-pointer hover:bg-mainDRed transition duration-200 h-14 py-2 px-4 text-white text-[16px] rounded-xl text-center  font-semibold"
                          >
                            Back to workspace
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Footer />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="">Failed</div>
          )}
        </>
      ) : (
        <div className="w-full h-[100vh] flex items-center justify-center">
          <RotatingLines
            visible={true}
            height="50"
            width="50"
            strokeColor="gray"
            strokeWidth="3"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  );
};

export default WorkspaceVerifyPayment;
