import Footer from '../../Footer/Footer';
import CyberCatalogue from './CyberCatalogue';
import CyberEnroll from './CyberEnroll';
import CyberFaqs from './CyberFaqs';
import CyberInstructors from './CyberInstructors';
import CyberOtherCourses from './CyberOtherCourses';
import CyberSecurityHero from './CyberSecurityHero';
import CyberSecurityVid from './CyberSecurityVid';

const CyberSecurity = () => {
  return (
    <div>
      <div className='mainpBg'>
        <CyberSecurityHero />
        <CyberSecurityVid />
        <CyberCatalogue />
        <CyberInstructors />
        <CyberFaqs />
        <CyberEnroll />
      </div>
      <CyberOtherCourses />
      <Footer />
    </div>
  );
};

export default CyberSecurity;
