import { Link } from 'react-router-dom';
import { Next } from '../../../Utils/Assets';
import Layout from '../Common/Layout';

const Settings = () => {
  return (
    <Layout text='Settings'>
      <div className='w-full flex flex-col gap-9 px-9 pb-[140px]'>
        <Link
          to={'/admin/create-admin'}
          className='flex flex-row items-center cursor-pointer gap-5'
        >
          <h1 className='font-normal text-[20px]'>Create Admin</h1>
          <img src={Next} alt='' />
        </Link>
        <div className='flex flex-row items-center cursor-pointer gap-5'>
          <h1 className='font-normal text-[20px]'>Remove Admin</h1>
          <img src={Next} alt='' />
        </div>
        <div className='flex flex-row items-center cursor-pointer gap-5'>
          <h1 className='font-normal text-[20px]'>Send Newsletter</h1>
          <img src={Next} alt='' />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
