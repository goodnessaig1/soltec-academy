import React, { useState } from 'react';
import Sort from '../../../assets/sort.svg';
import moment from 'moment';
import Check from '../../../assets/check.svg';
import Empty from '../../../assets/empty-courses.webp';
import { useNavigate } from 'react-router-dom';

const CoursePayment = ({ paymentData, setPaymentData }) => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const [isReversed, setIsReversed] = useState(false);
  let initialValues = 6;

  const handleSort = () => {
    setIsReversed(!isReversed);
    setPaymentData(prevData => [...prevData].reverse());
  };
  return (
    <div>
      {paymentData && paymentData.length > 0 ? (
        <div className='w-full py-3 flex flex-col gap-5 coursesP rounded-[12px]'>
          <div className='flex flex-col gap-3.5'>
            <div className='flex px-2 py-0.5 flex-row w-full items-center'>
              <div className='w-[15%]'>
                <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    TIME
                  </h1>
                  <div onClick={handleSort} className='hover:cursor-pointer'>
                    <img src={Sort} alt='' />
                  </div>
                </div>
              </div>
              <div className='w-[21%]'>
                <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    EMAIL
                  </h1>
                  {/* <img src={Sort} alt='' /> */}
                </div>
              </div>
              <div className='w-[17%]'>
                <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    PHONE NUMBER
                  </h1>
                </div>
              </div>
              <div className='w-[8%]'>
                <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    COUPON
                  </h1>
                </div>
              </div>
              <div className='w-[18%]'>
                <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    COURSE
                  </h1>
                </div>
              </div>
              <div className='w-[17%]'>
                <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                  <h1 className='text-[14px] font-semibold leading-[17px]'>
                    PAYMENT METHOD
                  </h1>
                </div>
              </div>
            </div>
            <hr />
          </div>
          {/* Data */}
          <div className='px-2 flex flex-col gap-4'>
            {paymentData &&
              paymentData
                .slice(0, showAll ? paymentData.length : initialValues)
                .map((item, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      navigate(`/courses/payment/verify/${item.transaction_id}`)
                    }
                    className='flex flex-row hover:cursor-pointer transition duration-300 hover:bg-gray-100 py-2 rounded-md w-full items-start w-full '
                  >
                    <div className='w-[15%]'>
                      <h1 className='text-[12px] font-normal gap-4 px-3 leading-[17px]'>
                        {moment(item?.date_paid).format('DD MMM YYYY, hh:mmA')}
                      </h1>
                    </div>
                    <div className='w-[21%] whitespace-normal'>
                      <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px] break-all'>
                        {item?.email}
                      </h1>
                    </div>
                    <div className='w-[17%]'>
                      <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                        {item?.phone_number}
                      </h1>
                    </div>
                    <div className='w-[8%]'>
                      <div className='flex flex-row items-center gap-4 gap-4 px-3'>
                        {item?.coupon == true ? (
                          <img src={Check} alt='' />
                        ) : (
                          <div className=''>null</div>
                        )}
                      </div>
                    </div>
                    <div className='w-[18%]'>
                      <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                        {item?.course}
                      </h1>
                    </div>
                    <div className='w-[17%]'>
                      <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                        {item?.payment_method}
                      </h1>
                    </div>
                  </div>
                ))}
            {paymentData && paymentData.length > 6 && (
              <div
                onClick={() => setShowAll(!showAll)}
                className=' px-1 text-blue-500 hover:cursor-pointer hover:text-blue-700'
              >
                {!showAll ? 'Show all' : 'Show less'}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='py-14 gap-4 w-full flex-col items-center justify-center flex'>
          <img
            src={Empty}
            alt=''
            className='w-40 h-40 bg-white rounded-full '
          />
          <p className='text-xl font-medium'>No course purchase yet!</p>;
        </div>
      )}
    </div>
  );
};

export default CoursePayment;
