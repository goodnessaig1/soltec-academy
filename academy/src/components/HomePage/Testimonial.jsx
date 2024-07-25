import React from 'react';
import { TestimonialText, Media, TestimonialI } from '../../Utils/Assets';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { testimonialDummyData } from '../DummyData/testimonialData';
import { useAuth } from '../Context/AuthContext';
import LazyImage from '../../Utils/SuspenseImage';

const Testimonial = () => {
  const { testimonial } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='w-full flex flex-col py-16 gap-16'>
      <div className='flex items-center justify-center'>
        <img src={TestimonialText} className='hidden lg:flex' alt='' />
        <img src={TestimonialI} className='lg:hidden' alt='' />
      </div>
      <div className=''>
        <div className='relative mb-10'>
          {testimonial && testimonial.length >= 2 ? (
            <Testimonials testimonial={testimonial} />
          ) : (
            <Testimonials testimonial={testimonialDummyData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const Testimonials = ({ testimonial }) => {
  return (
    <Marquee
      speed={42}
      className='flex flex-row gap-4'
      pauseOnHover
      direction='left'
    >
      {testimonial &&
        testimonial.map((testimony, index) => (
          <div
            key={index}
            className='flex flex-row hover:cursor-pointer mx-5 h-[140px] rounded-[16px] gap-5 w-[506px] border backg p-5 bg-white items-center'
          >
            <div className='w-[80px] h-[80px]'>
              <LazyImage
                src={testimony?.author_image}
                className='w-20 h-20 rounded-[50%] object-cover'
                alt=''
              />
            </div>
            <div className='flex w-[87%] flex-col gap-[11px]'>
              <h1 className='text-base font-[500] z-10 leading-[19px] '>
                {testimony?.content.length > 100
                  ? `${testimony?.content.substring(0, 100) + '...'}`
                  : `${testimony?.content}`}
              </h1>
              <div>
                <span className='font-normal text-[14px] profile_col leading-[16px]'>
                  {testimony?.author},<p>{testimony?.profession}</p>
                </span>
              </div>
            </div>
            <div className='absolute items-right top-0 mt-4 sm:ml-[230px] lg:ml-[398px] '>
              <img
                src={Media}
                className='sm:w-[52px] lg:h-9 lg:w-[74px] lg:h-[51px]  '
                alt=''
              />
            </div>
          </div>
        ))}
    </Marquee>
  );
};
