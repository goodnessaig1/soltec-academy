/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { calculateTimeLeft } from '../../Utils/Index';
import Stroke from '../../assets/stroke1.svg';
import { useState, useEffect } from 'react';

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
        <div className='flex font-semibold text-[50px] leading-[44px] text-white mt-8 flex-row gap-4'>
          <span>{timeLeft.days}</span>
          <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <span>{timeLeft.hours}</span>

          <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <span>{timeLeft.minutes}</span>
          <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <span>{timeLeft.seconds} </span>
        </div>
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