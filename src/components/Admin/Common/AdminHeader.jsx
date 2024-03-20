/* eslint-disable react/prop-types */
import NotificationIcon from '../../../assets/Notification.svg';
import Logout from '../../../assets/logout.svg';
const AdminHeader = ({ text }) => {
  return (
    <div className='h-[60px] bg-[#fff] z-3 w-full AdminHeader flex'>
      <div className='px-[36px] flex flex-row w-full items-center justify-between'>
        <div className='font-[700] text-[20px] leading-[24px] text-dotCol'>
          {text}
        </div>
        <div className='flex flex-row items-center gap-[32px]'>
          <img src={NotificationIcon} alt='' />
          <div className='w-[100px] h-[32px] rounded-[50px] flex flex-row gap-[6px] items-center justify-center hover:cursor-pointer logOutBtn hover:opacity-[0.5] transition duration-200'>
            <img src={Logout} alt='' />
            <h1 className='font-[500] text-[14px] leading-[17px] text-red-500'>
              Logout
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
