import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  GrayDot,
  Internet,
  InternetG,
  Power,
  PowerG,
  SolarPanel,
  Starlink,
  StarlinkM,
  officeChair,
  officeChairG,
} from '../../Utils/Assets';
import LazyImage from '../../Utils/SuspenseImage';

const Features = () => {
  const [feature, setFeature] = useState('Starlink');
  return (
    <div className='w-full flex flex-col py-[120px] md:py-[144px] items-center justify-center'>
      <div className='flex lgl:w-[1094px] flex-col items-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className='font-bold text-[32px] leading-[38px]'>FEATURES</h1>
          <div className='redLine' />
        </div>
        <div className='flex flex-row gap-4 items-center  mt-12'>
          <div className='text-[14px] md:text-[20px] leading-[24px] '>
            CONDUCIVE
          </div>
          <img src={GrayDot} alt='' />
          <div className='text-[14px] md:text-[20px] leading-[24px] '>
            STARLINK
          </div>
          <img src={GrayDot} alt='' />
          <div className='text-[14px] md:text-[20px] leading-[24px] '>
            SOLAR POWER
          </div>
        </div>

        {/* Large screens */}
        <div className='mt-[76px] hidden lgl:block px-4 md:px-6 lgl:px-[60px]'>
          <div className='flex flex-row gap-[70px] w-full xl:items-center'>
            <div className='flex flex-col gap-9 md:gap-[75px] w-full lg:w-[340px] xl:w-[469px]'>
              <div className='flex flex-col gap-4'>
                <motion.div
                  onClick={() => {
                    setFeature('Starlink');
                  }}
                  className={`flex flex-row p-4 md:p-6 gap-4 md:gap-[17px] rounded-2xl ${
                    feature === 'Starlink'
                      ? 'superFast items-start bg-starlinkColor'
                      : 'bg-defautC hover:bg-gray-200 hover:cursor-pointer transition duration-200 items-center'
                  }`}
                >
                  {feature == 'Starlink' ? (
                    <LazyImage
                      src={Internet}
                      className='sm:w-6 mt-1 md:mt-0 md:w-10 h-6 md:h-10'
                      alt=''
                    />
                  ) : (
                    <LazyImage
                      src={InternetG}
                      className='sm:w-6 md:w-10 h-6 md:h-10'
                      alt=''
                    />
                  )}
                  <div className='flex flex-col gap-4 md:gap-3 md:gap-[17px]'>
                    <h1
                      className={`text-[20px] md:text-[24px] inter_ font-semibold leading-[29px] ${
                        feature == 'Starlink' ? 'text-white' : 'text-defautGray'
                      }`}
                    >
                      Super fast, Unlimited Internet
                    </h1>
                    {feature === 'Starlink' && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }} // Initial animation state
                        animate={{
                          opacity: 1, // Always visible
                          y: feature === 'Starlink' ? 0 : 20, // Animate y position
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className='font-normal text-[18px] md:text-[20px] md:leading-[30px] text-whiteOpacity'>
                          A starlink router provides super fast internet
                          connection to accommodate your digital needs.
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  onClick={() => setFeature('Conducive')}
                  className={`flex flex-row  p-4 md:p-6 gap-4 md:gap-4 md:gap-[17px] rounded-2xl ${
                    feature === 'Conducive'
                      ? 'conducive items-start'
                      : 'bg-defautC hover:bg-gray-200 hover:cursor-pointer transition duration-200 items-center'
                  }`}
                >
                  {feature == 'Conducive' ? (
                    <LazyImage
                      src={officeChair}
                      className='sm:w-6 mt-[6px] md:mt-0 md:w-10 h-6 md:h-10'
                      alt=''
                    />
                  ) : (
                    <LazyImage
                      src={officeChairG}
                      className='sm:w-6 md:w-10 h-6 md:h-10'
                      alt=''
                    />
                  )}
                  <div className='flex flex-col gap-4 md:gap-[17px]'>
                    <h1
                      className={`text-[20px] md:text-[24px] inter_ font-semibold  leading-[29px] ${
                        feature == 'Conducive'
                          ? 'text-white'
                          : 'text-defautGray'
                      }`}
                    >
                      Conducive, Personalized space
                    </h1>
                    {feature === 'Conducive' && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }} // Initial animation state
                        animate={{
                          opacity: 1, // Always visible
                          y: feature === 'Conducive' ? 0 : 20, // Animate y position
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className='font-normal text-[18px] md:text-[20px] md:leading-[30px] text-whiteOpacity'>
                          The space is spacious with desks exclusive to each
                          indivdual with excellent fit and finish
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  onClick={() => setFeature('Power')}
                  className={`flex flex-row  p-4 md:p-6 gap-4 md:gap-[17px] rounded-2xl ${
                    feature === 'Power'
                      ? 'solarPower items-start'
                      : 'bg-defautC hover:bg-gray-200 hover:cursor-pointer transition duration-200 items-center'
                  }`}
                >
                  {feature == 'Power' ? (
                    <LazyImage
                      src={Power}
                      className='sm:w-6 mt-1 md:mt-0 md:w-10 h-6 md:h-10'
                      alt=''
                    />
                  ) : (
                    <LazyImage
                      src={PowerG}
                      className='sm:w-6 md:w-10 h-6 md:h-10'
                      alt=''
                    />
                  )}
                  <div className='flex flex-col gap-4 md:gap-[17px]'>
                    <h1
                      className={`text-[20px] md:text-[24px] inter_ font-semibold  leading-[29px] ${
                        feature == 'Power' ? 'text-white' : 'text-defautGray'
                      }`}
                    >
                      Uninterrupted Power Supply
                    </h1>
                    {feature === 'Power' && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }} // Initial animation state
                        animate={{
                          opacity: 1, // Always visible
                          y: feature === 'Power' ? 0 : 20, // Animate y position
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className='font-normal text-[18px] md:text-[20px] leading-[30px] text-whiteOpacity'>
                          Solar power ensures continuous, uninterrupted
                          workflow.
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Time */}
              <div className='flex flex-row gap-[14px] items-center'>
                <LazyImage
                  className='w-[50px] h-[50px] md:h-[75px] md:w-[75px]'
                  src={Clock}
                  alt=''
                />
                <div className='flex flex-col gap-0 md:gap-[13px]'>
                  <h1 className='inter_ font-normal text-[18px] md:text-[24px] leading-[29px]'>
                    MON — SAT
                  </h1>
                  <h1 className='inter_ font-normal text-[18px] md:text-[24px] leading-[29px]'>
                    8:30AM - 6PM
                  </h1>
                </div>
              </div>
            </div>

            {/* Feature image */}
            <div className='hidden  lgl:block lg:w-[440px] xl:w-[555.5px]'>
              {feature === 'Starlink' && (
                <div className='flex flex-row gap-0 items-center'>
                  <LazyImage key='image' src={Starlink} alt='Your Image' />
                  <div className='bg-[#EEEEEE] h-[465px] rounded-r-[16px] w-[41px]' />
                </div>
              )}
              {feature === 'Conducive' && (
                <div className='flex flex-row gap-0 items-center'>
                  <LazyImage key='image' src={SolarPanel} alt='Your Image' />
                  <div className='bg-[#EEEEEE] h-[465px] rounded-r-[16px] w-[41px]' />
                </div>
              )}
              {feature === 'Power' && (
                <div className='flex flex-row gap-0 items-center'>
                  <LazyImage key='image' src={SolarPanel} alt='Your Image' />
                  <div className='bg-[#EEEEEE] h-[465px] rounded-r-[16px] w-[41px]' />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile screens */}
        <div className='flex lgl:hidden mt-[76px] flex-col px-4 md:px-6 gap-[110px]'>
          <div className='flex flex-col gap-4 max-w-[500px] '>
            <div className='p-6 superFast  flex flex-col gap-3 rounded-2xl '>
              <LazyImage
                src={Internet}
                className='sm:w-6 mt-1 md:mt-0 md:w-10 h-6 md:h-10'
                alt=''
              />
              <div className='flex flex-col gap-[17px]'>
                <h1
                  className={`text-[24px] inter_ font-semibold leading-[29px] text-white 
                `}
                >
                  Super fast, Unlimited Internet
                </h1>

                <span className='font-normal text-[20px] md:leading-[30px] text-whiteOpacity'>
                  A starlink router provides super fast internet connection to
                  accommodate your digital needs.
                </span>
              </div>
            </div>
            <div className=''>
              <LazyImage
                src={StarlinkM}
                className='max-h-[382px] w-full rounded-2xl'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-col gap-4 max-w-[500px] '>
            <div className='p-6 conducive  flex flex-col gap-3 rounded-2xl '>
              <LazyImage
                src={officeChair}
                className='sm:w-6 mt-1 md:mt-0 md:w-10 h-6 md:h-10'
                alt=''
              />
              <div className='flex flex-col gap-[17px]'>
                <h1
                  className={`text-[24px] inter_ font-semibold leading-[29px] text-white 
                `}
                >
                  Conducive, Personalized space
                </h1>

                <span className='font-normal text-[20px] md:leading-[30px] text-whiteOpacity'>
                  The space is spacious with desks exclusive to each indivdual
                  with excellent fit and finish
                </span>
              </div>
            </div>
            <div className=''>
              <LazyImage
                src={SolarPanel}
                className='max-h-[382px] w-full rounded-2xl'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-col gap-4 max-w-[500px] '>
            <div className='p-6 solarPower  flex flex-col gap-3 rounded-2xl '>
              <LazyImage
                src={Power}
                className='sm:w-6 mt-1 md:mt-0 md:w-10 h-6 md:h-10'
                alt=''
              />
              <div className='flex flex-col gap-[17px]'>
                <h1
                  className={`text-[24px] inter_ font-semibold leading-[29px] text-white 
                `}
                >
                  Uninterrupted Power Supply
                </h1>

                <span className='font-normal text-[20px] md:leading-[30px] text-whiteOpacity'>
                  Solar power ensures continuous, uninterrupted workflow.
                </span>
              </div>
            </div>
            <div className=''>
              <LazyImage
                src={SolarPanel}
                className='max-h-[382px] w-full rounded-2xl'
                alt=''
              />
            </div>
          </div>
        </div>

        {/* Time */}
        <div className='flex lgl:hidden mt-[60px] justify-center flex-row gap-[14px] items-center'>
          <LazyImage
            className='w-[50px] h-[50px] md:h-[75px] md:w-[75px]'
            src={Clock}
            alt=''
          />
          <div className='flex flex-col gap-0 md:gap-3.5'>
            <h1 className='inter_ font-normal text-[18px] md:text-[24px] leading-[29px]'>
              MON — SAT
            </h1>
            <h1 className='inter_ font-normal text-[18px] md:text-[24px] leading-[29px]'>
              8:30AM - 6PM
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
