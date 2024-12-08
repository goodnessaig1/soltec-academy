/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";
import { adminApiRequest } from "../../../Utils/ApiRequest";

export const SendNewsLetter = ({ toggle }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    let data = {
      subject,
      message,
    };
    try {
      setLoading(true);
      await adminApiRequest("POST", `/newsletters/send/`, data);
      toast.success("Success", {
        position: "top-right",
      });
      setMessage("");
      setSubject("");
      toggle();
    } catch (error) {
      console.log(error);
      toast.error("An error occured !", {
        position: "top-left",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-7 md:px-0 flex  items-center justify-center bg-transparent">
      <div
        onClick={toggle}
        className="w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-7 md:px-0 flex  items-center justify-center bg-dOverlay "
      ></div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-bg3 z_ind flex flex-col w-[334px] bg-white rounded-[24px] p-6 "
        >
          <div className="flex flex-col items-center gap-4 w-full">
            <h1 className="text-[16px] leading-[24px] text-center w-full font-semibold">
              SEND NEWSLETTER
            </h1>
            <form
              action=""
              className="w-full flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-semibold text-[14px] leading-[21px]"
                  htmlFor="Plan"
                >
                  Subject
                </label>
                <div className="w-full course_input px-2.5 pl-4 flex justify-between items-center rounded-[12px] h-10 text-[14px]">
                  <input
                    type="text"
                    name="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full outline-none bg-transparent focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-semibold text-[14px] leading-[21px]"
                  htmlFor="start_date"
                >
                  Message
                </label>
                <div className="w-full course_input px-2.5 pl-4 flex justify-between items-center rounded-[12px] text-[14px]">
                  <textarea
                    rows={4}
                    cols={50}
                    type="text"
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full py-1 outline-none resize-none bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {!loading ? (
                <button
                  className="w-full h-14 rounded-[16px] flex items-center justify-center bg-[#DDEAFF] hover:opacity-[0.7] duration-300 transition "
                  type="submit"
                  onClick={handleSubmit}
                >
                  <span className="text-[16px] font-semibold text-[#0043CE] leading-[24px]">
                    Send
                  </span>
                </button>
              ) : (
                <div className="w-full flex items-center justify-center h-14">
                  <ProgressBar
                    visible={true}
                    height="60"
                    width="60"
                    barColor="gray"
                    borderColor="black"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
