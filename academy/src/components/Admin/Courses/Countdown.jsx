/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { calculateTimeLeft } from '../../../Utils/Index';
import { useState, useEffect } from 'react';
import Stroke from '../../../assets/stroke1.svg';

const Countdown = ({ startDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(startDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {timeLeft.days !== undefined ? (
        <span className='inter_ font-semibold text-[24px] leading-[30px]'>
          {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{' '}
          {timeLeft.seconds}
        </span>
      ) : (
        <div className='flex mt-8 flex-row gap-4'>
          <img src={Stroke} alt='' />
          <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <img src={Stroke} alt='' />
          <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <img src={Stroke} alt='' />
        </div>
      )}
    </>
  );
};

export default Countdown;
