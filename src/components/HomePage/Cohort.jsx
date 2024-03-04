import Stroke from '../../assets/stroke1.svg';
const Cohort = () => {
  return (
    <div className='background-image2'>
      <div className='flex px-[16px] flex-col items-center justify-center py-[140px]'>
        <h1 className='font-[900] text-[20px] text-[#fff] '>
          THE NEXT COHORT STARTS IN...
        </h1>
        <div className='flex mt-[34px] flex-row gap-[24px]'>
          <img src={Stroke} alt='' />
          <h1 className='font-[900] text-[36px] leading-[44px] text-[#fff]'>
            :
          </h1>
          <img src={Stroke} alt='' />
          <h1 className='font-[900] text-[36px] leading-[44px] text-[#fff]'>
            :
          </h1>
          <img src={Stroke} alt='' />
        </div>
        <div className='mt-[48px] flex text-center'>
          <span className='font-[400] sm:text-[16px] lg:text-[20px] text-nowrap leading-[30px] text-center  text-[#fff]'>
            We’re still putting together plans for our next{' '}
            <br className='sm:block lg:hidden' />
            bootcamp. You can sign up <br className='sm:hidden lg:block' />
            to our newsletter to <br className='sm:block lg:hidden' />
            get first information when we’re ready to receive <br />
            new students!
          </span>
        </div>
        <div className='bg-colorOpacity flex items-center rounded-[20px] mt-[32px] justify-between sm:w-[343px] lg:w-[383px] py-[6px] pr-[6px] pl-[20px]'>
          <input
            type='text'
            placeholder='Enter email address'
            className='font-[400] outtline-none py-[8px] bg-transparent text-[#fff] text-[16px] w-full focus:outline-none placeholder-[#fff] focus:border-none leading-[16px]'
          />
          <div className='bg-[#fff] w-[93px] h-[48px] rounded-[16px] flex items-center justify-center '>
            <div className='span'>Sign up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cohort;
