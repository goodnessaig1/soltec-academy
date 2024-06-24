import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqsData } from './faqsData';
import { Arrow_Right, Minus, Plus } from '../../Utils/assets';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };
  return (
    <div className='flex flex-col lg:flex-row px-[16px] lg:px-[120px] py-[140px] justify-center gap-8 xl:gap-[141px] '>
      <div className='flex flex-col max-w-[436px] gap-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-4 justify-center'>
            <h1 className='font-semibold text-[20px] lg:text-[24px] leading-[28px] lg:leading-[34px]'>
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className='yellowLine ' />
          </div>
          <span className='font-normal text-[14px] lg:text-[18px] leading-[20px] lg:leading-[25.2px] text-[#545454]'>
            However in Engineering, questions are often specific, and some
            answers just spun more questions. If that’s the case, please Contact
            Us, and let’s talk about your specifics. We’re happy to take a
            minute.
          </span>
        </div>
        <Link
          to={'/contact-us'}
          className='w-[180px] h-12 getQuote bg-[#FEC910] gap-4 rounded-[8px]  flex flex-row items-center justify-center'
        >
          <span className='font-semibold text-[16px] leading-[24px]'>
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
              className='flex flex-row items-center gap-[10px] justify-between rounded-[8px] sm:p-4 lg:p-6 faqs'
            >
              <div className='flex flex-col w-full sm:gap-[12px] lg:gap-4'>
                <div className='flex flex-row w-full justify-between'>
                  <h1 className='font-semibold sm:text-[18px] lg:text-[20px] leading-[26px'>
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

                <div
                  className={`font-normal  ${
                    activeIndex == index ? 'show_answer answer_' : 'answer_'
                  }  sm:text-[14px] lg:text-[16px] leading-[24px] `}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
