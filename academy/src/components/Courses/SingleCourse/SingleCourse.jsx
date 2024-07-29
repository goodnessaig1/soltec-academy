/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import CourseHero from './CourseHero';
import { apiRequest } from '../../../Utils/ApiRequest';
import CourseOverviewVideo from './CourseOverviewVideo';
import CourseOverview from './CourseOverview';
import CourseInstructors from './CourseInstructors';
import CourseFaqs from './CourseFaq';
import CourseEnroll from './CourseEnroll';
import OtherCourses from './OtherCourses';
import NetworkError from '../../../Utils/NetworkError';
import Footer from '../../common/Footer';
import { useAuth } from '../../Context/AuthContext';
import { Emogi } from '../../../Utils/Assets';
import Header from '../../common/Header';

const SingleCourse = () => {
  const { id } = useParams();
  const { courses } = useAuth();
  const [loading, setLoading] = useState(true);
  const [courseDetail, setCourseDetail] = useState(null);
  const [otherCourses, setOtherCourses] = useState(null);
  const [networkError, setNetworkError] = useState(false);

  const fetchCourseDetail = async () => {
    setLoading(true);
    try {
      const response = await apiRequest(
        'GET',
        `/courses/${id}/fetch_course_details`,
      );
      setLoading(false);
      setCourseDetail(response);
    } catch (error) {
      setLoading(false);
      setNetworkError(true);
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, [id]);

  useEffect(() => {
    if (courses && courseDetail) {
      const filteredCourses = courses.filter(course => course.id != id);
      setOtherCourses(filteredCourses);
    }
  }, [courses, courseDetail, id]);

  return (
    <div>
      {!networkError ? (
        <>
          {!loading ? (
            <>
              {courseDetail && courseDetail ? (
                <div className=''>
                  <div className='mainpBg flex flex-col'>
                    <CourseHero courseDetail={courseDetail} />
                    <CourseOverviewVideo courseDetail={courseDetail} />
                    <CourseOverview courseDetail={courseDetail} />
                    <CourseInstructors courseDetail={courseDetail} />
                    <CourseFaqs courseDetail={courseDetail} />
                  </div>
                  <CourseEnroll courseDetail={courseDetail} />
                  {otherCourses && otherCourses.length > 0 && (
                    <OtherCourses otherCourses={otherCourses} />
                  )}
                  <Footer />
                </div>
              ) : (
                <div className='h-screen w-full'>
                  <Header />
                  <div className='w-full mt-[200px] h-full flex flex-col items-center'>
                    <h1>Not found</h1>
                    <img src={Emogi} className='h-[75px]' alt='' />
                  </div>
                </div>
              )}
            </>
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
        </>
      ) : (
        <div>
          <NetworkError />
        </div>
      )}
    </div>
  );
};

export default SingleCourse;
