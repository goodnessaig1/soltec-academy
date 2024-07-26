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
  }, [startDate]);

  return (
    <>
      {timeLeft.days !== undefined ? (
        <div className='inter_ flex font-semibold text-[50px] leading-[44px] text-white mt-8 flex-row gap-4'>
          <span>{timeLeft.days}D</span>
          <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <span>{timeLeft.hours}H</span>

          <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <span>{timeLeft.minutes}M</span>
          {/* <h1 className='font-[900] text-[36px] leading-[44px] text-white'>
            :
          </h1>
          <span>{timeLeft.seconds}S </span> */}
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
