/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import HeroSection from './HeroSection';
import Catalogue from './Catalogue';
import Sponsors from './Sponsors';
import Courses from './Courses';
import Cohort from './Cohort';
import Blog from './Blog';
import Faqs from './Faqs';
import Footer from '../common/Footer';
import Testimonial from './Testimonial';
import { useAuth } from '../Context/AuthContext';

const Home = () => {
  const { courses, currentCohort, blogs } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='w-full'>
      <>
        <HeroSection />
        {/* <Catalogue courses={courses} /> */}
        {/* <Sponsors /> */}
        {courses && courses?.length >= 1 && <Courses />}
        <Cohort startDate={currentCohort?.start_date} />
        {blogs && blogs?.length >= 1 && <Blog />}
        <Testimonial />
        <Faqs />
        <Footer />
      </>
    </div>
  );
};

export default Home;
