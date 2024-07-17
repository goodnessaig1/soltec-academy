import { First, Prev, Next } from '../../Utils/assets';
import Workspace1 from '../../assets/workspace1.JPG';
import Workspace2 from '../../assets/workspace2.JPG';
import Workspace3 from '../../assets/workspace3.JPG';
import Workspace4 from '../../assets/workspace4.JPG';
import Workspace5 from '../../assets/workspace5.JPG';
import OfficeLocation from '../../assets/locat-work1.JPG';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ height: '0', width: '0' }}
      className={`${className} worksp z-4 mt-[-36px] sml:mt-[-28px] ml-[-10px]`}
      onClick={onClick}
    >
      <div className='w-10 sml:w-12 h-9 sml:h-12 bg-[#f1f1f1] ml-[-28px] rounded-[50%] flex items-center justify-center'>
        <img src={Next} className='w-3 sml:w-3.5 ml-[-3px] sml:ml-0' alt='' />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      style={{ height: '0', width: '0' }}
      className={`${className} worksp z-4 mt-[-36px] sml:mt-[-28px]`}
      onClick={onClick}
    >
      <div className='w-10 sml:w-12 h-9 sml:h-12 bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <img src={Prev} className='w-3 sml:w-3.5 ml-[-3px] sml:ml-0' alt='' />
      </div>
    </div>
  );
}

const WorkSpaceImages = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='hidden lg:block'>
        <div className='lg:h-[461px]  flex flex-col mdl:flex-row gap-4 mdl:gap-8 lg:gap-6 items-center justify-center'>
          <div className='flex w-[312px] mdl:w-auto lg:w-[450px] lgl:w-[500px] flex-col gap-4 lgl:gap-6'>
            <div className='flex flex-row gap-5 lgl:gap-6'>
              <img
                src={First}
                className='w-[46.5%] object-cover h-[130px] rounded-3xl lg:h-[146px] lgl:h-[172px] '
                alt=''
              />
              <img
                src={Workspace4}
                className='w-[46.5%] object-cover h-[130px] rounded-3xl lg:h-[146px] lgl:h-[172px]'
                alt=''
              />
            </div>
            <div className='hidden lg:flex flex-row gap-5 lgl:gap-6'>
              <img
                src={Workspace1}
                className='w-[46.5%] object-cover rounded-3xl h-[146px] lgl:h-[172px] '
                alt=''
              />
              <img
                src={Workspace5}
                className='w-[46.5%] object-cover rounded-3xl h-[146px] lgl:h-[172px]'
                alt=''
              />
            </div>
          </div>
          <div className='lgl:h-[378px] '>
            <img
              src={OfficeLocation}
              className='w-[312px] object-cover lgl:w-[461px] rounded-[24px] h-[300px] lgl:h-[378px]'
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='block w-[92%] lg:hidden'>
        <div className='w-full block'>
          <Slider
            {...settings}
            className='max-h-[480px] overflow-initial outline-none'
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
                src={First}
                className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                alt=''
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceImages;
