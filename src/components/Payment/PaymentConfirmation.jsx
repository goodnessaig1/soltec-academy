import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Confett, Print } from '../../Utils/Assets';
const PaymentConfirmation = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <div className='lg:hidden'>
        <Header />
      </div>
      <div className='w-full px-[16px] pb-[120px] paym flex flex-col mt-[81px] items-center justify-center '>
        <div className='sml:w-[500px] lg:w-[739px] flex flex-col items-center justify-center gap-[40px]'>
          <div className='gap-[19px] flex flex-col'>
            <div className='flex items-center justify-center'>
              <img src={Confett} alt='' />
            </div>
            <h1 className='font-[700] text-[32px] leading-[41px] text-center items-center'>
              Thank You For Your Payment!
            </h1>
            <span className='font-[400] text-[20px] leading-[26px] text-center'>
              Class begins on 24th March 2022
            </span>
            <p className='font-[400] text-[14px] leading-[21px] text-center'>
              We sent an email to smart.okolichiaza@gmail.com with your order
              confirmation and receipt. If the email hasn’t arrived within two
              minutes, please check your spam folder to see if the email was
              routed there.
            </p>
            <p className='font-[700] text-[14px] leading-[21px] text-center'>
              Go to Soltec’s physical office to complete your registration
              process and begin your lessons.
            </p>
          </div>
          <div className='flex flex-col w-[343px] lg:w-[454px] gap-[28px] '>
            <div className='flex flex-col bg-extraGray gap-[8px] rounded-[12px]'>
              <div className='w-full flex flex-col '>
                <div className='w-full flex bg-borderLight brrd p-[16px]'>
                  <div className='w-1/2 font-[600] text-[14px] leading-[18.2px]'>
                    Order Confirmation #
                  </div>
                  <div className='w-1/2 font-[600] text-[14px] leading-[18.2px]'>
                    37795434YU{' '}
                  </div>
                </div>
                <div className='w-full flex bg-extraGray  p-[16px]'>
                  <div className='w-1/2 font-[400] text-[14px] leading-[18.2px]'>
                    Purchased Item
                  </div>
                  <div className='w-1/2 font-[400] text-[14px] leading-[18.2px]'>
                    N1,500,000.00
                  </div>
                </div>
              </div>
              <div className='w-full flex bg-extraGray borrd p-[16px]'>
                <div className='w-1/2 font-[600] text-[14px] leading-[18.2px]'>
                  TOTAL
                </div>
                <div className='w-1/2 font-[600] text-[14px] leading-[18.2px]'>
                  N1,525,000.00
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-[14px]'>
              <div className='flex text-[14px] leading-[18.2px] '>
                <h1 className='font-[600]'>Email address:</h1>
                <span className='font-[400]'>jamesbond007@gmail.com</span>
              </div>
              <div className='flex text-[14px] leading-[18.2px] '>
                <h1 className='font-[600]'>Phone number:</h1>
                <span className='font-[400]'>09020708683</span>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <div
                onClick={handlePrint}
                className='flex hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-200 gap-[6px] printB items-center rounded-[50px] py-[8px] px-[12px]'
              >
                <img src={Print} alt='' />
                <h1 className='font-[500] text-[14px] leading-[21px]'>
                  Print Receipt
                </h1>
              </div>
            </div>
            <div className='bg-mainRed flex justify-center items-center cursor-pointer hover:bg-mainDRed transition duration-200 h-[56px] py-[8px] px-[16px] text-[#fff] text-[16px] rounded-[12px] text-center  font-[600]'>
              Back to courses
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;
