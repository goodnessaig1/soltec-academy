import { useState } from 'react';
import Text from '../../../assets/FAQs.svg';
import LightGradient from '../../../assets/light-gradient.svg';
import { PlusW } from '../../../Utils/Assets';
import { motion } from 'framer-motion';

const ProductFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
  };
  const faqsData = [
    {
      question: 'What tools can I expect to learn',
      answer:
        'Primarily Figma and Figjam as those are industry standards for creating wireframes, prototypes and prepping for projects.',
    },
    {
      question: 'What tools can I expect to learn',
      answer:
        'Primarily Figma and Figjam as those are industry standards for creating wireframes, prototypes and prepping for projects.',
    },
    {
      question: 'What tools can I expect to learn',
      answer:
        'Primarily Figma and Figjam as those are industry standards for creating wireframes, prototypes and prepping for projects.',
    },
  ];
  return (
    <div className='w-full '>
      <div className='productdesign_faqs'>
        <div className='flex px-[16px] sm:mt-[-60px] pb-[120px] flex-col items-center justify-center text-[#fff]'>
          <img src={Text} className='w-[52px] lg:w-[77px]' alt='' />
          <p className='text-[#fff] mt-[16px] opacity-[0.8] text-[16px] text-center lg:text-[20px] leading-[24px] lg:leading-[30px]'>
            Have a question that is not answered? You can contact us at
            soltec@gmail.com
          </p>
          <div className='absolute z-1'>
            <img src={LightGradient} alt='' />
          </div>
          <div className='mt-[80px] z-3  flex flex-col gap-[16px] w-full'>
            {faqsData &&
              faqsData.map((faq, index) => (
                <div
                  key={index}
                  className='p-[16px] lg:p-[24px] flex flex-col gap-[16px] bg-lightBg rounded-[16px] lg:rounded-[24px] '
                >
                  <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='text-[16px] leading-[19px] font-[600] text-[#fff]'>
                      {faq?.question}
                    </h1>
                    <span
                      onClick={() => toggleFAQ(index)}
                      className='text-[#fff] hover:cursor-pointer font-[900] text-[24px]'
                    >
                      {activeIndex == index ? '-' : <img src={PlusW} alt='' />}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      exit={{ opacity: 0, height: 0 }}
                      className='py-[10px] lg:py-[25px] px-[10px] lg:px-[16px] bg-bgOpacity rounded-[16px]'
                    >
                      <span className='text-lightcol text-[14px] lg:text-[16px] opacity-1'>
                        {faq?.answer}
                      </span>
                    </motion.div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFaqs;
