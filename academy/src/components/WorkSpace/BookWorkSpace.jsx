import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import {
  Arrow_Right,
  BookMobile,
  BookText,
  Elipse1,
  Elipse2,
  Elipse3,
} from '../../Utils/Assets';
import { useAuth } from '../Context/AuthContext';

const BookWorkSpace = () => {
  const { plans } = useAuth();

  const reversePlans = plans => {
    if (plans && plans.length > 0) {
      return plans.reverse();
    }
    return [];
  };

  return (
    <div className='flex flex-col w-full'>
      <div className='bookWorkBg h-full pb-14 lg:pb-0 lg:h-[740px]'>
        <div className='w-full flex flex-col px-4'>
          <div className='pt-[90px] lg:pt-14 flex flex-col gap-4 items-center justify-center'>
            <h1 className='font-medium text-[20px] lg:text-[24px] leading-[36px] text-opacityWhite'>
              TIRED OF EPILLEPTIC POWER SUPPLY?
            </h1>
            <h1 className='font-medium text-center text-[20px] lg:text-[24px] leading-[36px] text-opacityWhite'>
              TIRED OF INTERNET SERVICE PROVIDERS?
            </h1>
            <h1 className='font-medium text-[20px] lg:text-[24px] text-center leading-[36px] text-opacityWhite'>
              EVER WANTED TO JUST...GET OUT AND MEET OTHER PEOPLE?
            </h1>
          </div>
          <div className='pt-6 lg:pt-[70px] flex items-center justify-center'>
            <img
              src={BookText}
              className='sma:w-[343px] hidden lg:block lg:w-[543px] '
              alt=''
            />
            <img
              src={BookMobile}
              className='sma:w-[343px] lg:hidden lg:w-[543px] '
              alt=''
            />
          </div>
          {plans ? (
            <div className='w-full flex flex-col lg:flex-row gap-10 mt-[4px] lg:mt-[48px] justify-center items-center'>
              {plans &&
                plans.length > 0 &&
                reversePlans([...plans]).map((plan, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.1 }}
                    className='pay_ct w-[287px] hover:cursor-pointer transition duration-300 flex flex-col items-center justify-center h-[244px] rounded-[24px] p-6 gap-4 '
                  >
                    <div className='flex flex-col gap-5'>
                      <h1 className='font-bold text-[24px] leading-[36px]'>
                        {plan?.title}
                      </h1>
                      <h1 className='font-bold text-[24px] leading-[36px]'>
                        {plan?.price}
                      </h1>
                    </div>
                    <Link
                      to={'/book-workspace/bookspace'}
                      className='book_now text-white w-[221px] h-14 rounded-3xl flex flex-row gap-4 items-center justify-center hover:opacity-[0.8] transition ease-in-out duration-200 hover:cursor-pointer'
                    >
                      <h1 className='font-semibold text-[16px] leading-[24px] text-white'>
                        BOOK NOW
                      </h1>
                      <img src={Arrow_Right} className='' alt='' />
                    </Link>
                  </motion.div>
                ))}
            </div>
          ) : (
            <div className='w-full flex flex-col lg:flex-row gap-10 mt-[4px] lg:mt-[48px] justify-center items-center'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                className='pay_ct w-[287px] hover:cursor-pointer transition duration-300 flex flex-col items-center justify-center h-[244px] rounded-[24px] p-6 gap-4 '
              >
                <div className='flex flex-col gap-5'>
                  <h1 className='font-bold text-[24px] leading-[36px]'>
                    DAILY
                  </h1>
                  <h1 className='font-bold text-[24px] leading-[36px]'>
                    N3,000
                  </h1>
                </div>
                <Link
                  to={'/book-workspace/bookspace'}
                  className='book_now text-white w-[221px] h-14 rounded-3xl flex flex-row gap-4 items-center justify-center hover:opacity-[0.8] transition ease-in-out duration-200 hover:cursor-pointer'
                >
                  <h1 className='font-semibold text-[16px] leading-[24px] text-white'>
                    BOOK NOW
                  </h1>
                  <img src={Arrow_Right} className='' alt='' />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                className='pay_ct w-[287px] hover:cursor-pointer transition duration-300 flex flex-col items-center justify-center h-[244px] rounded-[24px] p-6 gap-4 '
              >
                <div className='flex flex-col gap-5'>
                  <h1 className='font-bold text-[24px] leading-[36px]'>
                    WEEKLY
                  </h1>
                  <h1 className='font-bold text-[24px] leading-[36px]'>
                    N12,000
                  </h1>
                </div>
                <Link
                  to={'/book-workspace/bookspace'}
                  className='book_now text-white w-[221px] h-14 rounded-3xl flex flex-row gap-4 items-center justify-center hover:opacity-[0.8] transition ease-in-out duration-200 hover:cursor-pointer'
                >
                  <h1 className='font-semibold text-[16px] leading-[24px] text-white'>
                    BOOK NOW
                  </h1>
                  <img src={Arrow_Right} className='' alt='' />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                className='pay_ct w-[287px] hover:cursor-pointer transition duration-300 flex flex-col items-center justify-center h-[244px] rounded-[24px] p-6 gap-4 '
              >
                <div className='flex flex-col gap-5'>
                  <h1 className='font-bold text-[24px] leading-[36px]'>
                    MONTHLY
                  </h1>
                  <h1 className='font-bold text-[24px] leading-[36px]'>
                    N38,000
                  </h1>
                </div>
                <Link
                  to={'/book-workspace/bookspace'}
                  className='book_now text-white w-[221px] h-14 rounded-3xl flex flex-row gap-4 items-center justify-center hover:opacity-[0.8] transition ease-in-out duration-200 hover:cursor-pointer'
                >
                  <h1 className='font-semibold text-[16px] leading-[24px] text-white'>
                    BOOK NOW
                  </h1>
                  <img src={Arrow_Right} className='' alt='' />
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      <div className='h-[58px] flex items-center'>
        <Marquee speed={55}>
          <div className='flex flex-row gap-8 items-center'>
            <h1 className='ml-8 font-medium text-[16px] leading-[24px]'>
              Uninterrupted Power Supply with Solar
            </h1>
            <img src={Elipse1} alt='' />
          </div>
          <div className='ml-8  flex flex-row gap-8 items-center'>
            <h1 className='font-medium text-[16px] leading-[24px]'>
              Blazing fast, unlimited internet with Starlink
            </h1>
            <img src={Elipse2} alt='' />
          </div>
          <div className='ml-8  flex flex-row gap-8 items-center'>
            <h1 className='font-medium text-[16px] leading-[24px]'>
              Conducive and Personalized
            </h1>
            <img src={Elipse3} alt='' />
          </div>
          <div className='ml-8  flex flex-row gap-8 items-center'>
            <h1 className='font-medium text-[16px] leading-[24px]'>
              Blazing fast, unlimited internet with Starlink
            </h1>
            <img src={Elipse2} alt='' />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default BookWorkSpace;
