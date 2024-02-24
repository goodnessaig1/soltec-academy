import Footer from '../Footer/Footer';
import Blog from './Blog';
import Catalogue from './Catalogue';
import Cohort from './Cohort';
import Courses from './Courses';
import Faqs from './Faqs';
import HeroSection from './HeroSection';
import Sponsors from './Sponsors';

const Home = () => {
  return (
    <div className='w-full'>
      <HeroSection />
      <Catalogue />
      <Sponsors />
      <Courses />
      <Cohort />
      <Blog />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
