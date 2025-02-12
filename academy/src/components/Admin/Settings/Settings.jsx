/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { AddRound, BackArrow } from "../../../Utils/Assets";
import Layout from "../Common/Layout";
import { adminApiRequest } from "../../../Utils/ApiRequest";
import { useEffect, useState } from "react";
import { LoadingFetching } from "../Courses/LoadingFetching";
import { AnimatePresence, motion } from "framer-motion";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const [admins, setAdmins] = useState([]);
  const [toggleAdmin, setToggleAdmin] = useState(false);
  const [adminDetails, setAdminDetails] = useState(null);
  const [toggleLoading, setToggleLoading] = useState(false);
  const [index, setIndex] = useState(null);
  const navigate = useNavigate();
  const getWorkspaceBookings = async () => {
    setLoading(true);
    try {
      const response = await adminApiRequest("GET", `/users/fetch_admins/`);
      setAdmins(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const toggle = () => setToggleAdmin(!toggleAdmin);

  useEffect(() => {
    getWorkspaceBookings();
  }, []);

  const handleIsActive = async (index, admin) => {
    setAdminDetails(admin);
    toggle();
    setIndex(index);
  };

  return (
    <Layout text="Settings">
      {toggleAdmin && (
        <OpenToggleModal
          admin={adminDetails}
          toggle={toggle}
          setAdmins={setAdmins}
          setToggleLoading={setToggleLoading}
          toggleLoading={toggleLoading}
          index={index}
        />
      )}
      <div className="w-full flex flex-col gap-9 px-9 pb-[140px]">
        <div className="flex flex-row justify-between items-center ">
          <div
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-backBg rounded-[50%]"
          >
            <img src={BackArrow} alt="" />
          </div>
          <Link
            to={"/admin/create-admin"}
            className="w-[150px] h-12 flex flex-row items-center justify-center px-4 py-[18px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-300 rounded-[16px] gap-[8px] addCourse"
          >
            <img src={AddRound} alt="" />
            <h1 className="font-medium text-nowrap text-[16px] leading-[24px]  ">
              Create Admin
            </h1>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">Admins</h2>
          <div className=""></div>
        </div>
        {!loading ? (
          <div className="w-[90%] rounded-lg border border-gray-200 flex flex-col">
            <div className="flex bg-gray-50 h-12 flex-row w-full items-center">
              <div className="w-[10%] px-4">NO</div>
              <div className="w-[30%] px-4 uppercase">Fullname</div>
              <div className="w-[25%] px-4 uppercase">email</div>
              <div className="w-[20%] px-4 uppercase">Phonenumber</div>
              <div className="w-[15%] px-4 uppercase">Status</div>
            </div>
            {admins &&
              admins.map((admin, i) => (
                <div key={i} className="flex h-12 flex-row w-full items-center">
                  <div className="w-[10%] px-4">{i + 1}</div>
                  <div className="w-[30%] line-clamp-1 px-4">
                    {admin.full_name}
                  </div>
                  <div className="w-[25%] line-clamp-1 px-4">{admin.email}</div>
                  <div className="w-[20%] px-4">{admin.phone_number}</div>
                  <div className="w-[15%] px-4">
                    <label className="toggle-button">
                      <input
                        type="checkbox"
                        checked={admin?.is_admin}
                        onChange={() => handleIsActive(i, admin)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                    </label>
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

export default Settings;

const OpenToggleModal = ({
  admin,
  toggle,
  toggleLoading,
  setToggleLoading,
  setAdmins,
  index,
}) => {
  const handleAdminUpdate = async () => {
    setToggleLoading(true);
    setAdmins((prev) => {
      const newAdmin = [...prev];
      newAdmin[index].is_admin = !newAdmin[index].is_admin;
      return newAdmin;
    });
    try {
      await adminApiRequest("POST", `/users/${admin.id}/toggle_admin/`);
      toast.success("Successfully updated", {
        position: "top-right",
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occured, please try again", {
        position: "top-right",
      });
    } finally {
      toggle();
      setToggleLoading(false);
    }
  };
  return (
    <div className="fixed z_indd h-screen top-0 left-0 right-0 bottom-0 px-7 md:px-0 flex  items-center justify-center bg-transparent">
      <div
        onClick={toggle}
        className="w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-7 md:px-0 flex  items-center justify-center bg-dOverlay "
      ></div>
      <AnimatePresence className="z_ind">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="bg-bg3 z_ind flex flex-col max-w-[400px] bg-white rounded-[24px] p-6 "
        >
          <div className="flex flex-col items-center gap-4">
            {admin?.is_admin ? (
              <>
                <h1 className="text-[16px] leading-[24px] text-center font-semibold">
                  ARE YOU SURE YOU WANT TO DISABLE{" "}
                  <span className="text-blue-500 uppercase">
                    {admin?.full_name}
                  </span>{" "}
                  AS AN ADMIN ?
                </h1>
                <span className="text-center font-normal inter_ text-[16px] leading-[24px]">
                  Disabling {admin?.full_name} will make him automatically loose
                  access to the admin management
                </span>
              </>
            ) : (
              <>
                <h1 className="text-[16px] leading-[24px] text-center font-semibold">
                  ARE YOU SURE YOU WANT MAKE{" "}
                  <span className="text-blue-500 uppercase">
                    {admin?.full_name}
                  </span>{" "}
                  AN ADMIN ?
                </h1>
                <span className="text-center font-normal inter_ text-[16px] leading-[24px]">
                  Enabling{" "}
                  <span className="font-semibold">{admin?.full_name}</span> will
                  give him/her access to the admin management
                </span>
              </>
            )}

            <div className=" flex flex-row gap-4">
              <div
                onClick={toggle}
                className="w-[172px] h-14 hover:bg-[#F5F7F9] cursor-pointer transition ease-in-out duration-300  rounded-[16px] border-[2px] border bg-[#EEEEEE] flex items-center justify-center "
              >
                CANCEL
              </div>
              <div
                onClick={handleAdminUpdate}
                className={`w-[172px] h-14  ${
                  !toggleLoading ? "bg-mainRed hover:bg-red-600" : "bg-red-200"
                } cursor-pointer transition ease-in-out duration-300  rounded-[8px] ed text-white flex items-center justify-center `}
              >
                {!toggleLoading ? (
                  <span>YES</span>
                ) : (
                  <div className="flex items-center justify-center">
                    <Oval
                      visible={true}
                      height="30"
                      width="30"
                      color="#fff"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
