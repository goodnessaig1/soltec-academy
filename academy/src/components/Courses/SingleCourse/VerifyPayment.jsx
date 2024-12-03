// /* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import { Confett, Print } from "../../../Utils/Assets";
import { apiRequest } from "../../../Utils/ApiRequest";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getUTCFullYear();

  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  return `${day}${suffix} ${month} ${year}`;
}

const VerifyPayment = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [paymentData, setPaymentData] = useState(null);

  const { reference } = useParams();
  const verifyCourseEnrollment = async () => {
    try {
      const response = await apiRequest(
        "GET",
        `/courses/verify_course_enrollment_payment/?reference=${reference}`,
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
    verifyCourseEnrollment();
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
                    <div className="lg:hidden">
                      <Header />
                    </div>
                    <div className="w-full px-4 pb-[120px] paym flex flex-col mt-20 items-center justify-center ">
                      <div className="sml:w-[500px] lg:w-[739px] flex flex-col items-center justify-center gap-40">
                        <div className="gap-5 flex flex-col">
                          <div className="flex items-center justify-center">
                            <img src={Confett} alt="" />
                          </div>
                          <h1 className="font-bold text-[32px] leading-[41px] text-center items-center">
                            Thank You For Your Payment!
                          </h1>
                          <span className="font-normal text-[20px] leading-[26px] text-center">
                            Class begins on{" "}
                            {formatDate(paymentData?.start_date)}
                          </span>
                          <p className="font-normal text-[14px] leading-[21px] text-center">
                            We sent an email to{" "}
                            <span className="text-blue-800 cursor-pointer">
                              {paymentData?.email}
                            </span>{" "}
                            with your order confirmation and receipt. If the
                            email hasn’t arrived within two minutes, please
                            check your spam folder to see if the email was
                            routed there.
                          </p>
                          <p className="font-bold text-[14px] leading-[21px] text-center">
                            Go to Soltec’s physical office to complete your
                            registration process and begin your lessons.
                          </p>
                        </div>
                        <div className="flex flex-col w-[343px] lg:w-[454px] gap-7 ">
                          <div className="flex flex-col bg-extraGray gap-4 rounded-[12px]">
                            <div className="w-full flex flex-col ">
                              <div className="w-full flex bg-borderLight brrd p-4">
                                <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                  Order Confirmation #
                                </div>
                                <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                  {paymentData?.transaction_id}
                                </div>
                              </div>
                              <div className="w-full flex bg-extraGray  p-4">
                                <div className="w-1/2 font-normal text-[14px] leading-[18.2px]">
                                  Purchased Item
                                </div>
                                <div className="w-1/2 font-normal text-[14px] leading-[18.2px]">
                                  N
                                  {parseFloat(
                                    paymentData?.amount_paid,
                                  ).toLocaleString()}
                                </div>
                              </div>
                            </div>
                            <div className="w-full flex bg-extraGray borrd p-4">
                              <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                TOTAL
                              </div>
                              <div className="w-1/2 font-semibold text-[14px] leading-[18.2px]">
                                N
                                {parseFloat(
                                  paymentData?.amount_paid,
                                ).toLocaleString()}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center gap-3.5">
                            <div className="flex text-[14px] leading-[18.2px] ">
                              <h1 className="font-semibold">Email address:</h1>
                              <span className="font-normal">
                                {paymentData?.email}
                              </span>
                            </div>
                            <div className="flex text-[14px] leading-[18.2px] ">
                              <h1 className="font-semibold">Phone number:</h1>
                              <span className="font-normal">
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
                            to={"/courses"}
                            className="bg-mainRed flex justify-center items-center cursor-pointer hover:bg-mainDRed transition duration-200 h-[56px] py-[8px] px-4 text-white text-[16px] rounded-2xl text-center  font-semibold"
                          >
                            Back to courses
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

export default VerifyPayment;
