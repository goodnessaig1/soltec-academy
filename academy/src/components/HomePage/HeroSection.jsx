import { Cursor, Frame, Frame3, Gradient, Media } from '../../Utils/Assets';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../common/Header';
import { apiRequest } from '../../Utils/ApiRequest';
import { testimonialDummyData } from '../DummyData/testimonialData';

const HeroSection = () => {
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    getTestimonials();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const getTestimonials = async () => {
    try {
      const response = await apiRequest('GET', `/testimonials/`);
      setTestimonial(response?.results);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className='w-full'>
      <Header />
      <div className='flex mx-0 my-auto sm:px-4 lg:px-[120px] sm:py-4 lg:py-6 flex-col'>
        {/* Hero session gradient */}
        <div className='absolute top-0 ml-[127px]'>
          <img src={Gradient} alt='' />
        </div>

        <div className='absolute top-0 right-0 left-0 '>
          <div className='w-full'>
            <div className='hero_se'>
              <div className='flex sm:flex-col lg:flex-row w-full justify-between'>
                <div className='sm:flex lg:hidden w-full flex justify-end'>
                  <img
                    src={Frame3}
                    loading='lazy'
                    className='min-h-[420px]'
                    alt=''
                  />
                </div>
                <div className='sm:pl-4 lg:pl-[76px] xl:pl-[120px] flex sm:w-full lg:w-1/2 mdl:items-center  lg:items-start xxl:items-end flex-col gap-7 sm:mt-0 lg:mt-[235px]'>
                  <div className=' flex flex-col gap-7'>
                    <h1 className='text-nowrap barlow-semi condensed-bold  font-bold sm:text-[37px] xs:text-[32px] lg:text-[48px] xl:text-[64px] text-[#1c1c1c] sm:leading-[48px] lg:leading-[76px] '>
                      Best place to learn a <br />
                      new <span className='text-[#0043ce]'>digital skill</span>
                    </h1>
                    <div className='absolute sm:ml-[300px] lg:ml-[500px] sm:mt-[60px] lg:mt-[130px]'>
                      <img src={Cursor} alt='' />
                    </div>
                    <span className='font-[400] max-w-[400px] lg:max-w-[480px] sm:text-[15px] lg:text-[20px] sm:leading-[24px] lg:leading-[30px] text-[#545454] '>
                      Opening new frontiers for learning, one course at a time.
                      Soltec aims to equip every kind of individual with their
                      desired skill. All that is needed from you is drive and
                      passion. We handle the rest.
                    </span>
                    <Link
                      to={'/courses'}
                      className='sm:w-[132px] lg:w-[182px] h-12 custom-gradient  rounded-[16px] flex items-center justify-center '
                    >
                      <span className='text-white font-bold text-base '>
                        Enroll now
                      </span>
                    </Link>
                  </div>
                </div>
                <div className='sm:hidden min-h-[370px] justify-end lg:flex lg:w-1/2'>
                  <img src={Frame} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative sm:mt-[800px] md:mt-[940px] sm:mb-[110px] lg:mb-[120px] lg:mt-[640px]'>
        {testimonial && testimonial.length >= 2 ? (
          <Marquee speed={55} className='flex flex-row gap-4' direction='left'>
            {testimonial &&
              testimonial.map((testimony, index) => (
                <div
                  key={index}
                  className='flex flex-row mx-5 h-[140px] rounded-[16px] gap-5 w-[506px] border backg p-5 bg-white items-center'
                >
                  <div className='w-[80px] h-[80px]'>
                    <img
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
        ) : (
          <Marquee speed={55} className='flex flex-row gap-4' direction='left'>
            {testimonialDummyData.map((testimony, index) => (
              <div
                key={index}
                className='flex flex-row mx-5 h-[140px] rounded-[16px] gap-5 w-[506px] border backg p-5 bg-white items-center'
              >
                <div className='w-[80px] h-[80px]'>
                  <img
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
        )}
      </div>
    </div>
  );
};

export default HeroSection;
