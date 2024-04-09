import { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import CoreValues from './CoreValues';
import HeroSection from './HeroSection';
import Services from './Services';
import Testimonial from './Testimonial';
import Academy from './Academy';
import AboutUs from './AboutUs';
import Workspace from './Workspace';
import Projects from './Projects';
import Ceo from './Ceo';
import Faq from './Faq';
import Footer from '../../Footer/Footer';
import { motion } from 'framer-motion';
import axios from 'axios';
import { BaseURL } from '../../../Utils/BaseUrl';
import { toast } from 'react-toastify';

const EngineeringDashboard = () => {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);
  const [backgroundC, setBackgroundC] = useState('#02003E');
  const services = useRef(null);
  const about = useRef(null);
  const faqsRef = useRef(null);
  const scrollTo = elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Container 1 is in view!');
          setBackgroundC('#02003E');
          // Do something when container 1 is in view
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (container1Ref.current) {
      observer1.observe(container1Ref.current);
    }
    // second
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBackgroundC('#D2070C');
          console.log('Container 2 is in view!');
          // Do something when container 2 is in view
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (container2Ref.current) {
      observer2.observe(container2Ref.current);
    }

    // third
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBackgroundC('#FEC910');
          console.log('Container 3 is in view!');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if (container3Ref.current) {
      observer3.observe(container3Ref.current);
    }

    // Cleanup
    return () => {
      if (container1Ref.current) {
        observer1.unobserve(container1Ref.current);
      }
      if (container2Ref.current) {
        observer2.unobserve(container2Ref.current);
      }
      if (container3Ref.current) {
        observer3.unobserve(container2Ref.current);
      }
    };
  }, []);

  const [testimonialsData, setTestimonialsData] = useState(null);
  const [sponsors, setSponsors] = useState(null);

  useEffect(() => {
    GetTestimonials();
    GetSponsors();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const GetSponsors = async () => {
    try {
      const response = await axios.get(`${BaseURL}/sponsors/`);
      setSponsors(response.data?.results);
    } catch (error) {
      console.log('error', error);
    }
  };

  const GetTestimonials = async () => {
    try {
      const response = await axios.get(`${BaseURL}/testimonials/`);
      setTestimonialsData(response.data?.results);
    } catch (error) {
      toast.error('An error occured !', {
        position: 'top-left',
      });
      console.log('error', error);
    }
  };

  return (
    <div>
      <div className='flex flex-col'>
        <div className='engineeringBg w-full h-[658px] lg:h-[812px]'>
          <div className='engineeB  h-[658px] lg:h-full'>
            <Header
              about={about}
              services={services}
              faqsRef={faqsRef}
              scrollTo={scrollTo}
              headerCol={true}
            />
            <HeroSection />
          </div>
        </div>
        <div ref={about}>
          <AboutUs />
        </div>
        <CoreValues />
        <div ref={services}>
          <div className=' '>
            <motion.div
              initial={{ backgroundColor: backgroundC }}
              whileInView={{
                backgroundColor: backgroundC,
              }}
              transition={{ delay: 0.1 }}
              exit={{ backgroundColor: backgroundC }}
              className='bgTrans'
            >
              <Services />
              <div ref={container1Ref} className=''>
                <Workspace />
              </div>
              <div ref={container2Ref} className=''>
                <Academy />
              </div>
              <div ref={container3Ref} className=''>
                <Projects />
              </div>
            </motion.div>
            <Testimonial
              sponsors={sponsors}
              testimonialsData={testimonialsData}
            />
          </div>
          <Ceo />
          <div ref={faqsRef} className=''>
            <Faq />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EngineeringDashboard;
