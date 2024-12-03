import React from "react";
import moment from "moment";
import { AddRound, BackArrow, Edit, Trahs } from "../../../Utils/Assets";
import Sort from "../../../assets/sort.svg";
import { LoadingFetching } from "./LoadingFetching";
import { Link, useNavigate } from "react-router-dom";
import { adminApiRequest } from "../../../Utils/ApiRequest";
import { toast } from "react-toastify";

const CoursesData = ({
  courses,
  loading,
  setCourses,
  setCourse,
  setOpenDeletePop,
}) => {
  const navigate = useNavigate();

  const handleIsActive = async (index, item) => {
    setCourses(prevCourses => {
      const newCourses = [...prevCourses];
      newCourses[index].is_active = !newCourses[index].is_active;
      return newCourses;
    });
    try {
      await adminApiRequest("POST", `/courses/${item.id}/toggle_active/`);
      toast.success("Successfully updated", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("An error occured, please try again", {
        position: "top-right",
      });
    }
  };

  return (
    <div>
      {!loading ? (
        <div className="flex flex-col gap-4">
          <h1 className="inter__ text-[14px] leading-[17px] ">COURSES</h1>

          <div className="w-full py-3 flex flex-col gap-5 coursesP rounded-[12px]">
            <div className="flex flex-col gap-3.5">
              <div className="flex px-2 py-0.5 flex-row w-full items-center">
                <div className="w-[20%]">
                  <div className="flex flex-row items-center gap-4 py-2.5 px-3">
                    <h1 className="text-[14px] font-medium leading-[17px]">
                      DATE CREATED
                    </h1>
                    <img src={Sort} alt="" />
                  </div>
                </div>
                <div className="w-[24%]">
                  <div className="flex flex-row items-center gap-4 py-2.5 px-3">
                    <h1 className="text-[14px] font-medium leading-[17px]">
                      COURSE
                    </h1>
                  </div>
                </div>
                <div className="w-[13%]">
                  <div className="flex flex-row items-center gap-4 py-2.5 px-3">
                    <h1 className="text-[14px] font-medium leading-[17px]">
                      COLOR CODE
                    </h1>
                  </div>
                </div>
                <div className="w-[12%]">
                  <div className="flex flex-row items-center gap-4 py-2.5 px-3">
                    <h1 className="text-[14px] font-medium leading-[17px]">
                      PRICE
                    </h1>
                  </div>
                </div>
                <div className="w-[16%]">
                  <div className="flex flex-row items-center gap-4 py-2.5 px-3">
                    <h1 className="text-[14px] font-medium leading-[17px]">
                      STATUS
                    </h1>
                  </div>
                </div>
                <div className="w-[15%]">
                  <div className="flex flex-row items-center gap-4 py-2.5 px-3">
                    <h1 className="text-[14px] font-medium leading-[17px]"></h1>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            {/* Data */}
            {courses &&
              courses.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start w-full min-h-12"
                >
                  <div className="w-[20%] flex">
                    <h1 className="text-[12px] font-normal py-2.5 px-3 leading-[17px]">
                      {moment(item?.date_created).format("DD MMM YYYY, hh:mmA")}
                    </h1>
                  </div>
                  <div className="w-[24%] whitespace-normal">
                    <Link
                      to={`/courses/${item?.id}/${encodeURIComponent(
                        item?.title,
                      )}`}
                      className="text-[14px] hover:cursor-pointer transition duration-300 hover:text-blue-600 hover:font-medium font-normal py-2.5 px-3 leading-[17px] break-all"
                    >
                      {item?.title}
                    </Link>
                  </div>
                  <div className="w-[13%]">
                    <div className="flex flex-row items-center ">
                      <div
                        style={{ backgroundColor: item?.color_code }}
                        className="w-[14px] h-3.5 rounded-[4px]"
                      />
                      <h1 className="text-[14px] font-normal py-2.5 px-3 leading-[17px]">
                        {item.color_code}
                      </h1>
                    </div>
                  </div>
                  <div className="w-[12%]">
                    <h1 className="text-[14px] font-normal py-2.5 px-3 leading-[17px]">
                      #{item?.price}
                    </h1>
                  </div>
                  <div className="w-[16%] flex items-center gap-1 py-2.5 px-3 hover:cursor-pointer">
                    {item?.is_active ? (
                      <div className="w-[70px] flex h-[24px] rounded-[50px] text-mainGreen items-center justify-center bg-activeBg text-[12px]">
                        Active
                      </div>
                    ) : (
                      <div className="w-[70px] flex h-[24px] rounded-[50px] text-mainRed items-center justify-center  bg-unactiveBg text-[12px]">
                        Inactive
                      </div>
                    )}
                    <label className="toggle-button">
                      <input
                        type="checkbox"
                        checked={item?.is_active}
                        onChange={() => handleIsActive(index, item)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="w-[15%] mt-2 flex flex-row gap-4 items-center justify-center">
                    <div
                      onClick={() =>
                        navigate(
                          `/admin/courses/edit-course/${
                            item?.id
                          }/${encodeURIComponent(item?.title)}`,
                        )
                      }
                      className="w-10 h-7 hover:bg-[#F5F7F9] transition ease-in-out duration-300 cursor-pointer rounded-[50px] flex items-center justify-center edit_del"
                    >
                      <img src={Edit} className="h-3.5" alt="" />
                    </div>

                    <div
                      onClick={() => {
                        setCourse(item);
                        setOpenDeletePop(true);
                      }}
                      className="w-10 h-7 hover:bg-[#F5F7F9] transition ease-in-out duration-300 cursor-pointer rounded-[50px] flex items-center justify-center edit_del"
                    >
                      <img src={Trahs} className="h-4" alt="" />
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
  );
};

export default CoursesData;
