// /* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import { sponsorsPlaceHolder } from '../../Utils/Index';
import { First, Fourth, Next, Prev, Second, Third } from '../../Utils/Assets';
import { apiRequest } from '../../Utils/ApiRequest';

const CustomPrevArrow = props => {
  return (
    <div className='custom-prev-arrow bg-transparent' onClick={props.onClick}>
      <div className='w-12 h-12 bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Prev} alt='' />
      </div>
    </div>
  );
};

const CustomNextArrow = props => {
  return (
    <div
      className='custom-next-arrow w-12 h-12 bg-[#f1f1f1] rounded-[50%] '
      onClick={props.onClick}
    >
      <div className='w-12 h-12 bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Next} alt='' />
      </div>
    </div>
  );
};

const Sponsors = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  const [loading, setLoading] = useState(true);
  const [sponsors, setSponsors] = useState(null);

  useEffect(() => {
    getSponsors();
  }, []);

  const getSponsors = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('GET', `/sponsors/`);
      setSponsors(response.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };
  return (
    <div className='w-full w-full'>
      <Marquee speed={55}>
        {!loading ? (
          <div className='flex flex-row mt-[140px] justify-center gap-[65px] sm:ml-10 lg:ml-[px] items-center '>
            {sponsors &&
              sponsors.map((sponsor, index) => (
                <div key={index} className=''>
                  <div className='flex flex-col gap-4'>
                    <img
                      src={sponsor?.logo}
                      className='w-[198px] h-[78px]'
                      alt=''
                    />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className='flex flex-row mt-[140px] justify-center gap-46 sm:ml-10 lg:ml-[px] items-center '>
            {sponsorsPlaceHolder.map((sponsor, index) => (
              <div key={index} className=''>
                <img className='w-[198px] h-[78px]' src={sponsor.logo} alt='' />
              </div>
            ))}
          </div>
        )}
      </Marquee>
      <div className='container_'>
        <div className=' sm:mt-20 lg:mt-[130px] sm:px-4 lg:px-0 sm:ml-0 lg:ml-[66px] lgl:ml-[130px]'>
          <div className=' sm:hidden lg:block'>
            <div className='slider-container '>
              <Slider
                {...settings}
                className='flex outline-none flex-row max-h-[599px] overflow-initial'
              >
                <div className='w-[500px] xl:w-[606px] lg:h-[500px] xl:h-[599px] gap-4 flex flex-col'>
                  <div className='flex flex-row gap-4 xl:gap-4'>
                    <img
                      src={First}
                      className='w-[200px] rounded-[35px] xl:w-[270px] lg:h-[180px]  xl:h-[234px]'
                      alt=''
                    />
                    <img
                      src={Second}
                      className='w-[220px] xl:w-[300px] rounded-[35px] lg:h-[180px] xl:h-[234px]'
                      alt=''
                    />
                  </div>
                  <div className='mt-4'>
                    <img
                      src={Third}
                      className='w-[428px] rounded-[35px] lg:h-[260px] xl:h-[350px] xl:w-[596px]'
                      alt=''
                    />
                  </div>
                </div>
                <div className='w-[540px] lg:h-[400px] xl:h-[599px]'>
                  <img
                    src={Fourth}
                    className='lg:h-[456px] rounded-[35px] xl:h-[599px]'
                    alt=''
                  />
                </div>
                <div className='w-[540px] lg:h-[400px] xl:h-[599px]'>
                  <img
                    src={Fourth}
                    className='lg:h-[456px] rounded-[35px] xl:h-[599px]'
                    alt=''
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className='sm:flex items-center justify-center w-full lg:hidden '>
            <div className=' gap-4 w-[343px] flex flex-col'>
              <div className='flex flex-row gap-4'>
                <img
                  src={First}
                  className='sm:w-[140px] rounded-[35px] lg:w-[304px] sm:h-[169px] '
                  alt=''
                />
                <img
                  src={Second}
                  className='sm:w-[180px] rounded-[35px] lg:w-[309px] sm:h-[169px] '
                  alt=''
                />
              </div>
              <div className='mt-[6px]'>
                <img
                  src={Third}
                  className='sm:w-[330px] rounded-[35px] h-[300px] lg:w-[661px]'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
