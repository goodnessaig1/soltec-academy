/* eslint-disable react/prop-types */
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const Layout = ({ children, text }) => {
  return (
    <div>
      <div className='fixed '>
        <AdminSidebar />
      </div>
      <div className='flex w-full flex-col'>
        <div className='fixed  pl-[262px] w-full'>
          <AdminHeader text={text} />
        </div>
        <div className='ml-[262px] mt-[111px]'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
