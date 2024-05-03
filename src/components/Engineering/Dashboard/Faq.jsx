import { useState } from 'react';
import Arrow_Right from '../../../assets/keyboard-arrow-right.svg';
import { Link } from 'react-router-dom';
import Minus from '../../../assets/minus.svg';
import Plus from '../../../assets/plus.svg';
// import { faqsData } from './FaqsData';
import { motion } from 'framer-motion';
import { faqsData } from '../../HomePage/FaqsData';
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };
  return (
    <div className='flex flex-col lg:flex-row px-[16px] lg:px-[120px] py-[140px] justify-center gap-[32px] xl:gap-[141px] '>
      <div className='flex flex-col max-w-[436px] gap-[24px]'>
        <div className='flex flex-col gap-[25px]'>
          <div className='flex flex-col gap-[16px] justify-center'>
            <h1 className='font-[600] text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px]'>
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className='yellowLine ' />
          </div>
          <span className='font-[400] text-[14px] lg:text-[18px] leading-[20px] lg:leading-[25.2px] text-[#545454]'>
            However in Engineering, questions are often specific, and some
            answers just spun more questions. If that’s the case, please Contact
            Us, and let’s talk about your specifics. We’re happy to take a
            minute.
          </span>
        </div>
        <Link
          to={'/engineering/contact-us'}
          className='w-[180px] h-[48px] getQuote bg-[#FEC910] gap-[8px] rounded-[8px]  flex flex-row items-center justify-center'
        >
          <span className='font-[600] text-[16px] leading-[24px]'>
            ASK A QUESTION
          </span>
          <img src={Arrow_Right} alt='' />
        </Link>
      </div>
      <div className='lg:w-[632px] flex flex-col gap-[11px]'>
        <div className='flex flex-col gap-[11px]'>
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className='flex flex-row items-center gap-[10px] justify-between rounded-[8px] sm:p-[16px] lg:p-[24px] faqs '
            >
              <div className='flex flex-col w-full sm:gap-[12px] lg:gap-[16px]'>
                <div className='flex flex-row w-full justify-between'>
                  <h1 className='font-[600] sm:text-[18px] lg:text-[20px] leading-[26px'>
                    {faq?.question}
                  </h1>
                  <div onClick={() => toggleFAQ(index)}>
                    {activeIndex == index ? (
                      <img
                        src={Minus}
                        className='mt-[6px] hover:cursor-pointer'
                        alt=''
                      />
                    ) : (
                      <img
                        src={Plus}
                        className=' hover:cursor-pointer'
                        alt=''
                      />
                    )}
                  </div>
                </div>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, height: 0 }}
                    className='font-[400] sm:text-[14px] lg:text-[16px] leading-[24px] '
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
