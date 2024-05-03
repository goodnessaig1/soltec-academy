/* eslint-disable react/prop-types */
import { useState } from 'react';
import NotificationIcon from '../../../assets/Notification.svg';
import Logout from '../../../assets/logout.svg';
import NotificationIcon2 from '../../../assets/notification-icon.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
const notifications = [
  {
    notification: 'smart.okolichiaza just made a payment for Product design',
    price: '250,000',
  },
  {
    notification: 'smart.okolichiaza just made a payment for Product design',
    price: '250,000',
  },
  {
    notification: 'smart.okolichiaza just made a payment for Product design',
    price: '250,000',
  },
  {
    notification: 'smart.okolichiaza just made a payment for Product design',
    price: '250,000',
  },
  {
    notification: 'smart.okolichiaza just made a payment for Product design',
    price: '250,000',
  },
];

const AdminHeader = ({ text }) => {
  const [openNotification, setOpenNotification] = useState(false);
  const { user } = useAuth();
  return (
    <div className='h-[60px] bg-[#fff] z_main w-full AdminHeader flex'>
      <div className='px-[36px] flex flex-row w-full items-center justify-between'>
        {openNotification && (
          <div className='fixed z_indd h-screen top-0 right-0 bottom-0 px-[36px] flex  mt-[80px] bg-transparent'>
            <div
              onClick={() => setOpenNotification(false)}
              className='w-full z_indd fixed hover:cursor-pointer h-screen top-0 left-0 right-0 bottom-0 px-[28px] md:px-0 flex  items-center justify-center '
            ></div>
            <AnimatePresence className='z_ind'>
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ x: '100%', opacity: 0 }}
                className='bg-white z_ind flex py-[22px] px-[16px] boxSha gap-[14px] inter__  flex-col w-[373px] h-[350px] rounded-[12px]'
              >
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className='flex flex-row gap-[8px] hover:bg-whiteW rounded-[8px] py-[6px] hover:cursor-pointer transition duration-300'
                  >
                    <div className=''>
                      <div className='w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-bg3'>
                        <img src={NotificationIcon2} alt='' />
                      </div>
                    </div>
                    <span className='text-[14px] leading-[21px'>
                      {notification.notification}{' '}
                      <span className='font-[700] '>N{notification.price}</span>
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
        <div className='font-[700] text-[20px] leading-[24px] text-dotCol'>
          {text}
        </div>
        <div className='flex flex-row items-center gap-[24px]'>
          <div className='flex flex-row items-center gap-[16px]'>
            <div onClick={() => setOpenNotification(true)} className=''>
              <img src={NotificationIcon} alt='' />
            </div>
            {user && user.full_name && (
              <div className='w-[36px] uppercase h-[36px] rounded-[50px] bg-purple-100 flex items-center justify-center'>
                {user?.full_name.trim().charAt(0)}
              </div>
            )}
          </div>
          <Link
            to={'/admin/sign-in'}
            className='w-[100px] h-[32px] rounded-[50px] flex flex-row gap-[6px] items-center justify-center hover:cursor-pointer logOutBtn hover:opacity-[0.5] transition duration-200'
          >
            <img src={Logout} alt='' />
            <h1 className='font-[500] text-[14px] leading-[17px] text-red-500'>
              Logout
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
