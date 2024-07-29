/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
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
import SlideImages from './SlideImages';
import { Oval } from 'react-loader-spinner';
import Header from '../common/Header';

const Home = () => {
  const { courses, currentCohort, blogs } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const handleImageLoad = () => {
    setIsLoading(true);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='w-full'>
      <div className='z-10'>
        <Header />
      </div>
      {!isLoading && (
        <div className='h-screen w-full flex items-center justify-center' />
      )}
      <SlideImages handleImageLoad={handleImageLoad} />
      {isLoading && (
        <>
          <HeroSection />
          <Catalogue courses={courses} />
          <Sponsors />
          {courses && courses?.length > 0 && <Courses />}
          <Cohort startDate={currentCohort?.start_date} />
          {blogs && blogs?.length > 0 && <Blog />}
          <Testimonial />
          <Faqs />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
