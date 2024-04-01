/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { DeleteRed, EditIcon, PlusW, SearchGray } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseURL } from '../../../Utils/BaseUrl';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import { RiDeleteBin5Line } from 'react-icons/ri';

const AdminTestimonials = () => {
  const [data, setData] = useState(null);
  const [markedItems, setMarkedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetTestimonials();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const GetTestimonials = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseURL}/testimonials/`);
      setData(response.data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  const handleDelete = async id => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    try {
      await axios.delete(`${BaseURL}/testimonials/${id}`);
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

  const toggleMarked = index => {
    if (markedItems.includes(index)) {
      setMarkedItems(markedItems.filter(item => item !== index));
    } else {
      setMarkedItems([...markedItems, index]);
    }
  };

  const deleteMarkedItems = () => {
    const newData = data.filter((_, index) => !markedItems.includes(index));
    setData(newData);
    setMarkedItems([]);
  };

  return (
    <Layout text='Testimonials'>
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
              to={'/admin/testimonials/add-testimonial'}
              className='w-[145px] hover:opacity-[94%] h-[40px] rounded-[12px] bg-lBlue flex gap-[6px] items-center justify-center'
            >
              <img src={PlusW} alt='' />
              <h2 className='text-[#fff] font-[500] text-[14px] leading-[17px]'>
                Add Testimonial
              </h2>
            </Link>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 xll:grid-cols-3 gap-[16px] gap-y-[16px] '>
          {!loading ? (
            <>
              {data &&
                data.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`flex flex-row px-[12px] group py-[12px] rounded-[16px] gap-[16px] w-[360px]  border bg-[fff] items-center ${
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
                      <div className='w-[126px] h-[40px] rounded-[50px] flex gap-[13px] bg-whiteW items-center justify-center'>
                        <div className=''>
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
                            onChange={() => toggleMarked(index)}
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
                      <h1 className='text-[16px] font-[500] z-10 leading-[19px] '>
                        {testimonial?.content.length > 100
                          ? `${testimonial?.content.substring(0, 100) + '...'}`
                          : `${testimonial?.content}`}
                      </h1>
                      <div>
                        <span className='font-[400] text-[14px] profile_col leading-[16px]'>
                          {testimonial?.author}
                          <p>{testimonial?.proffession}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <div className='flex flex-row gap-[24px]'>
              <div className='flex flex-row items-center justify-center gap-[12px]'>
                <Skeleton height={50} circle width={50} />
                <Skeleton height={130} width={200} />
              </div>
              <div className='flex flex-row items-center justify-center gap-[12px]'>
                <Skeleton height={50} circle width={50} />
                <Skeleton height={130} width={200} />
              </div>
              <div className='flex flex-row items-center justify-center gap-[12px]'>
                <Skeleton height={50} circle width={50} />
                <Skeleton height={130} width={200} />
              </div>
            </div>
          )}
        </div>
        {markedItems.length > 0 && (
          <div className='absolute right-0 bottom-0 mr-[40px] mb-[40px]'>
            <div
              onClick={deleteMarkedItems}
              className='w-[114px] hover:bg-whiteW hover:cursor-pointer transition duration-300 h-[40px] flex items-center justify-center gap-[6px] rounded-[12px] border border-[1px] border-mainRed'
            >
              <img src={DeleteRed} alt='' />
              <span className='font-[500] text-[14px] leading-[17px] text-mainRed inter__'>
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
