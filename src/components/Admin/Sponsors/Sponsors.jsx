import { Link } from 'react-router-dom';
import { PlusW, SearchGray } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseURL } from '../../../Utils/BaseUrl';
import Skeleton from 'react-loading-skeleton';

const AdminSponsors = () => {
  const [sponsors, setSponsors] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetSponsors();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const GetSponsors = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseURL}/sponsors/`);
      setSponsors(response?.data.results);
      setLoading(false);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };
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
          {!loading ? (
            <>
              {sponsors &&
                sponsors.map((sponsor, index) => (
                  <div key={index} className='flex flex-col gap-[12px]'>
                    <img src={sponsor?.logo} alt='' />
                    <span className='font-[500] text-[14px] leading-[17px] text-byCol'>
                      {sponsor?.name}
                    </span>
                  </div>
                ))}
            </>
          ) : (
            <div className='flex flex-row gap-[24px]'>
              <div className='flex flex-col gap-[12px]'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
              <div className='flex flex-col gap-[12px]'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
              <div className='flex flex-col gap-[12px]'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
              <div className='flex flex-col gap-[12px]'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminSponsors;
