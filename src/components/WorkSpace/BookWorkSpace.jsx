import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import {
  Arrow_Right,
  BookText,
  Elipse1,
  Elipse2,
  Elipse3,
} from '../../Utils/Assets';

const BookWorkSpace = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='bookWorkBg h-[1216px] lg:h-[740px]'>
        <div className='w-full flex flex-col px-[16px]'>
          <div className='pt-[90px] lg:pt-[55px] flex flex-col gap-[16px] items-center justify-center'>
            <h1 className='font-[500] text-[20px] lg:text-[24px] leading-[36px] text-opacityWhite'>
              TIRED OF NEPA?
            </h1>
            <h1 className='font-[500] text-[20px] lg:text-[24px] leading-[36px] text-opacityWhite'>
              TIRED OF MTN, AIRTEL AND GLO?
            </h1>
            <h1 className='font-[500] text-[20px] lg:text-[24px] text-center leading-[36px] text-opacityWhite'>
              EVER WANTED TO JUST...GET OUT AND MEET OTHER PEOPLE?
            </h1>
          </div>
          <div className='pt-[24px] lg:pt-[70px] flex items-center justify-center'>
            <img
              src={BookText}
              className='sma:w-[343px] lg:w-[543px] '
              alt=''
            />
          </div>

          <div className='w-full flex flex-col lg:flex-row gap-[40px] mt-[4px] lg:mt-[48px] justify-center items-center'>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              className='pay_ct w-[287px] hover:cursor-pointer transition duration-300 flex flex-col items-center justify-center h-[244px] rounded-[24px] p-[24px] gap-[24px] '
            >
              <div className='flex flex-col gap-[20px]'>
                <h1 className='font-[700] text-[24px] leading-[36px]'>DAILY</h1>
                <h1 className='font-[700] text-[24px] leading-[36px]'>
                  N3,000
                </h1>
              </div>
              <Link
                to={'/book-workspace/bookspace'}
                className='book_now text-[#fff] w-[221px] h-[56px] rounded-[16px] flex flex-row gap-[8px] items-center justify-center hover:opacity-[0.8] transition ease-in-out duration-200 hover:cursor-pointer'
              >
                <h1 className='font-[600] text-[16px] leading-[24px] text-[#fff]'>
                  BOOK NOW
                </h1>
                <img src={Arrow_Right} className='' alt='' />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              className='pay_ct w-[287px] hover:cursor-pointer transition duration-300 flex flex-col items-center justify-center h-[244px] rounded-[24px] p-[24px] gap-[24px] '
            >
              <div className='flex flex-col gap-[20px]'>
                <h1 className='font-[700] text-[24px] leading-[36px]'>
                  WEEKLY
                </h1>
                <h1 className='font-[700] text-[24px] leading-[36px]'>
                  N12,000
                </h1>
              </div>
              <Link
                to={'/book-workspace/bookspace'}
                className='book_now text-[#fff] w-[221px] h-[56px] rounded-[16px] flex flex-row gap-[8px] items-center justify-center hover:opacity-[0.8] transition ease-in-out duration-200 hover:cursor-pointer'
              >
                <h1 className='font-[600] text-[16px] leading-[24px] text-[#fff]'>
                  BOOK NOW
                </h1>
                <img src={Arrow_Right} className='' alt='' />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              className='pay_ct w-[287px] hover:cursor-pointer transition duration-300 flex flex-col items-center justify-center h-[244px] rounded-[24px] p-[24px] gap-[24px] '
            >
              <div className='flex flex-col gap-[20px]'>
                <h1 className='font-[700] text-[24px] leading-[36px]'>
                  MONTHLY
                </h1>
                <h1 className='font-[700] text-[24px] leading-[36px]'>
                  N38,000
                </h1>
              </div>
              <Link
                to={'/book-workspace/bookspace'}
                className='book_now text-[#fff] w-[221px] h-[56px] rounded-[16px] flex flex-row gap-[8px] items-center justify-center hover:opacity-[0.8] transition ease-in-out duration-200 hover:cursor-pointer'
              >
                <h1 className='font-[600] text-[16px] leading-[24px] text-[#fff]'>
                  BOOK NOW
                </h1>
                <img src={Arrow_Right} className='' alt='' />
              </Link>
              {/* </div> */}
            </motion.div>
          </div>
        </div>
      </div>
      <div className='h-[58px] flex items-center'>
        <Marquee speed={55}>
          <div className='flex flex-row gap-[32px] items-center'>
            <h1 className='ml-[32px] font-[500] text-[16px] leading-[24px]'>
              Uninterrupted Power Supply with Solar
            </h1>
            <img src={Elipse1} alt='' />
          </div>
          <div className='ml-[32px]  flex flex-row gap-[32px] items-center'>
            <h1 className='font-[500] text-[16px] leading-[24px]'>
              Blazing fast, unlimited internet with Starlink
            </h1>
            <img src={Elipse2} alt='' />
          </div>
          <div className='ml-[32px]  flex flex-row gap-[32px] items-center'>
            <h1 className='font-[500] text-[16px] leading-[24px]'>
              Conducive and Personalized
            </h1>
            <img src={Elipse3} alt='' />
          </div>
          <div className='ml-[32px]  flex flex-row gap-[32px] items-center'>
            <h1 className='font-[500] text-[16px] leading-[24px]'>
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
