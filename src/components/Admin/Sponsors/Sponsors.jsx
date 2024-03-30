import { Link } from 'react-router-dom';
import { PlusW, SearchGray } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { sponsorsData } from './SponsorsData';

const AdminSponsors = () => {
  return (
    <Layout text='Sponsors'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        <div className='flex flex-row items-center justify-between'>
          <span></span>
          <div className='flex flex-row gap-[11px]'>
            <div className='flex flex-row rounded-[12px] px-[16px] justify-between items-center h-[40px] course_input w-[276px]'>
              <input
                type='text'
                placeholder='Search'
                className='outline-none border-none bg-transparent'
              />
              <img src={SearchGray} alt='' />
            </div>
            <Link
              to={'/admin/sponsors/add-sponsor'}
              className='w-[135px] hover:opacity-[94%] h-[40px] rounded-[12px] bg-lBlue flex gap-[6px] items-center justify-center'
            >
              <img src={PlusW} alt='' />
              <h2 className='text-[#fff] font-[500] text-[14px] leading-[17px]'>
                Add Sponsor
              </h2>
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-5 gap-[16px] gap-y-[16px] '>
          {sponsorsData.map((sponsor, index) => (
            <div key={index} className='flex flex-col gap-[12px]'>
              <img src={sponsor.image} alt='' />
              <span className='font-[500] text-[14px] leading-[17px] text-byCol'>
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminSponsors;
