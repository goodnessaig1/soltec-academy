import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Blog from './Blog';
import Catalogue from './Catalogue';
import Cohort from './Cohort';
import Courses from './Courses';
import Faqs from './Faqs';
import HeroSection from './HeroSection';
import Sponsors from './Sponsors';
import axios from 'axios';
import { BaseURL } from '../../Utils/BaseUrl';
import NetworkError from '../../Utils/NetworkError';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [networkError, setNetworkError] = useState(false);
  const [currentCohort, setCurrentCohort] = useState('');

  const getCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BaseURL}/courses/fetch_home_courses/`,
      );
      setLoading(false);
      setCourses(response.data);
    } catch (error) {
      console.log('error', error);
      if (error?.code == 'ERR_NETWORK') {
        setNetworkError(true);
      }
    }
  };
  const getCurrentCohort = async () => {
    try {
      const response = await axios.get(
        `${BaseURL}/cohort/check_for_current_cohorts/`,
      );
      setCurrentCohort(response?.data);
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
      {!networkError ? (
        <>
          <HeroSection />
          <Catalogue courses={courses} />
          <Sponsors />
          <Courses courses={courses} loading={loading} />
          <Cohort startDate={currentCohort?.end_date} />
          <Blog />
          <Faqs />
          <Footer />
        </>
      ) : (
        <div className=''>
          <NetworkError />
        </div>
      )}
    </div>
  );
};

export default Home;
