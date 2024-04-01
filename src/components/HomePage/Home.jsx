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

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
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
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className='w-full'>
      <HeroSection />
      <Catalogue />
      <Sponsors />
      <Courses courses={courses} loading={loading} />
      <Cohort />
      <Blog />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
