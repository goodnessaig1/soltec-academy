import Header from '../Header/Header';
import Course from '.././../assets/COURSES.svg';
import SearchIcon from '.././../assets/search-rounded.svg';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coursesData from './CoursesData';
import Icons from '../../assets/index';

const Courses = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (e.target.value !== ' ') {
      const filteredCourses = coursesData.filter(
        course =>
          course.name.toLowerCase().includes(term) ||
          course.description.toLowerCase().includes(term),
      );

      setSearchResults(filteredCourses);
    } else {
      setSearchTerm('');
      setSearchResults([]);
    }
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      // Handle the submission here (you can customize this part)
      console.log('Submitted search term:', searchTerm);
    }
  };
  const handleOutsideClick = () => {
    setSearchTerm('');
    // setSearchResults([]);
  };
  return (
    <div className='w-full'>
      <Header headerCol={false} />
      <div className='container_'>
        <div className='flex sm:px-[16px] lg:px-[120px] pb-[160px] flex-col'>
          <div className='flex flex-col mt-[50px] w-full items-center justify-center gap-[16px]'>
            <img src={Course} alt='' />
            <span className='sm:text-[16px] lg:text-[20px] text-center font-[400] sm:leading-[24px] lg:leading-[30px] text-lightB '>
              Learn everything you need to launch you into the job market
            </span>
          </div>
          <div className='w-full mt-[40px] flex items-center justify-center'>
            <div className='w-[384px] bg-lightGray h-[60px] z-8 rounded-[20px] flex items-center py-[6px] pl-[20px] pr-[6px] justify-between '>
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
                className='w-[48px] h-[48px] rounded-[16px] flex items-center justify-center bg-[#000]'
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
                <div className='w-full flex mt-[8px] items-center flex-col '>
                  <div className='flex flex-col py-[12px] rounded-[12px] mt-[8px] z-10 bg-[#fff] searchGra w-[360px]  '>
                    {searchResults.map((course, index) => (
                      <li
                        key={index}
                        onClick={() => navigate(course?.linkTo)}
                        className='px-[16px] py-[2px] hover:cursor-pointer w-full hover:bg-[#f1f1f1]'
                      >
                        <span className=' w-full'>{course.name}</span>
                      </li>
                    ))}
                  </div>
                </div>
              </ul>
            )}
          </div>
          {searchTerm != '' && searchResults?.length == 0 ? (
            <div className='flex w-full items-center justify-center'>
              <div className='flex mt-[80px] gap-[14px] flex-col items0center justify-center'>
                <img src={Icons?.Emogi} className='h-[75px]' alt='' />
                <span className=''>
                  No search results with the term {`“${searchTerm}”`}
                </span>
              </div>
            </div>
          ) : (
            <div className='w-full flex items-center justify-center mt-[60px]'>
              <div className='sm:flex sm:flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-[32px] sm:gap-y-[21px] lg:gap-y-[32px]'>
                <div className='flex flex-col max_wid sm:w-[343px] lg:w-[367px] py-[16px] gap-[32px] rounded-[24px] backgroundOne items-center'>
                  <h1 className='font-[700] text-[32px] leading-[48px] text-[#fff] '>
                    Data Analysis
                  </h1>
                  <span className='text-[16px] text-extraGray font-[500] leading-[24px] text-center'>
                    This 6 week prep course will not only <br />
                    introduce you to the fundamentals like <br />
                    Javascript, CSS and the like…
                  </span>
                  <div className='flex flex-col gap-[12px] items-center'>
                    <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                      N250,000
                    </h1>
                    <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col max_wid sm:w-[343px] lg:w-[367px] py-[16px] gap-[32px] rounded-[24px] backgroundTwo items-center'>
                  <h1 className='font-[700] text-[32px] leading-[48px] text-[#fff] '>
                    Product Design
                  </h1>
                  <span className='text-[16px] text-extraGray font-[500] leading-[24px] text-center'>
                    This 6 week prep course will not only <br />
                    introduce you to the fundamentals like <br />
                    Javascript, CSS and the like…
                  </span>
                  <div className='flex flex-col gap-[12px] items-center'>
                    <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                      N250,000
                    </h1>
                    <Link
                      to={'/courses/product-design'}
                      className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                    >
                      <div>
                        <span className='font-[600] text-[16px] leading-[24px]'>
                          Enroll now
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col max_wid sm:w-[343px] lg:w-[367px] py-[16px] gap-[32px] rounded-[24px] backgroundThree items-center'>
                  <h1 className='font-[700] text_wrap2 w-[301px] text-[32px] leading-[48px] text-[#fff]  text-nowrap'>
                    Frontend Web Dev..
                  </h1>
                  <span className='text-[16px] text-extraGray font-[500] leading-[24px] text-center'>
                    This 6 week prep course will not only <br />
                    introduce you to the fundamentals like <br />
                    Javascript, CSS and the like…
                  </span>
                  <div className='flex flex-col gap-[12px] items-center'>
                    <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                      N250,000
                    </h1>
                    <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col max_wid sm:w-[343px] lg:w-[367px] py-[16px] gap-[32px] rounded-[24px] backgroundFour items-center'>
                  <h1 className='font-[700] w-[301px] text-[32px] leading-[48px] text-[#fff]  text-nowrap'>
                    Backend Develop...
                  </h1>
                  <span className='text-[16px] text-extraGray font-[500] leading-[24px] text-center'>
                    This 6 week prep course will not only <br />
                    introduce you to the fundamentals like <br />
                    Javascript, CSS and the like…
                  </span>
                  <div className='flex flex-col gap-[12px] items-center'>
                    <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                      N250,000
                    </h1>
                    <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col max_wid sm:w-[343px] lg:w-[367px] py-[16px] gap-[32px] rounded-[24px] backgroundSix items-center'>
                  <h1 className='font-[700] text-[32px] leading-[48px] text-[#fff] '>
                    Cybersecurity
                  </h1>
                  <span className='text-[16px] text-extraGray font-[500] leading-[24px] text-center'>
                    This 6 week prep course will not only <br />
                    introduce you to the fundamentals like <br />
                    Javascript, CSS and the like…
                  </span>
                  <div className='flex flex-col gap-[12px] items-center'>
                    <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                      N250,000
                    </h1>
                    <Link
                      to={'/courses/cybersecurity'}
                      className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                    >
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col max_wid sm:w-[343px] lg:w-[367px] py-[16px] gap-[32px] rounded-[24px] backgroundFive items-center'>
                  <h1 className='font-[700] w-[301px] text-[32px] leading-[48px] text-[#fff]  text-nowrap'>
                    Blockchain Deve...
                  </h1>
                  <span className='text-[16px] text-extraGray font-[500] leading-[24px] text-center'>
                    This 6 week prep course will not only <br />
                    introduce you to the fundamentals like <br />
                    Javascript, CSS and the like…
                  </span>
                  <div className='flex flex-col gap-[12px] items-center'>
                    <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                      N250,000
                    </h1>
                    <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
