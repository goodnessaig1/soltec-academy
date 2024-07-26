/* eslint-disable react/prop-types */
import Countdown from './Countdown';
const Cohort = ({ startDate }) => {
  console.log(startDate);
  return (
    <div className='pt-32 lg:pt-36'>
      <div className='background-image2'>
        <div className='flex px-4 flex-col items-center justify-center py-[140px]'>
          {startDate ? (
            <h1 className='font-[900] text-[20px] text-white '>
              THE NEXT COHORT STARTS IN...
            </h1>
          ) : (
            <h1 className='font-[900] text-[20px] text-white'>
              ENROLLMENT OPENING SOON...
            </h1>
          )}
          {<Countdown startDate={startDate} />}

          <div className='mt-12 flex text-center'>
            <span className='font-normal sm:text-[16px] lg:text-[20px] text-nowrap leading-[30px] text-center text-white'>
              We’re still putting together plans for our next{' '}
              <br className='sm:block lg:hidden' />
              bootcamp. You can sign up <br className='sm:hidden lg:block' />
              to our newsletter to <br className='sm:block lg:hidden' />
              get first information when we’re ready to receive <br />
              new students!
            </span>
          </div>
          <div className='bg-colorOpacity flex items-center rounded-[20px] mt-8 justify-between sm:w-[343px] lg:w-[383px] py-[6px] pr-[6px] pl-5'>
            <input
              type='text'
              placeholder='Enter email address'
              className='font-normal outtline-none py-2 bg-transparent text-white text-[16px] w-full focus:outline-none placeholder-white focus:border-none leading-[16px]'
            />
            <div className='bg-white hover:cursor-pointer w-[93px] h-12 rounded-[16px] flex items-center justify-center '>
              <div className='span'>Sign up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cohort;
