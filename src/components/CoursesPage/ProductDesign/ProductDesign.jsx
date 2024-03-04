import Footer from '../../Footer/Footer';
import OtherCourses from './OtherCourses';
import ProductCatalogue from './ProductCatalogue';
import ProductDesignEnroll from './ProductDesignEnroll';
import ProductDesignHero from './ProductDesignHero';
import ProductDesignInstructors from './ProductDesignInstructors';
import ProductDesignVid from './ProductDesignVid';
import ProductFaqs from './ProductFaqs';

const ProductDesign = () => {
  return (
    <div className=''>
      <div className='mainpBg'>
        <ProductDesignHero />
        <ProductDesignVid />
        <ProductCatalogue />
        <ProductDesignInstructors />
        <ProductFaqs />
      </div>
      <ProductDesignEnroll />
      <OtherCourses />
      <Footer />
    </div>
  );
};

export default ProductDesign;
