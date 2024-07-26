import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../common/Header';
import { apiRequest } from '../../Utils/apiRequest';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import CoreValues from './CoreValues';
import Services from './Services';
import Workspace from './Workspace';
import Academy from './Academy';
import Projects from './Projects';
import Testimonial from './Testimonial';
import Ceo from './Ceo';
import Faq from './Faq';
import Footer from '../../component/common/Footer';
import { Element } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const HomeDashboard = () => {
  const location = useLocation();
  // const container1Ref = useRef(null);
  // const container2Ref = useRef(null);
  // const container3Ref = useRef(null);
  // const [backgroundC, setBackgroundC] = useState('#02003E');

  // useEffect(() => {
  //   const observer1 = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setBackgroundC('#02003E');
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0.5,
  //     },
  //   );

  //   if (container1Ref.current) {
  //     observer1.observe(container1Ref.current);
  //   }
  //   const observer2 = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         // setBackgroundC('#6c5ce7');
  //         setBackgroundC('#E6B405');
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0.5,
  //     },
  //   );

  //   if (container2Ref.current) {
  //     observer2.observe(container2Ref.current);
  //   }

  //   // third
  //   const observer3 = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         // setBackgroundC('#FEC910');
  //         setBackgroundC('#02003E');
  //       }
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: 0.5,
  //     },
  //   );

  //   if (container3Ref.current) {
  //     observer3.observe(container3Ref.current);
  //   }

  //   // Cleanup
  //   return () => {
  //     if (container1Ref.current) {
  //       observer1.unobserve(container1Ref.current);
  //     }
  //     if (container2Ref.current) {
  //       observer2.unobserve(container2Ref.current);
  //     }
  //     if (container3Ref.current) {
  //       observer3.unobserve(container2Ref.current);
  //     }
  //   };
  // }, []);

  const [testimonialsData, setTestimonialsData] = useState(null);

  useEffect(() => {
    GetTestimonials();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const GetTestimonials = async () => {
    try {
      const response = await apiRequest('GET', `/testimonials/`);
      setTestimonialsData(response.results);
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the #
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [location]);

  return (
    <div>
      <div className='flex flex-col'>
        <div className='engineeringBg w-full h-[658px] lg:h-[812px]'>
          <div className='engineeB text-white h-[658px] lg:h-full'>
            <Header headerCol={true} />
            <HeroSection />
          </div>
        </div>
        <Element name='about-us'>
          <AboutUs />
        </Element>
        <Element>
          <CoreValues />
        </Element>

        <Element name='services'>
          <div className=' '>
            <Services />
            <div className='bg-[#02003E]'>
              <Academy />
            </div>
            <div className='bg-[#f1f1f1]'>
              <Workspace />
            </div>
            <div className='bg-[#02003E]'>
              <Projects />
            </div>
            <Testimonial testimonialsData={testimonialsData} />
          </div>
          <Ceo />
        </Element>
        <Element name='faqs'>
          <Faq />
        </Element>
        <Footer />
      </div>
    </div>
  );
};

export default HomeDashboard;
