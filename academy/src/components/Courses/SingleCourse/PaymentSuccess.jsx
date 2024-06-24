/* eslint-disable no-unused-vars */
import { Confett, Print } from '../../../Utils/Assets';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const Payment = () => {
  const [loading, setLoading] = useState(true);
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <div className='lg:hidden'>
        <Header />
      </div>
      {!loading ? (
        <div className='w-full px-4 pb-[120px] paym flex flex-col mt-20 items-center justify-center '>
          <div className='sml:w-[500px] lg:w-[739px] flex flex-col items-center justify-center gap-40'>
            <div className='gap-4 flex flex-col'>
              <div className='flex items-center justify-center'>
                <img src={Confett} alt='' />
              </div>
              <h1 className='font-bold text-[32px] leading-[41px] text-center items-center'>
                Thank You For Your Payment!
              </h1>
              <span className='font-normal text-[20px] leading-[26px] text-center'>
                Class begins on 24th March 2022
              </span>
              <p className='font-normal text-[14px] leading-[21px] text-center'>
                We sent an email to smart.okolichiaza@gmail.com with your order
                confirmation and receipt. If the email hasn’t arrived within two
                minutes, please check your spam folder to see if the email was
                routed there.
              </p>
              <p className='font-bold text-[14px] leading-[21px] text-center'>
                Go to Soltec’s physical office to complete your registration
                process and begin your lessons.
              </p>
            </div>
            <div className='flex flex-col w-[343px] lg:w-[454px] gap-7 '>
              <div className='flex flex-col bg-extraGray gap-4 rounded-[12px]'>
                <div className='w-full flex flex-col '>
                  <div className='w-full flex bg-borderLight brrd p-4'>
                    <div className='w-1/2 font-semibold text-[14px] leading-[18.2px]'>
                      Order Confirmation #
                    </div>
                    <div className='w-1/2 font-semibold text-[14px] leading-[18.2px]'>
                      37795434YU{' '}
                    </div>
                  </div>
                  <div className='w-full flex bg-extraGray  p-4'>
                    <div className='w-1/2 font-normal text-[14px] leading-[18.2px]'>
                      Purchased Item
                    </div>
                    <div className='w-1/2 font-normal text-[14px] leading-[18.2px]'>
                      N1,500,000.00
                    </div>
                  </div>
                </div>
                <div className='w-full flex bg-extraGray borrd p-4'>
                  <div className='w-1/2 font-semibold text-[14px] leading-[18.2px]'>
                    TOTAL
                  </div>
                  <div className='w-1/2 font-semibold text-[14px] leading-[18.2px]'>
                    N1,525,000.00
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-[14px]'>
                <div className='flex text-[14px] leading-[18.2px] '>
                  <h1 className='font-semibold'>Email address:</h1>
                  <span className='font-normal'>jamesbond007@gmail.com</span>
                </div>
                <div className='flex text-[14px] leading-[18.2px] '>
                  <h1 className='font-semibold'>Phone number:</h1>
                  <span className='font-normal'>09020708683</span>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <div
                  onClick={handlePrint}
                  className='flex hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-200 gap-[6px] printB items-center rounded-[50px] py-2 px-3'
                >
                  <img src={Print} alt='' />
                  <h1 className='font-medium text-[14px] leading-[21px]'>
                    Print Receipt
                  </h1>
                </div>
              </div>
              <div className='bg-mainRed flex justify-center items-center cursor-pointer hover:bg-mainDRed transition duration-200 h-14 py-2 px-4 text-white text-[16px] rounded-[12px] text-center  font-semibold'>
                Back to courses
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex w-full h-[100vh] items-center justify-center'>
          <RotatingLines
            visible={true}
            height='56'
            width='56'
            strokeColor='grey'
            strokeWidth='3'
            animationDuration='0.75'
            ariaLabel='rotating-lines-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Payment;
