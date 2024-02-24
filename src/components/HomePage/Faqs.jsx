import FaqsText from '../../assets/FAQs.svg';
import Minus from '../../assets/minus.svg';
import Plus from '../../assets/plus.svg';

const Faqs = () => {
  return (
    <div className='sm:px-[16px] lg:px-[120px] flex flex-col gap-[50px] mt-[20px] mb-[130px]'>
      <div className='flex items-center justify-center'>
        <img src={FaqsText} alt='' />
      </div>
      <div className='flex flex-col gap-[14px]'>
        <div className='flex flex-row items-center gap-[10px] justify-between rounded-[24px] sm:p-[16px] lg:p-[24px] faqs hover:bg-[#f1f1f1] hover:cursor-pointer '>
          <div className='flex flex-col sm:gap-[12px] lg:gap-[20px]'>
            <div className='flex flex-row justify-between'>
              <h1 className='font-[600] sm:text-[18px] lg:text-[20px] leading-[26px'>
                How does it work?
              </h1>

              <img
                src={Minus}
                className='sm:block lg:hidden hover:cursor-pointer'
                alt=''
              />
            </div>
            <span className='font-[400] sm:text-[14px] lg:text-[16px] leading-[24px] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              hendrerit, justo et commodo tristique, tortor neque aliquam justo,
              a ultricies ipsum augue vel nisi. Fusce vel metus ac dolor
              malesuada gravida. Suspendisse potenti. Integer ultricies, libero
              id aliquam tempor, sem erat vestibulum nibh,
            </span>
          </div>
          <img
            src={Minus}
            className='mt-[12px] sm:hidden lg:block hover:cursor-pointer'
            alt=''
          />
        </div>
        <div className='flex flex-row items-center gap-[10px] justify-between rounded-[24px] sm:p-[16px] lg:p-[24px] faqs '>
          <div className='flex flex-col sm:gap-[12px] lg:gap-[20px]'>
            <div className='flex flex-row justify-between'>
              <h1 className='font-[600] sm:text-[18px] lg:text-[20px] leading-[26px'>
                Is it free?
              </h1>
              <img
                src={Minus}
                className=' sm:block lg:hidden hover:cursor-pointer'
                alt=''
              />
            </div>
            <span className='font-[400] sm:text-[14px] lg:text-[16px] leading-[24px] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              hendrerit, justo et commodo tristique, tortor neque aliquam justo,
              a ultricies ipsum augue vel nisi. Fusce vel metus ac dolor
              malesuada gravida. Suspendisse potenti. Integer ultricies, libero
              id aliquam tempor, sem erat vestibulum nibh,
            </span>
          </div>
          <img
            src={Minus}
            className='mt-[12px] sm:hidden lg:block hover:cursor-pointer'
            alt=''
          />
        </div>
        <div className='flex flex-row items-center gap-[10px] justify-between rounded-[24px] sm:p-[16px] lg:p-[24px] faqs '>
          <div className='flex flex-col sm:gap-[12px] lg:gap-[20px]'>
            <div className='flex flex-row justify-between'>
              <h1 className='font-[600] sm:text-[18px] lg:text-[20px] leading-[26px'>
                How can I join?
              </h1>

              <img
                src={Minus}
                className=' sm:block lg:hidden hover:cursor-pointer'
                alt=''
              />
            </div>
            <span className='font-[400] text-[16px] leading-[24px] '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              hendrerit, justo et commodo tristique, tortor neque aliquam justo,
              a ultricies ipsum augue vel nisi. Fusce vel metus ac dolor
              malesuada gravida. Suspendisse potenti. Integer ultricies, libero
              id aliquam tempor, sem erat vestibulum nibh,
            </span>
          </div>
          <img
            src={Minus}
            className='mt-[12px] sm:hidden lg:block hover:cursor-pointer'
            alt=''
          />
        </div>
        <div className='flex flex-row items-center gap-[10px] justify-between rounded-[24px] sm:p-[16px] lg:p-[24px] faqs '>
          <div className='flex flex-col gap-[20px]'>
            <h1 className='font-[600] sm:text-[18px] lg:text-[20px] leading-[26px'>
              How can I join?
            </h1>
          </div>
          <img
            src={Plus}
            className='sm:mt-[0px] lg:mt-[12px] hover:cursor-pointer'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
