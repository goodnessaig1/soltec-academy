import { Link } from 'react-router-dom';
import Next from '../../../assets/next-vector.svg';

const CyberEnroll = () => {
  return (
    <div className='background-image4 h-[416px] w-full'>
      <div className='w-full gap-[32px] h-full items-center justify-center flex flex-col'>
        <h1 className='barlow-semi condensed-black   text-[32px] text-[#fff] font-[700px] leading-[48px] text-center '>
          Ready to begin your{' '}
          <span className='text-cyberCol'>CYBERSECURITY</span> <br />
          journey?
        </h1>
        <Link
          to={'/courses/cybersecurity/payment'}
          className='w-[221px] h-[56px] cyberenroll_bg rounded-[16px] flex flex-row items-center justify-center gap-[8px] '
        >
          <span className='text-[16px] font-[600] leading-[24px]'>
            Enroll now
          </span>
          <img src={Next} className='mt-[4px]' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default CyberEnroll;
