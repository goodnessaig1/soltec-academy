import moment from 'moment';
import React from 'react';
import Sort from '../../../assets/sort.svg';
import { useNavigate } from 'react-router-dom';

const WorkspaceBookings = ({ workspaceBookings }) => {
  const navigate = useNavigate();

  return (
    <div className='w-full flex flex-col coursesP rounded-[12px]'>
      {/* Head */}
      <div className='flex flex-row w-full mb-[10px] items-center'>
        <div className='w-[12%]'>
          <div className='flex flex-row items-center gap-4 gap-4 px-3'>
            <h1 className='text-[14px] font-semibold leading-[17px]'>TIME</h1>
            <img src={Sort} alt='' />
          </div>
        </div>
        <div className='w-[18%]'>
          <div className='flex flex-row items-center gap-4 gap-4 px-3'>
            <h1 className='text-[14px] font-semibold leading-[17px]'>EMAIL</h1>
            <img src={Sort} alt='' />
          </div>
        </div>
        <div className='w-[17%]'>
          <div className='flex flex-row items-center gap-4 gap-4 px-3'>
            <h1 className='text-[14px] font-semibold leading-[17px]'>
              FULL NAME
            </h1>
          </div>
        </div>
        <div className='w-[15%]'>
          <div className='flex flex-row items-center gap-4 gap-4 px-3'>
            <h1 className='text-[14px] font-semibold leading-[17px]'>
              PHONE NUMBER
            </h1>
          </div>
        </div>
        <div className='w-[12%]'>
          <div className='flex flex-row items-center gap-4 gap-4 px-3'>
            <h1 className='text-[14px] font-semibold leading-[17px]'>
              START DATE
            </h1>
          </div>
        </div>
        <div className='w-[8%]'>
          <div className='flex flex-row items-center gap-4 gap-4 px-3'>
            <h1 className='text-[14px] font-semibold leading-[17px]'>PLAN</h1>
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
      <div className='flex flex-col gap-1.5'>
        {workspaceBookings &&
          workspaceBookings.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(
                  `/book-workspace/payment/verify/${item.transaction_id}`,
                )
              }
              className='flex flex-row hover:cursor-pointer transition duration-300 hover:bg-gray-100 py-2 rounded-md w-full items-start w-full '
            >
              <div className='w-[12%]'>
                <h1 className='text-[12px] font-normal gap-4 px-3 leading-[17px]'>
                  {moment(item?.date_paid).format('DD MMM YYYY')}
                </h1>
              </div>
              <div className='w-[18%] whitespace-normal'>
                <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px] break-all'>
                  {item?.email.length > 12
                    ? `${item?.email.substring(0, 6)}..${item?.email.substring(
                        item?.email.length - 7,
                      )}`
                    : `${item?.email}`}
                </h1>
              </div>
              <div className='w-[17%]'>
                <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                  {item?.full_name.length > 14
                    ? `${item?.full_name.substring(0, 14)}...`
                    : `${item?.full_name}`}
                </h1>
              </div>
              <div className='w-[15%]'>
                <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                  {item?.phone_number}
                </h1>
              </div>
              <div className='w-[12%]'>
                <div className='flex flex-row text-[12px] items-center gap-4 gap-4 px-3'>
                  {item?.start_date}
                </div>
              </div>
              <div className='w-[8%]'>
                <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                  {item?.plan}
                </h1>
              </div>
              <div className='w-[17%]'>
                <h1 className='text-[14px] font-normal gap-4 px-3 leading-[17px]'>
                  {item?.payment_method}
                </h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkspaceBookings;
