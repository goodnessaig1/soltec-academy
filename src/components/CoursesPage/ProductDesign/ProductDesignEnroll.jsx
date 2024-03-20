import { Link } from 'react-router-dom';
import Next from '../../../assets/next-vector.svg';

const ProductDesignEnroll = () => {
  return (
    <div className='background-image3 h-[416px] w-full'>
      <div className='w-full gap-[32px] h-full items-center justify-center flex flex-col'>
        <h1 className='barlow-semi condensed-black  sm:text-[24px] lg:text-[32px] text-[#fff] font-[700px] leading-[48px] text-center '>
          Ready to begin your
          <span className='text-yellowc3 font-[700]'>
            {' '}
            <br className='lg:hidden' />
            PRODUCT DESIGN
          </span>{' '}
          <br className='hidden lg:block' />
          journey?
        </h1>
        <Link
          to={'/courses/product-design/payment'}
          className='w-[221px] h-[56px] enroll_bg rounded-[16px] flex flex-row items-center justify-center gap-[8px] '
        >
          <span className='text-[16px] font-[600] leading-[24px]'>
            Enroll now
          </span>
          <img src={Next} className='mt-[4px]' alt='' />
        </Link>
      </div>
    </div>
  );
};

export default ProductDesignEnroll;
