/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import CourseHero from './CourseHero';
import CourseOverviewVideo from './CourseOverviewVideo';
import CourseOverview from './CourseOverview';
import CourseInstructors from './CourseInstructors';
import CourseFaqs from './CourseFaq';
import CourseEnroll from './CourseEnroll';
import OtherCourses from '../ProductDesign/OtherCourses';
import Footer from '../../Footer/Footer';

const SingleCourse = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [courseDetail, setCourseDetail] = useState(null);
  const fetchCourseDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://academy-wo2r.onrender.com/api/v1/courses/${id}/fetch_course_details`,
      );
      setLoading(false);
      setCourseDetail(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, []);

  return (
    <div>
      {!loading ? (
        <div className=''>
          <div className='mainpBg flex flex-col'>
            <CourseHero courseDetail={courseDetail} />
            <CourseOverviewVideo />
            <CourseOverview courseDetail={courseDetail} />
            <CourseInstructors courseDetail={courseDetail} />
            <CourseFaqs courseDetail={courseDetail} />
          </div>
          <CourseEnroll courseDetail={courseDetail} />
          <OtherCourses />
          <Footer />
        </div>
      ) : (
        <div className='w-full h-[100vh] flex items-center justify-center'>
          <RotatingLines
            visible={true}
            height='96'
            width='96'
            strokeColor='grey'
            strokeWidth='5'
            animationDuration='0.75'
            ariaLabel='rotating-lines-loading'
            wrapperStyle={{}}
            wrapperClass=''
          />
        </div>
      )}
    </div>
  );
};

export default SingleCourse;
