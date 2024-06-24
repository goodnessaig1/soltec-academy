/* eslint-disable react/prop-types */
import { useState } from 'react';
import Text from '../../../assets/FAQs.svg';
import LightGradient from '../../../assets/light-gradient.svg';
import { PlusW } from '../../../Utils/Assets';

const CourseFaqs = ({ courseDetail }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = index => {
    setActiveIndex(prevIndex => (prevIndex == index ? -1 : index));
  };
  const faqsData = courseDetail?.faqs;

  return (
    <div className='w-full '>
      <div className='productdesign_faqs'>
        <div className='flex px-4 sm:mt-[-60px] pb-[120px] flex-col items-center justify-center text-white'>
          <img src={Text} className='w-[52px] lg:w-[77px]' alt='' />
          <p className='text-white mt-4 opacity-[0.8] text-[16px] text-center lg:text-[20px] leading-[24px] lg:leading-[30px]'>
            Have a question that is not answered? You can contact us at
            soltec@gmail.com
          </p>
          <div className='absolute z-1'>
            <img src={LightGradient} alt='' />
          </div>
          <div className='mt-20 z-3  flex flex-col gap-4 w-full'>
            {faqsData &&
              faqsData.map((faq, index) => (
                <div
                  key={index}
                  className='p-4 lg:p-6 flex flex-col gap-4 bg-lightBg rounded-2xl lg:rounded-3xl'
                >
                  <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='text-[16px] leading-[19px] font-semibold text-white'>
                      {faq?.question}
                    </h1>
                    <span
                      onClick={() => toggleFAQ(index)}
                      className='text-white hover:cursor-pointer font-[900] text-[24px]'
                    >
                      {activeIndex == index ? '-' : <img src={PlusW} alt='' />}
                    </span>
                  </div>

                  <div
                    // py-[10px]
                    className={`
                     ${
                       activeIndex == index ? 'show_answer answer_' : 'answer_'
                     } 
                    `}
                    //
                  >
                    <div className='lg:py-[25px] px-2.5 lg:px-4 bg-bgOpacity rounded-2xl py-2.5'>
                      <span className='text-lightcol text-[14px] lg:text-[16px] opacity-1'>
                        {faq?.answer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFaqs;
