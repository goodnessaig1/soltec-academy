/* eslint-disable no-unused-vars */
import CourseIcon from '.././../assets/COURSES.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { apiRequest } from '../../Utils/ApiRequest';
import Header from '../common/Header';
import { Emogi, SearchIcon } from '../../Utils/Assets';
import Footer from '../common/Footer';
import { courseDummyData } from '../DummyData/coursesData';

const Courses = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [networkError, setNetworkError] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getCourses = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/courses/fetch_home_courses/`);
      setLoading(false);
      setCourses(response);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };
  useEffect(() => {
    getCourses();
  }, []);
  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (e.target.value !== ' ') {
      const filteredCourses = courses.filter(
        course =>
          course?.title.toLowerCase().includes(term) ||
          course?.description.toLowerCase().includes(term),
      );

      setSearchResults(filteredCourses);
    } else {
      setSearchTerm('');
      setSearchResults([]);
    }
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log('Submitted search term:', searchTerm);
    }
  };
  const handleOutsideClick = () => {
    setSearchTerm('');
  };
  return (
    <div className='w-full'>
      <>
        <Header headerCol={false} />
        <div className='container_'>
          <div className='flex sm:px-4 lg:px-[120px] pb-[160px] flex-col'>
            <div className='flex flex-col mt-[50px] w-full items-center justify-center gap-4'>
              <img src={CourseIcon} alt='' />
              <span className='sm:text-[16px] lg:text-[20px] text-center font-[400] sm:leading-[24px] lg:leading-[30px] text-lightB '>
                Learn everything you need to launch you into the job market
              </span>
            </div>
            <div className='w-full mt-10 flex items-center justify-center'>
              <div className='w-[384px] bg-lightGray h-[60px] z-8 rounded-[20px] flex items-center py-[6px] pl-5 pr-[6px] justify-between'>
                <input
                  type='text'
                  value={searchTerm}
                  onChange={handleSearch}
                  className='text-[16px] text-footerCol  bg-transparent focus:outline-none focus:shadow-outline '
                  placeholder='Search a course'
                  onKeyPress={handleKeyPress}
                />
                <div
                  type='submit'
                  onClick={() => console.log('submit')}
                  className='w-12 h-12 rounded-[16px] flex items-center justify-center bg-black'
                >
                  <img src={SearchIcon} alt='' />
                </div>
              </div>
            </div>
            <div />
            {searchTerm != '' && searchResults && (
              <div
                onClick={() => handleOutsideClick()}
                className='absolute top-0 right-0 left-0 z-1 w-full h-full'
              ></div>
            )}
            <div className=''>
              {searchTerm != '' && searchResults?.length != 0 && (
                <ul className='absolute w-full left-0 '>
                  <div className='w-full flex mt-2 items-center flex-col '>
                    <div className='flex flex-col py-3 rounded-[12px] mt-2 z-10 bg-white searchGra w-[360px]  '>
                      {searchResults.map((course, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            navigate(`/courses/${course?.id}/${course?.title}`)
                          }
                          className='px-4 py-0.5 hover:cursor-pointer w-full hover:bg-[#f1f1f1]'
                        >
                          <span className=' w-full'>{course?.title}</span>
                        </li>
                      ))}
                    </div>
                  </div>
                </ul>
              )}
            </div>
            {searchTerm != '' && searchResults?.length == 0 ? (
              <div className='flex w-full items-center justify-center'>
                <div className='flex mt-20 gap-3.5 flex-col items0center justify-center'>
                  <img src={Emogi} className='h-[75px]' alt='' />
                  <span className=''>
                    No search results with the term {`“${searchTerm}”`}
                  </span>
                </div>
              </div>
            ) : (
              <div className='w-full flex items-center justify-center mt-[60px]'>
                {!loading ? (
                  <>
                    {courses ? (
                      <Course courses={courses} />
                    ) : (
                      <Course courses={courseDummyData} isDummy={true} />
                    )}
                  </>
                ) : (
                  <div className='flex flex-col gap-[24px'>
                    <div className='flex sm:flex-col lg:flex-row items-center gap-[24px]'>
                      <Skeleton
                        style={{ borderRadius: '20px' }}
                        className='w-[140px]'
                        width={343}
                        height={400}
                      />
                      <Skeleton
                        style={{ borderRadius: '20px' }}
                        className='w-[140px]'
                        width={343}
                        height={400}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Courses;

const Course = ({ courses, isDummy }) => {
  const navigate = useNavigate();

  return (
    <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-4-8 sm:gap-y-[21px] lg:gap-y-8'>
      {courses &&
        courses.map((course, index) => (
          <div
            style={{ backgroundColor: course?.color_code }}
            key={index}
            className='flex flex-col max_wid sm:w-[343px] lg:w-[367px] py-4 gap-8 rounded-[24px] items-center'
          >
            <h1 className='font-bold text-[32px] leading-[48px] text-white '>
              {course?.title.length > 17
                ? `${course?.title?.substring(0, 17) + '..'}`
                : `${course?.title}`}
            </h1>
            <span className='text-[16px] px-7 text-extraGray font-medium leading-[24px] text-center'>
              {course?.description.length > 110 ? (
                <span className='font-medium line-clamp-3 max-w-[310px] break-words text-[16px] items-center text-center leading-[24px] text-extraGray'>
                  {`${course?.description.substring(0, 110) + '...'}`}
                </span>
              ) : (
                <span className='font-medium line-clamp-3 max-w-[310px] break-words text-[16px] items-center text-center leading-[24px] text-extraGray'>
                  {course?.description}
                </span>
              )}
            </span>
            <div className='flex flex-col gap-3.5 items-center'>
              <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                N{parseFloat(course?.price).toLocaleString()}
              </h1>
              {!isDummy ? (
                <div
                  onClick={() =>
                    navigate(`/courses/${course?.id}/${course?.title}`)
                  }
                  className='w-[301px] h-12 bg-white flex items-center justify-center rounded-[16px] border border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                >
                  <span className='font-semibold text-[16px] leading-[24px]'>
                    Enroll now
                  </span>
                </div>
              ) : (
                <div className='w-[301px] h-12 bg-white flex items-center justify-center rounded-[16px] border border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                  <span className='font-semibold text-[16px] leading-[24px]'>
                    Enroll now
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
