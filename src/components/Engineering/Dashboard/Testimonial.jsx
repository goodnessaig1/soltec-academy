/* eslint-disable react/prop-types */
import Profile from '../../../assets/profile.jpg';
import Media from '../../../assets/media-1.svg';
import Sponsor1 from '../../../assets/sponsor1.svg';
import Sponsor2 from '../../../assets/sponsor2.svg';
import Sponsor3 from '../../../assets/sponsor3.svg';
import Sponsor4 from '../../../assets/sponsor4.svg';
import Sponsor5 from '../../../assets/sponsor5.svg';
import Sponsor6 from '../../../assets/sponsor6.svg';
import Marquee from 'react-fast-marquee';

const sponsors = [
  {
    logo: Sponsor1,
  },
  {
    logo: Sponsor2,
  },
  {
    logo: Sponsor3,
  },
  {
    logo: Sponsor4,
  },
  {
    logo: Sponsor6,
  },
  {
    logo: Sponsor5,
  },
];

const Testimonial = ({ testimonialsData }) => {
  console.log(testimonialsData);
  return (
    <div className='w-full bg-bg3 flex flex-col items-center pt-[60px] lg:pt-[97px] pb-[100px] lg:pb-[150px] justify-center '>
      <div className='flex flex-col gap-[16px] items-center justify-center'>
        <h1 className='font-[600] text-[24px] leading-[34px]'>
          WHAT OUR CLIENTS ARE SAYING
        </h1>
        <div className='yellowLine' />
      </div>
      <Marquee
        speed={55}
        className='flex flex-row mt-[60px] lg:mt-[80px] gap-[24px] '
        direction='left'
      >
        <div className='flex flex-row '>
          {testimonialsData &&
            testimonialsData.map((testimony, index) => (
              <div
                key={index}
                className='flex flex-col mx-[20px] rounded-[16px] gap-[20px] w-[429px] border backg p-[20px] bg-[#fff] items-center'
              >
                <div className='flex flex-col gap-[11px]'>
                  <h1 className='text-[18px] font-[400] z-10 leading-[27px] '>
                    {testimony?.content}
                  </h1>
                  <div className='flex flex-row gap-[12px] items-center'>
                    <div>
                      <img
                        src={testimony?.author_image}
                        className='w-[49px] h-[49px] rounded-[50%]'
                        alt=''
                      />
                    </div>
                    <span className='flex flex-col gap-[8px] font-[400] text-[14px] profile_col leading-[16px]'>
                      {testimony?.author},<p>{testimony?.proffession}</p>
                    </span>
                  </div>
                </div>
                <div className='absolute items-right mt-[-1px] ml-[300px] '>
                  <img
                    src={Media}
                    className='sm:w-[52px] lg:h-[36px] lg:w-[74px] lg:h-[51px]   '
                    alt=''
                  />
                </div>
              </div>
            ))}
          <Testimonials />
        </div>
      </Marquee>
      <Marquee
        speed={35}
        className='flex flex-row mt-[80px] lg:mt-[140px] gap-[24px] '
        direction='right'
      >
        <div className='flex flex-row gap-[110px] '>
          {sponsors.map((sponsor, index) => (
            <div key={index}>
              <img src={sponsor.logo} alt='' />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonial;

const Testimonials = () => {
  return (
    <div className='flex flex-col mx-[20px] rounded-[16px] gap-[20px] w-[429px] border backg p-[20px] bg-[#fff] items-center'>
      <div className='flex flex-col gap-[11px]'>
        <h1 className='text-[18px] font-[400] z-10 leading-[27px] '>
          Great job and good professionalism all through. <br />I got my
          surveillance system installed and everything is working perfectly.
        </h1>
        <div className='flex flex-row gap-[12px] items-center'>
          <div>
            <img
              src={Profile}
              className='w-[49px] h-[49px] rounded-[50%]'
              alt=''
            />
          </div>
          <span className='flex flex-col gap-[8px] font-[400] text-[14px] profile_col leading-[16px]'>
            James Doe,
            <p>UI/UX Designer,X Alumni</p>
          </span>
        </div>
      </div>
      <div className='absolute items-right mt-[-1px] ml-[300px] '>
        <img
          src={Media}
          className='sm:w-[52px] lg:h-[36px] lg:w-[74px] lg:h-[51px]   '
          alt=''
        />
      </div>
    </div>
  );
};
