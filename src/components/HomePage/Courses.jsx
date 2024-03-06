/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import Text from '../../assets/text.svg';
import Prev from '../../assets/prev.svg';
import Arrow from '../../assets/arrow.svg';
import Next from '../../assets/next.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

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

const Courses = () => {
  var lgSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
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
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
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
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
  };
  return (
    <div className='w-full'>
      <div className='container_'>
        <div className=''>
          <div className='sm:my-[80px] sm:mt-[80px] md:mt-[120px] sm:mb-[120px] lg:mb-[130px] lg:my-[130px]'>
            <div className='w-full items-center justify-center flex'>
              <img src={Text} className='w-[311px] lg:w-[400px] ' alt='' />
            </div>
            <div className='sm:hidden lg:hidden xxl:block'>
              <div className='ml-[30px] mt-[78px] '>
                <Slider {...lgSettings} className=''>
                  <div className='max-w-[367px]'>
                    <div className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundOne items-center'>
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
                  </div>
                  <div className='max-w-[367px]'>
                    <div className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundTwo items-center'>
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
                          <span className='font-[600] text-[16px] leading-[24px]'>
                            Enroll now
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[367px]'>
                    <div className='flex max-w-[367px] flex-col max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundThree items-center'>
                      <h1 className='font-[700] w-[301px] text-[32px] leading-[48px] text-[#fff]  text-nowrap'>
                        Frontend Web Dev...
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
                  <div className='max-w-[367px]'>
                    <div className='flex max-w-[367px] flex-col max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundFour items-center'>
                      <h1 className='font-[700] w-[301px] text-[32px] leading-[48px] text-[#fff]  text-nowrap'>
                        Backend Developm..
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
                  <div className='max-w-[367px]'>
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
                        <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                          <span className='font-[600] text-[16px] leading-[24px]'>
                            Enroll now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className='sm:hidden lg:block xl:hidden xxl:hidden'>
              <div className='ml-[30px] mt-[78px] '>
                <Slider {...mdSettings} className=''>
                  <div className='max-w-[367px]'>
                    <div className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundOne items-center'>
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
                  </div>
                  <div className='max-w-[367px]'>
                    <div className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundTwo items-center'>
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
                          <span className='font-[600] text-[16px] leading-[24px]'>
                            Enroll now
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[367px]'>
                    <div className='flex max-w-[367px] flex-col max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundThree items-center'>
                      <h1 className='font-[700] text-nowrap w-[301px] text-[31px] leading-[48px] text-[#fff]  text-nowrap'>
                        Frontend Web Dev...
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
                  <div className='max-w-[367px]'>
                    <div className='flex max-w-[367px] flex-col max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundFour items-center'>
                      <h1 className='font-[700] w-[301px]  text-[31px] leading-[48px] text-[#fff]  text-nowrap'>
                        Backend Developm..
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
                  <div className='max-w-[367px]'>
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
                        <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                          <span className='font-[600] text-[16px] leading-[24px]'>
                            Enroll now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className='sm:hidden xl:block xxl:hidden'>
              <div className='ml-[30px] mt-[78px] '>
                <Slider {...settings} className=''>
                  <div className='max-w-[367px]'>
                    <div className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundOne items-center'>
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
                  </div>
                  <div className='max-w-[367px]'>
                    <div className='flex flex-col max-w-[367px] max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundTwo items-center'>
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
                          <span className='font-[600] text-[16px] leading-[24px]'>
                            Enroll now
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='max-w-[367px]'>
                    <div className='flex max-w-[367px] flex-col max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundThree items-center'>
                      <h1 className='font-[700] text-nowrap w-[301px] text-[31px] leading-[48px] text-[#fff]  text-nowrap'>
                        Frontend Web Dev...
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
                  <div className='max-w-[367px]'>
                    <div className='flex max-w-[367px] flex-col max_wid w-[367px] h-[320px] py-[16px] gap-[32px] rounded-[24px] backgroundFour items-center'>
                      <h1 className='font-[700] w-[301px]  text-[31px] leading-[48px] text-[#fff]  text-nowrap'>
                        Backend Developm..
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
                  <div className='max-w-[367px]'>
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
                        <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                          <span className='font-[600] text-[16px] leading-[24px]'>
                            Enroll now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className='sm:block lg:hidden'>
              <div className='flex px-[16px] flex-col items-center w-full gap-[24px] mt-[36px]'>
                <div className='flex flex-col max_wid w-[343px]  py-[20px] gap-[20px] rounded-[24px] backgroundOne boxSha1 items-center'>
                  <h1 className='font-[700] text-[24px] leading-[36px] text-[#fff] '>
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

                <div className='flex flex-col w-[343px]  py-[20px] gap-[20px] rounded-[24px] backgroundTwo items-center'>
                  <h1 className='font-[700] text-[24px] leading-[36px] text-[#fff] '>
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
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </Link>
                  </div>
                </div>
                <div className='flex flex-col w-[343px]  py-[20px] gap-[20px] rounded-[24px] backgroundFour items-center'>
                  <h1 className='font-[700]  text-[24px] leading-[48px] text-[#fff]  text-nowrap'>
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
                    <div className='w-[301px] h-[48px] bg-[#fff] flex items-center justify-center rounded-[16px] border-[1px] border-borderLight transition duration-200 hover:bg-[#f1f1f1] hover:cursor-pointer '>
                      <span className='font-[600] text-[16px] leading-[24px]'>
                        Enroll now
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-[343px]  py-[20px] gap-[20px] rounded-[24px] backgroundThree items-center'>
                  <h1 className='font-[700]  text-[22px] leading-[36px] text-[#fff]  text-nowrap'>
                    Frontend Web Development
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

            <div className='w-full flex items-center  sm:mt-[64px] lg:mt-[80px] justify-center'>
              <div className='w-[228px] h-[48px] flex items-center justify-center rounded-[16px] hover:bg-[#f1f1f1] hover:cursor-pointer transition duration-200 borderCol bg-[#fff]  '>
                <Link to={'/courses'} className='flex flex-row gap-[8px]'>
                  <span className='font-[600] text-[16px] leading-[24px] '>
                    All courses
                  </span>
                  <img src={Arrow} alt='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
