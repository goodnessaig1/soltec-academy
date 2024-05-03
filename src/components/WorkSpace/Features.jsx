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
const Features = () => {
  const [feature, setFeature] = useState('Starlink');
  return (
    <div className='w-full flex flex-col py-[120px] md:py-[144px] items-center justify-center'>
      <div className='flex lgl:w-[1094px] flex-col items-center'>
        <div className='flex flex-col gap-[16px] items-center justify-center'>
          <h1 className='font-[700] text-[32px] leading-[38px]'>FEATURES</h1>
          <div className='redLine' />
        </div>
        <div className='flex flex-row gap-[15px] items-center  mt-[48px]'>
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
        <div className='mt-[76px] hidden lgl:block px-[16px] md:px-[24px] lgl:px-[60px]'>
          <div className='flex flex-row gap-[70px] w-full xl:items-center'>
            <div className='flex flex-col gap-[36px] md:gap-[75px] w-full lg:w-[340px] xl:w-[469px]'>
              <div className='flex flex-col gap-[24px]'>
                <motion.div
                  onClick={() => {
                    setFeature('Starlink');
                  }}
                  className={`flex flex-row p-[16px] md:p-[24px] gap-[8px] md:gap-[17px] rounded-[16px] ${
                    feature === 'Starlink'
                      ? 'superFast items-start bg-starlinkColor'
                      : 'bg-defautC hover:bg-gray-200 hover:cursor-pointer transition duration-200 items-center'
                  }`}
                >
                  {feature == 'Starlink' ? (
                    <img
                      src={Internet}
                      className='sm:w-[24px] mt-[4px] md:mt-0 md:w-[40px] h-[24px] md:h-[40px]'
                      alt=''
                    />
                  ) : (
                    <img
                      src={InternetG}
                      className='sm:w-[24px] md:w-[40px] h-[24px] md:h-[40px]'
                      alt=''
                    />
                  )}
                  <div className='flex flex-col gap-[4px] md:gap-[12px] md:gap-[17px]'>
                    <h1
                      className={`text-[20px] md:text-[24px] inter_ font-[600] leading-[29px] ${
                        feature == 'Starlink'
                          ? 'text-[#fff]'
                          : 'text-defautGray'
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
                        <span className='font-[400] text-[18px] md:text-[20px] md:leading-[30px] text-whiteOpacity'>
                          A starlink router provides super fast internet
                          connection to accommodate your digital needs.
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  onClick={() => setFeature('Conducive')}
                  className={`flex flex-row  p-[16px] md:p-[24px] gap-[8px] md:gap-[8px] md:gap-[17px] rounded-[16px] ${
                    feature === 'Conducive'
                      ? 'conducive items-start'
                      : 'bg-defautC hover:bg-gray-200 hover:cursor-pointer transition duration-200 items-center'
                  }`}
                >
                  {feature == 'Conducive' ? (
                    <img
                      src={officeChair}
                      className='sm:w-[24px] mt-[6px] md:mt-0 md:w-[40px] h-[24px] md:h-[40px]'
                      alt=''
                    />
                  ) : (
                    <img
                      src={officeChairG}
                      className='sm:w-[24px] md:w-[40px] h-[24px] md:h-[40px]'
                      alt=''
                    />
                  )}
                  <div className='flex flex-col gap-[4px] md:gap-[17px]'>
                    <h1
                      className={`text-[20px] md:text-[24px] inter_ font-[600]  leading-[29px] ${
                        feature == 'Conducive'
                          ? 'text-[#fff]'
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
                        <span className='font-[400] text-[18px] md:text-[20px] md:leading-[30px] text-whiteOpacity'>
                          The space is spacious with desks exclusive to each
                          indivdual with excellent fit and finish
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  onClick={() => setFeature('Power')}
                  className={`flex flex-row  p-[16px] md:p-[24px] gap-[8px] md:gap-[17px] rounded-[16px] ${
                    feature === 'Power'
                      ? 'solarPower items-start'
                      : 'bg-defautC hover:bg-gray-200 hover:cursor-pointer transition duration-200 items-center'
                  }`}
                >
                  {feature == 'Power' ? (
                    <img
                      src={Power}
                      className='sm:w-[24px] mt-[4px] md:mt-0 md:w-[40px] h-[24px] md:h-[40px]'
                      alt=''
                    />
                  ) : (
                    <img
                      src={PowerG}
                      className='sm:w-[24px] md:w-[40px] h-[24px] md:h-[40px]'
                      alt=''
                    />
                  )}
                  <div className='flex flex-col gap-[4px] md:gap-[17px]'>
                    <h1
                      className={`text-[20px] md:text-[24px] inter_ font-[600]  leading-[29px] ${
                        feature == 'Power' ? 'text-[#fff]' : 'text-defautGray'
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
                        <span className='font-[400] text-[18px] md:text-[20px] leading-[30px] text-whiteOpacity'>
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
                <img
                  className='w-[50px] h-[50px] md:h-[75px] md:w-[75px]'
                  src={Clock}
                  alt=''
                />
                <div className='flex flex-col gap-[0px] md:gap-[13px]'>
                  <h1 className='inter_ font-[500] text-[18px] md:text-[24px] leading-[29px]'>
                    MON — SAT
                  </h1>
                  <h1 className='inter_ font-[500] text-[18px] md:text-[24px] leading-[29px]'>
                    8:30AM - 6PM
                  </h1>
                </div>
              </div>
            </div>

            {/* Feature image */}
            <div className='hidden  lgl:block lg:w-[440px] xl:w-[555.5px]'>
              {/* <AnimatePresence> */}
              {feature === 'Starlink' && (
                <div className='flex flex-row gap-0 items-center'>
                  {/* <motion.img */}
                  <img
                    key='image'
                    src={Starlink}
                    alt='Your Image'
                    // initial={{ x: '100%', opacity: 0 }}
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ duration: 0.5 }}
                  />
                  <div className='bg-[#EEEEEE] h-[465px] rounded-r-[16px] w-[41px]' />
                </div>
              )}
              {/* </AnimatePresence> */}
              {feature === 'Conducive' && (
                <div className='flex flex-row gap-0 items-center'>
                  <img
                    key='image'
                    src={SolarPanel}
                    alt='Your Image'
                    // initial={{ x: '100%', opacity: 0 }}
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ duration: 0.5 }}
                  />
                  <div className='bg-[#EEEEEE] h-[465px] rounded-r-[16px] w-[41px]' />
                </div>
              )}
              {/* <AnimatePresence> */}
              {feature === 'Power' && (
                <div className='flex flex-row gap-0 items-center'>
                  <img
                    key='image'
                    src={SolarPanel}
                    alt='Your Image'
                    // initial={{ x: '100%', opacity: 0 }}
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ duration: 0.5 }}
                  />
                  <div className='bg-[#EEEEEE] h-[465px] rounded-r-[16px] w-[41px]' />
                </div>
              )}
              {/* </AnimatePresence> */}
            </div>
          </div>
        </div>
        {/* Mobile screens */}

        <div className='flex lgl:hidden mt-[76px] flex-col px-[16px] md:px-[24px] gap-[110px]'>
          <div className='flex flex-col gap-[16px] max-w-[500px] '>
            <div className='p-[24px] superFast  flex flex-col gap-[12px] rounded-[16px] '>
              <img
                src={Internet}
                className='sm:w-[24px] mt-[4px] md:mt-0 md:w-[40px] h-[24px] md:h-[40px]'
                alt=''
              />
              <div className='flex flex-col gap-[17px]'>
                <h1
                  className={`text-[24px] inter_ font-[600] leading-[29px] text-[#fff] 
                `}
                >
                  Super fast, Unlimited Internet
                </h1>

                <span className='font-[400] text-[20px] md:leading-[30px] text-whiteOpacity'>
                  A starlink router provides super fast internet connection to
                  accommodate your digital needs.
                </span>
              </div>
            </div>
            <div className=''>
              <img
                src={StarlinkM}
                className='max-h-[382px] w-full rounded-[16px]'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-col gap-[16px] max-w-[500px] '>
            <div className='p-[24px] conducive  flex flex-col gap-[12px] rounded-[16px] '>
              <img
                src={officeChair}
                className='sm:w-[24px] mt-[4px] md:mt-0 md:w-[40px] h-[24px] md:h-[40px]'
                alt=''
              />
              <div className='flex flex-col gap-[17px]'>
                <h1
                  className={`text-[24px] inter_ font-[600] leading-[29px] text-[#fff] 
                `}
                >
                  Conducive, Personalized space
                </h1>

                <span className='font-[400] text-[20px] md:leading-[30px] text-whiteOpacity'>
                  The space is spacious with desks exclusive to each indivdual
                  with excellent fit and finish
                </span>
              </div>
            </div>
            <div className=''>
              <img
                src={SolarPanel}
                className='max-h-[382px] w-full rounded-[16px]'
                alt=''
              />
            </div>
          </div>
          <div className='flex flex-col gap-[16px] max-w-[500px] '>
            <div className='p-[24px] solarPower  flex flex-col gap-[12px] rounded-[16px] '>
              <img
                src={Power}
                className='sm:w-[24px] mt-[4px] md:mt-0 md:w-[40px] h-[24px] md:h-[40px]'
                alt=''
              />
              <div className='flex flex-col gap-[17px]'>
                <h1
                  className={`text-[24px] inter_ font-[600] leading-[29px] text-[#fff] 
                `}
                >
                  Uninterrupted Power Supply
                </h1>

                <span className='font-[400] text-[20px] md:leading-[30px] text-whiteOpacity'>
                  Solar power ensures continuous, uninterrupted workflow.
                </span>
              </div>
            </div>
            <div className=''>
              <img
                src={SolarPanel}
                className='max-h-[382px] w-full rounded-[16px]'
                alt=''
              />
            </div>
          </div>
        </div>

        {/* Time */}
        <div className='flex lgl:hidden mt-[60px] justify-center flex-row gap-[14px] items-center'>
          <img
            className='w-[50px] h-[50px] md:h-[75px] md:w-[75px]'
            src={Clock}
            alt=''
          />
          <div className='flex flex-col gap-[0px] md:gap-[13px]'>
            <h1 className='inter_ font-[500] text-[18px] md:text-[24px] leading-[29px]'>
              MON — SAT
            </h1>
            <h1 className='inter_ font-[500] text-[18px] md:text-[24px] leading-[29px]'>
              8:30AM - 6PM
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
