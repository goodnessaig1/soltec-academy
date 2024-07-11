/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { Next, Prev, Arrow, Text } from '../../Utils/Assets';
import { courseDummyData } from '../DummyData/coursesData';
import { useAuth } from '../Context/AuthContext';

const CustomPrevArrow = props => {
  return (
    <div
      className='custom-prev-arrow z-200 courses_arrow_prev  courses_arrow bg-transparent'
      onClick={props.onClick}
    >
      <div className='w-12 h-12 bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Prev} alt='' />
      </div>
    </div>
  );
};

const CustomNextArrow = props => {
  return (
    <div
      className='custom-next-arrow z-200 courses_arrow_next courses_arrow w-12 h-12 bg-[#f1f1f1] rounded-[50%] '
      onClick={props.onClick}
    >
      <div className='w-12 h-12 bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Next} alt='' />
      </div>
    </div>
  );
};

const Courses = () => {
  const { courses } = useAuth();

  var lgSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
  };
  var mdSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.6,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
  };

  return (
    <div className='w-full'>
      <div className='container_'>
        <div className=''>
          <div className='sm:my-[80px] sm:mt-20 md:mt-20 sm:mb-[120px] lg:mb-[100px] lg:my-20'>
            <div className='w-full items-center justify-center flex'>
              <img src={Text} className='w-[311px] lg:w-[400px] ' alt='' />
            </div>
            {courses && courses.length >= 1 ? (
              <>
                <div className='sm:hidden lg:hidden xxl:block'>
                  <div className='ml-[30px] mt-[70px] '>
                    <Slider {...lgSettings} className=''>
                      {courses &&
                        courses.map((course, index) => (
                          <div key={index} className='max-w-[367px]'>
                            <div
                              style={{ backgroundColor: course?.color_code }}
                              className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-4 gap-8 rounded-3xl items-center'
                            >
                              <h1 className='font-bold text-[32px] leading-[48px] text-white '>
                                {course?.title.length > 17
                                  ? `${course?.title?.substring(0, 17) + '..'}`
                                  : `${course?.title}`}
                              </h1>
                              <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-6 text-extraGray font-medium leading-[24px] text-center'>
                                {course?.description.length > 100
                                  ? `${
                                      course?.description.substring(0, 100) +
                                      '...'
                                    }`
                                  : `${course?.description}`}
                              </span>
                              <div className='flex flex-col gap-3 items-center'>
                                <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                                  N{parseFloat(course?.price).toLocaleString()}
                                </h1>
                                <Link
                                  to={`/courses/${course?.id}/${course?.title}`}
                                  className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                                >
                                  <span className='font-semibold text-[16px] leading-[24px]'>
                                    Enroll now
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </div>
                </div>
                <div className='sm:hidden lg:block xl:hidden xxl:hidden'>
                  <div className='ml-1 mt-[70px] '>
                    <Slider {...mdSettings} className=''>
                      {courses &&
                        courses.map((course, index) => (
                          <div key={index} className='max-w-[367px]'>
                            <div
                              style={{ backgroundColor: course?.color_code }}
                              className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-4 gap-8 rounded-3xl items-center'
                            >
                              <h1 className='font-bold text-[32px] leading-[48px] text-white '>
                                {course?.title.length > 17
                                  ? `${course?.title?.substring(0, 17) + '..'}`
                                  : `${course?.title}`}
                              </h1>
                              <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-6 text-extraGray font-medium leading-[24px] text-center'>
                                {course?.description.length > 100
                                  ? `${
                                      course?.description.substring(0, 100) +
                                      '...'
                                    }`
                                  : `${course?.description}`}
                              </span>
                              <div className='flex flex-col gap-3 items-center'>
                                <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                                  N{parseFloat(course?.price).toLocaleString()}
                                </h1>
                                <Link
                                  to={`/courses/${course?.id}/${course?.title}`}
                                  className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                                >
                                  <span className='font-semibold text-[16px] leading-[24px]'>
                                    Enroll now
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </div>
                </div>
                <div className='sm:hidden xl:block xxl:hidden'>
                  <div className='ml-[30px] mt-[70px] '>
                    <Slider {...settings} className=''>
                      {courses &&
                        courses.map((course, index) => (
                          <div key={index} className='max-w-[367px]'>
                            <div
                              style={{ backgroundColor: course?.color_code }}
                              className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-4 gap-8 rounded-3xl items-center'
                            >
                              <h1 className='font-bold text-[32px] leading-[48px] text-white '>
                                {course?.title.length > 17
                                  ? `${course?.title?.substring(0, 17) + '..'}`
                                  : `${course?.title}`}
                              </h1>
                              <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-6 line-clamp-3 text-extraGray font-medium leading-[24px] text-center'>
                                {course?.description.length > 100
                                  ? `${
                                      course?.description.substring(0, 100) +
                                      '...'
                                    }`
                                  : `${course?.description}`}
                              </span>
                              <div className='flex flex-col gap-3 items-center'>
                                <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                                  N{parseFloat(course?.price).toLocaleString()}
                                </h1>
                                <Link
                                  to={`/courses/${course?.id}/${course?.title}`}
                                  className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                                >
                                  <span className='font-semibold text-[16px] leading-[24px]'>
                                    Enroll now
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </Slider>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full  lg:hidden'>
                  <div className='flex px-4 flex-col items-center gap-[24px] mt-[36px]'>
                    {courses &&
                      courses.map((course, index) => (
                        <div
                          key={index}
                          style={{ backgroundColor: course?.color_code }}
                          className='flex flex-col max_wid max-w-[343px] w-[343px] py-[20px] gap-[20px] rounded-3xl boxSha1 items-center'
                        >
                          <h1 className='font-bold text-[24px] leading-[36px] text-white '>
                            {course?.title.length > 17
                              ? `${course?.title?.substring(0, 17) + '..'}`
                              : `${course?.title}`}
                          </h1>
                          <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-4 text-extraGray font-medium leading-[24px] text-center'>
                            {course?.description.length > 100
                              ? `${
                                  course?.description.substring(0, 100) + '...'
                                }`
                              : `${course?.description}`}
                          </span>

                          <div className='flex flex-col gap-3 items-center'>
                            <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                              N{parseFloat(course?.price).toLocaleString()}
                            </h1>
                            <Link
                              to={`/courses/${course?.id}/${course?.title}`}
                              className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                            >
                              <span className='font-semibold text-[16px] leading-[24px]'>
                                Enroll now
                              </span>
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className='w-full flex items-center  sm:mt-16 lg:mt-20 justify-center'>
                  <div className='w-[228px] h-12 flex items-center justify-center rounded-2xl hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-200 borderCol bg-white  '>
                    <Link
                      to={'/courses'}
                      className='flex w-full text-center flex items-center justify-center flex-row gap-[8px]'
                    >
                      <span className='font-semibold text-[16px] leading-[24px] '>
                        All courses
                      </span>
                      <img src={Arrow} alt='' />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='sm:hidden lg:hidden xxl:block'>
                  <div className='ml-[30px] mt-[70px] '>
                    <Slider {...lgSettings} className=''>
                      {courseDummyData.map((course, index) => (
                        <div key={index} className='max-w-[367px]'>
                          <div
                            style={{ backgroundColor: course?.color_code }}
                            className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-4 gap-8 rounded-3xl items-center'
                          >
                            <h1 className='font-bold text-[32px] leading-[48px] text-white '>
                              {course?.title.length > 17
                                ? `${course?.title?.substring(0, 17) + '..'}`
                                : `${course?.title}`}
                            </h1>
                            <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-6 text-extraGray font-medium leading-[24px] text-center'>
                              {course?.description.length > 100
                                ? `${
                                    course?.description.substring(0, 100) +
                                    '...'
                                  }`
                                : `${course?.description}`}
                            </span>
                            <div className='flex flex-col gap-3 items-center'>
                              <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                                N{parseFloat(course?.price).toLocaleString()}
                              </h1>
                              <div className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                                <span className='font-semibold text-[16px] leading-[24px]'>
                                  Enroll now
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className='sm:hidden lg:block xl:hidden xxl:hidden'>
                  <div className='ml-1 mt-[70px] '>
                    <Slider {...mdSettings} className=''>
                      {courseDummyData.map((course, index) => (
                        <div key={index} className='max-w-[367px]'>
                          <div
                            style={{ backgroundColor: course?.color_code }}
                            className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-4 gap-8 rounded-3xl items-center'
                          >
                            <h1 className='font-bold text-[32px] leading-[48px] text-white '>
                              {course?.title.length > 17
                                ? `${course?.title?.substring(0, 17) + '..'}`
                                : `${course?.title}`}
                            </h1>
                            <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-6 text-extraGray font-medium leading-[24px] text-center'>
                              {course?.description.length > 100
                                ? `${
                                    course?.description.substring(0, 100) +
                                    '...'
                                  }`
                                : `${course?.description}`}
                            </span>
                            <div className='flex flex-col gap-3 items-center'>
                              <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                                N{parseFloat(course?.price).toLocaleString()}
                              </h1>
                              <div className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                                <span className='font-semibold text-[16px] leading-[24px]'>
                                  Enroll now
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className='sm:hidden xl:block xxl:hidden'>
                  <div className='ml-[30px] mt-[70px] '>
                    <Slider {...settings} className=''>
                      {courseDummyData.map((course, index) => (
                        <div key={index} className='max-w-[367px]'>
                          <div
                            style={{ backgroundColor: course?.color_code }}
                            className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-4 gap-8 rounded-3xl items-center'
                          >
                            <h1 className='font-bold text-[32px] leading-[48px] text-white '>
                              {course?.title.length > 17
                                ? `${course?.title?.substring(0, 17) + '..'}`
                                : `${course?.title}`}
                            </h1>
                            <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-6 line-clamp-3 text-extraGray font-medium leading-[24px] text-center'>
                              {course?.description.length > 100
                                ? `${
                                    course?.description.substring(0, 100) +
                                    '...'
                                  }`
                                : `${course?.description}`}
                            </span>
                            <div className='flex flex-col gap-3 items-center'>
                              <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                                N{parseFloat(course?.price).toLocaleString()}
                              </h1>
                              <div className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                                <span className='font-semibold text-[16px] leading-[24px]'>
                                  Enroll now
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full  lg:hidden'>
                  <div className='flex px-4 flex-col items-center gap-[24px] mt-[36px]'>
                    {courseDummyData.map((course, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: course?.color_code }}
                        className='flex flex-col max_wid max-w-[343px] w-[343px] py-[20px] gap-[20px] rounded-3xl boxSha1 items-center'
                      >
                        <h1 className='font-bold text-[24px] leading-[36px] text-white '>
                          {course?.title.length > 17
                            ? `${course?.title?.substring(0, 17) + '..'}`
                            : `${course?.title}`}
                        </h1>
                        <span className='text-[16px] line-clamp-3 max-w-[310px] break-words px-4 text-extraGray font-medium leading-[24px] text-center'>
                          {course?.description.length > 100
                            ? `${course?.description.substring(0, 100) + '...'}`
                            : `${course?.description}`}
                        </span>

                        <div className='flex flex-col gap-3 items-center'>
                          <h1 className='font-bold text-center text-white text-[20px] leading-[30px] '>
                            N{parseFloat(course?.price).toLocaleString()}
                          </h1>
                          <div className='w-[301px] h-12 bg-white flex items-center justify-center rounded-2xl border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                            <span className='font-semibold text-[16px] leading-[24px]'>
                              Enroll now
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='w-full flex items-center  sm:mt-16 lg:mt-20 justify-center'>
                  <div className='w-[228px] h-12 flex items-center justify-center rounded-2xl hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-200 borderCol bg-white  '>
                    <Link
                      to={'/courses'}
                      className='flex w-full text-center flex items-center justify-center flex-row gap-[8px]'
                    >
                      <span className='font-semibold text-[16px] leading-[24px] '>
                        All courses
                      </span>
                      <img src={Arrow} alt='' />
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
