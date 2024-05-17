/* eslint-disable react/prop-types */
import { useState } from 'react';
import FaqsText from '../../assets/FAQs.svg';
import Minus from '../../assets/minus.svg';
import Plus from '../../assets/plus.svg';
import { faqsData } from './FaqsData';
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = index => {
    setActiveIndex(prevIndex => (prevIndex == index ? -1 : index));
  };

  return (
    <div className='sm:px-[16px] lg:px-[120px] flex flex-col gap-[50px] mt-[20px] mb-[130px]'>
      <div className='flex items-center justify-center'>
        <img src={FaqsText} alt='' />
      </div>
      <div className='flex flex-col gap-[14px]'>
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className='flex flex-row items-center gap-[10px] justify-between rounded-[24px] sm:p-[16px] lg:p-[24px] faqs '
          >
            <div className='flex flex-col w-full sm:gap-[12px] lg:gap-[20px]'>
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
                    <img src={Plus} className=' hover:cursor-pointer' alt='' />
                  )}
                </div>
              </div>

              <div
                className={`font-[400] ${
                  activeIndex == index ? 'show_answer answer_' : 'answer_'
                } sm:text-[14px] lg:text-[16px] leading-[24px] `}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
