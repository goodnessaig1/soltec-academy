/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { DeleteRed, EditIcon, PlusW, SearchGray } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { adminApiRequest, apiRequest } from '../../../Utils/ApiRequest';

const AdminTestimonials = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [markedItems, setMarkedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getTestimonials();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const getTestimonials = async () => {
    try {
      const response = await apiRequest('GET', `/testimonials/`);
      setData(response.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('An error occured !', {
        position: 'top-left',
      });
    }
  };

  const handleDelete = async id => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    try {
      await adminApiRequest('GET', `/testimonials/${id}`);
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
      await adminApiRequest('DELETE', `/testimonials/delete-multiple/`, data);
      toast.success('Successfully deleted', {
        position: 'top-right',
      });
      setIds([]);
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
    }
  };

  const toggleMarked = (index, testimonial) => {
    if (markedItems.includes(index)) {
      setIds(ids.filter(id => id !== testimonial?.id));
      setMarkedItems(markedItems.filter(item => item !== index));
    } else {
      setIds([...ids, testimonial?.id]);
      setMarkedItems([...markedItems, index]);
    }
  };

  const deleteMarkedItems = () => {
    deleteMultiple();
    const newData = data.filter((_, index) => !markedItems.includes(index));
    setData(newData);
  };

  return (
    <Layout text='Testimonials'>
      <div className='w-full inter__ flex flex-col gap-9 px-9 pb-[140px]'>
        <div className='flex flex-row items-center justify-between'>
          <span></span>
          <div className='flex flex-row gap-[11px]'>
            <div className='flex flex-row rounded-[12px] px-4 justify-between items-center h-10 course_input w-[276px]'>
              <input
                type='text'
                placeholder='Search'
                className='outline-none border-none bg-transparent'
              />
              <img src={SearchGray} alt='' />
            </div>
            <Link
              to={'/admin/testimonials/add-testimonial'}
              className='w-[145px] hover:opacity-[94%] h-10 rounded-[12px] bg-lBlue flex gap-1.5 items-center justify-center'
            >
              <img src={PlusW} alt='' />
              <h2 className='text-[#fff] font-medium text-[14px] leading-[17px]'>
                Add Testimonial
              </h2>
            </Link>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 xll:grid-cols-3 gap-4 gap-y-4 '>
          {!loading ? (
            <>
              {data &&
                data.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`flex flex-row px-3 group py-3 rounded-[16px] gap-4 w-[360px]  border bg-white items-center ${
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
                      } ml-[214px] mt-[54px]`}
                    >
                      <div className='w-[126px] h-10 rounded-[50px] flex gap-[13px] bg-whiteW items-center justify-center'>
                        <div
                          onClick={() =>
                            navigate(
                              `/admin/testimonials/edit-testimonial/${testimonial?.id}`,
                            )
                          }
                          className=''
                        >
                          <img src={EditIcon} alt='' />
                        </div>
                        <div
                          onClick={() => handleDelete(testimonial?.id)}
                          className='hover:text-mainRed transition duration-300 cursor-pointer'
                        >
                          <RiDeleteBin5Line size={22} />
                        </div>

                        <div className=''>
                          <input
                            type='checkbox'
                            className='form-checkbox h-4 w-4 text-indigo-600'
                            checked={markedItems.includes(index)}
                            onChange={() => toggleMarked(index, testimonial)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=' w-[15%]'>
                      <img
                        src={testimonial?.author_image}
                        className='h-[50px] rounded-[50%] w-[50px]'
                        alt=''
                      />
                    </div>
                    <div className='flex w-[85%] flex-col gap-[11px]'>
                      <h1 className='text-[16px] font-medium z-10 leading-[19px] '>
                        {testimonial?.content.length > 100
                          ? `${testimonial?.content.substring(0, 100) + '...'}`
                          : `${testimonial?.content}`}
                      </h1>
                      <div>
                        <span className='font-[400] text-[14px] profile_col leading-[16px]'>
                          {testimonial?.author}
                          <p>{testimonial?.profession}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <div className='flex flex-row gap-[24px]'>
              <div className='flex flex-row items-center justify-center gap-3'>
                <Skeleton height={50} circle width={50} />
                <Skeleton height={130} width={200} />
              </div>
              <div className='flex flex-row items-center justify-center gap-3'>
                <Skeleton height={50} circle width={50} />
                <Skeleton height={130} width={200} />
              </div>
              <div className='flex flex-row items-center justify-center gap-3'>
                <Skeleton height={50} circle width={50} />
                <Skeleton height={130} width={200} />
              </div>
            </div>
          )}
        </div>
        {markedItems.length > 0 && (
          <div className='absolute right-0 bottom-0 mr-10 mb-10'>
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

export default AdminTestimonials;
