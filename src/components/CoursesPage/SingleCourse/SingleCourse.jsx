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
import Footer from '../../Footer/Footer';
import OtherCourses from './OtherCourses';
import { BaseURL } from '../../../Utils/BaseUrl';

const SingleCourse = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [courseDetail, setCourseDetail] = useState(null);
  const [courses, setCourses] = useState(null);
  const [otherCourses, setOtherCourses] = useState(null);

  const fetchCourseDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BaseURL}/courses/${id}/fetch_course_details`,
      );
      setLoading(false);
      setCourseDetail(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getCourses = async () => {
    try {
      const response = await axios.get(
        `${BaseURL}/courses/fetch_home_courses/`,
      );
      setCourses(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCourses();
    fetchCourseDetail();
  }, [id]);

  useEffect(() => {
    if (courses && courseDetail) {
      const filteredCourses = courses.filter(
        course => course.title !== `${courseDetail?.title}`,
      );
      setOtherCourses(filteredCourses);
    }
  }, [courses, courseDetail]);

  return (
    <div>
      {!loading ? (
        <div className=''>
          <div className='mainpBg flex flex-col'>
            <CourseHero courseDetail={courseDetail} />
            <CourseOverviewVideo courseDetail={courseDetail} />
            <CourseOverview courseDetail={courseDetail} />
            <CourseInstructors courseDetail={courseDetail} />
            <CourseFaqs courseDetail={courseDetail} />
          </div>
          <CourseEnroll courseDetail={courseDetail} />
          <OtherCourses otherCourses={otherCourses} />
          <Footer />
        </div>
      ) : (
        <div className='w-full h-[100vh] flex items-center justify-center'>
          <RotatingLines
            visible={true}
            height='40'
            width='40'
            strokeColor='gray'
            strokeWidth='3'
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
