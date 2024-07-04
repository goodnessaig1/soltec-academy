/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { apiRequest } from '../../Utils/ApiRequest';
import HeroSection from './HeroSection';
import Catalogue from './Catalogue';
import Sponsors from './Sponsors';
import Courses from './Courses';
import Cohort from './Cohort';
import Blog from './Blog';
import Faqs from './Faqs';
import Footer from '../common/Footer';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [currentCohort, setCurrentCohort] = useState('');

  const getCourses = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/courses/fetch_home_courses/`);
      setLoading(false);
      setCourses(response);
    } catch (error) {
      console.log('error', error);
    }
  };
  const getCurrentCohort = async () => {
    try {
      const response = await apiRequest(
        'GET',
        `/cohort/check_for_current_cohorts/`,
      );
      if (response && response?.start_date) {
        setCurrentCohort(response);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCourses();
    getCurrentCohort();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='w-full'>
      <>
        <HeroSection />
        <Catalogue courses={courses} />
        <Sponsors />
        <Courses courses={courses} loading={loading} />
        <Cohort startDate={currentCohort?.start_date} />
        <Blog />
        <Faqs />
        <Footer />
      </>
    </div>
  );
};

export default Home;
