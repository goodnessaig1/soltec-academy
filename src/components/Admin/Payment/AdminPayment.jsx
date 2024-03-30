/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Sort from '../../../assets/sort.svg';
import Check from '../../../assets/check.svg';

import { Dropdown, PrintOutlined } from '../../../Utils/Assets';
import Layout from '../Common/Layout';
import { useState } from 'react';
import { coursePurchase } from '../Dashboard/coursesInvoice';
const AdminPayment = () => {
  return (
    <Layout text='Testimonials'>
      <div className='w-full inter__ flex flex-col gap-[36px] px-[36px] pb-[140px]'>
        {/* <div className='flex flex-row items-center justify-between'>
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
        </div> */}

        <div className='w-[104px] h-[32px] rounded-[8px] course_input flex flex-row items-center justify-center gap-[6px]'>
          <h1 className='font-[500] text-[14px] leading-[21px]'>This year</h1>
          <img src={Dropdown} alt='' />
        </div>

        <div className='flex flex-row w-full gap-[14px]'>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[16px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                COURSE PURCHASES
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                5
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[16px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                MOST PURCHASED
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                Product Design
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                MOST USED PAYMENT METHOD
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                Card
              </h1>
            </div>
          </div>
          <div className='flex flex-col w-[24%] gap-[16px] p-[24px] rounded-[12px] bg-bg3 h-[110px] justify-center '>
            <div className='flex flex-col gap-[8px]'>
              <h1 className='inter__ font-[500] text-[14px] leading-[17px]'>
                TOTAL REVENUE
              </h1>
              <h1 className='font-[600] inter__ text-[24px] leading-[30px]'>
                N3,500,000
              </h1>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col coursesP rounded-[12px]'>
          {/* Head */}
          <div className='flex flex-row w-full mb-[10px] items-center'>
            <div className='w-[10%]'>
              <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                <h1 className='text-[14px] font-[600] leading-[17px]'>TIME</h1>
                <img src={Sort} alt='' />
              </div>
            </div>
            <div className='w-[20%]'>
              <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                <h1 className='text-[14px] font-[600] leading-[17px]'>EMAIL</h1>
                <img src={Sort} alt='' />
              </div>
            </div>
            <div className='w-[11%]'>
              <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                <h1 className='text-[14px] font-[600] leading-[17px]'>
                  PHONE NUMBER
                </h1>
              </div>
            </div>
            <div className='w-[8%]'>
              <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                <h1 className='text-[14px] font-[600] leading-[17px]'>
                  COUPON
                </h1>
              </div>
            </div>
            <div className='w-[17%]'>
              <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                <h1 className='text-[14px] font-[600] leading-[17px]'>
                  COURSE
                </h1>
              </div>
            </div>
            <div className='w-[11%]'>
              <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                <h1 className='text-[14px] font-[600] leading-[17px]'>
                  PAYMENT METHOD
                </h1>
              </div>
            </div>
            <div className='w-[11%]'>
              <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                <h1 className='text-[14px] font-[600] leading-[17px]'>
                  AMOUNT
                </h1>
              </div>
            </div>
            <div className='w-[7%]'></div>
          </div>
          {/* Data */}
          {coursePurchase.map((item, index) => (
            <div
              key={index}
              className='flex flex-row w-full items-start w-full min-h-[48px]'
            >
              <div className='w-[10%]'>
                <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                  {item.date}
                </h1>
              </div>
              <div className='w-[20%] whitespace-normal'>
                <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px] break-all'>
                  {item.email}
                </h1>
              </div>
              <div className='w-[11%]'>
                <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                  {item.phoneNumber}
                </h1>
              </div>
              <div className='w-[8%]'>
                <div className='flex flex-row items-center gap-[10px] py-[10px] px-[12px]'>
                  {item.cupon == true ? <img src={Check} alt='' /> : null}
                </div>
              </div>
              <div className='w-[17%]'>
                <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                  {item.course}
                </h1>
              </div>
              <div className='w-[11%]'>
                <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                  {item.paymentMethod}
                </h1>
              </div>
              <div className='w-[11%]'>
                <h1 className='text-[14px] font-[400] py-[10px] px-[12px] leading-[17px]'>
                  {item.amount}
                </h1>
              </div>
              <div className='w-[7%] items-center flex justify-center'>
                <div className='course_input w-[53px] h-[32px] rounded-[50px] flex items-center justify-center '>
                  <img src={PrintOutlined} alt='' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminPayment;
