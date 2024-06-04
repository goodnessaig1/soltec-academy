/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import Courses from '../../../assets/other-courses.svg';
import Prev from '../../../assets/prev.svg';
import Next from '../../../assets/next.svg';
import { Link, useNavigate } from 'react-router-dom';

const CustomPrevArrow = props => {
  return (
    <div
      className='custom-prev-arrow z-200 courses_arrow_prev  courses_arrow bg-transparent'
      onClick={props.onClick}
    >
      <div className='w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Prev} alt='' />
      </div>
    </div>
  );
};

const CustomNextArrow = props => {
  return (
    <div
      className='custom-next-arrow z-200 courses_arrow_next courses_arrow w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] '
      onClick={props.onClick}
    >
      <div className='w-[48px] h-[48px] bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Next} alt='' />
      </div>
    </div>
  );
};

const OtherCourses = ({ otherCourses }) => {
  const navigate = useNavigate();

  var lgSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
    afterChange: function () {},
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
    afterChange: function () {},
  };
  var mdSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
    afterChange: function () {},
  };

  return (
    <div className='w-full h-[1026] pt-[100px] py-[120px]'>
      <div className='flex sm:items-center sm:justify-center lg:justify-start lg:ml-[110px]'>
        <img src={Courses} alt='' />
      </div>
      <div className=' lg:ml-[110px]'>
        <div className='sm:hidden lg:hidden xxl:block'>
          <div className='mt-[70px] '>
            <Slider {...lgSettings} className=''>
              {otherCourses &&
                otherCourses.map((course, index) => (
                  <div key={index} className='max-w-[367px]'>
                    <div
                      style={{ backgroundColor: course?.color_code }}
                      className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] items-center'
                    >
                      <h1 className='font-[700] text-[32px] leading-[48px] text-[#fff] '>
                        {course?.title.length > 17
                          ? `${course?.title?.substring(0, 17) + '..'}`
                          : `${course?.title}`}
                      </h1>
                      <span className='text-[16px] line-clamp-3 max-w-[310px] break-words text-extraGray font-[500] leading-[24px] text-center'>
                        {course?.description.length > 100
                          ? `${course?.description.substring(0, 100) + '...'}`
                          : `${course?.description}`}
                      </span>
                      <div className='flex flex-col gap-[12px] items-center'>
                        <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                          N{parseFloat(course?.price).toLocaleString()}
                        </h1>
                        <div
                          onClick={() =>
                            navigate(`/courses/${course?.id}/${course?.title}`)
                          }
                          className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                        >
                          <span className='font-[600] text-[16px] leading-[24px]'>
                            Enroll now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundTwo items-center'>
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
            </Slider>
          </div>
        </div>
        <div className='sm:hidden xl:block  xxl:hidden'>
          <div className='mt-[70px] '>
            <Slider {...mdSettings} className=''>
              {otherCourses &&
                otherCourses.map((course, index) => (
                  <div key={index} className='max-w-[367px]'>
                    <div
                      style={{ backgroundColor: course?.color_code }}
                      className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] items-center'
                    >
                      <h1 className='font-[700] text-[32px] leading-[48px] text-[#fff] '>
                        {course?.title.length > 17
                          ? `${course?.title?.substring(0, 17) + '..'}`
                          : `${course?.title}`}
                      </h1>
                      <span className='text-[16px] line-clamp-3 max-w-[310px] break-words text-extraGray font-[500] leading-[24px] text-center'>
                        {course?.description.length > 100
                          ? `${course?.description.substring(0, 100) + '...'}`
                          : `${course?.description}`}
                      </span>
                      <div className='flex flex-col gap-[12px] items-center'>
                        <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                          N{parseFloat(course?.price).toLocaleString()}
                        </h1>
                        <div
                          onClick={() =>
                            navigate(`/courses/${course?.id}/${course?.title}`)
                          }
                          className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                        >
                          <span className='font-[600] text-[16px] leading-[24px]'>
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
          <div className='mt-[70px] '>
            <Slider {...settings} className=''>
              {otherCourses &&
                otherCourses.map((course, index) => (
                  <div key={index} className='max-w-[367px]'>
                    <div
                      style={{ backgroundColor: course?.color_code }}
                      className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px]  items-center'
                    >
                      <h1 className='font-[700] text-[32px] leading-[48px] text-[#fff] '>
                        {course?.title.length > 17
                          ? `${course?.title?.substring(0, 17) + '..'}`
                          : `${course?.title}`}
                      </h1>
                      <span className='text-[16px] line-clamp-3 max-w-[310px] break-words text-extraGray font-[500] leading-[24px] text-center'>
                        {course?.description.length > 100
                          ? `${course?.description.substring(0, 100) + '...'}`
                          : `${course?.description}`}
                      </span>
                      <div className='flex flex-col gap-[12px] items-center'>
                        <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                          N{parseFloat(course?.price).toLocaleString()}
                        </h1>
                        <div
                          onClick={() =>
                            navigate(`/courses/${course?.id}/${course?.title}`)
                          }
                          className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                        >
                          <span className='font-[600] text-[16px] leading-[24px]'>
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
      </div>
      <div className=''>
        <div className='sm:block lg:hidden'>
          <div className='flex px-[16px] flex-col items-center w-full gap-[24px] mt-[36px]'>
            {otherCourses &&
              otherCourses.map((course, index) => (
                <div
                  style={{ backgroundColor: course?.color_code }}
                  key={index}
                  className='flex flex-col max_wid w-[343px]  py-[20px] gap-[20px] rounded-[24px]  boxSha1 items-center'
                >
                  <h1 className='font-[700] text-[24px] leading-[36px] text-[#fff] '>
                    {course?.title.length > 17
                      ? `${course?.title?.substring(0, 17) + '..'}`
                      : `${course?.title}`}
                  </h1>
                  <span className='text-[16px] line-clamp-3 max-w-[310px] break-words text-extraGray font-[500] leading-[24px] text-center'>
                    {course?.description.length > 100
                      ? `${course?.description.substring(0, 100) + '...'}`
                      : `${course?.description}`}
                  </span>
                  <div className='flex flex-col gap-[12px] items-center'>
                    <h1 className='font-[700px] text-center text-[#fff] text-[20px] leading-[30px] '>
                      N{parseFloat(course?.price).toLocaleString()}
                    </h1>
                    <div
                      onClick={() =>
                        navigate(`/courses/${course?.id}/${course?.title}`)
                      }
                      className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '
                    >
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCourses;
