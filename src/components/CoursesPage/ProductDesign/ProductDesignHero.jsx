import { useEffect } from 'react';
import Gradient from '../../../assets/Ellipse-gradient.svg';
import Next from '../../../assets/next-vector.svg';
import { Link } from 'react-router-dom';
import Header2 from '../../Header/Header2';

const ProductDesignHero = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className='productDesignBg h-[565px] lg:h-[810px] w-full'>
      <Header2 headerCol={true} />
      <div className='absolute ml-[-20px] top-0 left-0 w-full flex lg:items-center lg:justify-center '>
        <img src={Gradient} alt='' />
      </div>
      <div className='sm:px-[16px] lg:px-[120px] flex flex-col'>
        <div className='flex flex-col mt-[120px] lg:mt-[140px] gap-[39px] items-center justify-center'>
          <h1 className='text-[40px] lg:text-[92px] text-[#fff] font-[700] leading-[48px] lg:leading-[116px]'>
            Product <span className='text-yello2'>Design</span>
          </h1>
          <Link
            to={'/courses/product-design/payment'}
            className='flex flex-row startLearn rounded-[16px] w-[183px] lg:w-[221px] h-[56px] px-[16px] py-[8px] gap-[8px] items-center justify-center'
          >
            <span className='text-[16px] font-[600] leading-[24px]'>
              Start learning
            </span>
            <img src={Next} className='mt-[6px]' alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDesignHero;
