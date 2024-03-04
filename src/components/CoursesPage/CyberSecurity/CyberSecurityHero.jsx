import Header from '../../Header/Header';
import Gradient from '../../../assets/Ellipse-green.svg';
import Next from '../../../assets/next-vector.svg';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CyberSecurityHero = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className='cyberSecurityBg pt-[120px] h-[565px] lg:h-[810px] w-full'>
      <Header headerCol={true} />
      <div className='absolute top-0  lg:ml-[320px] mt-[0px]'>
        <img src={Gradient} alt='' />
      </div>
      <div className='sm:px-[16px] lg:px-[120px] flex flex-col'>
        <div className='flex flex-col mt-[120px] lg:mt-[140px] gap-[39px] items-center justify-center'>
          <h1 className='text-[40px] lg:text-[92px] text-cyberCol font-[700] leading-[48px] lg:leading-[116px]'>
            Cybersecurity
          </h1>
          <Link
            to={'/courses/cybersecurity/payment'}
            className='flex flex-row startLearnCyber rounded-[16px] w-[183px] lg:w-[221px] h-[56px] px-[16px] py-[8px] gap-[8px] items-center justify-center'
          >
            <span className='text-[16px] font-[600] leading-[24px]'>
              Start learning
            </span>
            <img src={Next} className='mt-[6px]' alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityHero;
