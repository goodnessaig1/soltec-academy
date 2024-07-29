import { Link, useNavigate } from 'react-router-dom';
import { DeleteRed, EditIcon, PlusW, SearchGray } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { adminApiRequest, apiRequest } from '../../../Utils/ApiRequest';
import { toast } from 'react-toastify';
import { RiDeleteBin5Line } from 'react-icons/ri';

const AdminSponsors = () => {
  const navigate = useNavigate();
  const [sponsors, setSponsors] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markedItems, setMarkedItems] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getSponsors();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const getSponsors = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/sponsors/`);
      setSponsors(response.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  const handleDelete = async id => {
    const updatedData = sponsors.filter(item => item.id !== id);
    setSponsors(updatedData);
    try {
      await adminApiRequest('DELETE', `/sponsors/${id}/`);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const deleteMultiple = async () => {
    const data = {
      ids,
    };
    try {
      setMarkedItems([]);
      await adminApiRequest('DELETE', `/sponsors/delete-multiple/`, data);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
      setIds([]);
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const toggleMarked = (index, sponsor) => {
    if (markedItems.includes(index)) {
      setIds(ids.filter(id => id !== sponsor?.id));
      setMarkedItems(markedItems.filter(item => item !== index));
    } else {
      setIds([...ids, sponsor?.id]);
      setMarkedItems([...markedItems, index]);
    }
  };

  const deleteMarkedItems = () => {
    deleteMultiple();
    const newData = sponsors.filter((_, index) => !markedItems.includes(index));
    setSponsors(newData);
  };
  return (
    <Layout text='Sponsors'>
      <div className='w-full inter__ flex flex-col gap-9 px-9 pb-[140px]'>
        <div className='flex flex-row items-center justify-between'>
          <span></span>
          <div className='flex flex-row gap-[11px]'>
            {/* <div className='flex flex-row rounded-[12px] px-4 justify-between items-center h-10 course_input w-[276px]'>
              <input
                type='text'
                placeholder='Search'
                className='outline-none border-none bg-transparent'
              />
              <img src={SearchGray} alt='' />
            </div> */}
            <Link
              to={'/admin/sponsors/add-sponsor'}
              className='w-[135px] hover:opacity-[94%] h-10 rounded-[12px] bg-lBlue flex gap-1.5 items-center justify-center'
            >
              <img src={PlusW} alt='' />
              <h2 className='text-[#fff] font-medium text-[14px] leading-[17px]'>
                Add Sponsor
              </h2>
            </Link>
          </div>
        </div>

        <>
          {!loading ? (
            <>
              {sponsors && sponsors.length > 0 ? (
                <div className='grid grid-cols-5 gap-4 gap-y-4'>
                  {sponsors &&
                    sponsors.map((sponsor, index) => (
                      <div
                        key={index}
                        className={`flex flex-col group gap-2 ${
                          markedItems.includes(index)
                            ? 'markedTestimonial'
                            : 'backg'
                        }`}
                      >
                        <div
                          className={`absolute transition  duration-300 ${
                            markedItems.includes(index)
                              ? ''
                              : 'hidden group-hover:block'
                          } ml-[60px] mt-1`}
                        >
                          <div className='w-[100px] h-[38px] rounded-[50px] flex gap-[13px] bg-[#f1f1f1] items-center justify-center'>
                            <div
                              onClick={() =>
                                navigate(
                                  `/admin/sponsors/edit-sponsor/${sponsor?.id}`,
                                )
                              }
                              className=''
                            >
                              <img src={EditIcon} alt='' />
                            </div>
                            <div
                              onClick={() => handleDelete(sponsor?.id)}
                              className='hover:text-mainRed transition duration-300 cursor-pointer'
                            >
                              <RiDeleteBin5Line size={22} />
                            </div>

                            <div className=''>
                              <input
                                type='checkbox'
                                className='form-checkbox h-4 w-4 text-indigo-600'
                                checked={markedItems.includes(index)}
                                onChange={() => toggleMarked(index, sponsor)}
                              />
                            </div>
                          </div>
                        </div>
                        <img src={sponsor?.logo} alt='' />
                        <span className='font-medium text-[14px] leading-[17px] text-byCol'>
                          {sponsor?.name}
                        </span>
                      </div>
                    ))}
                </div>
              ) : (
                <div className='h-[54vh] flex flex-col gap-3 w-full items-center justify-center '>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZHRIXeq8ByuIl_I6f0soTdzg6Egh5vyP2Q&s'
                    alt=''
                  />
                  <h1 className='font-medium'>No Sponsor</h1>
                </div>
              )}
            </>
          ) : (
            <div className='flex flex-row gap-6'>
              <div className='flex flex-col gap-3'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
              <div className='flex flex-col gap-3'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
              <div className='flex flex-col gap-3'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
              <div className='flex flex-col gap-3'>
                <Skeleton height={70} width={150} />
                <Skeleton height={30} width={80} />
              </div>
            </div>
          )}
        </>
        {markedItems.length > 0 && (
          <div className='fixed z-50 right-0 bottom-0 mr-10 mb-10'>
            <div
              onClick={deleteMarkedItems}
              className='w-[114px] hover:bg-whiteW hover:cursor-pointer transition duration-300 h-10 flex items-center justify-center gap-1.5 rounded-[12px] border border-[1px] border-mainRed'
            >
              <img src={DeleteRed} alt='' />
              <span className='font-medium text-[14px] leading-[17px] text-mainRed inter__'>
                Delete
              </span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminSponsors;
