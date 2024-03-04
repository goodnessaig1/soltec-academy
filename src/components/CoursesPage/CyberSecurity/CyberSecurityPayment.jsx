import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Icons from '../../../assets/index';
import { useEffect, useState } from 'react';
const CyberSecurityPayment = () => {
  const [type, setType] = useState('Transfer');
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className='w-full'>
      <Header />
      <div className='w-full sm:px-[16px] lg:px-[120px] paym flex justify-center sm:mt-[50px] lg:mt-[80px] mb-[120px] items-center'>
        <div className=' lg:w-[964px] flex justify-center items-center lg:justify-start items-start sm:flex-col lg:flex-row gap-[89px]'>
          <div className=' lg:w-[375px] flex flex-col sm:gap-[50px] lg:gap-[104px]'>
            <div className='p-[32px] sm:w-[343px] lg:w-[375px] h-[320px] rounded-[24px] flex flex-col items-center justify-center  gap-[15px] cyberD'>
              <h1 className='font-[700] text-[32px] leading-[48px] text-center text-[#fff]'>
                Cybersecurity
              </h1>
              <span className='font-[500] text-[16px] leading-24px] text-center text-extraGray'>
                This 6 week prep course will not only introduce you to the
                fundamentals like Javascript, CSS and the like…
              </span>
            </div>
            <div className='flex flex-col gap-[17px]'>
              <div className='input_ rounded-[12px] py-[10px] px-[16px]'>
                <input
                  className='bg-transparent text-[14px] outline-none  w-full'
                  placeholder='Email address'
                  type='text'
                />
              </div>
              <div className='input_ rounded-[12px] py-[10px] px-[16px]'>
                <input
                  className='bg-transparent text-[14px] outline-none w-full'
                  placeholder='Phone number'
                  type='text'
                />
              </div>
              <div className='input_ flex justify-between gap-[8px] rounded-[12px]  pl-[16px]'>
                <input
                  className='bg-transparent text-[14px] outline-none w-full'
                  placeholder='Type Coupon'
                  type='text'
                />
                <div className='bg-[#fff] w-[72px] borderRr py-[10px] px-[12px] font-[500] leading-[20px] h-full text-center '>
                  Apply
                </div>
              </div>
              <div className='bg-mainRed text-[#fff] text-center  py-[8px] px-[16px] rounded-[12px] '>
                Save
              </div>
            </div>
          </div>
          <div className='payment__ sm:w-[343px] mdl:w-[600px] lg:w-[500px] p-[12px] lg:p-[24px] w-full flex flex-col gap-[24px]'>
            <div className='flex flex-col gap-[10px] '>
              <div className='flex flex-col'>
                <div className='flex h-[42px]  items-center text-[14px] leading-[18px] justify-between'>
                  <h1 className=''>Total price:</h1>
                  <span className=''>N250,000</span>
                </div>
                <div className='flex h-[42px] items-center text-[14px] leading-[18px] justify-between'>
                  <h1 className=''>Coupon:</h1>
                  <span className='text-mainRed'>-15,000</span>
                </div>
                <div className='flex h-[56px] total_ font-[700] items-center text-[14px] leading-[18px] justify-between'>
                  <h1 className=''>Total:</h1>
                  <span className=''>N235,000</span>
                </div>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <div className='flex gap-[4px] text-[14px] leading-[19px] '>
                  <h1 className='font-[600]'>Email address:</h1>
                  <span className=''>jamesbond007@gmail.com</span>
                </div>
                <div className='flex gap-[4px] text-[14px] leading-[19px] '>
                  <h1 className='font-[600]'>Phone number:</h1>
                  <span className=''>09020708683</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[28px]'>
              <div className='flex flex-col gap-[14px]'>
                <div className='card p-[16px] rounded-[12px] flex flex-col gap-[8px]'>
                  <div
                    onClick={() => setType('Transfer')}
                    className='flex gap-[8px] hover:cursor-pointer'
                  >
                    {type === 'Transfer' ? (
                      <img src={Icons?.Vector1} alt='' />
                    ) : (
                      <img src={Icons?.Vector2} alt='' />
                    )}
                    <h1 className='font-[600] text-[14px]'>Bank Transfer</h1>
                  </div>
                  <span className='text-[14px] text-lightB'>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </span>
                </div>
                <div className='card p-[16px] rounded-[12px] flex flex-col gap-[8px]'>
                  <div
                    onClick={() => setType('Paypal')}
                    className='flex gap-[8px] hover:cursor-pointer'
                  >
                    {type === 'Paypal' ? (
                      <img src={Icons?.Vector1} alt='' />
                    ) : (
                      <img src={Icons?.Vector2} alt='' />
                    )}
                    <h1 className='font-[600] text-[14px]'>Paypal</h1>
                  </div>
                </div>
                <div className='card p-[16px] rounded-[12px] flex flex-col gap-[8px]'>
                  <div
                    onClick={() => setType('Card')}
                    className='flex gap-[8px] hover:cursor-pointer '
                  >
                    {type === 'Card' ? (
                      <img src={Icons?.Vector1} alt='' />
                    ) : (
                      <img src={Icons?.Vector2} alt='' />
                    )}
                    <h1 className='font-[600] text-[14px]'>Credit Card</h1>
                  </div>
                </div>
              </div>
              <div className='text-[13.5px] leading-[21px] font-[400]'>
                Your personal data will be used to process your order, support
                your experience throughout this website and for other purposes
                described in our{' '}
                <span className='text-mainRed underline'>privacy policy</span>.
              </div>
              <div className='flex gap-[8px] items-center'>
                <input
                  type='checkbox'
                  name='t_and_c'
                  className='border hover:cursor-pointer  w-[15px] h-[15px] md:w-[18px] md:h-[18px]'
                />
                <span className='text-[14px] font-[400] leading-[21px]'>
                  I have read and agree to the website{' '}
                  <span className='text-mainRed underline'>
                    terms and conditions.
                  </span>
                </span>
              </div>
              <div className='text-[#fff] flex items-center text-center justify-center h-[56px] rounded-[12px] bg-mainRed font-[600]'>
                Make payment
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CyberSecurityPayment;
