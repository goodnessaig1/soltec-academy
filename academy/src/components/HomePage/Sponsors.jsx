/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Marquee from 'react-fast-marquee';
import { sponsorsPlaceHolder } from '../../Utils/Index';
import { Next, Prev } from '../../Utils/Assets';
import { useAuth } from '../Context/AuthContext';
import Workspace1 from '../../assets/workspace1.JPG';
import Workspace2 from '../../assets/workspace2.JPG';
import Workspace3 from '../../assets/workspace3.JPG';
import Workspace4 from '../../assets/workspace4.JPG';
import Workspace5 from '../../assets/workspace5.JPG';
import WorkspaceE1 from '../../assets/workspace-e1.JPG';
import WorkspaceE2 from '../../assets/workspace-e2.JPG';
import OfficeLocation from '../../assets/locat-work1.JPG';

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-2 mt-[-36px] sml:mt-[-28px] ml-[-10px]`}
      onClick={onClick}
    >
      <div className='w-10 sml:w-12 h-9 sml:h-12 bg-[#f1f1f1] ml-[-28px] rounded-[50%] flex items-center justify-center'>
        <img src={Next} className='w-3 sml:w-3.5 ml-[-3px] sml:ml-0' alt='' />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-2 mt-[-36px] sml:mt-[-28px]`}
      onClick={onClick}
    >
      <div className='w-10 sml:w-12 h-9 sml:h-12 bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Prev} className='w-3 sml:w-3.5 ml-[-3px] sml:ml-0' alt='' />
      </div>
    </div>
  );
}

const Sponsors = () => {
  const { sponsors, sponsorsLoading } = useAuth();

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  var mdSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className='w-full w-full'>
      <div>
        {!sponsorsLoading ? (
          <>
            {sponsors && sponsors.length > 3 ? (
              <SponsorsLogo logo={sponsors} />
            ) : (
              <SponsorsLogo logo={sponsorsPlaceHolder} />
            )}
          </>
        ) : (
          <SponsorsLogo logo={sponsorsPlaceHolder} />
        )}
      </div>
      <div className='container_'>
        <div className='mt-20 lg:mt-[130px] px-4 lg:px-0 ml-0 lg:ml-[66px] lgl:ml-[130px]'>
          <div className='hidden lg:block'>
            <div className='slider-container '>
              <Slider
                {...settings}
                className='outline-none max-h-[599px] overflow-initial'
              >
                <div className='w-[92%]'>
                  <div className='w-[94%] lg:h-[456px] xl:h-[599px] gap-4 flex flex-col'>
                    <div className='flex w-full flex-row gap-4 justify-between h-[43%] xl:gap-4'>
                      <img
                        src={Workspace5}
                        className='object-cover rounded-[35px] w-[48%] h-full'
                        alt=''
                      />
                      <img
                        src={Workspace3}
                        className='object-cover rounded-[35px] w-[48%] h-full'
                        alt=''
                      />
                    </div>
                    <div className='mt-4 h-[51%]'>
                      <img
                        src={Workspace2}
                        className='w-full rounded-[35px] object-cover h-full'
                        alt=''
                      />
                    </div>
                  </div>
                </div>

                <div className='w[540px] max-w-[92%] lg:h-[500px] xl:h-[599px]'>
                  <img
                    src={OfficeLocation}
                    className='lg:h-[456px] object-cover rounded-[35px] xl:h-[599px]'
                    alt=''
                  />
                </div>

                <div className='w-[90%] h-full'>
                  <div className='flex  flex-row lg:h-[450px] gap-6 xl:h-[599px] w-full'>
                    <div className='flex flex-col justify-between w-[46%] gap-4'>
                      <img
                        src={Workspace5}
                        className=' h-[48%] object-cover rounded-[32px]'
                        alt=''
                      />
                      <img
                        src={WorkspaceE1}
                        className=' h-[48%] object-cover rounded-[32px]'
                        alt=''
                      />
                    </div>
                    <div className='w-[46%] h-full'>
                      <img
                        src={WorkspaceE2}
                        className='h-full object-cover rounded-[32px]'
                        alt=''
                      />
                    </div>
                  </div>
                </div>

                <div className='w[540px] max-w-[92%] lg:h-[400px] xl:h-[599px]'>
                  <img
                    src={OfficeLocation}
                    className='lg:h-[456px] object-cover rounded-[35px] xl:h-[599px]'
                    alt=''
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className='block lg:hidden'>
            <div className='flex flex-col items-center justify-center w-full block'>
              <Slider
                {...mdSettings}
                className='max-h-[480px] overflow-initial outline-none w-[96%] sml:w-[93%]'
              >
                <div className='w-[100%]'>
                  <img
                    src={Workspace1}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <img
                    src={OfficeLocation}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <img
                    src={Workspace1}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <img
                    src={Workspace3}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <img
                    src={Workspace2}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <img
                    src={WorkspaceE1}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
              </Slider>
            </div>
          </div>

          <div className='lex items-center justify-center w-full hidden '>
            <div className=' gap-4 w-[343px] flex flex-col'>
              <div className='flex flex-row gap-4'>
                <img
                  src={Workspace5}
                  className='sm:w-[140px] rounded-[35px] lg:w-[304px] sm:h-[169px] '
                  alt=''
                />
                <img
                  src={Workspace3}
                  className='sm:w-[180px] rounded-[35px] lg:w-[309px] sm:h-[169px] '
                  alt=''
                />
              </div>
              <div className='mt-[6px]'>
                <img
                  src={Workspace2}
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

const SponsorsLogo = ({ logo }) => {
  return (
    <div className='w-full mt-24'>
      <Marquee className='clip-text ' speed={50}>
        {logo.map((sponsor, index) => (
          <div key={index} className='pr-10'>
            <img className='w-[198px] h-[78px]' src={sponsor.logo} alt='' />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
