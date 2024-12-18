/* eslint-disable react/prop-types */
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { BsEmojiNeutral } from "react-icons/bs";

const Layout = ({ children, text }) => {
  return (
    <div>
      <div className="hidden lgl:block">
        <div className="fixed ">
          <AdminSidebar />
        </div>
        <div className="flex w-full flex-col">
          <div className="fixed z-10 pl-[262px] w-full">
            <AdminHeader text={text} />
          </div>
          <div className="ml-[262px] mt-[111px]">{children}</div>
        </div>
      </div>
      <div className="h-screen px-6 text-gray-400 w-full lgl:hidden flex items-center justify-center flex-col gap-3">
        <BsEmojiNeutral size={36} />
        <h2 className="text-center">
          This admin panel is currently only accessible on desktop devices.
          Please access it from a desktop computer.
        </h2>
      </div>
    </div>
  );
};

export default Layout;
