/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { apiRequest } from "../../../Utils/ApiRequest";
import Layout from "../Common/Layout";
import { AddRound, BackArrow } from "../../../Utils/Assets";
import NewsletterSubscribers from "./NewsletterSubscribers";
import { LoadingFetching } from "../Courses/LoadingFetching";
import { useNavigate } from "react-router-dom";
import { SendNewsLetter } from "./SendNewsLetter";

const Newsletter = () => {
  const navigate = useNavigate();
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openSendModal, setOpenSendModal] = useState(false);

  const toggle = () => setOpenSendModal(!openSendModal);
  const getNewsLetterSubscribers = async () => {
    setLoading(true);
    try {
      const response = await apiRequest("GET", `/newsletters/`);
      setSubscribers(response?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };
  useEffect(() => {
    getNewsLetterSubscribers();
  }, []);

  return (
    <Layout text="Newsletter">
      {openSendModal && <SendNewsLetter toggle={toggle} />}
      <div className="w-full flex flex-col gap-9 px-9 pb-[140px]">
        <div className="flex flex-row justify-between items-center ">
          <div
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-backBg rounded-[50%]"
          >
            <img src={BackArrow} alt="" />
          </div>
          <div
            // onClick={() => setOpenCreatePlans(true)}
            className="px-4 h-12 flex bg-blue-500 flex-row items-center justify-center px-4 py-[18px] hover:bg-blue-600 hover:cursor-pointer transition duration-300 rounded-[16px] gap-[8px] addCourse"
          >
            {/* <img src={AddRound} alt='' /> */}
            <h1
              onClick={toggle}
              className="font-medium  text-white text-nowrap text-sm leading-[24px] uppercase"
            >
              Send Newsletter
            </h1>
          </div>
        </div>
        {!loading ? (
          <div className="flex flex-col gap-6">
            <h1 className="text-[14px] font-medium leading-[17px]">
              NEWSLETTER SIGNUPS
            </h1>
            <NewsletterSubscribers
              subscribers={subscribers}
              setSubscribers={setSubscribers}
            />
          </div>
        ) : (
          <LoadingFetching />
        )}
      </div>
    </Layout>
  );
};

export default Newsletter;
