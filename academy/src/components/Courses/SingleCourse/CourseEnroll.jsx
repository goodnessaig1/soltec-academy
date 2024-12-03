/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

const CourseEnroll = ({ courseDetail }) => {
  return (
    <div
      style={{ background: courseDetail?.color_code }}
      className="background-image3 h-[416px] w-full"
    >
      <div className="w-full gap-8 h-full items-center justify-center flex flex-col">
        <h1 className="barlow-semi condensed-black text-white  sm:text-[24px] lg:text-[32px]  font-bold leading-[48px] text-center">
          Ready to begin your
          <span className=" font-bold">
            {" "}
            <br className="lg:hidden" />
            {courseDetail?.title}
          </span>{" "}
          <br className="hidden lg:block" />
          journey?
        </h1>
        <Link
          style={{
            boxShadow: `0px 10px 50px 0px ${courseDetail?.color_code}`,
          }}
          to={`/courses/${courseDetail?.id}/${encodeURIComponent(
            courseDetail?.title,
          )}/payment`}
          className="w-[221px] h-14 hover:bg-white hover:text-black text-white  transition duration-300 border border-white border-[2px] rounded-[16px] flex flex-row items-center justify-center gap-4"
        >
          <span className="text-[16px] font-semibold leading-[24px]">
            Enroll now
          </span>
          <GrFormNextLink size={24} />
        </Link>
      </div>
    </div>
  );
};

export default CourseEnroll;
