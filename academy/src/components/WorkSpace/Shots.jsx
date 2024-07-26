import {
  First,
  Next,
  Prev,
  Shorts1,
  Shorts2,
  Shorts3,
  Shorts4,
} from '../../Utils/Assets';
import Workspace1 from '../../assets/workspace1.JPG';
import Workspace2 from '../../assets/workspace2.JPG';
import Workspace3 from '../../assets/workspace3.JPG';
import Workspace4 from '../../assets/workspace4.JPG';
import Workspace5 from '../../assets/workspace5.JPG';
import WorkspaceE1 from '../../assets/workspace-e1.JPG';
import WorkspaceE2 from '../../assets/workspace-e2.JPG';
import OfficeLocation from '../../assets/locat-work1.JPG';
import Slider from 'react-slick';
import LazyImage from '../../Utils/SuspenseImage';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-2 btnnn mt-[-16px] ml-[-10px]`}
      onClick={onClick}
    >
      <div className='w-10 sml:w-12 h-9 sml:h-12 bg-[#f1f1f1] ml-[-28px] rounded-[50%] flex items-center justify-center'>
        <LazyImage
          src={Next}
          className='w-3 sml:w-3.5 ml-[-3px] sml:ml-0'
          alt=''
        />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={`${className} btnnn z-2 mt-[-16px]`} onClick={onClick}>
      <div className='w-10 sml:w-12 h-9 sml:h-12 bg-[#f1f1f1] rounded-[50%] flex items-center justify-center'>
        <LazyImage
          src={Prev}
          className='w-3 sml:w-3.5 ml-[-3px] sml:ml-0'
          alt=''
        />
      </div>
    </div>
  );
}

const Shots = () => {
  var mdSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className='bg-extraGray py-[100px] md:py-[130px] px-4 md:px-[70px] w-full'>
      <div className='w-full flex flex-col gap-20 items-center justify-center'>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className='font-bold text-[32px] leading-[38px]'>SHOTS</h1>
          <div className='redLine' />
        </div>
        <div className='w-full justify-center items-center  flex-col hidden lg:flex lg:flex-row gap-4 '>
          <div className='w-[80%]  lg:w-1/2 max-w-[661px] flex gap-4 md:gap-4 flex-col'>
            <div className='flex w-full flex-row gap-4 md:gap-4'>
              <LazyImage
                src={Workspace3}
                className='w-[49%] object-cover rounded-[42px] lg:h-[170px] xl:h-[234px] '
                alt=''
              />
              <LazyImage
                src={Shorts2}
                className='w-[48%] rounded-[42px] lg:h-[170px] xl:h-[234px] '
                alt=''
              />
            </div>
            <div className=''>
              <LazyImage
                src={Workspace4}
                className='lg:h-[240px] rounded-[42px] w-full xl:h-[350px]'
                alt=''
              />
            </div>
          </div>
          <div className='w-[80%] max-w-[661px] lg:w-1/2'>
            <LazyImage
              src={Shorts4}
              className='lg:h-[430px] rounded-[42px] xl:h-[599px]'
              alt=''
            />
          </div>
        </div>
        <div className='flex flex-col w-full items-center justify-center'>
          <div className='block w-[94%] lg:hidden'>
            <div className='w-full block'>
              <Slider
                {...mdSettings}
                className='max-h-[480px] overflow-initial outline-none'
              >
                <div className='w-[100%]'>
                  <LazyImage
                    src={Workspace1}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <LazyImage
                    src={OfficeLocation}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <LazyImage
                    src={Workspace1}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <LazyImage
                    src={Shorts2}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <LazyImage
                    src={Workspace4}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
                <div className='w-[100%]'>
                  <LazyImage
                    src={First}
                    className='h-[380px] sml:h-[420px] md:h-[480px] w-full object-cover'
                    alt=''
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shots;
